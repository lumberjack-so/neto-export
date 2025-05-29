---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment"
title: "Engineers API documentation Payments AddPayment"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Payments](https://developers.maropost.com/documentation/engineers/api-documentation/payments)
- [AddPayment](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment)

# AddPayment

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddPayment |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddPayment |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new payment to an order/invoice. A successful call to AddPayment returns the unique identifier (PaymentID) for the new payment, and the date and time the payment was added (CurrentTime) |
| XSD Schema | [AddPayment XSD](https://www.neto.com.au/assets/api/AddPayment.xsd)   \|   [AddPayment Response XSD](https://www.neto.com.au/assets/api/AddPaymentResponse.xsd) |

### Example - Add Multiple Payments in a Single Call

#### Post - XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddPayment>
  <Payment>
    <OrderID>N100000</OrderID>
    <PaymentMethodName>Direct Deposit</PaymentMethodName>
    <CardAuthorisation>34628374623784</CardAuthorisation>
    <AmountPaid>99.95</AmountPaid>
    <DatePaid>2012-12-13</DatePaid>
  </Payment>
  <Payment>
    <OrderID>N100001</OrderID>
    <PaymentMethodName>Visa</PaymentMethodName>
    <CardAuthorisation>34628374623784</CardAuthorisation>
    <AmountPaid>99.95</AmountPaid>
    <DatePaid>2012-12-13</DatePaid>
  </Payment>
  <Payment>
    <OrderID>N100003</OrderID>
    <PaymentMethodName>Cheque</PaymentMethodName>
    <CardAuthorisation>34628374623784</CardAuthorisation>
    <AmountPaid>100.69</AmountPaid>
    <DatePaid>2012-12-13</DatePaid>
  </Payment>
</AddPayment>

```

## AddPayment Post

You must specify at least one filter and one OutputSelector in your AddPayment request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddPayment>
   <Payment>
    <OrderID>(String)</OrderID>
    <PaymentMethodID>(Integer)</PaymentMethodID>
    <PaymentMethodName>(String)</PaymentMethodName>
    <CardAuthorisation>(String)</CardAuthorisation>
    <AmountPaid>(Decimal)</AmountPaid>
    <DatePaid>(Date)</DatePaid>
     <TransactionNotes>
       <TransactionNote>
        <Title>(String)</Title>
        <Description>(String)</Description>
       </TransactionNote>
     </TransactionNotes>   </Payment>

</AddPayment>

```

### JSON POST

```rainbow rainbow-show
{
  "Payment": [ {\
﻿    "OrderID":"String",\
    "PaymentMethodID":"Integer",\
    "PaymentMethodName":"String",\
    "CardAuthorisation":"String",\
    "AmountPaid":"Decimal",\
    "DatePaid":"Date",\
    "TransactionNotes": {\
﻿      "TransactionNote": [ {\
﻿        "Title":"String",\
        "Description":"String"\
} ] ﻿\
} ﻿\
} ] ﻿
}

```

#### <Payment>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| PaymentMethodID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PaymentMethodName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| CardAuthorisation | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| AmountPaid | **Required** | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePaid | Optional | [Date](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| TransactionNotes | Optional | [TransactionNotes](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment#TransactionNotes) |

* * *

#### <TransactionNotes>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| TransactionNote | Optional<br>_Supports Multiple Elements_ | [TransactionNote](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/payments/addpayment#TransactionNote) |

* * *

#### <TransactionNote>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Title | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Description | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |

* * *

## AddPayment Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddPayment>
   <Payment>
    <PaymentID>(Integer)</PaymentID>
   </Payment>
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
</AddPayment>

```

### JSON Response

```rainbow rainbow-show
{
  "Payment": [ {\
﻿    "PaymentID":"Integer"\
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

#### <Payment>

| Element Name | Field Type |
| --- | --- |
| PaymentID | [Integer](https://developers.maropost.com/api-data-types) |

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