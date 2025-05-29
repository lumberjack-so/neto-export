---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system/getaccountingsystemrelatedaccounts"
title: "Engineers API documentation Accounting System GetAccountingSystemRelatedAccounts"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system/getaccountingsystemrelatedaccounts#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system/getaccountingsystemrelatedaccounts)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system/getaccountingsystemrelatedaccounts)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Accounting System](https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system)
- [GetAccountingSystemRelatedAccounts](https://developers.maropost.com/documentation/engineers/api-documentation/accounting-system/getaccountingsystemrelatedaccounts)

# GetAccountingSystemRelatedAccounts

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetAccountingSystemRelatedAccounts |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetAccountingSystemRelatedAccounts |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [GetAccountingSystemRelatedAccounts XSD](https://www.neto.com.au/assets/api/GetAccountingSystemRelatedAccounts.xsd)   \|   [GetAccountingSystemRelatedAccounts Response XSD](https://www.neto.com.au/assets/api/GetAccountingSystemRelatedAccountsResponse.xsd) |

## GetAccountingSystemRelatedAccounts Post

You must specify at least one filter and one OutputSelector in your GetAccountingSystemRelatedAccounts request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetAccountingSystemRelatedAccounts>

</GetAccountingSystemRelatedAccounts>

```

### JSON POST

```rainbow rainbow-show
{

}

```

## GetAccountingSystemRelatedAccounts Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetAccountingSystemRelatedAccounts>
   <RelatedAccounts>
     <RelatedAccount>
      <accsw_title>(String)</accsw_title>
      <acc_account_id>(Integer)</acc_account_id>
      <accapi_id>(Integer)</accapi_id>
      <acc_account_ref>(String)</acc_account_ref>
      <acc_account_parent_ref>(String)</acc_account_parent_ref>
      <acc_account_name>(String)</acc_account_name>
      <acc_account_type>(String)</acc_account_type>
      <acc_account_class>(String)</acc_account_class>
      <is_asset_acc>(Boolean)</is_asset_acc>
      <is_expense_acc>(Boolean)</is_expense_acc>
      <is_income_acc>(Boolean)</is_income_acc>
      <is_costofsales_acc>(Boolean)</is_costofsales_acc>
      <is_bank_acc>(Boolean)</is_bank_acc>
      <acc_account_note>(String)</acc_account_note>
      <acc_account_active>(String)</acc_account_active>
      <acc_account_is_detail>(Boolean)</acc_account_is_detail>
     </RelatedAccount>
   </RelatedAccounts>
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
</GetAccountingSystemRelatedAccounts>

```

### JSON Response

```rainbow rainbow-show
{
  "RelatedAccounts": [ {\
﻿    "RelatedAccount": [ {\
﻿      "accsw_title":"String",\
      "acc_account_id":"Integer",\
      "accapi_id":"Integer",\
      "acc_account_ref":"String",\
      "acc_account_parent_ref":"String",\
      "acc_account_name":"String",\
      "acc_account_type":"String",\
      "acc_account_class":"String",\
      "is_asset_acc":"Boolean",\
      "is_expense_acc":"Boolean",\
      "is_income_acc":"Boolean",\
      "is_costofsales_acc":"Boolean",\
      "is_bank_acc":"Boolean",\
      "acc_account_note":"String",\
      "acc_account_active":"String",\
      "acc_account_is_detail":"Boolean"\
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

#### <RelatedAccounts>

| Element Name | Field Type |
| --- | --- |
| RelatedAccount | [RelatedAccountType](https://developers.maropost.com/api-data-types) |

* * *

#### <RelatedAccount>

| Element Name | Field Type |
| --- | --- |
| accsw\_title | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_id | [Integer](https://developers.maropost.com/api-data-types) |
| accapi\_id | [Integer](https://developers.maropost.com/api-data-types) |
| acc\_account\_ref | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_parent\_ref | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_name | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_type | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_class | [String](https://developers.maropost.com/api-data-types) |
| is\_asset\_acc | [Boolean](https://developers.maropost.com/api-data-types) |
| is\_expense\_acc | [Boolean](https://developers.maropost.com/api-data-types) |
| is\_income\_acc | [Boolean](https://developers.maropost.com/api-data-types) |
| is\_costofsales\_acc | [Boolean](https://developers.maropost.com/api-data-types) |
| is\_bank\_acc | [Boolean](https://developers.maropost.com/api-data-types) |
| acc\_account\_note | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_active | [String](https://developers.maropost.com/api-data-types) |
| acc\_account\_is\_detail | [Boolean](https://developers.maropost.com/api-data-types) |

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