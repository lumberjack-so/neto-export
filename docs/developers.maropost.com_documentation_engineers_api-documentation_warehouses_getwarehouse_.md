---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/getwarehouse/"
title: "Engineers API documentation Warehouses GetWarehouse"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/getwarehouse/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/getwarehouse/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/getwarehouse/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Warehouses](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/)
- [GetWarehouse](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/getwarehouse/)

# GetWarehouse

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetWarehouse |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetWarehouse |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get warehouse data. A successful call to GetWarehouse returns the data requested. |
| XSD Schema | [GetWarehouse XSD](https://www.neto.com.au/assets/api/GetWarehouse.xsd)   \|   [GetWarehouse Response XSD](https://www.neto.com.au/assets/api/GetWarehouseResponse.xsd) |

## GetWarehouse Post

You must specify at least one filter and one OutputSelector in your GetWarehouse request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetWarehouse>
   <Filter>
    <WarehouseID>(Integer)</WarehouseID>
    <WarehouseReference>(String)</WarehouseReference>
    <WarehouseName>(String)</WarehouseName>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>WarehouseID</OutputSelector>
    <OutputSelector>IsPrimary</OutputSelector>
    <OutputSelector>IsActive</OutputSelector>
    <OutputSelector>ShowQuantity</OutputSelector>
    <OutputSelector>WarehouseReference</OutputSelector>
    <OutputSelector>WarehouseName</OutputSelector>
    <OutputSelector>WarehouseStreet1</OutputSelector>
    <OutputSelector>WarehouseStreet2</OutputSelector>
    <OutputSelector>WarehouseCity</OutputSelector>
    <OutputSelector>WarehouseState</OutputSelector>
    <OutputSelector>WarehousePostcode</OutputSelector>
    <OutputSelector>WarehouseCountry</OutputSelector>
    <OutputSelector>WarehouseContact</OutputSelector>
    <OutputSelector>WarehousePhone</OutputSelector>
    <OutputSelector>WarehouseNotes</OutputSelector>
   </Filter>
</GetWarehouse>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "WarehouseID":["Integer"﻿/*, ...*/],
    "WarehouseReference":["String"﻿/*, ...*/],
    "WarehouseName":["String"﻿/*, ...*/],
    "Page":"Integer",
    "Limit":"Integer",
    "OutputSelector":["Enumeration"﻿/*, ...*/]
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| WarehouseID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| WarehouseReference | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| WarehouseName | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (ID, WarehouseID, IsPrimary, IsActive, ShowQuantity, WarehouseReference, WarehouseName, WarehouseStreet1, WarehouseStreet2, WarehouseCity, WarehouseState, WarehousePostcode, WarehouseCountry, WarehouseContact, WarehousePhone, WarehouseNotes) |

* * *

## GetWarehouse Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetWarehouse>
   <Warehouse>
    <ID>(String)</ID>
    <WarehouseNotes>(String)</WarehouseNotes>
    <WarehousePhone>(String)</WarehousePhone>
    <WarehouseContact>(String)</WarehouseContact>
    <WarehouseCountry>(String)</WarehouseCountry>
    <WarehousePostcode>(String)</WarehousePostcode>
    <WarehouseState>(String)</WarehouseState>
    <WarehouseCity>(String)</WarehouseCity>
    <WarehouseStreet2>(String)</WarehouseStreet2>
    <WarehouseStreet1>(String)</WarehouseStreet1>
    <WarehouseName>(String)</WarehouseName>
    <WarehouseReference>(String)</WarehouseReference>
    <ShowQuantity>(String)</ShowQuantity>
    <IsActive>(Boolean)</IsActive>
    <IsPrimary>(Boolean)</IsPrimary>
    <WarehouseID>(Integer)</WarehouseID>
   </Warehouse>
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
</GetWarehouse>

```

### JSON Response

```rainbow rainbow-show
{
  "Warehouse": [ {\
﻿    "ID":"String",\
    "WarehouseNotes":"String",\
    "WarehousePhone":"String",\
    "WarehouseContact":"String",\
    "WarehouseCountry":"String",\
    "WarehousePostcode":"String",\
    "WarehouseState":"String",\
    "WarehouseCity":"String",\
    "WarehouseStreet2":"String",\
    "WarehouseStreet1":"String",\
    "WarehouseName":"String",\
    "WarehouseReference":"String",\
    "ShowQuantity":"String",\
    "IsActive":"Boolean",\
    "IsPrimary":"Boolean",\
    "WarehouseID":"Integer"\
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

#### <Warehouse>

| Element Name | Field Type |
| --- | --- |
| ID | [String](https://developers.maropost.com/api-data-types) |
| WarehouseNotes | [String](https://developers.maropost.com/api-data-types) |
| WarehousePhone | [String](https://developers.maropost.com/api-data-types) |
| WarehouseContact | [String](https://developers.maropost.com/api-data-types) |
| WarehouseCountry | [String](https://developers.maropost.com/api-data-types) |
| WarehousePostcode | [String](https://developers.maropost.com/api-data-types) |
| WarehouseState | [String](https://developers.maropost.com/api-data-types) |
| WarehouseCity | [String](https://developers.maropost.com/api-data-types) |
| WarehouseStreet2 | [String](https://developers.maropost.com/api-data-types) |
| WarehouseStreet1 | [String](https://developers.maropost.com/api-data-types) |
| WarehouseName | [String](https://developers.maropost.com/api-data-types) |
| WarehouseReference | [String](https://developers.maropost.com/api-data-types) |
| ShowQuantity | [String](https://developers.maropost.com/api-data-types) |
| IsActive | [Boolean](https://developers.maropost.com/api-data-types) |
| IsPrimary | [Boolean](https://developers.maropost.com/api-data-types) |
| WarehouseID | [Integer](https://developers.maropost.com/api-data-types) |

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