#!/bin/bash
# Setup script for GetSupplier - creates table and tests function

echo "🔧 GetSupplier Setup Script"
echo "=========================="

# Check for required environment variables
if [ -z "$PROJECT_REF" ]; then
    echo "❌ Error: PROJECT_REF not set"
    echo "Usage: PROJECT_REF=your-project-ref ./setup-supplier.sh"
    exit 1
fi

echo ""
echo "📋 Step 1: Create the supplier table"
echo "Please run this SQL in your Supabase Dashboard (SQL Editor):"
echo ""
echo "----------------------------------------"
cat sql/create_supplier_table.sql
echo "----------------------------------------"
echo ""
echo "👉 Go to: https://app.supabase.com/project/$PROJECT_REF/sql/new"
echo ""
read -p "Press Enter after you've created the table..."

echo ""
echo "🧪 Step 2: Testing GetSupplier function..."
RESPONSE=$(curl -s -X POST "https://$PROJECT_REF.supabase.co/functions/v1/GetSupplier" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json")

echo "Response: $RESPONSE"

if [[ $RESPONSE == *"success\":true"* ]]; then
    echo "✅ Success! GetSupplier is working!"
    echo "$RESPONSE" | jq '.'
else
    echo "❌ Something went wrong. Check:"
    echo "1. Did you create the table?"
    echo "2. Is SUPABASE_ANON_KEY set?"
    echo "3. Check logs: supabase functions logs GetSupplier --project-ref $PROJECT_REF"
fi 