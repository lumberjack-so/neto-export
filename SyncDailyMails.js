import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { google } from "https://esm.sh/googleapis@153.0.0";

// Configuration for daily sync
const CONFIG = {
	gmail: {
		clientId: Deno.env.get("GMAIL_CLIENT_ID") || "",
		clientSecret: Deno.env.get("GMAIL_CLIENT_SECRET") || "",
	},
	sync: {
		batchSize: 50,
		delayBetweenMessages: 100,
		maxResults: 100,
		gmailLabelName: "ADDED TO SUPABASE",
	},
};

class GmailDailySync {
	constructor(supabaseUrl, supabaseServiceKey) {
		this.supabase = createClient(supabaseUrl, supabaseServiceKey);
		this.gmail = null;
		this.oauth2Client = null;
		this.cachedGmailLabelId = null;
	}

	async getRefreshToken() {
		try {
			const { data, error } = await this.supabase
				.from("gmail_tokens")
				.select("refresh_token")
				.single();

			if (error || !data || !data.refresh_token) {
				console.log("❌ No valid refresh token found in database");
				return null;
			}

			return data.refresh_token;
		} catch (error) {
			console.error("❌ Error fetching refresh token:", error);
			return null;
		}
	}

	async getGmailLabelId(labelName) {
		if (this.cachedGmailLabelId) {
			return this.cachedGmailLabelId;
		}

		try {
			const response = await this.gmail.users.labels.list({
				userId: "me",
			});

			const label = response.data.labels.find((l) => l.name === labelName);

			if (label) {
				console.log(`✅ Found Gmail label "${labelName}" with ID: ${label.id}`);
				this.cachedGmailLabelId = label.id;
				return label.id;
			} else {
				console.error(`❌ Gmail label "${labelName}" not found`);
				return null;
			}
		} catch (error) {
			console.error(
				`❌ Error getting Gmail label ID for "${labelName}":`,
				error
			);
			return null;
		}
	}

	async initialize() {
		try {
			console.log("🔄 Initializing Gmail API...");

			const refreshToken = await this.getRefreshToken();
			if (!refreshToken) {
				console.error("❌ No refresh token found in database");
				return false;
			}

			this.oauth2Client = new google.auth.OAuth2(
				CONFIG.gmail.clientId,
				CONFIG.gmail.clientSecret
			);

			this.oauth2Client.setCredentials({
				refresh_token: refreshToken,
			});

			const { credentials } = await this.oauth2Client.refreshAccessToken();

			console.log("✅ Access token refreshed successfully");
			console.log(`   - Expires: ${new Date(credentials.expiry_date)}`);

			this.gmail = google.gmail({ version: "v1", auth: this.oauth2Client });

			const profile = await this.gmail.users.getProfile({ userId: "me" });
			console.log(`   - Connected to: ${profile.data.emailAddress}`);

			return true;
		} catch (error) {
			console.error("❌ Failed to initialize Gmail API:", error.message);

			if (
				error.message.includes("invalid_grant") ||
				error.message.includes("Refresh token expired")
			) {
				console.log("\n🔑 Refresh token has expired or been revoked!");
				console.log("💡 You need to update the refresh token in the database");
			}

			return false;
		}
	}

	async getTodaysEmails() {
		try {
			const today = new Date().toISOString().slice(0, 10);
			const query = `after:${today} -in:sent -in:chat -in:spam -in:trash -label:"${CONFIG.sync.gmailLabelName}"`;

			console.log(`📧 Fetching emails for ${today}...`);
			console.log(`   - Query: ${query}`);

			const response = await this.gmail.users.messages.list({
				userId: "me",
				q: query,
				maxResults: CONFIG.sync.maxResults,
			});

			const messages = response.data.messages || [];
			console.log(`   - Found ${messages.length} new messages`);

			return messages;
		} catch (error) {
			console.error("❌ Failed to fetch emails:", error.message);
			return [];
		}
	}

	async getMessageDetails(messageId) {
		try {
			const response = await this.gmail.users.messages.get({
				userId: "me",
				id: messageId,
				format: "full",
			});

			return response.data;
		} catch (error) {
			console.error(`❌ Failed to get message ${messageId}:`, error.message);
			return null;
		}
	}

	getHeaderValue(headers, name) {
		const header = headers.find(
			(h) => h.name.toLowerCase() === name.toLowerCase()
		);
		return header ? header.value : "";
	}

	transformMessage(gmailMessage) {
		const headers = gmailMessage.payload.headers || [];
		const threadId = gmailMessage.threadId;
		const messageId = gmailMessage.id;

		const fromEmail = this.getHeaderValue(headers, "From");
		const toEmail = this.getHeaderValue(headers, "To");
		const subject = this.getHeaderValue(headers, "Subject");
		const dateHeader = this.getHeaderValue(headers, "Date");

		let formattedDate = new Date().toISOString();
		if (dateHeader) {
			try {
				const parsedDate = new Date(dateHeader);
				if (!isNaN(parsedDate.getTime())) {
					formattedDate = parsedDate.toISOString();
				}
			} catch (error) {
				console.warn(`Warning: Could not parse date "${dateHeader}"`);
			}
		}

		const senderType = fromEmail.includes("@timberbits.com")
			? "agent"
			: "customer";
		const direction = senderType === "agent" ? "Outbound" : "Inbound";

		let bodyText = "";
		if (gmailMessage.payload.body && gmailMessage.payload.body.data) {
			bodyText = Buffer.from(
				gmailMessage.payload.body.data,
				"base64"
			).toString();
		} else if (gmailMessage.payload.parts) {
			const textPart = gmailMessage.payload.parts.find(
				(part) => part.mimeType === "text/plain" && part.body.data
			);
			if (textPart) {
				bodyText = Buffer.from(textPart.body.data, "base64").toString();
			}
		}

		const attachments = [];
		if (gmailMessage.payload.parts) {
			gmailMessage.payload.parts.forEach((part) => {
				if (part.filename && part.filename.length > 0) {
					attachments.push({
						filename: part.filename,
						mime_type: part.mimeType || "application/octet-stream",
						size: part.body.size || 0,
						temp_path: null,
					});
				}
			});
		}

		return {
			threadId,
			message_id: messageId,
			from_email: fromEmail,
			to_email: toEmail,
			subject,
			body: bodyText,
			html_body: "",
			date_received: formattedDate,
			direction,
			sender_type: senderType,
			tags: gmailMessage.labelIds || [],
			attachments,
		};
	}

	async ingestEmailToSupabase(emailData) {
		try {
			const { data, error } = await this.supabase.rpc("ingest_email", {
				payload: emailData,
			});

			if (error) {
				console.error("❌ Supabase ingest error:", error);
				return null;
			}

			return data;
		} catch (error) {
			console.error("❌ Error calling Supabase RPC:", error);
			return null;
		}
	}

	async addLabelToMessage(messageId) {
		try {
			const gmailLabelId = await this.getGmailLabelId(
				CONFIG.sync.gmailLabelName
			);
			if (!gmailLabelId) {
				console.warn(
					`Warning: Could not find Gmail label "${CONFIG.sync.gmailLabelName}"`
				);
				return;
			}

			await this.gmail.users.messages.modify({
				userId: "me",
				id: messageId,
				resource: {
					addLabelIds: [gmailLabelId],
				},
			});
		} catch (error) {
			console.warn(
				`Warning: Could not add label to message ${messageId}: ${error.message}`
			);
		}
	}

	async logBehavior(rootId, messageCounts) {
		const behaviorData = {
			context_id: rootId,
			behavior_type: "gmail_daily_sync",
			behavior_data: {
				period: {
					start: new Date().toISOString().slice(0, 10),
					end: new Date().toISOString().slice(0, 10),
				},
				messages: {
					inbound: messageCounts.inbound,
					outbound: messageCounts.outbound,
					total: messageCounts.total,
				},
			},
			source: "supabase_edge_function",
		};

		try {
			const { error } = await this.supabase
				.from("behavior")
				.insert(behaviorData);

			if (error) {
				console.error("❌ Error logging behavior:", error);
			}
		} catch (error) {
			console.error("❌ Error logging behavior:", error);
		}
	}

	async processMessages(messages) {
		let inboundCount = 0;
		let outboundCount = 0;
		let rootId = null;
		let processedCount = 0;

		console.log(`🔄 Processing ${messages.length} messages...`);

		for (const message of messages) {
			try {
				const messageDetails = await this.getMessageDetails(message.id);
				if (!messageDetails) continue;

				const transformedMessage = this.transformMessage(messageDetails);

				if (transformedMessage.direction === "Inbound") {
					inboundCount++;
				} else {
					outboundCount++;
				}

				const result = await this.ingestEmailToSupabase(transformedMessage);
				if (result && result.root_id) {
					rootId = result.root_id;
				}

				await this.addLabelToMessage(message.id);

				processedCount++;

				if (processedCount % 10 === 0) {
					console.log(
						`   - Processed ${processedCount}/${messages.length} messages`
					);
				}

				if (CONFIG.sync.delayBetweenMessages > 0) {
					await new Promise((resolve) =>
						setTimeout(resolve, CONFIG.sync.delayBetweenMessages)
					);
				}
			} catch (error) {
				console.error(`❌ Error processing message ${message.id}:`, error);
			}
		}

		if (rootId) {
			await this.logBehavior(rootId, {
				inbound: inboundCount,
				outbound: outboundCount,
				total: inboundCount + outboundCount,
			});
		}

		return {
			inbound: inboundCount,
			outbound: outboundCount,
			total: inboundCount + outboundCount,
		};
	}

	async sync() {
		try {
			console.log("🚀 Starting Gmail daily sync...");

			const initialized = await this.initialize();
			if (!initialized) {
				throw new Error("Failed to initialize Gmail API");
			}

			const messages = await this.getTodaysEmails();

			if (messages.length === 0) {
				console.log("✅ No new messages found for today");
				return { inbound: 0, outbound: 0, total: 0 };
			}

			const stats = await this.processMessages(messages);

			console.log("✅ Daily sync completed successfully!");
			console.log(`📊 Results:`);
			console.log(`   - Total messages: ${stats.total}`);
			console.log(`   - Inbound: ${stats.inbound}`);
			console.log(`   - Outbound: ${stats.outbound}`);

			return stats;
		} catch (error) {
			console.error("❌ Daily sync failed:", error);
			throw error;
		}
	}
}

serve(async (req) => {
	try {
		const supabaseUrl = Deno.env.get("SUPABASE_URL");
		const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

		if (!supabaseUrl || !supabaseServiceKey) {
			throw new Error("Missing required environment variables");
		}

		if (!CONFIG.gmail.clientId || !CONFIG.gmail.clientSecret) {
			throw new Error("Missing Gmail OAuth credentials");
		}

		const sync = new GmailDailySync(supabaseUrl, supabaseServiceKey);
		const result = await sync.sync();

		return new Response(
			JSON.stringify({
				success: true,
				message: "Daily Gmail sync completed successfully",
				stats: result,
				timestamp: new Date().toISOString(),
			}),
			{
				headers: { "Content-Type": "application/json" },
				status: 200,
			}
		);
	} catch (error) {
		console.error("Edge function error:", error);

		return new Response(
			JSON.stringify({
				success: false,
				error: error.message,
				timestamp: new Date().toISOString(),
			}),
			{
				headers: { "Content-Type": "application/json" },
				status: 500,
			}
		);
	}
});
