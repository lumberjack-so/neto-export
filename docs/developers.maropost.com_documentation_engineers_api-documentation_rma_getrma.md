---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/rma/getrma"
title: "Engineers API documentation RMA GetRma"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/rma/getrma#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/rma/getrma)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/rma/getrma)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [RMA](https://developers.maropost.com/documentation/engineers/api-documentation/rma)
- [GetRma](https://developers.maropost.com/documentation/engineers/api-documentation/rma/getrma)

# GetRma

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetRma |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetRma |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [GetRma XSD](https://www.neto.com.au/assets/api/GetRma.xsd)   \|   [GetRma Response XSD](https://www.neto.com.au/assets/api/GetRmaResponse.xsd) |

## GetRma Post

You must specify at least one filter and one OutputSelector in your GetRma request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetRma>
   <Filter>
    <OrderID>(String)</OrderID>
    <Username>(String)</Username>
    <RmaID>(String)</RmaID>
    <InvoiceNumber>(String)</InvoiceNumber>
    <RmaStatus>(String)</RmaStatus>
    <DateIssuedFrom>(DateTime)</DateIssuedFrom>
    <DateIssuedTo>(DateTime)</DateIssuedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <DateApprovedFrom>(Date)</DateApprovedFrom>
    <DateApprovedTo>(Date)</DateApprovedTo>
    <SplitKitComponents>(String)</SplitKitComponents>
    <OutputSelector>OrderID</OutputSelector>
    <OutputSelector>InvoiceNumber</OutputSelector>
    <OutputSelector>CustomerUsername</OutputSelector>
    <OutputSelector>StaffUsername</OutputSelector>
    <OutputSelector>PurchaseOrderNumber</OutputSelector>
    <OutputSelector>InternalNotes</OutputSelector>
    <OutputSelector>CurrencyCode</OutputSelector>
    <OutputSelector>RmaStatus</OutputSelector>
    <OutputSelector>ShippingRefundAmount</OutputSelector>
    <OutputSelector>ShippingRefundTaxCode</OutputSelector>
    <OutputSelector>SurchargeRefundAmount</OutputSelector>
    <OutputSelector>RefundSubtotal</OutputSelector>
    <OutputSelector>RefundTotal</OutputSelector>
    <OutputSelector>RefundTaxTotal</OutputSelector>
    <OutputSelector>TaxInclusive</OutputSelector>
    <OutputSelector>DateIssued</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>DateApproved</OutputSelector>
    <OutputSelector>RmaLine</OutputSelector>
    <OutputSelector>RmaLine.ItemNumber</OutputSelector>
    <OutputSelector>RmaLine.Extra</OutputSelector>
    <OutputSelector>RmaLine.ExtraOptions</OutputSelector>
    <OutputSelector>RmaLine.ItemNotes</OutputSelector>
    <OutputSelector>RmaLine.ProductName</OutputSelector>
    <OutputSelector>RmaLine.RefundSubtotal</OutputSelector>
    <OutputSelector>RmaLine.Tax</OutputSelector>
    <OutputSelector>RmaLine.TaxCode</OutputSelector>
    <OutputSelector>RmaLine.WarehouseID</OutputSelector>
    <OutputSelector>RmaLine.WarehouseName</OutputSelector>
    <OutputSelector>RmaLine.WarehouseReference</OutputSelector>
    <OutputSelector>RmaLine.ResolutionOutcome</OutputSelector>
    <OutputSelector>RmaLine.ReturnReason</OutputSelector>
    <OutputSelector>RmaLine.ItemStatusType</OutputSelector>
    <OutputSelector>RmaLine.ItemStatus</OutputSelector>
    <OutputSelector>RmaLine.ResolutionStatus</OutputSelector>
    <OutputSelector>RmaLine.ManufacturerClaims</OutputSelector>
    <OutputSelector>RmaLine.IsRestockIssued</OutputSelector>
    <OutputSelector>RefundedTotal</OutputSelector>
    <OutputSelector>Refund</OutputSelector>
    <OutputSelector>Refund.PaymentMethodID</OutputSelector>
    <OutputSelector>Refund.PaymentMethodName</OutputSelector>
    <OutputSelector>Refund.DateIssued</OutputSelector>
    <OutputSelector>Refund.DateRefunded</OutputSelector>
    <OutputSelector>Refund.RefundStatus</OutputSelector>
    <SortBy>(String)</SortBy>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
   </Filter>
</GetRma>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "OrderID":["String"﻿/*, ...*/],
    "Username":["String"﻿/*, ...*/],
    "RmaID":["String"﻿/*, ...*/],
    "InvoiceNumber":["String"﻿/*, ...*/],
    "RmaStatus":["String"﻿/*, ...*/],
    "DateIssuedFrom":"DateTime",
    "DateIssuedTo":"DateTime",
    "DateUpdatedFrom":"DateTime",
    "DateUpdatedTo":"DateTime",
    "DateApprovedFrom":"Date",
    "DateApprovedTo":"Date",
    "SplitKitComponents":["String"﻿/*, ...*/],
    "OutputSelector":["Enumeration"﻿/*, ...*/],
    "SortBy":["String"﻿/*, ...*/],
    "Page":"Integer",
    "Limit":"Integer"
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| Username | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| RmaID | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| InvoiceNumber | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| RmaStatus | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(6) |
| DateIssuedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateIssuedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateApprovedFrom | Optional | [Date](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateApprovedTo | Optional | [Date](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SplitKitComponents | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (OrderID, InvoiceNumber, CustomerUsername, StaffUsername, PurchaseOrderNumber, InternalNotes, CurrencyCode, RmaStatus, ShippingRefundAmount, ShippingRefundTaxCode, SurchargeRefundAmount, RefundSubtotal, RefundTotal, RefundTaxTotal, TaxInclusive, DateIssued, DateUpdated, DateApproved, RmaLine, RmaLine.ItemNumber, RmaLine.Extra, RmaLine.ExtraOptions, RmaLine.ItemNotes, RmaLine.ProductName, RmaLine.RefundSubtotal, RmaLine.Tax, RmaLine.TaxCode, RmaLine.WarehouseID, RmaLine.WarehouseName, RmaLine.WarehouseReference, RmaLine.ResolutionOutcome, RmaLine.ReturnReason, RmaLine.ItemStatusType, RmaLine.ItemStatus, RmaLine.ResolutionStatus, RmaLine.ManufacturerClaims, RmaLine.IsRestockIssued, RefundedTotal, Refund, Refund.PaymentMethodID, Refund.PaymentMethodName, Refund.DateIssued, Refund.DateRefunded, Refund.RefundStatus) |


SortBy
Optional

_Supports Multiple Elements_ [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30)


Page
Optional
[Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)


Limit
Optional
[Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)

* * *

## GetRma Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetRma>
   <Rma>
    <RmaID>(Integer)</RmaID>
    <OrderID>(String)</OrderID>
    <InvoiceNumber>(String)</InvoiceNumber>
    <CustomerUsername>(String)</CustomerUsername>
    <StaffUsername>(String)</StaffUsername>
    <PurchaseOrderNumber>(String)</PurchaseOrderNumber>
    <InternalNotes>(String)</InternalNotes>
    <CurrencyCode>(String)</CurrencyCode>
    <RmaStatus>(String)</RmaStatus>
    <ShippingRefundAmount>(Decimal)</ShippingRefundAmount>
    <ShippingRefundTaxCode>(String)</ShippingRefundTaxCode>
    <SurchargeRefundAmount>(Decimal)</SurchargeRefundAmount>
    <RefundSubtotal>(Decimal)</RefundSubtotal>
    <RefundTotal>(Decimal)</RefundTotal>
    <RefundTaxTotal>(Decimal)</RefundTaxTotal>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <DateIssued>(DateTime)</DateIssued>
    <DateUpdated>(DateTime)</DateUpdated>
    <DateApproved>(DateTime)</DateApproved>
     <RmaLines>
       <RmaLine>
        <RmaLineID>(String)</RmaLineID>
        <SKU>(String)</SKU>
        <Quantity>(Integer)</Quantity>
        <ProductName>(String)</ProductName>
        <ItemNotes>(String)</ItemNotes>
        <ItemNumber>(String)</ItemNumber>
        <Extra>(String)</Extra>
         <ExtraOptions>
           <ExtraOptions>
            <Name>(String)</Name>
            <Value>(String)</Value>
           </ExtraOptions>
         </ExtraOptions>        <RefundSubtotal>(Decimal)</RefundSubtotal>
        <Tax>(Decimal)</Tax>
        <TaxCode>(String)</TaxCode>
        <WarehouseID>(Integer)</WarehouseID>
        <WarehouseName>(String)</WarehouseName>
        <WarehouseReference>(String)</WarehouseReference>
        <ResolutionOutcome>(String)</ResolutionOutcome>
        <ReturnReason>(String)</ReturnReason>
        <ItemStatusType>(String)</ItemStatusType>
        <ItemStatus>(String)</ItemStatus>
        <ResolutionStatus>(String)</ResolutionStatus>
        <ManufacturerClaims>(String)</ManufacturerClaims>
        <ComponentOfKit>(Integer)</ComponentOfKit>
        <KitPartID>(Integer)</KitPartID>
       </RmaLine>
     </RmaLines>
     <Refunds>
       <Refund>
        <RefundID>(Integer)</RefundID>
        <RefundAmount>(Decimal)</RefundAmount>
        <PaymentMethodID>(Integer)</PaymentMethodID>
        <PaymentMethodName>(String)</PaymentMethodName>
        <DateIssued>(DateTime)</DateIssued>
        <DateRefunded>(DateTime)</DateRefunded>
        <RefundStatus>(String)</RefundStatus>
       </Refund>
     </Refunds>
    <RefundedTotal>(DateTime)</RefundedTotal>
   </Rma>
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
</GetRma>

```

### JSON Response

```rainbow rainbow-show
{
  "Rma": [ {\
﻿    "RmaID":"Integer",\
    "OrderID":"String",\
    "InvoiceNumber":"String",\
    "CustomerUsername":"String",\
    "StaffUsername":"String",\
    "PurchaseOrderNumber":"String",\
    "InternalNotes":"String",\
    "CurrencyCode":"String",\
    "RmaStatus":"String",\
    "ShippingRefundAmount":"Decimal",\
    "ShippingRefundTaxCode":"String",\
    "SurchargeRefundAmount":"Decimal",\
    "RefundSubtotal":"Decimal",\
    "RefundTotal":"Decimal",\
    "RefundTaxTotal":"Decimal",\
    "TaxInclusive":"Boolean",\
    "DateIssued":"DateTime",\
    "DateUpdated":"DateTime",\
    "DateApproved":"DateTime",\
    "RmaLines": [ {\
﻿      "RmaLine": [ {\
﻿        "RmaLineID":"String",\
        "SKU":["String"﻿/*, ...*/],\
        "Quantity":["Integer"﻿/*, ...*/],\
        "ProductName":"String",\
        "ItemNotes":"String",\
        "ItemNumber":["String"﻿/*, ...*/],\
        "Extra":"String",\
        "ExtraOptions": {\
﻿          "ExtraOptions": [ {\
﻿            "Name":"String",\
            "Value":"String"\
} ] ﻿\
} ,﻿        "RefundSubtotal":["Decimal"﻿/*, ...*/],\
        "Tax":["Decimal"﻿/*, ...*/],\
        "TaxCode":["String"﻿/*, ...*/],\
        "WarehouseID":"Integer",\
        "WarehouseName":"String",\
        "WarehouseReference":"String",\
        "ResolutionOutcome":"String",\
        "ReturnReason":"String",\
        "ItemStatusType":"String",\
        "ItemStatus":"String",\
        "ResolutionStatus":"String",\
        "ManufacturerClaims":"String",\
        "ComponentOfKit":"Integer",\
        "KitPartID":"Integer"\
} ] ﻿\
} ] ,﻿    "Refunds": [ {\
﻿      "Refund": [ {\
﻿        "RefundID":"Integer",\
        "RefundAmount":"Decimal",\
        "PaymentMethodID":"Integer",\
        "PaymentMethodName":"String",\
        "DateIssued":"DateTime",\
        "DateRefunded":"DateTime",\
        "RefundStatus":"String"\
} ] ﻿\
} ] ,﻿    "RefundedTotal":"DateTime"\
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

#### <Rma>

| Element Name | Field Type |
| --- | --- |
| RmaID | [Integer](https://developers.maropost.com/api-data-types) |
| OrderID | [String](https://developers.maropost.com/api-data-types) |
| InvoiceNumber | [String](https://developers.maropost.com/api-data-types) |
| CustomerUsername | [String](https://developers.maropost.com/api-data-types) |
| StaffUsername | [String](https://developers.maropost.com/api-data-types) |
| PurchaseOrderNumber | [String](https://developers.maropost.com/api-data-types) |
| InternalNotes | [String](https://developers.maropost.com/api-data-types) |
| CurrencyCode | [String](https://developers.maropost.com/api-data-types) |
| RmaStatus | [String](https://developers.maropost.com/api-data-types) |
| ShippingRefundAmount | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingRefundTaxCode | [String](https://developers.maropost.com/api-data-types) |
| SurchargeRefundAmount | [Decimal](https://developers.maropost.com/api-data-types) |
| RefundSubtotal | [Decimal](https://developers.maropost.com/api-data-types) |
| RefundTotal | [Decimal](https://developers.maropost.com/api-data-types) |
| RefundTaxTotal | [Decimal](https://developers.maropost.com/api-data-types) |
| TaxInclusive | [Boolean](https://developers.maropost.com/api-data-types) |
| DateIssued | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| DateApproved | [DateTime](https://developers.maropost.com/api-data-types) |
| RmaLines | [RmaLinesType](https://developers.maropost.com/api-data-types) |
| Refunds | [RefundsType](https://developers.maropost.com/api-data-types) |
| RefundedTotal | [DateTime](https://developers.maropost.com/api-data-types) |

* * *

#### <RmaLines>

| Element Name | Field Type |
| --- | --- |
| RmaLine | [RmaLineType](https://developers.maropost.com/api-data-types) |

* * *

#### <RmaLine>

| Element Name | Field Type |
| --- | --- |
| RmaLineID | [String](https://developers.maropost.com/api-data-types) |
| SKU | [String](https://developers.maropost.com/api-data-types) |
| Quantity | [Integer](https://developers.maropost.com/api-data-types) |
| ProductName | [String](https://developers.maropost.com/api-data-types) |
| ItemNotes | [String](https://developers.maropost.com/api-data-types) |
| ItemNumber | [String](https://developers.maropost.com/api-data-types) |
| Extra | [String](https://developers.maropost.com/api-data-types) |
| ExtraOptions | [ExtraOptionsType](https://developers.maropost.com/api-data-types) |
| RefundSubtotal | [Decimal](https://developers.maropost.com/api-data-types) |
| Tax | [Decimal](https://developers.maropost.com/api-data-types) |
| TaxCode | [String](https://developers.maropost.com/api-data-types) |
| WarehouseID | [Integer](https://developers.maropost.com/api-data-types) |
| WarehouseName | [String](https://developers.maropost.com/api-data-types) |
| WarehouseReference | [String](https://developers.maropost.com/api-data-types) |
| ResolutionOutcome | [String](https://developers.maropost.com/api-data-types) |
| ReturnReason | [String](https://developers.maropost.com/api-data-types) |
| ItemStatusType | [String](https://developers.maropost.com/api-data-types) |
| ItemStatus | [String](https://developers.maropost.com/api-data-types) |
| ResolutionStatus | [String](https://developers.maropost.com/api-data-types) |
| ManufacturerClaims | [String](https://developers.maropost.com/api-data-types) |
| ComponentOfKit | [Integer](https://developers.maropost.com/api-data-types) |
| KitPartID | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <ExtraOptions>

| Element Name | Field Type |
| --- | --- |
| ExtraOptions | [ExtraOptionsType](https://developers.maropost.com/api-data-types) |

* * *

#### <ExtraOptions>

| Element Name | Field Type |
| --- | --- |
| Name | [String](https://developers.maropost.com/api-data-types) |
| Value | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <Refunds>

| Element Name | Field Type |
| --- | --- |
| Refund | [RefundType](https://developers.maropost.com/api-data-types) |

* * *

#### <Refund>

| Element Name | Field Type |
| --- | --- |
| RefundID | [Integer](https://developers.maropost.com/api-data-types) |
| RefundAmount | [Decimal](https://developers.maropost.com/api-data-types) |
| PaymentMethodID | [Integer](https://developers.maropost.com/api-data-types) |
| PaymentMethodName | [String](https://developers.maropost.com/api-data-types) |
| DateIssued | [DateTime](https://developers.maropost.com/api-data-types) |
| DateRefunded | [DateTime](https://developers.maropost.com/api-data-types) |
| RefundStatus | [String](https://developers.maropost.com/api-data-types) |

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