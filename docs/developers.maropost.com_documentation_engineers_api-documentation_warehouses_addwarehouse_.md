---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/addwarehouse/"
title: "Engineers API documentation Warehouses AddWarehouse"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/addwarehouse/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/addwarehouse/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/addwarehouse/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Warehouses](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/)
- [AddWarehouse](https://developers.maropost.com/documentation/engineers/api-documentation/warehouses/addwarehouse/)

# AddWarehouse

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddWarehouse |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddWarehouse |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new warehouse. You can store stock in multiple warehouses with Neto by Maropost. |
| XSD Schema | [AddWarehouse XSD](https://www.neto.com.au/assets/api/AddWarehouse.xsd)   \|   [AddWarehouse Response XSD](https://www.neto.com.au/assets/api/AddWarehouseResponse.xsd) |

## AddWarehouse Post

You must specify at least one filter and one OutputSelector in your AddWarehouse request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddWarehouse>
   <Warehouse>
    <WarehouseReference>(String)</WarehouseReference>
    <IsActive>(Boolean)</IsActive>
    <ShowQuantity>(Boolean)</ShowQuantity>
    <IsPrimary>(Boolean)</IsPrimary>
    <WarehouseName>(String)</WarehouseName>
    <WarehouseContact>(String)</WarehouseContact>
    <WarehouseStreet1>(String)</WarehouseStreet1>
    <WarehouseStreet2>(String)</WarehouseStreet2>
    <WarehousePostcode>(String)</WarehousePostcode>
    <WarehousePhone>(String)</WarehousePhone>
    <WarehouseCity>(String)</WarehouseCity>
    <WarehouseState>(String)</WarehouseState>
    <WarehouseCountry>(String)</WarehouseCountry>
    <WarehouseNotes>(String)</WarehouseNotes>
   </Warehouse>

</AddWarehouse>

```

### JSON POST

```rainbow rainbow-show
{
  "Warehouse": [ {\
﻿    "WarehouseReference":"String",\
    "IsActive":"Boolean",\
    "ShowQuantity":"Boolean",\
    "IsPrimary":"Boolean",\
    "WarehouseName":"String",\
    "WarehouseContact":"String",\
    "WarehouseStreet1":"String",\
    "WarehouseStreet2":"String",\
    "WarehousePostcode":"String",\
    "WarehousePhone":"String",\
    "WarehouseCity":"String",\
    "WarehouseState":"String",\
    "WarehouseCountry":"String",\
    "WarehouseNotes":"String"\
} ] ﻿
}

```

#### <Warehouse>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| WarehouseReference | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| IsActive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ShowQuantity | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsPrimary | **Required** | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| WarehouseName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| WarehouseContact | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| WarehouseStreet1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| WarehouseStreet2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| WarehousePostcode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| WarehousePhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| WarehouseCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| WarehouseState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| WarehouseCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| WarehouseNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |

* * *

## AddWarehouse Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddWarehouse>
   <Warehouse>
    <WarehouseID>(Integer)</WarehouseID>
    <WarehouseReference>(String)</WarehouseReference>
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
</AddWarehouse>

```

### JSON Response

```rainbow rainbow-show
{
  "Warehouse": [ {\
﻿    "WarehouseID":"Integer",\
    "WarehouseReference":"String"\
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
| WarehouseID | [Integer](https://developers.maropost.com/api-data-types) |
| WarehouseReference | [String](https://developers.maropost.com/api-data-types) |

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