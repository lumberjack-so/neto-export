---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder"
title: "Engineers API documentation Orders / Invoices AddOrder"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Orders / Invoices](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices)
- [AddOrder](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder)

# AddOrder

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddOrder |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new order/invoice. A successful call to AddOrder returns the unique identifier (OrderID) for the new order, and the date and time the order was added (CurrentTime) |
| XSD Schema | [AddOrder XSD](https://www.neto.com.au/assets/api/AddOrder.xsd)   \|   [AddOrder Response XSD](https://www.neto.com.au/assets/api/AddOrderResponse.xsd) |

## AddOrder Post

You must specify at least one filter and one OutputSelector in your AddOrder request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddOrder>
   <Order>
    <OrderID>(String)</OrderID>
    <PurchaseOrderNumber>(String)</PurchaseOrderNumber>
    <OrderType></OrderType>
    <OnHoldType></OnHoldType>
    <UserGroup>(String)</UserGroup>
    <DocumentTemplate>(String)</DocumentTemplate>
    <DatePlacedUTC>(DateTime)</DatePlacedUTC>
    <DatePlaced>(DateTime)</DatePlaced>
    <DateRequired>(DateTime)</DateRequired>
    <DateRequiredUTC>(DateTime)</DateRequiredUTC>
    <DateInvoiced>(DateTime)</DateInvoiced>
    <DateInvoicedUTC>(DateTime)</DateInvoicedUTC>
    <DateDue>(DateTime)</DateDue>
    <DateDueUTC>(DateTime)</DateDueUTC>
    <Username>(String)</Username>
    <Email>(String)</Email>
    <BillFirstName>(String)</BillFirstName>
    <BillLastName>(String)</BillLastName>
    <BillCompany>(String)</BillCompany>
    <BillStreet1>(String)</BillStreet1>
    <BillStreet2>(String)</BillStreet2>
    <BillCity>(String)</BillCity>
    <BillState>(String)</BillState>
    <BillPostCode>(String)</BillPostCode>
    <BillContactPhone>(String)</BillContactPhone>
    <BillCountry>(String)</BillCountry>
    <ShipFirstName>(String)</ShipFirstName>
    <ShipLastName>(String)</ShipLastName>
    <ShipCompany>(String)</ShipCompany>
    <ShipStreet1>(String)</ShipStreet1>
    <ShipStreet2>(String)</ShipStreet2>
    <ShipCity>(String)</ShipCity>
    <ShipState>(String)</ShipState>
    <ShipPostCode>(String)</ShipPostCode>
    <ShipContactPhone>(String)</ShipContactPhone>
    <ShipCountry>(String)</ShipCountry>
    <EnableAddressValidation>(Boolean)</EnableAddressValidation>
    <Operator>(String)</Operator>
    <OperatorDateUpdated>(DateTime)</OperatorDateUpdated>
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
    <ShipInstructions>(String)</ShipInstructions>
    <InternalOrderNotes>(String)</InternalOrderNotes>
    <StickyNoteTitle>(String)</StickyNoteTitle>
    <StickyNote>(String)</StickyNote>
     <StickyNotes>
       <StickyNote>
        <Title>(String)</Title>
        <Description>(String)</Description>
       </StickyNote>
     </StickyNotes>    <OrderStatus></OrderStatus>
    <OrderApproval>(Boolean)</OrderApproval>
    <PaymentMethod>(String)</PaymentMethod>
    <PaymentTerms>(String)</PaymentTerms>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <TaxFreeShipping>(Boolean)</TaxFreeShipping>
    <BPAYCRN>(String)</BPAYCRN>
    <ShippingMethod>(String)</ShippingMethod>
    <ShippingCost>(Decimal)</ShippingCost>
    <ShippingDiscount>(Decimal)</ShippingDiscount>
    <SignatureRequired>(Boolean)</SignatureRequired>
    <CurrencyCode>(String)</CurrencyCode>
     <AppliedDiscounts>
      <DiscountId>(Integer)</DiscountId>
      <DiscountAmount>(Decimal)</DiscountAmount>
      <DiscountCode>(String)</DiscountCode>
     </AppliedDiscounts>
     <OrderLine>
       <ExtraOptions>
         <ExtraOption>
          <Name>(String)</Name>
          <Value>(String)</Value>
         </ExtraOption>
       </ExtraOptions>      <SKU>(String)</SKU>
      <ItemNotes>(String)</ItemNotes>
      <ItemDescription>(String)</ItemDescription>
      <ItemSerialNumber>(String)</ItemSerialNumber>
      <Dropshipper>(String)</Dropshipper>
      <WarehouseName>(String)</WarehouseName>
      <WarehouseReference>(String)</WarehouseReference>
      <TaxFree>(Boolean)</TaxFree>
      <SendConfirmationEmail>(Boolean)</SendConfirmationEmail>
      <WarehouseID>(Integer)</WarehouseID>
      <Quantity>(Integer)</Quantity>
      <UnitPrice>(Decimal)</UnitPrice>
      <UnitCost>(Decimal)</UnitCost>
      <ShippingWeight>(Decimal)</ShippingWeight>
      <QuantityShipped>(Integer)</QuantityShipped>
      <DiscountPercent>(Decimal)</DiscountPercent>
      <DiscountAmount>(Decimal)</DiscountAmount>
      <Cubic>(Decimal)</Cubic>
      <ExternalSystemIdentifier>(String)</ExternalSystemIdentifier>
      <ExternalOrderReference>(String)</ExternalOrderReference>
      <ExternalOrderLineReference>(String)</ExternalOrderLineReference>
       <KitComponents>
         <KitComponent>
          <ComponentSKU>(String)</ComponentSKU>
          <ComponentValue>(Decimal)</ComponentValue>
          <AssembleQuantity>(Integer)</AssembleQuantity>
          <ComponentTaxFree>(Boolean)</ComponentTaxFree>
         </KitComponent>
       </KitComponents>     </OrderLine>
    <OrderRounding>(Decimal)</OrderRounding>
   </Order>

</AddOrder>

```

### JSON POST

```rainbow rainbow-show
{
  "Order": [ {\
﻿    "OrderID":"String",\
    "PurchaseOrderNumber":"String",\
    "OrderType":"Enumeration",\
    "OnHoldType":"Enumeration",\
    "UserGroup":"String",\
    "DocumentTemplate":"String",\
    "DatePlacedUTC":"DateTime",\
    "DatePlaced":"DateTime",\
    "DateRequired":"DateTime",\
    "DateRequiredUTC":"DateTime",\
    "DateInvoiced":"DateTime",\
    "DateInvoicedUTC":"DateTime",\
    "DateDue":"DateTime",\
    "DateDueUTC":"DateTime",\
    "Username":"String",\
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
    "Operator":"String",\
    "OperatorDateUpdated":"DateTime",\
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
    "StickyNoteTitle":"String",\
    "StickyNote":"String",\
    "StickyNotes": {\
﻿      "StickyNote": [ {\
﻿        "Title":"String",\
        "Description":"String"\
} ] ﻿\
} ,﻿    "OrderStatus":"Enumeration",\
    "OrderApproval":"Boolean",\
    "PaymentMethod":"String",\
    "PaymentTerms":"String",\
    "TaxInclusive":"Boolean",\
    "TaxFreeShipping":"Boolean",\
    "BPAYCRN":"String",\
    "ShippingMethod":"String",\
    "ShippingCost":"Decimal",\
    "ShippingDiscount":"Decimal",\
    "SignatureRequired":"Boolean",\
    "CurrencyCode":"String",\
    "AppliedDiscounts": [ {\
﻿      "DiscountId":"Integer",\
      "DiscountAmount":"Decimal",\
      "DiscountCode":"String"\
} ] ,﻿    "OrderLine": [ {\
﻿      "ExtraOptions": {\
﻿        "ExtraOption": [ {\
﻿          "Name":"String",\
          "Value":"String"\
} ] ﻿\
} ,﻿      "SKU":"String",\
      "ItemNotes":"String",\
      "ItemDescription":"String",\
      "ItemSerialNumber":"String",\
      "Dropshipper":"String",\
      "WarehouseName":"String",\
      "WarehouseReference":"String",\
      "TaxFree":"Boolean",\
      "SendConfirmationEmail":"Boolean",\
      "WarehouseID":"Integer",\
      "Quantity":"Integer",\
      "UnitPrice":"Decimal",\
      "UnitCost":"Decimal",\
      "ShippingWeight":"Decimal",\
      "QuantityShipped":"Integer",\
      "DiscountPercent":"Decimal",\
      "DiscountAmount":"Decimal",\
      "Cubic":"Decimal",\
      "ExternalSystemIdentifier":"String",\
      "ExternalOrderReference":"String",\
      "ExternalOrderLineReference":"String",\
      "KitComponents": {\
﻿        "KitComponent": [ {\
﻿          "ComponentSKU":"String",\
          "ComponentValue":"Decimal",\
          "AssembleQuantity":"Integer",\
          "ComponentTaxFree":"Boolean"\
} ] ﻿\
} ﻿\
} ] ,﻿    "OrderRounding":"Decimal"\
} ] ﻿
}

```

#### <Order>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| PurchaseOrderNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| OrderType | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(sales, dropshipping, quote) |
| OnHoldType | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(On Hold, Layby) |
| UserGroup | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| DocumentTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| DatePlacedUTC | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePlaced | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateRequired | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateRequiredUTC | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateInvoiced | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateInvoicedUTC | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateDue | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateDueUTC | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Username | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Email | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(250) |
| BillFirstName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillLastName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillCompany | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillStreet1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillStreet2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| BillContactPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| BillCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| ShipFirstName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipLastName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipCompany | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipStreet1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipStreet2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| ShipContactPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| ShipCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| EnableAddressValidation | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Operator | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| OperatorDateUpdated | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SalesPerson | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| CustomerRef1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| CustomerRef2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| CustomerRef3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef4 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef5 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef6 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef7 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef8 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef9 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| CustomerRef10 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(1000) |
| SalesChannel | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| ShipInstructions | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| InternalOrderNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| StickyNoteTitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| StickyNote | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| StickyNotes | Optional | [StickyNotes](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#StickyNotes) |
| OrderStatus | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Quote, New, New Backorder, Backorder Approved, Pick, Pack, Pending Pickup, Pending Dispatch, Dispatched, Cancelled, Uncommitted, On Hold) |
| OrderApproval | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| PaymentMethod | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| PaymentTerms | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| TaxInclusive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| TaxFreeShipping | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| BPAYCRN | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| ShippingMethod | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShippingCost | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingDiscount | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SignatureRequired | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| CurrencyCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(3) |
| AppliedDiscounts | Optional<br>_Supports Multiple Elements_ | [AppliedDiscounts](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#AppliedDiscounts) |
| OrderLine | Optional<br>_Supports Multiple Elements_ | [OrderLine](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#OrderLine) |
| OrderRounding | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

#### <StickyNotes>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| StickyNote | Optional<br>_Supports Multiple Elements_ | [StickyNote](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#StickyNote) |

* * *

#### <StickyNote>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Title | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Description | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |

* * *

#### <AppliedDiscounts>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| DiscountId | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| DiscountAmount | **Required** | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(13) |
| DiscountCode | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |

* * *

#### <OrderLine>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ExtraOptions | Optional | [ExtraOptions](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#ExtraOptions) |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ItemNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ItemDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ItemSerialNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Dropshipper | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| WarehouseName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| WarehouseReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| TaxFree | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| SendConfirmationEmail | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| WarehouseID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Quantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| UnitPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| UnitCost | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingWeight | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| QuantityShipped | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DiscountPercent | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DiscountAmount | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Cubic | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ExternalSystemIdentifier | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ExternalOrderReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ExternalOrderLineReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| KitComponents | Optional | [KitComponents](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#KitComponents) |

* * *

#### <ExtraOptions>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ExtraOption | Optional<br>_Supports Multiple Elements_ | [ExtraOption](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#ExtraOption) |

* * *

#### <ExtraOption>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Name | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Value | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |

* * *

#### <KitComponents>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| KitComponent | Optional<br>_Supports Multiple Elements_ | [KitComponent](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/orders-invoices/addorder#KitComponent) |

* * *

#### <KitComponent>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ComponentSKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ComponentValue | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| AssembleQuantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ComponentTaxFree | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

## AddOrder Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddOrder>
   <Order>
    <OrderID>(String)</OrderID>
   </Order>   <StickyNotes>
     <Note>
      <ID>(String)</ID>
      <Title>(String)</Title>
      <Description>(String)</Description>
     </Note>   </StickyNotes>   <Messages>
     <Warning>
      <Message>(String)</Message>
      <SeverityCode>(String)</SeverityCode>
     </Warning>
     <Error>
      <Message>(String)</Message>
      <SeverityCode>(String)</SeverityCode>
      <Description>(String)</Description>
     </Error>
   </Messages>
</AddOrder>

```

### JSON Response

```rainbow rainbow-show
{
  "Order": {
﻿    "OrderID":"String"
} ,﻿  "StickyNotes": {
﻿    "Note": {
﻿      "ID":"String",
      "Title":"String",
      "Description":"String"
} ﻿
} ,﻿  "Messages": {
﻿    "Warning": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ,﻿    "Error": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String",\
      "Description":"String"\
} ] ﻿
} ﻿
}

```

#### <Order>

| Element Name | Field Type |
| --- | --- |
| OrderID | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <StickyNotes>

| Element Name | Field Type |
| --- | --- |
| Note | [NoteType](https://developers.maropost.com/api-data-types) |

* * *

#### <Note>

| Element Name | Field Type |
| --- | --- |
| ID | [String](https://developers.maropost.com/api-data-types) |
| Title | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <Messages>

| Element Name | Field Type |
| --- | --- |
| Warning | [WarningType](https://developers.maropost.com/api-data-types) |
| Error | [ErrorType](https://developers.maropost.com/api-data-types) |

* * *

#### <Warning>

| Element Name | Field Type |
| --- | --- |
| Message | [String](https://developers.maropost.com/api-data-types) |
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <Error>

| Element Name | Field Type |
| --- | --- |
| Message | [String](https://developers.maropost.com/api-data-types) |
| SeverityCode | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |

* * *

### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!

[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.