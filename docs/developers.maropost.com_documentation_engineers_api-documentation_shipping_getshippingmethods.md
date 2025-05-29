---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingmethods"
title: "Engineers API documentation Shipping GetShippingMethods"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingmethods#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingmethods)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingmethods)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Shipping](https://developers.maropost.com/documentation/engineers/api-documentation/shipping)
- [GetShippingMethods](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingmethods)

# GetShippingMethods

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetShippingMethods |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetShippingMethods |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Get shipping methods. |
| XSD Schema | [GetShippingMethods XSD](https://www.neto.com.au/assets/api/GetShippingMethods.xsd)   \|   [GetShippingMethods Response XSD](https://www.neto.com.au/assets/api/GetShippingMethodsResponse.xsd) |

## GetShippingMethods Post

You must specify at least one filter and one OutputSelector in your GetShippingMethods request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetShippingMethods>

</GetShippingMethods>

```

### JSON POST

```rainbow rainbow-show
{

}

```

## GetShippingMethods Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetShippingMethods>
   <ShippingMethods>
     <ShippingMethod>
      <id>(Integer)</id>
      <name>(String)</name>
      <description>(String)</description>
      <status>(String)</status>
       <visibility>
        <customers>(Boolean)</customers>
        <ebay>(Boolean)</ebay>
        <staff>(Boolean)</staff>
       </visibility>     </ShippingMethod>
   </ShippingMethods>   <Messages>
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
</GetShippingMethods>

```

### JSON Response

```rainbow rainbow-show
{
  "ShippingMethods": {
﻿    "ShippingMethod": [ {\
﻿      "id":"Integer",\
      "name":"String",\
      "description":"String",\
      "status":"String",\
      "visibility": {\
﻿        "customers":"Boolean",\
        "ebay":"Boolean",\
        "staff":"Boolean"\
} ﻿\
} ] ﻿
} ,﻿  "Messages": {
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

#### <ShippingMethods>

| Element Name | Field Type |
| --- | --- |
| ShippingMethod | [ShippingMethodType](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingMethod>

| Element Name | Field Type |
| --- | --- |
| id | [Integer](https://developers.maropost.com/api-data-types) |
| name | [String](https://developers.maropost.com/api-data-types) |
| description | [String](https://developers.maropost.com/api-data-types) |
| status | [String](https://developers.maropost.com/api-data-types) |
| visibility | [visibilityType](https://developers.maropost.com/api-data-types) |

* * *

#### <visibility>

| Element Name | Field Type |
| --- | --- |
| customers | [Boolean](https://developers.maropost.com/api-data-types) |
| ebay | [Boolean](https://developers.maropost.com/api-data-types) |
| staff | [Boolean](https://developers.maropost.com/api-data-types) |

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