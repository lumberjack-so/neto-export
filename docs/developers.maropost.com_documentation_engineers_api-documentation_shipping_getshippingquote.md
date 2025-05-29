---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote"
title: "Engineers API documentation Shipping GetShippingQuote"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Shipping](https://developers.maropost.com/documentation/engineers/api-documentation/shipping)
- [GetShippingQuote](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote)

# GetShippingQuote

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetShippingQuote |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetShippingQuote |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [GetShippingQuote XSD](https://www.neto.com.au/assets/api/GetShippingQuote.xsd)   \|   [GetShippingQuote Response XSD](https://www.neto.com.au/assets/api/GetShippingQuoteResponse.xsd) |

## GetShippingQuote Post

You must specify at least one filter and one OutputSelector in your GetShippingQuote request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetShippingQuote>
   <ShippingQuote>
    <ShipStreetLine1>(String)</ShipStreetLine1>
    <ShipStreetLine2>(String)</ShipStreetLine2>
    <ShipPostCode>(String)</ShipPostCode>
    <ShipCountry>(String)</ShipCountry>
    <ShipCity>(String)</ShipCity>
    <ShipState>(String)</ShipState>
    <ShipPOBox>(Boolean)</ShipPOBox>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <UserGroupId>(Integer)</UserGroupId>
     <OrderLines>
       <OrderLine>
        <SKU>(String)</SKU>
        <Quantity>(Integer)</Quantity>
        <UnitPrice>(Decimal)</UnitPrice>
       </OrderLine>
     </OrderLines>     <ShippingMethod>
      <ID>(Integer)</ID>
     </ShippingMethod>   </ShippingQuote>
</GetShippingQuote>

```

### JSON POST

```rainbow rainbow-show
{
  "ShippingQuote": {
﻿    "ShipStreetLine1":"String",
    "ShipStreetLine2":"String",
    "ShipPostCode":"String",
    "ShipCountry":"String",
    "ShipCity":"String",
    "ShipState":"String",
    "ShipPOBox":"Boolean",
    "TaxInclusive":"Boolean",
    "UserGroupId":"Integer",
    "OrderLines": {
﻿      "OrderLine": [ {\
﻿        "SKU":"String",\
        "Quantity":"Integer",\
        "UnitPrice":"Decimal"\
} ] ﻿
} ,﻿    "ShippingMethod": {
﻿      "ID":"Integer"
} ﻿
} ﻿
}

```

#### <ShippingQuote>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ShipStreetLine1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipStreetLine2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipPostCode | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| ShipCountry | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| ShipCity | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipState | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipPOBox | **Required** | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| TaxInclusive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| UserGroupId | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| OrderLines | Optional | [OrderLines](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote#OrderLines) |
| ShippingMethod | Optional | [ShippingMethod](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote#ShippingMethod) |

* * *

#### <OrderLines>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| OrderLine | Optional<br>_Supports Multiple Elements_ | [OrderLine](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/shipping/getshippingquote#OrderLine) |

* * *

#### <OrderLine>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Quantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| UnitPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

#### <ShippingMethod>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## GetShippingQuote Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetShippingQuote>
   <ShippingQuotes>
     <ShippingQuote>
      <PickUp>(Boolean)</PickUp>
      <ShipPOBox>(Boolean)</ShipPOBox>
      <DeliveryTime>(Integer)</DeliveryTime>
      <ShippingCost>(Decimal)</ShippingCost>
      <TaxInclusive>(Boolean)</TaxInclusive>
       <ShippingMethod>
        <ID>(Integer)</ID>
        <Name>(String)</Name>
        <Description>(String)</Description>
        <RoutingGroup>(String)</RoutingGroup>
        <SortOrder>(Integer)</SortOrder>
       </ShippingMethod>     </ShippingQuote>
   </ShippingQuotes>
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
</GetShippingQuote>

```

### JSON Response

```rainbow rainbow-show
{
  "ShippingQuotes": [ {\
﻿    "ShippingQuote": [ {\
﻿      "PickUp":"Boolean",\
      "ShipPOBox":"Boolean",\
      "DeliveryTime":"Integer",\
      "ShippingCost":"Decimal",\
      "TaxInclusive":"Boolean",\
      "ShippingMethod": {\
﻿        "ID":"Integer",\
        "Name":"String",\
        "Description":"String",\
        "RoutingGroup":"String",\
        "SortOrder":"Integer"\
} ﻿\
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

#### <ShippingQuotes>

| Element Name | Field Type |
| --- | --- |
| ShippingQuote | [ShippingQuoteType](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingQuote>

| Element Name | Field Type |
| --- | --- |
| PickUp | [Boolean](https://developers.maropost.com/api-data-types) |
| ShipPOBox | [Boolean](https://developers.maropost.com/api-data-types) |
| DeliveryTime | [Integer](https://developers.maropost.com/api-data-types) |
| ShippingCost | [Decimal](https://developers.maropost.com/api-data-types) |
| TaxInclusive | [Boolean](https://developers.maropost.com/api-data-types) |
| ShippingMethod | [ShippingMethodType](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingMethod>

| Element Name | Field Type |
| --- | --- |
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| Name | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |
| RoutingGroup | [String](https://developers.maropost.com/api-data-types) |
| SortOrder | [Integer](https://developers.maropost.com/api-data-types) |

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