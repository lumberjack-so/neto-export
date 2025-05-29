---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/voucher/getvoucher/"
title: "Engineers API documentation Voucher GetVoucher"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/getvoucher/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/getvoucher/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/getvoucher/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Voucher](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/)
- [GetVoucher](https://developers.maropost.com/documentation/engineers/api-documentation/voucher/getvoucher/)

# GetVoucher

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetVoucher |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetVoucher |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [GetVoucher XSD](https://www.neto.com.au/assets/api/GetVoucher.xsd)   \|   [GetVoucher Response XSD](https://www.neto.com.au/assets/api/GetVoucherResponse.xsd) |

## GetVoucher Post

You must specify at least one filter and one OutputSelector in your GetVoucher request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetVoucher>
   <Filter>
    <VoucherID>(Integer)</VoucherID>
    <VoucherProgramID>(Integer)</VoucherProgramID>
    <VoucherTitle>(String)</VoucherTitle>
    <VoucherCode>(String)</VoucherCode>
    <VoucherProgram>(String)</VoucherProgram>
    <ProgramType>Reward</ProgramType>
    <ProgramType>Gift</ProgramType>
    <ProgramType>Third Party</ProgramType>
    <IsRedeemed>(Boolean)</IsRedeemed>
    <DateAddedFrom>(DateTime)</DateAddedFrom>
    <DateAddedTo>(DateTime)</DateAddedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <Owner>(String)</Owner>
    <SenderEmail>(String)</SenderEmail>
    <RecipientEmail>(String)</RecipientEmail>
    <CreatedFromOrderID>(String)</CreatedFromOrderID>
    <OutputSelector>VoucherID</OutputSelector>
    <OutputSelector>VoucherProgramID</OutputSelector>
    <OutputSelector>VoucherProgramDetails</OutputSelector>
    <OutputSelector>VoucherTitle</OutputSelector>
    <OutputSelector>VoucherCode</OutputSelector>
    <OutputSelector>SecretKey</OutputSelector>
    <OutputSelector>IsRedeemed</OutputSelector>
    <OutputSelector>ProgramType</OutputSelector>
    <OutputSelector>Owner</OutputSelector>
    <OutputSelector>Email</OutputSelector>
    <OutputSelector>CreatedFromOrderID</OutputSelector>
    <OutputSelector>DateAdded</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>Balance</OutputSelector>
    <OutputSelector>VoucherUsage</OutputSelector>
    <OutputSelector>CreditHistory</OutputSelector>
    <OutputSelector>UsageHistory</OutputSelector>
   </Filter>
</GetVoucher>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "VoucherID":["Integer"﻿/*, ...*/],
    "VoucherProgramID":["Integer"﻿/*, ...*/],
    "VoucherTitle":["String"﻿/*, ...*/],
    "VoucherCode":["String"﻿/*, ...*/],
    "VoucherProgram":["String"﻿/*, ...*/],
    "ProgramType":["Enumeration"﻿/*, ...*/],
    "IsRedeemed":"Boolean",
    "DateAddedFrom":"DateTime",
    "DateAddedTo":"DateTime",
    "DateUpdatedFrom":"DateTime",
    "DateUpdatedTo":"DateTime",
    "Owner":["String"﻿/*, ...*/],
    "SenderEmail":["String"﻿/*, ...*/],
    "RecipientEmail":["String"﻿/*, ...*/],
    "CreatedFromOrderID":["String"﻿/*, ...*/],
    "OutputSelector":["Enumeration"﻿/*, ...*/]
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| VoucherID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| VoucherProgramID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| VoucherTitle | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| VoucherCode | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| VoucherProgram | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ProgramType | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Reward, Gift, Third Party) |
| IsRedeemed | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| DateAddedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateAddedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Owner | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SenderEmail | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| RecipientEmail | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| CreatedFromOrderID | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (VoucherID, VoucherProgramID, VoucherProgramDetails, VoucherTitle, VoucherCode, SecretKey, IsRedeemed, ProgramType, Owner, Email, CreatedFromOrderID, DateAdded, DateUpdated, Balance, VoucherUsage, CreditHistory, UsageHistory) |

* * *

## GetVoucher Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetVoucher>
   <Voucher>
    <VoucherID>(Integer)</VoucherID>
    <VoucherProgramID>(Integer)</VoucherProgramID>
     <VoucherProgramDetails>
      <Active>(Boolean)</Active>
      <Visibility>(Boolean)</Visibility>
       <AvailableToUserGroup>
        <Group>(Integer)</Group>
       </AvailableToUserGroup>      <Title>(String)</Title>
      <Subtitle>(String)</Subtitle>
      <Description>(String)</Description>
      <Start>(DateTime)</Start>
      <End>(DateTime)</End>
      <ExpireDays>(Integer)</ExpireDays>
      <Multiplier>(Integer)</Multiplier>
      <SortOrder>(Integer)</SortOrder>
      <UseOnce>(Boolean)</UseOnce>
      <UsePointsInsteadOfCurrency>(Boolean)</UsePointsInsteadOfCurrency>
      <IncShipping>(Boolean)</IncShipping>
     </VoucherProgramDetails>    <VoucherTitle>(String)</VoucherTitle>
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
</GetVoucher>

```

### JSON Response

```rainbow rainbow-show
{
  "Voucher": [ {\
﻿    "VoucherID":"Integer",\
    "VoucherProgramID":"Integer",\
    "VoucherProgramDetails": {\
﻿      "Active":"Boolean",\
      "Visibility":"Boolean",\
      "AvailableToUserGroup": {\
﻿        "Group":["Integer"﻿/*, ...*/]\
} ,﻿      "Title":"String",\
      "Subtitle":"String",\
      "Description":"String",\
      "Start":"DateTime",\
      "End":"DateTime",\
      "ExpireDays":"Integer",\
      "Multiplier":"Integer",\
      "SortOrder":"Integer",\
      "UseOnce":"Boolean",\
      "UsePointsInsteadOfCurrency":"Boolean",\
      "IncShipping":"Boolean"\
} ,﻿    "VoucherTitle":"String",\
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
| VoucherProgramDetails | [VoucherProgramDetailsType](https://developers.maropost.com/api-data-types) |
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

#### <VoucherProgramDetails>

| Element Name | Field Type |
| --- | --- |
| Active | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |
| Visibility | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |
| AvailableToUserGroup | [AvailableToUserGroupType](https://developers.maropost.com/api-data-types) |
| Title | [String](https://developers.maropost.com/api-data-types) |
| Subtitle | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |
| Start | [DateTime](https://developers.maropost.com/api-data-types) |
| End | [DateTime](https://developers.maropost.com/api-data-types) |
| ExpireDays | [Integer](https://developers.maropost.com/api-data-types) |
| Multiplier | [Integer](https://developers.maropost.com/api-data-types) |
| SortOrder | [Integer](https://developers.maropost.com/api-data-types) |
| UseOnce | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |
| UsePointsInsteadOfCurrency | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |
| IncShipping | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |

* * *

#### <AvailableToUserGroup>

| Element Name | Field Type |
| --- | --- |
| Group | [Integer](https://developers.maropost.com/api-data-types) |

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