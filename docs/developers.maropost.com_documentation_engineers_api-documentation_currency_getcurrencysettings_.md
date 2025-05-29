---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/currency/getcurrencysettings/"
title: "Engineers API documentation Currency GetCurrencySettings"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/currency/getcurrencysettings/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/currency/getcurrencysettings/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/currency/getcurrencysettings/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Currency](https://developers.maropost.com/documentation/engineers/api-documentation/currency)
- [GetCurrencySettings](https://developers.maropost.com/documentation/engineers/api-documentation/currency/getcurrencysettings/)

# GetCurrencySettings

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCurrencySettings |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCurrencySettings |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get payment data. A successful call to GetCurrencySettings returns the data requested. |
| XSD Schema | [GetCurrencySettings XSD](https://www.neto.com.au/assets/api/GetCurrencySettings.xsd)   \|   [GetCurrencySettings Response XSD](https://www.neto.com.au/assets/api/GetCurrencySettingsResponse.xsd) |

## GetCurrencySettings Post

You must specify at least one filter and one OutputSelector in your GetCurrencySettings request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCurrencySettings>

</GetCurrencySettings>

```

### JSON POST

```rainbow rainbow-show
{

}

```

## GetCurrencySettings Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCurrencySettings>
   <CurrencySettings>
    <DEFAULTCOUNTRY>(String)</DEFAULTCOUNTRY>
    <DEFAULTCURRENCY>(String)</DEFAULTCURRENCY>
    <GST_AMT>(String)</GST_AMT>
   </CurrencySettings>
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
</GetCurrencySettings>

```

### JSON Response

```rainbow rainbow-show
{
  "CurrencySettings": [ {\
﻿    "DEFAULTCOUNTRY":"String",\
    "DEFAULTCURRENCY":"String",\
    "GST_AMT":"String"\
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

#### <CurrencySettings>

| Element Name | Field Type |
| --- | --- |
| DEFAULTCOUNTRY | [String](https://developers.maropost.com/api-data-types) |
| DEFAULTCURRENCY | [String](https://developers.maropost.com/api-data-types) |
| GST\_AMT | [String](https://developers.maropost.com/api-data-types) |

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