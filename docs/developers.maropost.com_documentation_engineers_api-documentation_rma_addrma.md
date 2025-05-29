---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma"
title: "Engineers API documentation RMA AddRma"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [RMA](https://developers.maropost.com/documentation/engineers/api-documentation/rma)
- [AddRma](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma)

# AddRma

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddRma |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddRma |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new RMA (Return Merchadise Authorisation). A successful call to AddRma returns the unique identifier (RmaID) for the new RMA, and the date and time the RMA was added (CurrentTime) |
| XSD Schema | [AddRma XSD](https://www.neto.com.au/assets/api/AddRma.xsd)   \|   [AddRma Response XSD](https://www.neto.com.au/assets/api/AddRmaResponse.xsd) |

## AddRma Post

You must specify at least one filter and one OutputSelector in your AddRma request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddRma>
   <Rma>
    <OrderID>(String)</OrderID>
    <InvoiceNumber>(String)</InvoiceNumber>
    <CustomerUsername>(String)</CustomerUsername>
    <StaffUsername>(String)</StaffUsername>
    <PurchaseOrderNumber>(String)</PurchaseOrderNumber>
    <InternalNotes>(String)</InternalNotes>
    <RmaStatus></RmaStatus>
    <DateIssued>(DateTime)</DateIssued>
    <ShippingRefundAmount>(Decimal)</ShippingRefundAmount>
    <ShippingRefundTaxCode>(String)</ShippingRefundTaxCode>
    <TaxInclusive>(Boolean)</TaxInclusive>
     <RmaLines>
       <RmaLine>
        <Quantity>(Integer)</Quantity>
        <SKU>(String)</SKU>
        <ItemDescription>(String)</ItemDescription>
        <RefundSubtotal>(Decimal)</RefundSubtotal>
        <TaxCode>(String)</TaxCode>
        <WarehouseID>(Integer)</WarehouseID>
        <ResolutionOutcome>(String)</ResolutionOutcome>
        <ReturnReason>(String)</ReturnReason>
        <ItemStatusType>(String)</ItemStatusType>
        <ItemStatus>(String)</ItemStatus>
        <ResolutionStatus>(String)</ResolutionStatus>
        <ManufacturerClaims>(String)</ManufacturerClaims>
       </RmaLine>
     </RmaLines>     <Refunds>
       <Refund>
        <PaymentMethod>(String)</PaymentMethod>
        <DateRefunded>(DateTime)</DateRefunded>
        <RefundAmount>(Decimal)</RefundAmount>
         <TransactionNotes>
           <TransactionNote>
            <Title>(String)</Title>
            <Description>(String)</Description>
           </TransactionNote>
         </TransactionNotes>       </Refund>
     </Refunds>   </Rma>

</AddRma>

```

### JSON POST

```rainbow rainbow-show
{
  "Rma": [ {\
﻿    "OrderID":"String",\
    "InvoiceNumber":"String",\
    "CustomerUsername":"String",\
    "StaffUsername":"String",\
    "PurchaseOrderNumber":"String",\
    "InternalNotes":"String",\
    "RmaStatus":"Enumeration",\
    "DateIssued":"DateTime",\
    "ShippingRefundAmount":"Decimal",\
    "ShippingRefundTaxCode":"String",\
    "TaxInclusive":"Boolean",\
    "RmaLines": {\
﻿      "RmaLine": [ {\
﻿        "Quantity":"Integer",\
        "SKU":"String",\
        "ItemDescription":"String",\
        "RefundSubtotal":"Decimal",\
        "TaxCode":"String",\
        "WarehouseID":"Integer",\
        "ResolutionOutcome":"String",\
        "ReturnReason":"String",\
        "ItemStatusType":"String",\
        "ItemStatus":"String",\
        "ResolutionStatus":"String",\
        "ManufacturerClaims":"String"\
} ] ﻿\
} ,﻿    "Refunds": {\
﻿      "Refund": [ {\
﻿        "PaymentMethod":"String",\
        "DateRefunded":"DateTime",\
        "RefundAmount":"Decimal",\
        "TransactionNotes": {\
﻿          "TransactionNote": [ {\
﻿            "Title":"String",\
            "Description":"String"\
} ] ﻿\
} ﻿\
} ] ﻿\
} ﻿\
} ] ﻿
}

```

#### <Rma>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| InvoiceNumber | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(32) |
| CustomerUsername | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| StaffUsername | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| PurchaseOrderNumber | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| InternalNotes | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| RmaStatus | **Required** | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Open, Closed) |
| DateIssued | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingRefundAmount | **Required** | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingRefundTaxCode | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(8) |
| TaxInclusive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RmaLines | Optional | [RmaLines](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#RmaLines) |
| Refunds | Optional | [Refunds](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#Refunds) |

* * *

#### <RmaLines>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| RmaLine | Optional<br>_Supports Multiple Elements_ | [RmaLine](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#RmaLine) |

* * *

#### <RmaLine>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Quantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ItemDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| RefundSubtotal | **Required** | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| TaxCode | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(8) |
| WarehouseID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ResolutionOutcome | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ReturnReason | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ItemStatusType | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ItemStatus | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ResolutionStatus | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ManufacturerClaims | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |

* * *

#### <Refunds>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Refund | Optional<br>_Supports Multiple Elements_ | [Refund](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#Refund) |

* * *

#### <Refund>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| PaymentMethod | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| DateRefunded | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| RefundAmount | **Required** | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| TransactionNotes | Optional | [TransactionNotes](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#TransactionNotes) |

* * *

#### <TransactionNotes>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| TransactionNote | Optional<br>_Supports Multiple Elements_ | [TransactionNote](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/rma/addrma#TransactionNote) |

* * *

#### <TransactionNote>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Title | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Description | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |

* * *

## AddRma Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddRma>

</AddRma>

```

### JSON Response

```rainbow rainbow-show
{

}

```

### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!

[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.