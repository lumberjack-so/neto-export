---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder"
title: "Engineers API documentation Orders / Invoices UpdateOrder"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Orders / Invoices](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices)
- [UpdateOrder](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder)

# UpdateOrder

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to update orders/invoices. A successful call to UpdateOrder returns the unique identifier (OrderID) for the updated order, and the date and time the order was updated (CurrentTime) |
| XSD Schema | [UpdateOrder XSD](https://www.neto.com.au/assets/api/UpdateOrder.xsd)   \|   [UpdateOrder Response XSD](https://www.neto.com.au/assets/api/UpdateOrderResponse.xsd) |

## Examples

### Mark an order as dispatched and add shipping tracking details

Shipping tracking details are added on an orderline level so that you can ship orderlines with different shipping methods. **Note:** the shipping method you define must match an existing service in Neto.

Go to: Neto control panel > shipping > shipping services and rates for a list of available services.

### Post

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateOrder>
    <Order>
        <OrderID>N1000</OrderID>
        <OrderStatus>Dispatched</OrderStatus>
         <SendOrderEmail>tracking</SendOrderEmail>
        <OrderLine>
            <SKU>ABC-123</SKU>
            <TrackingDetails>
                <ShippingMethod>Australia Post eParcel</ShippingMethod>
                <TrackingNumber>C123345767765</TrackingNumber>
                <DateShipped>2014-01-03 02:40:10</DateShipped>
            </TrackingDetails>
        </OrderLine>
         <OrderLine>
            <SKU>HYS-97462</SKU>
            <TrackingDetails>
                <ShippingMethod>Australia Post eParcel</ShippingMethod>
                <TrackingNumber>C123345767765</TrackingNumber>
                <DateShipped>2014-01-03 02:40:10</DateShipped>
            </TrackingDetails>
        </OrderLine>
    </Order>
</UpdateOrder>

```

#### JSON

```rainbow rainbow-show
<script type="syntaxhighlighter" class="brush: js"><![CDATA[\
{\
  "Order": {\
    "OrderID": "N1000",\
    "OrderStatus": "Dispatched",\
    "SendOrderEmail": "tracking",\
    "OrderLine": [\
      {\
        "SKU": "ABC-123",\
        "TrackingDetails": {\
          "ShippingMethod": "Australia Post eParcel",\
          "TrackingNumber": "C123345767765",\
          "DateShipped": "2014-01-03 02:40:10"\
        }\
      },\
      {\
        "SKU": "HYS-97462",\
        "TrackingDetails": {\
          "ShippingMethod": "Australia Post eParcel",\
          "TrackingNumber": "C123345767765",\
          "DateShipped": "2014-01-03 02:40:10"\
        }\
      }\
    ]\
  }\
}\
\
```\
\
### Response (Success)\
\
#### XML\
\
```rainbow rainbow-show\
<?xml version="1.0" encoding="utf-8"?>\
<UpdateOrderResponse>\
   <Order>\
      <OrderID>N1000</OrderID>\
   </Order>\
   <CurrentTime>2014-01-03 02:47:37</CurrentTime>\
   <Ack>Success</Ack>\
</UpdateOrderResponse>\
\
```\
\
#### JSON\
\
```rainbow rainbow-show\
{\
    "Order": {\
        "OrderID": "N1000"\
    },\
    "CurrentTime": "2014-12-02 04:20:40",\
    "Ack": "Success"\
}\
\
```\
\
## UpdateOrder Post\
\
You must specify at least one filter and one OutputSelector in your UpdateOrder request. These will determine the results returned.\
\
### XML POST\
\
```rainbow rainbow-show\
<?xml version="1.0" encoding="utf-8"?>\
<UpdateOrder>\
   <Order>\
    <OrderID>(String)</OrderID>\
    <PurchaseOrderNumber>(String)</PurchaseOrderNumber>\
    <OnHoldType></OnHoldType>\
    <Email>(String)</Email>\
    <BillFirstName>(String)</BillFirstName>\
    <BillLastName>(String)</BillLastName>\
    <BillCompany>(String)</BillCompany>\
    <BillStreet1>(String)</BillStreet1>\
    <BillStreet2>(String)</BillStreet2>\
    <BillCity>(String)</BillCity>\
    <BillState>(String)</BillState>\
    <BillPostCode>(String)</BillPostCode>\
    <BillContactPhone>(String)</BillContactPhone>\
    <BillCountry>(String)</BillCountry>\
    <ShipFirstName>(String)</ShipFirstName>\
    <ShipLastName>(String)</ShipLastName>\
    <ShipCompany>(String)</ShipCompany>\
    <ShipStreet1>(String)</ShipStreet1>\
    <ShipStreet2>(String)</ShipStreet2>\
    <ShipCity>(String)</ShipCity>\
    <ShipState>(String)</ShipState>\
    <ShipPostCode>(String)</ShipPostCode>\
    <ShipContactPhone>(String)</ShipContactPhone>\
    <ShipCountry>(String)</ShipCountry>\
    <EnableAddressValidation>(Boolean)</EnableAddressValidation>\
    <DeduceWarehouse>(Boolean)</DeduceWarehouse>\
    <Operator>(String)</Operator>\
    <OperatorDateUpdated>(DateTime)</OperatorDateUpdated>\
    <DateRequired>(DateTime)</DateRequired>\
    <DateRequiredUTC>(DateTime)</DateRequiredUTC>\
    <SalesPerson>(String)</SalesPerson>\
    <CustomerRef1>(String)</CustomerRef1>\
    <CustomerRef2>(String)</CustomerRef2>\
    <CustomerRef3>(String)</CustomerRef3>\
    <CustomerRef4>(String)</CustomerRef4>\
    <CustomerRef5>(String)</CustomerRef5>\
    <CustomerRef6>(String)</CustomerRef6>\
    <CustomerRef7>(String)</CustomerRef7>\
    <CustomerRef8>(String)</CustomerRef8>\
    <CustomerRef9>(String)</CustomerRef9>\
    <CustomerRef10>(String)</CustomerRef10>\
    <SalesChannel>(String)</SalesChannel>\
    <ShipInstructions>(String)</ShipInstructions>\
    <InternalOrderNotes>(String)</InternalOrderNotes>\
    <OrderStatus></OrderStatus>\
    <OrderApproval>(Boolean)</OrderApproval>\
    <PickStatus></PickStatus>\
    <ExportStatus></ExportStatus>\
    <ExportedToWMS></ExportedToWMS>\
    <SendOrderEmail></SendOrderEmail>\
    <StickyNoteTitle>(String)</StickyNoteTitle>\
    <StickyNote>(String)</StickyNote>\
     <StickyNotes>\
       <StickyNote>\
        <StickyNoteID>20</StickyNoteID>\
        <Title>(String)</Title>\
        <Description>(String)</Description>\
       </StickyNote>\
     </StickyNotes>     <OrderLine>\
      <OrderLineID>(Integer)</OrderLineID>\
      <OrderLineNumber>(Integer)</OrderLineNumber>\
      <WarehouseID>(Integer)</WarehouseID>\
      <QuantityShipped>(Integer)</QuantityShipped>\
      <WarehouseName>(String)</WarehouseName>\
      <WarehouseReference>(String)</WarehouseReference>\
      <ExternalSystemIdentifier>(String)</ExternalSystemIdentifier>\
      <ExternalOrderReference>(String)</ExternalOrderReference>\
      <ExternalOrderLineReference>(String)</ExternalOrderLineReference>\
      <SKU>(String)</SKU>\
      <ItemNotes>(String)</ItemNotes>\
      <ItemDescription>(String)</ItemDescription>\
      <ItemSerialNumber>(String)</ItemSerialNumber>\
       <TrackingDetails>\
        <ShippingMethod>(String)</ShippingMethod>\
        <TrackingNumber>(String)</TrackingNumber>\
        <DateShipped>(DateTime)</DateShipped>\
       </TrackingDetails>     </OrderLine>\
    <OrderRounding>(Decimal)</OrderRounding>\
   </Order>\
\
</UpdateOrder>\
\
```\
\
### JSON POST\
\
```rainbow rainbow-show\
{\
  "Order": [ {\
﻿    "OrderID":"String",\
    "PurchaseOrderNumber":"String",\
    "OnHoldType":"Enumeration",\
    "Email":"String",\
    "BillFirstName":"String",\
    "BillLastName":"String",\
    "BillCompany":"String",\
    "BillStreet1":"String",\
    "BillStreet2":"String",\
    "BillCity":"String",\
    "BillState":"String",\
    "BillPostCode":"String",\
    "BillContactPhone":"String",\
    "BillCountry":"String",\
    "ShipFirstName":"String",\
    "ShipLastName":"String",\
    "ShipCompany":"String",\
    "ShipStreet1":"String",\
    "ShipStreet2":"String",\
    "ShipCity":"String",\
    "ShipState":"String",\
    "ShipPostCode":"String",\
    "ShipContactPhone":"String",\
    "ShipCountry":"String",\
    "EnableAddressValidation":"Boolean",\
    "DeduceWarehouse":"Boolean",\
    "Operator":"String",\
    "OperatorDateUpdated":"DateTime",\
    "DateRequired":"DateTime",\
    "DateRequiredUTC":"DateTime",\
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
    "ShipInstructions":"String",\
    "InternalOrderNotes":"String",\
    "OrderStatus":"Enumeration",\
    "OrderApproval":"Boolean",\
    "PickStatus":"Enumeration",\
    "ExportStatus":"Enumeration",\
    "ExportedToWMS":"Enumeration",\
    "SendOrderEmail":"Enumeration",\
    "StickyNoteTitle":"String",\
    "StickyNote":"String",\
    "StickyNotes": {\
﻿      "StickyNote": [ {\
﻿        "StickyNoteID":"Integer",\
        "Title":"String",\
        "Description":"String"\
} ] ﻿\
} ,﻿    "OrderLine": [ {\
﻿      "OrderLineID":"Integer",\
      "OrderLineNumber":"Integer",\
      "WarehouseID":"Integer",\
      "QuantityShipped":"Integer",\
      "WarehouseName":"String",\
      "WarehouseReference":"String",\
      "ExternalSystemIdentifier":"String",\
      "ExternalOrderReference":"String",\
      "ExternalOrderLineReference":"String",\
      "SKU":"String",\
      "ItemNotes":"String",\
      "ItemDescription":"String",\
      "ItemSerialNumber":"String",\
      "TrackingDetails": {\
﻿        "ShippingMethod":"String",\
        "TrackingNumber":"String",\
        "DateShipped":"DateTime"\
} ﻿\
} ] ,﻿    "OrderRounding":"Decimal"\
} ] ﻿\
}\
\
```\
\
#### <Order>\
\
| Element Name | Required | Field Type / Options |\
| --- | --- | --- |\
| OrderID | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |\
| PurchaseOrderNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| OnHoldType | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(On Hold, Layby) |\
| Email | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(250) |\
| BillFirstName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillLastName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillCompany | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillStreet1 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillStreet2 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillCity | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| BillPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |\
| BillContactPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |\
| BillCountry | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |\
| ShipFirstName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipLastName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipCompany | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipStreet1 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipStreet2 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipCity | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ShipPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |\
| ShipContactPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |\
| ShipCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |\
| EnableAddressValidation | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |\
| DeduceWarehouse | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |\
| Operator | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |\
| OperatorDateUpdated | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| DateRequired | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| DateRequiredUTC | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| SalesPerson | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |\
| CustomerRef1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| CustomerRef2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| CustomerRef3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef4 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef5 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef6 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef7 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef8 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef9 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| CustomerRef10 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |\
| SalesChannel | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |\
| ShipInstructions | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| InternalOrderNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| OrderStatus | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Quote, New, New Backorder, Backorder Approved, Pick, Pack, Pending Pickup, Pending Dispatch, Dispatched, Cancelled, Uncommitted, On Hold) |\
| OrderApproval | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |\
| PickStatus | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Complete, Incomplete) |\
| ExportStatus | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pending, Exported) |\
| ExportedToWMS | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pending, Exported) |\
| SendOrderEmail | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(tracking, receipt) |\
| StickyNoteTitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |\
| StickyNote | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5) |\
| StickyNotes | Optional | [StickyNotes](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder#StickyNotes) |\
| OrderLine | Optional<br>_Supports Multiple Elements_ | [OrderLine](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder#OrderLine) |\
| OrderRounding | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
\
* * *\
\
#### <StickyNotes>\
\
| Element Name | Required | Field Type / Options |\
| --- | --- | --- |\
| StickyNote | Optional<br>_Supports Multiple Elements_ | [StickyNote](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder#StickyNote) |\
\
* * *\
\
#### <StickyNote>\
\
| Element Name | Required | Field Type / Options |\
| --- | --- | --- |\
| StickyNoteID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| Title | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |\
| Description | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |\
\
* * *\
\
#### <OrderLine>\
\
| Element Name | Required | Field Type / Options |\
| --- | --- | --- |\
| OrderLineID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| OrderLineNumber | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| WarehouseID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| QuantityShipped | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| WarehouseName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| WarehouseReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| ExternalSystemIdentifier | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| ExternalOrderReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| ExternalOrderLineReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| SKU | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |\
| ItemNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |\
| ItemDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |\
| ItemSerialNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| TrackingDetails | Optional | [TrackingDetails](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/updateorder#TrackingDetails) |\
\
* * *\
\
#### <TrackingDetails>\
\
| Element Name | Required | Field Type / Options |\
| --- | --- | --- |\
| ShippingMethod | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |\
| TrackingNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
| DateShipped | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |\
\
* * *\
\
## UpdateOrder Responses\
\
### XML Response\
\
```rainbow rainbow-show\
<?xml version="1.0" encoding="utf-8"?>\
<UpdateOrder>\
   <Order>\
    <OrderID>(String)</OrderID>\
   </Order>\
   <Messages>\
     <Error>\
      <Message>(String)</Message>\
      <SeverityCode>(String)</SeverityCode>\
      <Description>(String)</Description>\
     </Error>\
     <Warning>\
      <Message>(String)</Message>\
      <SeverityCode>(String)</SeverityCode>\
     </Warning>\
   </Messages>\
</UpdateOrder>\
\
```\
\
### JSON Response\
\
```rainbow rainbow-show\
{\
  "Order": [ {\
﻿    "OrderID":"String"\
} ] ,﻿  "Messages": {\
﻿    "Error": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String",\
      "Description":"String"\
} ] ,﻿    "Warning": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ﻿\
} ﻿\
}\
\
```\
\
#### <Order>\
\
| Element Name | Field Type |\
| --- | --- |\
| OrderID | [String](https://developers.maropost.com/api-data-types) |\
\
* * *\
\
#### <Messages>\
\
| Element Name | Field Type |\
| --- | --- |\
| Error | [ErrorType](https://developers.maropost.com/api-data-types) |\
| Warning | [WarningType](https://developers.maropost.com/api-data-types) |\
\
* * *\
\
#### <Error>\
\
| Element Name | Field Type |\
| --- | --- |\
| Message | [String](https://developers.maropost.com/api-data-types) |\
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |\
| Description | [String](https://developers.maropost.com/api-data-types) |\
\
* * *\
\
#### <Warning>\
\
| Element Name | Field Type |\
| --- | --- |\
| Message | [String](https://developers.maropost.com/api-data-types) |\
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |\
\
* * *\
\
### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!\
\
[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)\
\
#### Was this article useful?\
\
Not usefulSomewhat usefulVery useful\
\
How can we improve this page?Email addressBe notified when this page is updated. Optional.