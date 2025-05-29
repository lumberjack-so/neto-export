---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/currency/updatecurrencysettings"
title: "Engineers API documentation Currency UpdateCurrencySettings"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/currency/updatecurrencysettings#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/currency/updatecurrencysettings)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/currency/updatecurrencysettings)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Currency](https://developers.maropost.com/documentation/engineers/api-documentation/currency)
- [UpdateCurrencySettings](https://developers.maropost.com/documentation/engineers/api-documentation/currency/updatecurrencysettings)

# UpdateCurrencySettings

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateCurrencySettings |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateCurrencySettings |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to Update currency settings. |
| XSD Schema | [UpdateCurrencySettings XSD](https://www.neto.com.au/assets/api/UpdateCurrencySettings.xsd)   \|   [UpdateCurrencySettings Response XSD](https://www.neto.com.au/assets/api/UpdateCurrencySettingsResponse.xsd) |

## UpdateCurrencySettings Post

You must specify at least one filter and one OutputSelector in your UpdateCurrencySettings request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCurrencySettings>
   <CurrencySettings>
    <DEFAULTCOUNTRY>(String)</DEFAULTCOUNTRY>
    <DEFAULTCURRENCY>(String)</DEFAULTCURRENCY>
    <GST_INC_CPANEL>(String)</GST_INC_CPANEL>
    <GST_AMT>(String)</GST_AMT>
   </CurrencySettings>
</UpdateCurrencySettings>

```

### JSON POST

```rainbow rainbow-show
{
  "CurrencySettings": {
﻿    "DEFAULTCOUNTRY":["String"﻿/*, ...*/],
    "DEFAULTCURRENCY":["String"﻿/*, ...*/],
    "GST_INC_CPANEL":["String"﻿/*, ...*/],
    "GST_AMT":["String"﻿/*, ...*/]
} ﻿
}

```

#### <CurrencySettings>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| DEFAULTCOUNTRY | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| DEFAULTCURRENCY | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| GST\_INC\_CPANEL | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| GST\_AMT | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |

* * *

## UpdateCurrencySettings Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCurrencySettings>
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
     <Success>
      <Message>(String)</Message>
      <SeverityCode>(String)</SeverityCode>
     </Success>
   </Messages>
</UpdateCurrencySettings>

```

### JSON Response

```rainbow rainbow-show
{
  "Messages": {
﻿    "Error": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String",\
      "Description":"String"\
} ] ,﻿    "Warning": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ,﻿    "Success": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ﻿
} ﻿
}

```

#### <Messages>

| Element Name | Field Type |
| --- | --- |
| Error | [ErrorType](https://developers.maropost.com/api-data-types) |
| Warning | [WarningType](https://developers.maropost.com/api-data-types) |
| Success | [SuccessType](https://developers.maropost.com/api-data-types) |

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

#### <Success>

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