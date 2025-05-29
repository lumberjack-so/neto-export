---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog"
title: "Engineers API documentation Customers AddCustomerLog"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Customers](https://developers.maropost.com/documentation/engineers/api-documentation/customers)
- [AddCustomerLog](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog)

# AddCustomerLog

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCustomerLog |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCustomerLog |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new customer log. |
| XSD Schema | [AddCustomerLog XSD](https://www.neto.com.au/assets/api/AddCustomerLog.xsd)   \|   [AddCustomerLog Response XSD](https://www.neto.com.au/assets/api/AddCustomerLogResponse.xsd) |

## AddCustomerLog Post

You must specify at least one filter and one OutputSelector in your AddCustomerLog request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCustomerLog>
   <CustomerLogs>
     <CustomerLog>
      <AllocatedTo>(String)</AllocatedTo>
      <FollowUpType>(String)</FollowUpType>
      <Username>(String)</Username>
      <CustomerName>(String)</CustomerName>
      <LastContacted>(DateTime)</LastContacted>
      <DateRequiredFollowUp>(DateTime)</DateRequiredFollowUp>
      <Status></Status>
      <Notes>(String)</Notes>
     </CustomerLog>
   </CustomerLogs>
</AddCustomerLog>

```

### JSON POST

```rainbow rainbow-show
{
  "CustomerLogs": {
﻿    "CustomerLog": [ {\
﻿      "AllocatedTo":"String",\
      "FollowUpType":"String",\
      "Username":"String",\
      "CustomerName":"String",\
      "LastContacted":"DateTime",\
      "DateRequiredFollowUp":"DateTime",\
      "Status":"Enumeration",\
      "Notes":"String"\
} ] ﻿
} ﻿
}

```

#### <CustomerLogs>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| CustomerLog | Optional<br>_Supports Multiple Elements_ | [CustomerLog](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomerlog#CustomerLog) |

* * *

#### <CustomerLog>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| AllocatedTo | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| FollowUpType | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Username | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| CustomerName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| LastContacted | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateRequiredFollowUp | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Status | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Require Recontact, Recontacting, Completed) |
| Notes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## AddCustomerLog Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCustomerLog>
   <CustomerLog>
    <LogID>(Integer)</LogID>
   </CustomerLog>
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
</AddCustomerLog>

```

### JSON Response

```rainbow rainbow-show
{
  "CustomerLog": [ {\
﻿    "LogID":"Integer"\
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

#### <CustomerLog>

| Element Name | Field Type |
| --- | --- |
| LogID | [Integer](https://developers.maropost.com/api-data-types) |

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