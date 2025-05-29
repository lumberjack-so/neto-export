---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpayment"
title: "Engineers API documentation Payments GetPayment"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpayment#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpayment)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpayment)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Payments](https://developers.maropost.com/documentation/engineers/api-documentation/payments)
- [GetPayment](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpayment)

# GetPayment

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetPayment |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetPayment |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get payment data. A successful call to GetPayment returns the data requested. |
| XSD Schema | [GetPayment XSD](https://www.neto.com.au/assets/api/GetPayment.xsd)   \|   [GetPayment Response XSD](https://www.neto.com.au/assets/api/GetPaymentResponse.xsd) |

## GetPayment Post

You must specify at least one filter and one OutputSelector in your GetPayment request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetPayment>
   <Filter>
    <PaymentID>(Integer)</PaymentID>
    <OrderID>(String)</OrderID>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <DatePaidFrom>(DateTime)</DatePaidFrom>
    <DatePaidTo>(DateTime)</DatePaidTo>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>AmountPaid</OutputSelector>
    <OutputSelector>CurrencyCode</OutputSelector>
    <OutputSelector>DatePaid</OutputSelector>
    <OutputSelector>DatePaidLocal</OutputSelector>
    <OutputSelector>DatePaidUTC</OutputSelector>
    <OutputSelector>PaymentMethod</OutputSelector>
    <OutputSelector>PaymentMethodName</OutputSelector>
    <OutputSelector>ProcessBy</OutputSelector>
    <OutputSelector>AuthorisationMessage</OutputSelector>
    <OutputSelector>CardHolder</OutputSelector>
    <OutputSelector>CardExpiryDate</OutputSelector>
    <OutputSelector>CardAuthorisation</OutputSelector>
    <OutputSelector>AccountName</OutputSelector>
    <OutputSelector>AccountBSB</OutputSelector>
    <OutputSelector>PaymentNotes</OutputSelector>
    <OutputSelector>AccountNumber</OutputSelector>
    <OutputSelector>ChequeNumber</OutputSelector>
   </Filter>
</GetPayment>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "PaymentID":["Integer"﻿/*, ...*/],
    "OrderID":["String"﻿/*, ...*/],
    "Page":"Integer",
    "Limit":"Integer",
    "DatePaidFrom":"DateTime",
    "DatePaidTo":"DateTime",
    "OutputSelector":["Enumeration"﻿/*, ...*/]
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| PaymentID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| OrderID | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePaidFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePaidTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (ID, AmountPaid, CurrencyCode, DatePaid, DatePaidLocal, DatePaidUTC, PaymentMethod, PaymentMethodName, ProcessBy, AuthorisationMessage, CardHolder, CardExpiryDate, CardAuthorisation, AccountName, AccountBSB, PaymentNotes, AccountNumber, ChequeNumber) |

* * *

## GetPayment Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetPayment>
   <Payment>
    <ID>(Integer)</ID>
    <PaymentID>(Integer)</PaymentID>
    <OrderID>(String)</OrderID>
    <AmountPaid>(Decimal)</AmountPaid>
    <CurrencyCode>(String)</CurrencyCode>
    <DatePaid>(DateTime)</DatePaid>
    <DatePaidLocal>(DateTime)</DatePaidLocal>
    <DatePaidUTC>(DateTime)</DatePaidUTC>
    <PaymentMethod>(String)</PaymentMethod>
    <PaymentMethodName>(String)</PaymentMethodName>
    <ProcessBy>(String)</ProcessBy>
    <AuthorisationMessage>(String)</AuthorisationMessage>
    <CardHolder>(String)</CardHolder>
    <CardExpiryDate>(String)</CardExpiryDate>
    <CardAuthorisation>(String)</CardAuthorisation>
    <AccountName>(String)</AccountName>
    <AccountBSB>(String)</AccountBSB>
    <AccountNumber>(String)</AccountNumber>
    <ChequeNumber>(String)</ChequeNumber>
    <PaymentNotes>(String)</PaymentNotes>
   </Payment>

</GetPayment>

```

### JSON Response

```rainbow rainbow-show
{
  "Payment": [ {\
﻿    "ID":"Integer",\
    "PaymentID":"Integer",\
    "OrderID":"String",\
    "AmountPaid":"Decimal",\
    "CurrencyCode":"String",\
    "DatePaid":"DateTime",\
    "DatePaidLocal":"DateTime",\
    "DatePaidUTC":"DateTime",\
    "PaymentMethod":"String",\
    "PaymentMethodName":"String",\
    "ProcessBy":"String",\
    "AuthorisationMessage":"String",\
    "CardHolder":"String",\
    "CardExpiryDate":"String",\
    "CardAuthorisation":"String",\
    "AccountName":"String",\
    "AccountBSB":"String",\
    "AccountNumber":"String",\
    "ChequeNumber":"String",\
    "PaymentNotes":"String"\
} ] ﻿
}

```

#### <Payment>

| Element Name | Field Type |
| --- | --- |
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| PaymentID | [Integer](https://developers.maropost.com/api-data-types) |
| OrderID | [String](https://developers.maropost.com/api-data-types) |
| AmountPaid | [Decimal](https://developers.maropost.com/api-data-types) |
| CurrencyCode | [String](https://developers.maropost.com/api-data-types) |
| DatePaid | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePaidLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePaidUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| PaymentMethod | [String](https://developers.maropost.com/api-data-types) |
| PaymentMethodName | [String](https://developers.maropost.com/api-data-types) |
| ProcessBy | [String](https://developers.maropost.com/api-data-types) |
| AuthorisationMessage | [String](https://developers.maropost.com/api-data-types) |
| CardHolder | [String](https://developers.maropost.com/api-data-types) |
| CardExpiryDate | [String](https://developers.maropost.com/api-data-types) |
| CardAuthorisation | [String](https://developers.maropost.com/api-data-types) |
| AccountName | [String](https://developers.maropost.com/api-data-types) |
| AccountBSB | [String](https://developers.maropost.com/api-data-types) |
| AccountNumber | [String](https://developers.maropost.com/api-data-types) |
| ChequeNumber | [String](https://developers.maropost.com/api-data-types) |
| PaymentNotes | [String](https://developers.maropost.com/api-data-types) |

* * *

### If you are a vendor creating an integration with Neto by Maropost, we would like to hear from you!

[Contact Us](https://partner.maropost.com/commerce-cloud/technology-partner/)

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.