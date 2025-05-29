---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/voucher/redeemvoucher/"
title: "Engineers API documentation Voucher RedeemVoucher"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/redeemvoucher/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/redeemvoucher/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/redeemvoucher/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Voucher](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/)
- [RedeemVoucher](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/redeemvoucher/)

# RedeemVoucher

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | RedeemVoucher |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | RedeemVoucher |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [RedeemVoucher XSD](https://www.neto.com.au/assets/api/RedeemVoucher.xsd)   \|   [RedeemVoucher Response XSD](https://www.neto.com.au/assets/api/RedeemVoucherResponse.xsd) |

## RedeemVoucher Post

You must specify at least one filter and one OutputSelector in your RedeemVoucher request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<RedeemVoucher>
   <Voucher>
    <OrderID>(String)</OrderID>
    <VoucherID>(Integer)</VoucherID>
    <RedeemAmount>(Decimal)</RedeemAmount>
    <CardAuthorisation>(String)</CardAuthorisation>
    <DateRedeemed>(DateTime)</DateRedeemed>
   </Voucher>

</RedeemVoucher>

```

### JSON POST

```rainbow rainbow-show
{
  "Voucher": [ {\
﻿    "OrderID":"String",\
    "VoucherID":"Integer",\
    "RedeemAmount":"Decimal",\
    "CardAuthorisation":"String",\
    "DateRedeemed":"DateTime"\
} ] ﻿
}

```

#### <Voucher>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderID | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| VoucherID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| RedeemAmount | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CardAuthorisation | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| DateRedeemed | **Required** | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## RedeemVoucher Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<RedeemVoucher>
   <Voucher>
    <VoucherID>(Integer)</VoucherID>
    <VoucherProgramID>(Integer)</VoucherProgramID>
    <VoucherTitle>(String)</VoucherTitle>
    <VoucherCode>(String)</VoucherCode>
    <SecretKey>(String)</SecretKey>
    <IsRedeemed>(String)</IsRedeemed>
    <Owner>(String)</Owner>
    <Email>(String)</Email>
    <CreatedFromOrderID>(String)</CreatedFromOrderID>
    <DateAdded>(DateTime)</DateAdded>
    <DateUpdated>(DateTime)</DateUpdated>
    <Balance>(Decimal)</Balance>
    <IsSingleUse>(String)</IsSingleUse>
    <VoucherProgram>(String)</VoucherProgram>
    <ProgramType>(String)</ProgramType>
     <ListOfCreditHistory>
       <CreditHistory>
        <OrderID>(String)</OrderID>
        <Status>(String)</Status>
        <AmountCredited>(Decimal)</AmountCredited>
        <TotalAmountUsed>(Decimal)</TotalAmountUsed>
        <Balance>(Decimal)</Balance>
        <DateAdded>(DateTime)</DateAdded>
        <ExpiryDate>(DateTime)</ExpiryDate>
       </CreditHistory>
     </ListOfCreditHistory>     <ListOfUsageHistory>
       <UsageHistory>
        <OrderID>(String)</OrderID>
        <PaymentID>(Integer)</PaymentID>
        <Amount>(Decimal)</Amount>
        <DateUsed>(DateTime)</DateUsed>
       </UsageHistory>
     </ListOfUsageHistory>   </Voucher>
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
</RedeemVoucher>

```

### JSON Response

```rainbow rainbow-show
{
  "Voucher": [ {\
﻿    "VoucherID":"Integer",\
    "VoucherProgramID":"Integer",\
    "VoucherTitle":"String",\
    "VoucherCode":"String",\
    "SecretKey":"String",\
    "IsRedeemed":"String",\
    "Owner":"String",\
    "Email":"String",\
    "CreatedFromOrderID":"String",\
    "DateAdded":"DateTime",\
    "DateUpdated":"DateTime",\
    "Balance":"Decimal",\
    "IsSingleUse":"String",\
    "VoucherProgram":"String",\
    "ProgramType":"String",\
    "ListOfCreditHistory": {\
﻿      "CreditHistory": [ {\
﻿        "OrderID":"String",\
        "Status":"String",\
        "AmountCredited":"Decimal",\
        "TotalAmountUsed":"Decimal",\
        "Balance":"Decimal",\
        "DateAdded":"DateTime",\
        "ExpiryDate":"DateTime"\
} ] ﻿\
} ,﻿    "ListOfUsageHistory": {\
﻿      "UsageHistory": [ {\
﻿        "OrderID":"String",\
        "PaymentID":"Integer",\
        "Amount":"Decimal",\
        "DateUsed":"DateTime"\
} ] ﻿\
} ﻿\
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

#### <Voucher>

| Element Name | Field Type |
| --- | --- |
| VoucherID | [Integer](https://developers.maropost.com/api-data-types) |
| VoucherProgramID | [Integer](https://developers.maropost.com/api-data-types) |
| VoucherTitle | [String](https://developers.maropost.com/api-data-types) |
| VoucherCode | [String](https://developers.maropost.com/api-data-types) |
| SecretKey | [String](https://developers.maropost.com/api-data-types) |
| IsRedeemed | [String](https://developers.maropost.com/api-data-types) |
| Owner | [String](https://developers.maropost.com/api-data-types) |
| Email | [String](https://developers.maropost.com/api-data-types) |
| CreatedFromOrderID | [String](https://developers.maropost.com/api-data-types) |
| DateAdded | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| Balance | [Decimal](https://developers.maropost.com/api-data-types) |
| IsSingleUse | [String](https://developers.maropost.com/api-data-types) |
| VoucherProgram | [String](https://developers.maropost.com/api-data-types) |
| ProgramType | [String](https://developers.maropost.com/api-data-types) |
| ListOfCreditHistory | [ListOfCreditHistoryType](https://developers.maropost.com/api-data-types) |
| ListOfUsageHistory | [ListOfUsageHistoryType](https://developers.maropost.com/api-data-types) |

* * *

#### <ListOfCreditHistory>

| Element Name | Field Type |
| --- | --- |
| CreditHistory | [CreditHistoryType](https://developers.maropost.com/api-data-types) |

* * *

#### <CreditHistory>

| Element Name | Field Type |
| --- | --- |
| OrderID | [String](https://developers.maropost.com/api-data-types) |
| Status | [String](https://developers.maropost.com/api-data-types) |
| AmountCredited | [Decimal](https://developers.maropost.com/api-data-types) |
| TotalAmountUsed | [Decimal](https://developers.maropost.com/api-data-types) |
| Balance | [Decimal](https://developers.maropost.com/api-data-types) |
| DateAdded | [DateTime](https://developers.maropost.com/api-data-types) |
| ExpiryDate | [DateTime](https://developers.maropost.com/api-data-types) |

* * *

#### <ListOfUsageHistory>

| Element Name | Field Type |
| --- | --- |
| UsageHistory | [UsageHistoryType](https://developers.maropost.com/api-data-types) |

* * *

#### <UsageHistory>

| Element Name | Field Type |
| --- | --- |
| OrderID | [String](https://developers.maropost.com/api-data-types) |
| PaymentID | [Integer](https://developers.maropost.com/api-data-types) |
| Amount | [Decimal](https://developers.maropost.com/api-data-types) |
| DateUsed | [DateTime](https://developers.maropost.com/api-data-types) |

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