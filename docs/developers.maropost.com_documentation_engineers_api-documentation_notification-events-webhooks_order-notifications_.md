---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks/order-notifications/"
title: "Engineers API documentation Notification Events (Webhooks) Order Notifications"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks/order-notifications/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks/order-notifications/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks/order-notifications/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Notification Events (Webhooks)](https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks)
- [Order Notifications](https://developers.maropost.com/documentation/engineers/api-documentation/notification-events-webhooks/order-notifications/)

## Overview

The Neto by Maropost Order Notifications API is an optional call to an external webhook in response to order status change events occurring in the Neto e-Commerce Suite. The Notifications API uses your Neto API key to ensure the call is coming from a trusted source.

## Practical Uses

You can use the notification API to notify your application of new orders or changes to an existing orders status. On receipt of a notification you can then use other API calls such as GetOrder or UpdateOrder to perform a desired action. Using the notification API can help to reduce the number of unnecessary calls you make to the application looking for new order or order status changes.

Notification Structure

Notifications are sent as XML via POST to your specified URL.

|     |     |
| --- | --- |
| Webhook URL | Set your URL in your Neto control panel. (Go to: Settings & Tools > All Settings & Tools > API Settings) |
| Method | POST |
| Headers | |     |     |
| --- | --- |
| NETO\_NOTIFICATION | Order |
| NETOAPI\_KEY | Your API Secure Key (generate this in your Neto control panel) | |
| XSD Schema | [EventSchema XSD](https://developers.maropost.com/assets/api/EventSchema.xsd) |

## Example Post

Notification of order status changing to pick.

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<Event>
  <CurrentTime>2014-01-03 01:11:12</CurrentTime>
  <EventID>34</EventID>
  <EventType>Order</EventType>
  <Order>
    <OrderID>N10154</OrderID>
    <OrderStatus>Pick</OrderStatus>
  </Order>
</Event>

```

| Element Name | Type | Description | Example |
| --- | --- | --- | --- |
| **_\`\`_** | Contains the child elements below |
| \`\` | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The unique ID of the event call. This is logged. | 12 |
| \`\` | [datetime](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The date and time the notification was sent. | 2014-01-03 01:11:12 |
| \`\` | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The type of event. | Order |
| **_\`\`_** | Contains the child elements below |
| \`\` | [orderidtype](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The order ID related to the event. | N1000001 |
| \`\` | [orderstatustype](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The status that the order was changed to. | Quote<br> New<br> On Hold<br> New Backorder<br> Backorder Approved<br> Pick<br> Pack<br> Pending Pickup<br> Pending Dispatch<br> Dispatched<br> Cancelled<br> Uncommitted |

## Valid Response

If the call to your webhook is successful, your application should respond `“200 OK”`. If your application makes no response or provides a standard error response, Neto will treat the notification as undelivered, and delivery will be optionally reattempted at a later time (set in Scheduled Tasks).

### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!

[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.