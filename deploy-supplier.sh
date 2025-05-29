#!/bin/bash
# Deploy script for GetSupplier edge function

echo "🚀 Deploying GetSupplier Edge Function..."

# Check if PROJECT_REF is set
if [ -z "$PROJECT_REF" ]; then
    echo "❌ Error: PROJECT_REF environment variable not set"
    echo "Usage: PROJECT_REF=your-project-ref ./deploy-supplier.sh"
    exit 1
fi

# Deploy the function
echo "📦 Deploying GetSupplier to Supabase..."
supabase functions deploy GetSupplier --project-ref $PROJECT_REF

if [ $? -eq 0 ]; then
    echo "✅ GetSupplier deployed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Run the SQL script to create the supplier table:"
    echo "   psql -h your-db-host -U postgres -d postgres < sql/create_supplier_table.sql"
    echo ""
    echo "2. Test the function:"
    echo "   curl -X POST https://$PROJECT_REF.supabase.co/functions/v1/GetSupplier \\"
    echo "     -H 'Authorization: Bearer YOUR_ANON_KEY' \\"
    echo "     -H 'Content-Type: application/json'"
    echo ""
    echo "3. Or run the global sync to include suppliers:"
    echo "   curl -X POST https://$PROJECT_REF.supabase.co/functions/v1/global_sync \\"
    echo "     -H 'Authorization: Bearer YOUR_ANON_KEY'"
else
    echo "❌ Deployment failed!"
    exit 1
fi 