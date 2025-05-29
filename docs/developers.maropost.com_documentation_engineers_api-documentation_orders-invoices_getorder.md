---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder"
title: "Engineers API documentation Orders / Invoices GetOrder"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Orders / Invoices](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices)
- [GetOrder](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder)

# GetOrder

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get order/invoice data. A successful call to GetOrder returns the data requested. |
| XSD Schema | [GetOrder XSD](https://www.neto.com.au/assets/api/GetOrder.xsd)   \|   [GetOrder Response XSD](https://www.neto.com.au/assets/api/GetOrderResponse.xsd) |

## Examples

### Get orders for multiple order status and mark as exported on success response.

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetOrder>
  <Filter>
    <OrderStatus>New</OrderStatus>
    <OrderStatus>Pick</OrderStatus>
    <OrderStatus>Pack</OrderStatus>
    <OutputSelector>ShippingOption</OutputSelector>
    <OutputSelector>DeliveryInstruction</OutputSelector>
    <OutputSelector>Username</OutputSelector>
    <OutputSelector>Email</OutputSelector>
    <OutputSelector>ShipAddress</OutputSelector>
    <OutputSelector>BillAddress</OutputSelector>
    <OutputSelector>CustomerRef1</OutputSelector>
    <OutputSelector>CustomerRef2</OutputSelector>
    <OutputSelector>CustomerRef3</OutputSelector>
    <OutputSelector>CustomerRef4</OutputSelector>
    <OutputSelector>SalesChannel</OutputSelector>
    <OutputSelector>GrandTotal</OutputSelector>
    <OutputSelector>ShippingTotal</OutputSelector>
    <OutputSelector>ShippingDiscount</OutputSelector>
    <OutputSelector>OrderType</OutputSelector>
    <OutputSelector>OrderStatus</OutputSelector>
    <OutputSelector>OrderPayment</OutputSelector>
    <OutputSelector>OrderPayment.PaymentType</OutputSelector>
    <OutputSelector>OrderPayment.DatePaid</OutputSelector>
    <OutputSelector>DatePlaced</OutputSelector>
    <OutputSelector>DateRequired</OutputSelector>
    <OutputSelector>DateInvoiced</OutputSelector>
    <OutputSelector>DatePaid</OutputSelector>
    <OutputSelector>OrderLine</OutputSelector>
    <OutputSelector>OrderLine.ProductName</OutputSelector>
    <OutputSelector>OrderLine.PickQuantity</OutputSelector>
    <OutputSelector>OrderLine.BackorderQuantity</OutputSelector>
    <OutputSelector>OrderLine.UnitPrice</OutputSelector>
    <OutputSelector>OrderLine.WarehouseID</OutputSelector>
    <OutputSelector>OrderLine.WarehouseName</OutputSelector>
    <OutputSelector>OrderLine.WarehouseReference</OutputSelector>
    <OutputSelector>OrderLine.Quantity</OutputSelector>
    <OutputSelector>OrderLine.PercentDiscount</OutputSelector>
    <OutputSelector>OrderLine.ProductDiscount</OutputSelector>
    <OutputSelector>OrderLine.CostPrice</OutputSelector>
    <OutputSelector>OrderLine.ShippingMethod</OutputSelector>
    <OutputSelector>OrderLine.ShippingTracking</OutputSelector>
    <OutputSelector>ShippingSignature</OutputSelector>
    <OutputSelector>eBay.eBayUsername</OutputSelector>
    <OutputSelector>eBay.eBayStoreName</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayTransactionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayAuctionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.ListingType</OutputSelector>
    <OutputSelector>OrderLine.eBay.DateCreated</OutputSelector>
    <OutputSelector>OrderLine.eBay.DatePaid</OutputSelector>
    <UpdateResults>
      <ExportStatus>Exported</ExportStatus>
    </UpdateResults>
  </Filter>
</GetOrder>

```

#### JSON

```rainbow rainbow-show
{
  "Filter": {
    "OrderStatus": [\
      "New",\
      "Pick",\
      "Pack"\
    ],
    "OutputSelector": [\
      "ShippingOption",\
      "DeliveryInstruction",\
      "Username",\
      "Email",\
      "ShipAddress",\
      "BillAddress",\
      "CustomerRef1",\
      "CustomerRef2",\
      "CustomerRef3",\
      "CustomerRef4",\
      "SalesChannel",\
      "GrandTotal",\
      "ShippingTotal",\
      "ShippingDiscount",\
      "OrderType",\
      "OrderStatus",\
      "OrderPayment",\
      "OrderPayment.PaymentType",\
      "OrderPayment.DatePaid",\
      "DatePlaced",\
      "DateRequired",\
      "DateInvoiced",\
      "DatePaid",\
      "OrderLine",\
      "OrderLine.ProductName",\
      "OrderLine.PickQuantity",\
      "OrderLine.BackorderQuantity",\
      "OrderLine.UnitPrice",\
      "OrderLine.WarehouseID",\
      "OrderLine.WarehouseName",\
      "OrderLine.WarehouseReference",\
      "OrderLine.Quantity",\
      "OrderLine.PercentDiscount",\
      "OrderLine.ProductDiscount",\
      "OrderLine.CostPrice",\
      "OrderLine.ShippingMethod",\
      "OrderLine.ShippingTracking",\
      "ShippingSignature",\
      "eBay.eBayUsername",\
      "eBay.eBayStoreName",\
      "OrderLine.eBay.eBayTransactionID",\
      "OrderLine.eBay.eBayAuctionID",\
      "OrderLine.eBay.ListingType",\
      "OrderLine.eBay.DateCreated",\
      "OrderLine.eBay.DatePaid"\
    ],
    "UpdateResults": { "ExportStatus": "Exported" }
  }
}

```

### Get order details for a specific order (Order ID: N001001)

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetOrder>
  <Filter>
    <OrderID>N001001</OrderID>
    <OutputSelector>ShippingOption</OutputSelector>
    <OutputSelector>DeliveryInstruction</OutputSelector>
    <OutputSelector>Username</OutputSelector>
    <OutputSelector>Email</OutputSelector>
    <OutputSelector>ShipAddress</OutputSelector>
    <OutputSelector>BillAddress</OutputSelector>
    <OutputSelector>CustomerRef1</OutputSelector>
    <OutputSelector>CustomerRef2</OutputSelector>
    <OutputSelector>CustomerRef3</OutputSelector>
    <OutputSelector>CustomerRef4</OutputSelector>
    <OutputSelector>SalesChannel</OutputSelector>
    <OutputSelector>GrandTotal</OutputSelector>
    <OutputSelector>ShippingTotal</OutputSelector>
    <OutputSelector>ShippingDiscount</OutputSelector>
    <OutputSelector>OrderType</OutputSelector>
    <OutputSelector>OrderStatus</OutputSelector>
    <OutputSelector>OrderPayment</OutputSelector>
    <OutputSelector>OrderPayment.DatePaid</OutputSelector>
    <OutputSelector>DatePlaced</OutputSelector>
    <OutputSelector>DateRequired</OutputSelector>
    <OutputSelector>DateInvoiced</OutputSelector>
    <OutputSelector>DatePaid</OutputSelector>
    <OutputSelector>OrderLine</OutputSelector>
    <OutputSelector>OrderLine.ProductName</OutputSelector>
    <OutputSelector>OrderLine.PickQuantity</OutputSelector>
    <OutputSelector>OrderLine.BackorderQuantity</OutputSelector>
    <OutputSelector>OrderLine.UnitPrice</OutputSelector>
    <OutputSelector>OrderLine.WarehouseID</OutputSelector>
    <OutputSelector>OrderLine.WarehouseName</OutputSelector>
    <OutputSelector>OrderLine.WarehouseReference</OutputSelector>
    <OutputSelector>OrderLine.Quantity</OutputSelector>
    <OutputSelector>OrderLine.PercentDiscount</OutputSelector>
    <OutputSelector>OrderLine.ProductDiscount</OutputSelector>
    <OutputSelector>OrderLine.CostPrice</OutputSelector>
    <OutputSelector>OrderLine.ShippingMethod</OutputSelector>
    <OutputSelector>OrderLine.ShippingTracking</OutputSelector>
    <OutputSelector>ShippingSignature</OutputSelector>
    <OutputSelector>eBay.eBayUsername</OutputSelector>
    <OutputSelector>eBay.eBayStoreName</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayTransactionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayAuctionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.ListingType</OutputSelector>
    <OutputSelector>OrderLine.eBay.DateCreated</OutputSelector>
    <OutputSelector>OrderLine.eBay.DatePaid</OutputSelector>
    <UpdateResults>
      <ExportStatus>Exported</ExportStatus>
      <ExportedToWMS>True</ExportedToWMS>
    </UpdateResults>
  </Filter>
</GetOrder>

```

#### JSON

```rainbow rainbow-show
{
  "Filter": {
    "OrderID": "N001001",
    "OutputSelector": [\
      "ShippingOption",\
      "DeliveryInstruction",\
      "Username",\
      "Email",\
      "ShipAddress",\
      "BillAddress",\
      "CustomerRef1",\
      "CustomerRef2",\
      "CustomerRef3",\
      "CustomerRef4",\
      "SalesChannel",\
      "GrandTotal",\
      "ShippingTotal",\
      "ShippingDiscount",\
      "OrderType",\
      "OrderStatus",\
      "OrderPayment",\
      "OrderPayment.DatePaid",\
      "DatePlaced",\
      "DateRequired",\
      "DateInvoiced",\
      "DatePaid",\
      "OrderLine",\
      "OrderLine.ProductName",\
      "OrderLine.PickQuantity",\
      "OrderLine.BackorderQuantity",\
      "OrderLine.UnitPrice",\
      "OrderLine.WarehouseID",\
      "OrderLine.WarehouseName",\
      "OrderLine.WarehouseReference",\
      "OrderLine.Quantity",\
      "OrderLine.PercentDiscount",\
      "OrderLine.ProductDiscount",\
      "OrderLine.CostPrice",\
      "OrderLine.ShippingMethod",\
      "OrderLine.ShippingTracking",\
      "ShippingSignature",\
      "eBay.eBayUsername",\
      "eBay.eBayStoreName",\
      "OrderLine.eBay.eBayTransactionID",\
      "OrderLine.eBay.eBayAuctionID",\
      "OrderLine.eBay.ListingType",\
      "OrderLine.eBay.DateCreated",\
      "OrderLine.eBay.DatePaid"\
    ],
    "UpdateResults": { "ExportStatus": "Exported" }
  }
}

```

### Get all the order data you need to ship orders that have been approved to be shipped, are in the new or pick status and that have been exported (pending export). On success response mark orders as exported.

This call is typically used by 3PL, WMS and other 3rd party shipping apps.

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetOrder>
  <Filter>
    <OrderStatus>New</OrderStatus>
    <OrderStatus>Pick</OrderStatus>
    <ExportStatus>Pending</ExportStatus>
    <OrderComplete>Approved</OrderComplete>
    <OutputSelector>ShippingOption</OutputSelector>
    <OutputSelector>DeliveryInstruction</OutputSelector>
    <OutputSelector>Email</OutputSelector>
    <OutputSelector>ShipAddress</OutputSelector>
    <OutputSelector>BillAddress</OutputSelector>
    <OutputSelector>GrandTotal</OutputSelector>
    <OutputSelector>ShippingTotal</OutputSelector>
    <OutputSelector>DatePlaced</OutputSelector>
    <OutputSelector>DateRequired</OutputSelector>
    <OutputSelector>OrderLine</OutputSelector>
    <OutputSelector>OrderLine.ProductName</OutputSelector>
    <OutputSelector>OrderLine.UnitPrice</OutputSelector>
    <OutputSelector>OrderLine.Quantity</OutputSelector>
    <OutputSelector>ShippingSignature</OutputSelector>
    <UpdateResults>
      <ExportStatus>Exported</ExportStatus>
    </UpdateResults>
  </Filter>
</GetOrder>

```

#### JSON

```rainbow rainbow-show
{
  "Filter": {
    "OrderStatus": [\
      "New",\
      "Pick"\
    ],
    "ExportStatus": "Pending",
    "OrderComplete": "Approved",
    "OutputSelector": [\
      "ShippingOption",\
      "DeliveryInstruction",\
      "Email",\
      "ShipAddress",\
      "BillAddress",\
      "GrandTotal",\
      "ShippingTotal",\
      "DatePlaced",\
      "DateRequired",\
      "OrderLine",\
      "OrderLine.ProductName",\
      "OrderLine.UnitPrice",\
      "OrderLine.Quantity",\
      "ShippingSignature"\
    ],
    "UpdateResults": { "ExportStatus": "Exported" }
  }
}

```

## Sample Response (Success)

### Showing multiple orders being returned for the above call.

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="UTF-8"?>
<GetOrderResponse>
   <Order>
      <BillStreetLine1>123 Smith Street</BillStreetLine1>
      <BillState>NSW</BillState>
      <BillCountry>AU</BillCountry>
      <BillPostCode>2000</BillPostCode>
      <ShipLastName>Smith</ShipLastName>
      <ShipFirstName>John</ShipFirstName>
      <OrderID>N001001</OrderID>
      <OrderLine>
         <UnitPrice>5.950</UnitPrice>
         <Quantity>2</Quantity>
         <ProductName>Product Name</ProductName>
         <SKU>SAMPLE_P10</SKU>
         <OrderLineID>N001001-0</OrderLineID>
      </OrderLine>
      <OrderLine>
         <UnitPrice>635.450</UnitPrice>
         <Quantity>1</Quantity>
         <ProductName>[Sample] Product # 1 [Colour: Green]</ProductName>
         <SKU>SAMPLE_P1_G</SKU>
         <OrderLineID>N001001-1</OrderLineID>
      </OrderLine>
      <DeliveryInstruction>Leave at front door</DeliveryInstruction>
      <ShipPhone>07 3420 8434</ShipPhone>
      <Email>johnsmith@neto.com.au</Email>
      <BillCity>SYDNEY</BillCity>
      <BillFirstName>John</BillFirstName>
      <ShippingOption>Standard Shipping</ShippingOption>
      <ShippingSignature>True</ShippingSignature>
      <ShipCompany>Acme Co.</ShipCompany>
      <BillLastName>Smith</BillLastName>
      <ShipStreetLine1>123 Smith Street</ShipStreetLine1>
      <ShipState>NSW</ShipState>
      <ShipCity>SYDNEY</ShipCity>
      <ShipCountry>AU</ShipCountry>
      <ShippingTotal>7.08</ShippingTotal>
      <BillStreetLine2>More address data</BillStreetLine2>
      <DatePlaced>2014-04-19 20:02:30</DatePlaced>
      <DateRequired>2014-04-19 20:02:00</DateRequired>
      <GrandTotal>718.43</GrandTotal>
      <ShipStreetLine2>More address data</ShipStreetLine2>
      <ShipPostCode>2000</ShipPostCode>
      <BillCompany>Acme Co.</BillCompany>
   </Order>
   <Order>
      <BillStreetLine1>123 Sample Street</BillStreetLine1>
      <BillState>QLD</BillState>
      <BillCountry>AU</BillCountry>
      <BillPostCode>4157</BillPostCode>
      <ShipLastName>Smith</ShipLastName>
      <ShipFirstName>John</ShipFirstName>
      <OrderID>N10155</OrderID>
      <OrderLine>
         <UnitPrice>99.000</UnitPrice>
         <Quantity>2</Quantity>
         <ProductName>[Sample] Product # 11</ProductName>
         <SKU>SAMPLE_P11</SKU>
         <OrderLineID>N10155-0</OrderLineID>
      </OrderLine>
      <OrderLine>
         <UnitPrice>399.000</UnitPrice>
         <Quantity>1</Quantity>
         <ProductName>[Sample] Product # 12</ProductName>
         <SKU>SAMPLE_P12</SKU>
         <OrderLineID>N10155-1</OrderLineID>
      </OrderLine>
      <OrderLine>
         <UnitPrice>29.950</UnitPrice>
         <Quantity>1</Quantity>
         <ProductName>[Sample] Product With Variations #2 [Size: Small]</ProductName>
         <SKU>SAMPLE_V2_SML</SKU>
         <OrderLineID>N10155-2</OrderLineID>
      </OrderLine>
      <DeliveryInstruction />
      <Email>sample@neto.com.au</Email>
      <BillCity>CAPALABA</BillCity>
      <BillFirstName>John</BillFirstName>
      <ShippingOption>Express Shipping</ShippingOption>
      <ShippingSignature>False</ShippingSignature>
      <BillLastName>Smith</BillLastName>
      <ShipStreetLine1>123 Sample Street</ShipStreetLine1>
      <ShipCity>CAPALABA</ShipCity>
      <ShipState>QLD</ShipState>
      <ShipCountry>AU</ShipCountry>
      <ShippingTotal>26.62</ShippingTotal>
      <DatePlaced>2013-09-17 23:25:23</DatePlaced>
      <DateRequired />
      <GrandTotal>653.57</GrandTotal>
      <ShipPostCode>4157</ShipPostCode>
   </Order>
   <CurrentTime>2014-04-06 08:08:21</CurrentTime>
   <Ack>Success</Ack>
</GetOrderResponse>

```

#### JSON

```rainbow rainbow-show
{
  "Order": {
    "BillStreetLine1": "123 Smith Street",
    "BillState": "NSW",
    "BillCountry": "AU",
    "BillPostCode": "2000",
    "ShipLastName": "Smith",
    "ShipFirstName": "John",
    "OrderID": "N001001",
    "OrderLine": [\
      {\
        "UnitPrice": "5.950",\
        "Quantity": "2",\
        "ProductName": "Product Name",\
        "SKU": "SAMPLE_P10",\
        "OrderLineID": "N001001-0"\
      },\
      {\
        "UnitPrice": "635.450",\
        "Quantity": "1",\
        "ProductName": "[Sample] Product # 1 [Colour: Green]",\
        "SKU": "SAMPLE_P1_G",\
        "OrderLineID": "N001001-1"\
      }\
    ],
    "DeliveryInstruction": "Leave at front door",
    "ShipPhone": "07 3420 8434",
    "Email": "johnsmith@neto.com.au",
    "BillCity": "SYDNEY",
    "BillFirstName": "John",
    "ShippingOption": "Standard Shipping",
    "ShippingSignature": "True",
    "ShipCompany": "Acme Co.",
    "BillLastName": "Smith",
    "ShipStreetLine1": "123 Smith Street",
    "ShipState": "NSW",
    "ShipCity": "SYDNEY",
    "ShipCountry": "AU",
    "ShippingTotal": "7.08",
    "BillStreetLine2": "More address data",
    "DatePlaced": "2014-04-19 20:02:30",
    "DateRequired": "2014-04-19 20:02:00",
    "GrandTotal": "718.43",
    "ShipStreetLine2": "More address data",
    "ShipPostCode": "2000",
    "BillCompany": "Acme Co."
      },
        {
    "BillStreetLine1": "123 Sample Street",
    "BillState": "QLD",
    "BillCountry": "AU",
    "BillPostCode": "4157",
    "ShipLastName": "Smith",
    "ShipFirstName": "John",
    "OrderID": "N10155",
    "OrderLine": [\
      {\
        "UnitPrice": "99.000",\
        "Quantity": "2",\
        "ProductName": "[Sample] Product # 11",\
        "SKU": "SAMPLE_P11",\
        "OrderLineID": "N10155-0"\
      },\
      {\
        "UnitPrice": "399.000",\
        "Quantity": "1",\
        "ProductName": "[Sample] Product # 12",\
        "SKU": "SAMPLE_P12",\
        "OrderLineID": "N10155-1"\
      },\
      {\
        "UnitPrice": "29.950",\
        "Quantity": "1",\
        "ProductName": "[Sample] Product With Variations #2 [Size: Small]",\
        "SKU": "SAMPLE_V2_SML",\
        "OrderLineID": "N10155-2"\
      }\
    ],
    "Email": "sample@neto.com.au",
    "BillCity": "CAPALABA",
    "BillFirstName": "John",
    "ShippingOption": "Express Shipping",
    "ShippingSignature": "False",
    "BillLastName": "Smith",
    "ShipStreetLine1": "123 Sample Street",
    "ShipCity": "CAPALABA",
    "ShipState": "QLD",
    "ShipCountry": "AU",
    "ShippingTotal": "26.62",
    "DatePlaced": "2013-09-17 23:25:23",
    "GrandTotal": "653.57",
    "ShipPostCode": "4157"
  }
    ],
    "CurrentTime": "2014-12-01 12:09:01",
    "Ack": "Success"
}

```

## GetOrder Post

You must specify at least one filter and one OutputSelector in your GetOrder request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetOrder>
   <Filter>
    <OrderID>(String)</OrderID>
    <Username>(String)</Username>
    <SKU>(String)</SKU>
    <Supplier>(String)</Supplier>
    <OrderStatus>New</OrderStatus>
    <OrderStatus>New Backorder</OrderStatus>
    <OrderStatus>Backorder Approved</OrderStatus>
    <OrderStatus>Pick</OrderStatus>
    <OrderStatus>Pack</OrderStatus>
    <OrderStatus>Pending Pickup</OrderStatus>
    <OrderStatus>Pending Dispatch</OrderStatus>
    <OrderStatus>Dispatched</OrderStatus>
    <OrderStatus>Cancelled</OrderStatus>
    <OrderStatus>Uncommitted</OrderStatus>
    <OrderStatus>On Hold</OrderStatus>
    <OrderType>sales</OrderType>
    <OrderType>dropshipping</OrderType>
    <OnHoldType>On Hold</OnHoldType>
    <OnHoldType>Layby</OnHoldType>
    <CompleteStatus>Approved</CompleteStatus>
    <CompleteStatus>Incomplete</CompleteStatus>
    <PaymentStatus>FullyPaid</PaymentStatus>
    <PaymentStatus>PartialPaid</PaymentStatus>
    <PaymentStatus>Pending</PaymentStatus>
    <ExportStatus>Pending</ExportStatus>
    <ExportStatus>Exported</ExportStatus>
    <WarehouseID>(Integer)</WarehouseID>
    <ExportedToWMS>Pending</ExportedToWMS>
    <ExportedToWMS>Exported</ExportedToWMS>
    <ShippingMethod>(String)</ShippingMethod>
    <SalesChannel>(String)</SalesChannel>
    <DatePaidFrom>(DateTime)</DatePaidFrom>
    <DatePaidTo>(DateTime)</DatePaidTo>
    <DateRequiredFrom>(DateTime)</DateRequiredFrom>
    <DateRequiredTo>(DateTime)</DateRequiredTo>
    <DateInvoicedFrom>(DateTime)</DateInvoicedFrom>
    <DateInvoicedTo>(DateTime)</DateInvoicedTo>
    <DatePlacedFrom>(DateTime)</DatePlacedFrom>
    <DatePlacedTo>(DateTime)</DatePlacedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <DateCompletedFrom>(DateTime)</DateCompletedFrom>
    <DateCompletedTo>(DateTime)</DateCompletedTo>
    <WarehouseQuantityUpdatedFrom>(DateTime)</WarehouseQuantityUpdatedFrom>
    <WarehouseQuantityUpdatedTo>(DateTime)</WarehouseQuantityUpdatedTo>
    <SplitKitComponents>(Boolean)</SplitKitComponents>
    <ExternalSystemIdentifier>(String)</ExternalSystemIdentifier>
    <ExternalOrderReference>(String)</ExternalOrderReference>
    <ExternalOrderLineReference>(String)</ExternalOrderLineReference>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>ShippingOption</OutputSelector>
    <OutputSelector>DeliveryInstruction</OutputSelector>
    <OutputSelector>RelatedOrderID</OutputSelector>
    <OutputSelector>Username</OutputSelector>
    <OutputSelector>Email</OutputSelector>
    <OutputSelector>ShipAddress</OutputSelector>
    <OutputSelector>BillAddress</OutputSelector>
    <OutputSelector>PurchaseOrderNumber</OutputSelector>
    <OutputSelector>SalesPerson</OutputSelector>
    <OutputSelector>CustomerRef1</OutputSelector>
    <OutputSelector>CustomerRef2</OutputSelector>
    <OutputSelector>CustomerRef3</OutputSelector>
    <OutputSelector>CustomerRef4</OutputSelector>
    <OutputSelector>CustomerRef5</OutputSelector>
    <OutputSelector>CustomerRef6</OutputSelector>
    <OutputSelector>CustomerRef7</OutputSelector>
    <OutputSelector>CustomerRef8</OutputSelector>
    <OutputSelector>CustomerRef9</OutputSelector>
    <OutputSelector>CustomerRef10</OutputSelector>
    <OutputSelector>SalesChannel</OutputSelector>
    <OutputSelector>GrandTotal</OutputSelector>
    <OutputSelector>TaxInclusive</OutputSelector>
    <OutputSelector>OrderTax</OutputSelector>
    <OutputSelector>SurchargeTotal</OutputSelector>
    <OutputSelector>SurchargeTaxable</OutputSelector>
    <OutputSelector>ProductSubtotal</OutputSelector>
    <OutputSelector>ShippingTotal</OutputSelector>
    <OutputSelector>ShippingTax</OutputSelector>
    <OutputSelector>ClientIPAddress</OutputSelector>
    <OutputSelector>CouponCode</OutputSelector>
    <OutputSelector>CouponDiscount</OutputSelector>
    <OutputSelector>ShippingDiscount</OutputSelector>
    <OutputSelector>OrderType</OutputSelector>
    <OutputSelector>OnHoldType</OutputSelector>
    <OutputSelector>OrderStatus</OutputSelector>
    <OutputSelector>OrderPayment</OutputSelector>
    <OutputSelector>DefaultPaymentType</OutputSelector>
    <OutputSelector>OrderPayment.PaymentType</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>DatePlaced</OutputSelector>
    <OutputSelector>DateRequired</OutputSelector>
    <OutputSelector>DateInvoiced</OutputSelector>
    <OutputSelector>DatePaid</OutputSelector>
    <OutputSelector>DateCompleted</OutputSelector>
    <OutputSelector>DateCompletedUTC</OutputSelector>
    <OutputSelector>DatePaymentDue</OutputSelector>
    <OutputSelector>PaymentTerms</OutputSelector>
    <OutputSelector>OrderLine</OutputSelector>
    <OutputSelector>OrderLine.ProductName</OutputSelector>
    <OutputSelector>OrderLine.ItemNotes</OutputSelector>
    <OutputSelector>OrderLine.SerialNumber</OutputSelector>
    <OutputSelector>OrderLine.PickQuantity</OutputSelector>
    <OutputSelector>OrderLine.BackorderQuantity</OutputSelector>
    <OutputSelector>OrderLine.UnitPrice</OutputSelector>
    <OutputSelector>OrderLine.Tax</OutputSelector>
    <OutputSelector>OrderLine.TaxCode</OutputSelector>
    <OutputSelector>OrderLine.WarehouseID</OutputSelector>
    <OutputSelector>OrderLine.WarehouseName</OutputSelector>
    <OutputSelector>OrderLine.WarehouseReference</OutputSelector>
    <OutputSelector>OrderLine.Quantity</OutputSelector>
    <OutputSelector>OrderLine.PercentDiscount</OutputSelector>
    <OutputSelector>OrderLine.ProductDiscount</OutputSelector>
    <OutputSelector>OrderLine.CouponDiscount</OutputSelector>
    <OutputSelector>OrderLine.CostPrice</OutputSelector>
    <OutputSelector>OrderLine.ShippingMethod</OutputSelector>
    <OutputSelector>OrderLine.ShippingServiceID</OutputSelector>
    <OutputSelector>OrderLine.ShippingServiceName</OutputSelector>
    <OutputSelector>OrderLine.ShippingTracking</OutputSelector>
    <OutputSelector>OrderLine.ShippingCarrierCode</OutputSelector>
    <OutputSelector>OrderLine.ShippingCarrierName</OutputSelector>
    <OutputSelector>OrderLine.ShippingTrackingUrl</OutputSelector>
    <OutputSelector>OrderLine.Weight</OutputSelector>
    <OutputSelector>OrderLine.Cubic</OutputSelector>
    <OutputSelector>OrderLine.Extra</OutputSelector>
    <OutputSelector>OrderLine.ExtraOptions</OutputSelector>
    <OutputSelector>OrderLine.BinLoc</OutputSelector>
    <OutputSelector>OrderLine.QuantityShipped</OutputSelector>
    <OutputSelector>OrderLine.ExternalSystemIdentifier</OutputSelector>
    <OutputSelector>OrderLine.ExternalOrderReference</OutputSelector>
    <OutputSelector>OrderLine.ExternalOrderLineReference</OutputSelector>
    <OutputSelector>ShippingSignature</OutputSelector>
    <OutputSelector>RealtimeConfirmation</OutputSelector>
    <OutputSelector>InternalOrderNotes</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayUsername</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayStoreName</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayTransactionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.eBayAuctionID</OutputSelector>
    <OutputSelector>OrderLine.eBay.ListingType</OutputSelector>
    <OutputSelector>OrderLine.eBay.DateCreated</OutputSelector>
    <OutputSelector>CompleteStatus</OutputSelector>
    <OutputSelector>OrderLine.eBay.DatePaid</OutputSelector>
    <OutputSelector>UserGroup</OutputSelector>
    <OutputSelector>StickyNotes</OutputSelector>
     <UpdateResults>
      <ExportStatus></ExportStatus>
      <ExportedToWMS>(Boolean)</ExportedToWMS>
     </UpdateResults>   </Filter>
</GetOrder>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "OrderID":["String"﻿/*, ...*/],
    "Username":["String"﻿/*, ...*/],
    "SKU":["String"﻿/*, ...*/],
    "Supplier":["String"﻿/*, ...*/],
    "OrderStatus":["Enumeration"﻿/*, ...*/],
    "OrderType":["Enumeration"﻿/*, ...*/],
    "OnHoldType":["Enumeration"﻿/*, ...*/],
    "CompleteStatus":["Enumeration"﻿/*, ...*/],
    "PaymentStatus":["Enumeration"﻿/*, ...*/],
    "ExportStatus":["Enumeration"﻿/*, ...*/],
    "WarehouseID":["Integer"﻿/*, ...*/],
    "ExportedToWMS":["Enumeration"﻿/*, ...*/],
    "ShippingMethod":["String"﻿/*, ...*/],
    "SalesChannel":["String"﻿/*, ...*/],
    "DatePaidFrom":"DateTime",
    "DatePaidTo":"DateTime",
    "DateRequiredFrom":"DateTime",
    "DateRequiredTo":"DateTime",
    "DateInvoicedFrom":"DateTime",
    "DateInvoicedTo":"DateTime",
    "DatePlacedFrom":"DateTime",
    "DatePlacedTo":"DateTime",
    "DateUpdatedFrom":"DateTime",
    "DateUpdatedTo":"DateTime",
    "DateCompletedFrom":"DateTime",
    "DateCompletedTo":"DateTime",
    "WarehouseQuantityUpdatedFrom":"DateTime",
    "WarehouseQuantityUpdatedTo":"DateTime",
    "SplitKitComponents":"Boolean",
    "ExternalSystemIdentifier":["String"﻿/*, ...*/],
    "ExternalOrderReference":"String",
    "ExternalOrderLineReference":"String",
    "Page":"Integer",
    "Limit":"Integer",
    "OutputSelector":["Enumeration"﻿/*, ...*/],
    "UpdateResults": {
﻿      "ExportStatus":"Enumeration",
      "ExportedToWMS":"Boolean"
} ﻿
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| Username | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SKU | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Supplier | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| OrderStatus | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(New, New Backorder, Backorder Approved, Pick, Pack, Pending Pickup, Pending Dispatch, Dispatched, Cancelled, Uncommitted, On Hold) |
| OrderType | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(sales, dropshipping) |
| OnHoldType | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(On Hold, Layby) |
| CompleteStatus | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Approved, Incomplete) |
| PaymentStatus | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(FullyPaid, PartialPaid, Pending) |
| ExportStatus | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pending, Exported) |
| WarehouseID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ExportedToWMS | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pending, Exported) |
| ShippingMethod | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SalesChannel | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| DatePaidFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePaidTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateRequiredFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateRequiredTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateInvoicedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateInvoicedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePlacedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePlacedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateCompletedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateCompletedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| WarehouseQuantityUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| WarehouseQuantityUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SplitKitComponents | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ExternalSystemIdentifier | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ExternalOrderReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ExternalOrderLineReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (ID, ShippingOption, DeliveryInstruction, RelatedOrderID, Username, Email, ShipAddress, BillAddress, PurchaseOrderNumber, SalesPerson, CustomerRef1, CustomerRef2, CustomerRef3, CustomerRef4, CustomerRef5, CustomerRef6, CustomerRef7, CustomerRef8, CustomerRef9, CustomerRef10, SalesChannel, GrandTotal, TaxInclusive, OrderTax, SurchargeTotal, SurchargeTaxable, ProductSubtotal, ShippingTotal, ShippingTax, ClientIPAddress, CouponCode, CouponDiscount, ShippingDiscount, OrderType, OnHoldType, OrderStatus, OrderPayment, DefaultPaymentType, OrderPayment.PaymentType, DateUpdated, DatePlaced, DateRequired, DateInvoiced, DatePaid, DateCompleted, DateCompletedUTC, DatePaymentDue, PaymentTerms, OrderLine, OrderLine.ProductName, OrderLine.ItemNotes, OrderLine.SerialNumber, OrderLine.PickQuantity, OrderLine.BackorderQuantity, OrderLine.UnitPrice, OrderLine.Tax, OrderLine.TaxCode, OrderLine.WarehouseID, OrderLine.WarehouseName, OrderLine.WarehouseReference, OrderLine.Quantity, OrderLine.PercentDiscount, OrderLine.ProductDiscount, OrderLine.CouponDiscount, OrderLine.CostPrice, OrderLine.ShippingMethod, OrderLine.ShippingServiceID, OrderLine.ShippingServiceName, OrderLine.ShippingTracking, OrderLine.ShippingCarrierCode, OrderLine.ShippingCarrierName, OrderLine.ShippingTrackingUrl, OrderLine.Weight, OrderLine.Cubic, OrderLine.Extra, OrderLine.ExtraOptions, OrderLine.BinLoc, OrderLine.QuantityShipped, OrderLine.ExternalSystemIdentifier, OrderLine.ExternalOrderReference, OrderLine.ExternalOrderLineReference, ShippingSignature, RealtimeConfirmation, InternalOrderNotes, OrderLine.eBay.eBayUsername, OrderLine.eBay.eBayStoreName, OrderLine.eBay.eBayTransactionID, OrderLine.eBay.eBayAuctionID, OrderLine.eBay.ListingType, OrderLine.eBay.DateCreated, CompleteStatus, OrderLine.eBay.DatePaid, UserGroup, StickyNotes) |


UpdateResults
Optional
[UpdateResults](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/getorder#UpdateResults)

* * *

#### <UpdateResults>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ExportStatus | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pending, Exported) |
| ExportedToWMS | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

## GetOrder Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetOrder>
   <Order>
     <OrderLine>
      <Quantity>(Integer)</Quantity>
      <SKU>(String)</SKU>
      <OrderLineID>(String)</OrderLineID>
      <ProductName>(String)</ProductName>
      <ItemNotes>(String)</ItemNotes>
      <SerialNumber>(String)</SerialNumber>
      <PickQuantity>(Integer)</PickQuantity>
      <BackorderQuantity>(Integer)</BackorderQuantity>
      <UnitPrice>(Decimal)</UnitPrice>
      <Tax>(Decimal)</Tax>
      <TaxCode>(String)</TaxCode>
      <WarehouseID>(Integer)</WarehouseID>
      <WarehouseName>(String)</WarehouseName>
      <WarehouseReference>(String)</WarehouseReference>
      <PercentDiscount>(Decimal)</PercentDiscount>
      <ProductDiscount>(Decimal)</ProductDiscount>
      <CostPrice>(Decimal)</CostPrice>
      <ShippingMethod>(String)</ShippingMethod>
      <ShippingServiceID>(String)</ShippingServiceID>
      <ShippingServiceName>(String)</ShippingServiceName>
      <ShippingTracking>(String)</ShippingTracking>
      <ShippingCarrierCode>(String)</ShippingCarrierCode>
      <ShippingCarrierName>(String)</ShippingCarrierName>
      <ShippingTrackingUrl>(String)</ShippingTrackingUrl>
      <Shipping>(Decimal)</Shipping>
      <Weight>(Decimal)</Weight>
      <Cubic>(Decimal)</Cubic>
      <Extra>(String)</Extra>
       <ExtraOptions>
         <ExtraOption>
          <Name>(String)</Name>
          <Value>(String)</Value>
         </ExtraOption>
       </ExtraOptions>      <BinLoc>(String)</BinLoc>
      <QuantityShipped>(Integer)</QuantityShipped>
      <CouponDiscount>(Decimal)</CouponDiscount>
       <eBay>
        <eBayUsername>(String)</eBayUsername>
        <eBayStoreName>(String)</eBayStoreName>
        <eBayAuctionID>(String)</eBayAuctionID>
        <eBayTransactionID>(String)</eBayTransactionID>
        <ListingType>(String)</ListingType>
        <DateCreated>(Date)</DateCreated>
        <DatePaid>(Date)</DatePaid>
       </eBay>     </OrderLine>
    <OrderID>(String)</OrderID>
    <ID>(String)</ID>
    <ComponentOfKit>(String)</ComponentOfKit>
    <KitPartID>(String)</KitPartID>
    <ShippingOption>(String)</ShippingOption>
    <DeliveryInstruction>(String)</DeliveryInstruction>
    <RelatedOrderID>(String)</RelatedOrderID>
    <GrandTotal>(String)</GrandTotal>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <OrderTax>(Decimal)</OrderTax>
    <SurchargeTotal>(Decimal)</SurchargeTotal>
    <SurchargeTaxable>(Decimal)</SurchargeTaxable>
    <ShippingTotal>(Decimal)</ShippingTotal>
    <ShippingTax>(Decimal)</ShippingTax>
    <ShippingDiscount>(Decimal)</ShippingDiscount>
    <DateRequired>(DateTime)</DateRequired>
    <DateInvoiced>(Date)</DateInvoiced>
    <DatePaid>(DateTime)</DatePaid>
    <DatePlaced>(DateTime)</DatePlaced>
    <DateUpdated>(DateTime)</DateUpdated>
    <DateCompleted>(DateTime)</DateCompleted>
    <DatePaymentDue>(DateTime)</DatePaymentDue>
    <PaymentTerms>(String)</PaymentTerms>
    <ShippingSignature>(Boolean)</ShippingSignature>
    <RealtimeConfirmation>(String)</RealtimeConfirmation>
    <InternalOrderNotes>(String)</InternalOrderNotes>
    <Username>(String)</Username>
    <OrderStatus>(String)</OrderStatus>
    <OrderType>(String)</OrderType>
    <OnHoldType>(String)</OnHoldType>
    <DefaultPaymentType>(String)</DefaultPaymentType>
    <Email>(String)</Email>
    <SalesPerson>(String)</SalesPerson>
    <CustomerRef1>(String)</CustomerRef1>
    <CustomerRef2>(String)</CustomerRef2>
    <CustomerRef3>(String)</CustomerRef3>
    <CustomerRef4>(String)</CustomerRef4>
    <CustomerRef5>(String)</CustomerRef5>
    <CustomerRef6>(String)</CustomerRef6>
    <CustomerRef7>(String)</CustomerRef7>
    <CustomerRef8>(String)</CustomerRef8>
    <CustomerRef9>(String)</CustomerRef9>
    <CustomerRef10>(String)</CustomerRef10>
    <SalesChannel>(String)</SalesChannel>
    <ShipFirstName>(String)</ShipFirstName>
    <ShipLastName>(String)</ShipLastName>
    <ShipCompany>(String)</ShipCompany>
    <ShipStreetLine1>(String)</ShipStreetLine1>
    <ShipStreetLine2>(String)</ShipStreetLine2>
    <ShipCity>(String)</ShipCity>
    <ShipCountry>(String)</ShipCountry>
    <ShipState>(String)</ShipState>
    <ShipPostCode>(String)</ShipPostCode>
    <ShipPhone>(String)</ShipPhone>
    <ShipFax>(String)</ShipFax>
    <BillFirstName>(String)</BillFirstName>
    <BillLastName>(String)</BillLastName>
    <BillCompany>(String)</BillCompany>
    <BillStreetLine1>(String)</BillStreetLine1>
    <BillStreetLine2>(String)</BillStreetLine2>
    <BillCity>(String)</BillCity>
    <BillCountry>(String)</BillCountry>
    <BillState>(String)</BillState>
    <BillPostCode>(String)</BillPostCode>
    <BillPhone>(String)</BillPhone>
    <BillFax>(String)</BillFax>
    <ProductSubtotal>(Decimal)</ProductSubtotal>
    <PurchaseOrderNumber>(String)</PurchaseOrderNumber>
    <CouponCode>(String)</CouponCode>
    <CouponDiscount>(Decimal)</CouponDiscount>
    <CompleteStatus>(String)</CompleteStatus>
     <eBay>
      <eBayUsername>(String)</eBayUsername>
     </eBay>     <OrderPayment>
      <Id>(String)</Id>
      <Amount>(Decimal)</Amount>
      <PaymentType>(String)</PaymentType>
      <DatePaid>(DateTime)</DatePaid>
     </OrderPayment>
     <StickyNotes>
      <StickyNoteID>(Integer)</StickyNoteID>
      <Title>(String)</Title>
      <Description>(String)</Description>
     </StickyNotes>
   </Order>
   <Messages>
     <Error>
      <Message>(String)</Message>
      <SeverityCode>(String)</SeverityCode>
      <Description>(String)</Description>
     </Error>
     <Warning>
      <Message>(String)</Message>
      <SeverityCode>(String)</SeverityCode>
     </Warning>
   </Messages>
</GetOrder>

```

### JSON Response

```rainbow rainbow-show
{
  "Order": [ {\
﻿    "OrderLine": [ {\
﻿      "Quantity":"Integer",\
      "SKU":"String",\
      "OrderLineID":"String",\
      "ProductName":"String",\
      "ItemNotes":"String",\
      "SerialNumber":"String",\
      "PickQuantity":"Integer",\
      "BackorderQuantity":"Integer",\
      "UnitPrice":"Decimal",\
      "Tax":"Decimal",\
      "TaxCode":"String",\
      "WarehouseID":"Integer",\
      "WarehouseName":"String",\
      "WarehouseReference":"String",\
      "PercentDiscount":"Decimal",\
      "ProductDiscount":"Decimal",\
      "CostPrice":"Decimal",\
      "ShippingMethod":"String",\
      "ShippingServiceID":"String",\
      "ShippingServiceName":"String",\
      "ShippingTracking":"String",\
      "ShippingCarrierCode":"String",\
      "ShippingCarrierName":"String",\
      "ShippingTrackingUrl":"String",\
      "Shipping":"Decimal",\
      "Weight":"Decimal",\
      "Cubic":"Decimal",\
      "Extra":"String",\
      "ExtraOptions": {\
﻿        "ExtraOption": [ {\
﻿          "Name":"String",\
          "Value":"String"\
} ] ﻿\
} ,﻿      "BinLoc":"String",\
      "QuantityShipped":"Integer",\
      "CouponDiscount":"Decimal",\
      "eBay": {\
﻿        "eBayUsername":"String",\
        "eBayStoreName":"String",\
        "eBayAuctionID":"String",\
        "eBayTransactionID":"String",\
        "ListingType":"String",\
        "DateCreated":"Date",\
        "DatePaid":"Date"\
} ﻿\
} ] ,﻿    "OrderID":"String",\
    "ID":"String",\
    "ComponentOfKit":"String",\
    "KitPartID":"String",\
    "ShippingOption":"String",\
    "DeliveryInstruction":"String",\
    "RelatedOrderID":"String",\
    "GrandTotal":"String",\
    "TaxInclusive":"Boolean",\
    "OrderTax":"Decimal",\
    "SurchargeTotal":"Decimal",\
    "SurchargeTaxable":"Decimal",\
    "ShippingTotal":"Decimal",\
    "ShippingTax":"Decimal",\
    "ShippingDiscount":"Decimal",\
    "DateRequired":"DateTime",\
    "DateInvoiced":"Date",\
    "DatePaid":"DateTime",\
    "DatePlaced":"DateTime",\
    "DateUpdated":"DateTime",\
    "DateCompleted":"DateTime",\
    "DatePaymentDue":"DateTime",\
    "PaymentTerms":"String",\
    "ShippingSignature":"Boolean",\
    "RealtimeConfirmation":"String",\
    "InternalOrderNotes":"String",\
    "Username":"String",\
    "OrderStatus":"String",\
    "OrderType":"String",\
    "OnHoldType":"String",\
    "DefaultPaymentType":"String",\
    "Email":"String",\
    "SalesPerson":"String",\
    "CustomerRef1":"String",\
    "CustomerRef2":"String",\
    "CustomerRef3":"String",\
    "CustomerRef4":"String",\
    "CustomerRef5":"String",\
    "CustomerRef6":"String",\
    "CustomerRef7":"String",\
    "CustomerRef8":"String",\
    "CustomerRef9":"String",\
    "CustomerRef10":"String",\
    "SalesChannel":"String",\
    "ShipFirstName":"String",\
    "ShipLastName":"String",\
    "ShipCompany":"String",\
    "ShipStreetLine1":"String",\
    "ShipStreetLine2":"String",\
    "ShipCity":"String",\
    "ShipCountry":"String",\
    "ShipState":"String",\
    "ShipPostCode":"String",\
    "ShipPhone":"String",\
    "ShipFax":"String",\
    "BillFirstName":"String",\
    "BillLastName":"String",\
    "BillCompany":"String",\
    "BillStreetLine1":"String",\
    "BillStreetLine2":"String",\
    "BillCity":"String",\
    "BillCountry":"String",\
    "BillState":"String",\
    "BillPostCode":"String",\
    "BillPhone":"String",\
    "BillFax":"String",\
    "ProductSubtotal":"Decimal",\
    "PurchaseOrderNumber":"String",\
    "CouponCode":"String",\
    "CouponDiscount":"Decimal",\
    "CompleteStatus":"String",\
    "eBay": {\
﻿      "eBayUsername":"String"\
} ,﻿    "OrderPayment": [ {\
﻿      "Id":"String",\
      "Amount":"Decimal",\
      "PaymentType":"String",\
      "DatePaid":"DateTime"\
} ] ,﻿    "StickyNotes": [ {\
﻿      "StickyNoteID":"Integer",\
      "Title":"String",\
      "Description":"String"\
} ] ﻿\
} ] ,﻿  "Messages": {
﻿    "Error": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String",\
      "Description":"String"\
} ] ,﻿    "Warning": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ﻿
} ﻿
}

```

#### <Order>

| Element Name | Field Type |
| --- | --- |
| OrderLine | [OrderLineType](https://developers.maropost.com/api-data-types) |
| OrderID | [String](https://developers.maropost.com/api-data-types) |
| ID | [String](https://developers.maropost.com/api-data-types) |
| ComponentOfKit | [String](https://developers.maropost.com/api-data-types) |
| KitPartID | [String](https://developers.maropost.com/api-data-types) |
| ShippingOption | [String](https://developers.maropost.com/api-data-types) |
| DeliveryInstruction | [String](https://developers.maropost.com/api-data-types) |
| RelatedOrderID | [String](https://developers.maropost.com/api-data-types) |
| GrandTotal | [String](https://developers.maropost.com/api-data-types) |
| TaxInclusive | [Boolean](https://developers.maropost.com/api-data-types) |
| OrderTax | [Decimal](https://developers.maropost.com/api-data-types) |
| SurchargeTotal | [Decimal](https://developers.maropost.com/api-data-types) |
| SurchargeTaxable | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingTotal | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingTax | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingDiscount | [Decimal](https://developers.maropost.com/api-data-types) |
| DateRequired | [DateTime](https://developers.maropost.com/api-data-types) |
| DateInvoiced | [Date](https://developers.maropost.com/api-data-types) |
| DatePaid | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePlaced | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| DateCompleted | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePaymentDue | [DateTime](https://developers.maropost.com/api-data-types) |
| PaymentTerms | [String](https://developers.maropost.com/api-data-types) |
| ShippingSignature | [Boolean](https://developers.maropost.com/api-data-types) |
| RealtimeConfirmation | [String](https://developers.maropost.com/api-data-types) |
| InternalOrderNotes | [String](https://developers.maropost.com/api-data-types) |
| Username | [String](https://developers.maropost.com/api-data-types) |
| OrderStatus | [String](https://developers.maropost.com/api-data-types) |
| OrderType | [String](https://developers.maropost.com/api-data-types) |
| OnHoldType | [String](https://developers.maropost.com/api-data-types) |
| DefaultPaymentType | [String](https://developers.maropost.com/api-data-types) |
| Email | [String](https://developers.maropost.com/api-data-types) |
| SalesPerson | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef1 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef2 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef3 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef4 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef5 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef6 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef7 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef8 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef9 | [String](https://developers.maropost.com/api-data-types) |
| CustomerRef10 | [String](https://developers.maropost.com/api-data-types) |
| SalesChannel | [String](https://developers.maropost.com/api-data-types) |
| ShipFirstName | [String](https://developers.maropost.com/api-data-types) |
| ShipLastName | [String](https://developers.maropost.com/api-data-types) |
| ShipCompany | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine1 | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine2 | [String](https://developers.maropost.com/api-data-types) |
| ShipCity | [String](https://developers.maropost.com/api-data-types) |
| ShipCountry | [String](https://developers.maropost.com/api-data-types) |
| ShipState | [String](https://developers.maropost.com/api-data-types) |
| ShipPostCode | [String](https://developers.maropost.com/api-data-types) |
| ShipPhone | [String](https://developers.maropost.com/api-data-types) |
| ShipFax | [String](https://developers.maropost.com/api-data-types) |
| BillFirstName | [String](https://developers.maropost.com/api-data-types) |
| BillLastName | [String](https://developers.maropost.com/api-data-types) |
| BillCompany | [String](https://developers.maropost.com/api-data-types) |
| BillStreetLine1 | [String](https://developers.maropost.com/api-data-types) |
| BillStreetLine2 | [String](https://developers.maropost.com/api-data-types) |
| BillCity | [String](https://developers.maropost.com/api-data-types) |
| BillCountry | [String](https://developers.maropost.com/api-data-types) |
| BillState | [String](https://developers.maropost.com/api-data-types) |
| BillPostCode | [String](https://developers.maropost.com/api-data-types) |
| BillPhone | [String](https://developers.maropost.com/api-data-types) |
| BillFax | [String](https://developers.maropost.com/api-data-types) |
| ProductSubtotal | [Decimal](https://developers.maropost.com/api-data-types) |
| PurchaseOrderNumber | [String](https://developers.maropost.com/api-data-types) |
| CouponCode | [String](https://developers.maropost.com/api-data-types) |
| CouponDiscount | [Decimal](https://developers.maropost.com/api-data-types) |
| CompleteStatus | [String](https://developers.maropost.com/api-data-types) |
| eBay | [eBayType](https://developers.maropost.com/api-data-types) |
| OrderPayment | [OrderPaymentType](https://developers.maropost.com/api-data-types) |
| StickyNotes | [StickyNotesType](https://developers.maropost.com/api-data-types) |

* * *

#### <OrderLine>

| Element Name | Field Type |
| --- | --- |
| Quantity | [Integer](https://developers.maropost.com/api-data-types) |
| SKU | [String](https://developers.maropost.com/api-data-types) |
| OrderLineID | [String](https://developers.maropost.com/api-data-types) |
| ProductName | [String](https://developers.maropost.com/api-data-types) |
| ItemNotes | [String](https://developers.maropost.com/api-data-types) |
| SerialNumber | [String](https://developers.maropost.com/api-data-types) |
| PickQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| BackorderQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| UnitPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| Tax | [Decimal](https://developers.maropost.com/api-data-types) |
| TaxCode | [String](https://developers.maropost.com/api-data-types) |
| WarehouseID | [Integer](https://developers.maropost.com/api-data-types) |
| WarehouseName | [String](https://developers.maropost.com/api-data-types) |
| WarehouseReference | [String](https://developers.maropost.com/api-data-types) |
| PercentDiscount | [Decimal](https://developers.maropost.com/api-data-types) |
| ProductDiscount | [Decimal](https://developers.maropost.com/api-data-types) |
| CostPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingMethod | [String](https://developers.maropost.com/api-data-types) |
| ShippingServiceID | [String](https://developers.maropost.com/api-data-types) |
| ShippingServiceName | [String](https://developers.maropost.com/api-data-types) |
| ShippingTracking | [String](https://developers.maropost.com/api-data-types) |
| ShippingCarrierCode | [String](https://developers.maropost.com/api-data-types) |
| ShippingCarrierName | [String](https://developers.maropost.com/api-data-types) |
| ShippingTrackingUrl | [String](https://developers.maropost.com/api-data-types) |
| Shipping | [Decimal](https://developers.maropost.com/api-data-types) |
| Weight | [Decimal](https://developers.maropost.com/api-data-types) |
| Cubic | [Decimal](https://developers.maropost.com/api-data-types) |
| Extra | [String](https://developers.maropost.com/api-data-types) |
| ExtraOptions | [ExtraOptionsType](https://developers.maropost.com/api-data-types) |
| BinLoc | [String](https://developers.maropost.com/api-data-types) |
| QuantityShipped | [Integer](https://developers.maropost.com/api-data-types) |
| CouponDiscount | [Decimal](https://developers.maropost.com/api-data-types) |
| eBay | [eBayType](https://developers.maropost.com/api-data-types) |

* * *

#### <ExtraOptions>

| Element Name | Field Type |
| --- | --- |
| ExtraOption | [ExtraOptionType](https://developers.maropost.com/api-data-types) |

* * *

#### <ExtraOption>

| Element Name | Field Type |
| --- | --- |
| Name | [String](https://developers.maropost.com/api-data-types) |
| Value | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <eBay>

| Element Name | Field Type |
| --- | --- |
| eBayUsername | [String](https://developers.maropost.com/api-data-types) |
| eBayStoreName | [String](https://developers.maropost.com/api-data-types) |
| eBayAuctionID | [String](https://developers.maropost.com/api-data-types) |
| eBayTransactionID | [String](https://developers.maropost.com/api-data-types) |
| ListingType | [String](https://developers.maropost.com/api-data-types) |
| DateCreated | [Date](https://developers.maropost.com/api-data-types) |
| DatePaid | [Date](https://developers.maropost.com/api-data-types) |

* * *

#### <eBay>

| Element Name | Field Type |
| --- | --- |
| eBayUsername | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <OrderPayment>

| Element Name | Field Type |
| --- | --- |
| Id | [String](https://developers.maropost.com/api-data-types) |
| Amount | [Decimal](https://developers.maropost.com/api-data-types) |
| PaymentType | [String](https://developers.maropost.com/api-data-types) |
| DatePaid | [DateTime](https://developers.maropost.com/api-data-types) |

* * *

#### <StickyNotes>

| Element Name | Field Type |
| --- | --- |
| StickyNoteID | [Integer](https://developers.maropost.com/api-data-types) |
| Title | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <Messages>

| Element Name | Field Type |
| --- | --- |
| Error | [ErrorType](https://developers.maropost.com/api-data-types) |
| Warning | [WarningType](https://developers.maropost.com/api-data-types) |

* * *

#### <Error>

| Element Name | Field Type |
| --- | --- |
| Message | [String](https://developers.maropost.com/api-data-types) |
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <Warning>

| Element Name | Field Type |
| --- | --- |
| Message | [String](https://developers.maropost.com/api-data-types) |
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |

* * *

### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!

[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.