---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/suppliers/updatesupplier/"
title: "Engineers API documentation Suppliers UpdateSupplier"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/suppliers/updatesupplier/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/suppliers/updatesupplier/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/suppliers/updatesupplier/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Suppliers](https://developers.maropost.com/documentation/engineers/api-documentation/suppliers)
- [UpdateSupplier](https://developers.maropost.com/documentation/engineers/api-documentation/suppliers/updatesupplier/)

# UpdateSupplier

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateSupplier |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateSupplier |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to update an existing Supplier. |
| XSD Schema | [UpdateSupplier XSD](https://www.neto.com.au/assets/api/UpdateSupplier.xsd)   \|   [UpdateSupplier Response XSD](https://www.neto.com.au/assets/api/UpdateSupplierResponse.xsd) |

## UpdateSupplier Post

You must specify at least one filter and one OutputSelector in your UpdateSupplier request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateSupplier>
   <Supplier>
    <SupplierID>(String)</SupplierID>
    <SupplierReference>(Integer)</SupplierReference>
    <LeadTime1>(Integer)</LeadTime1>
    <LeadTime2>(Integer)</LeadTime2>
    <SupplierCompany>(String)</SupplierCompany>
    <SupplierStreet1>(String)</SupplierStreet1>
    <SupplierStreet2>(String)</SupplierStreet2>
    <SupplierCity>(String)</SupplierCity>
    <SupplierState>(String)</SupplierState>
    <SupplierPostcode>(String)</SupplierPostcode>
    <SupplierCountry>(String)</SupplierCountry>
    <SupplierPhone>(String)</SupplierPhone>
    <SupplierFax>(String)</SupplierFax>
    <SupplierURL>(String)</SupplierURL>
    <SupplierEmail>(String)</SupplierEmail>
    <NotifyByEmail>(Boolean)</NotifyByEmail>
    <ExportTemplate>(String)</ExportTemplate>
    <SupplierCurrencyCode>(String)</SupplierCurrencyCode>
    <AccountCode>(String)</AccountCode>
    <FactoryStreet1>(String)</FactoryStreet1>
    <FactoryStreet2>(String)</FactoryStreet2>
    <FactoryCity>(String)</FactoryCity>
    <FactoryState>(String)</FactoryState>
    <FactoryPostcode>(String)</FactoryPostcode>
    <FactoryCountry>(String)</FactoryCountry>
    <SupplierNotes>(String)</SupplierNotes>
   </Supplier>

</UpdateSupplier>

```

### JSON POST

```rainbow rainbow-show
{
  "Supplier": [ {\
﻿    "SupplierID":"String",\
    "SupplierReference":"Integer",\
    "LeadTime1":"Integer",\
    "LeadTime2":"Integer",\
    "SupplierCompany":"String",\
    "SupplierStreet1":"String",\
    "SupplierStreet2":"String",\
    "SupplierCity":"String",\
    "SupplierState":"String",\
    "SupplierPostcode":"String",\
    "SupplierCountry":"String",\
    "SupplierPhone":"String",\
    "SupplierFax":"String",\
    "SupplierURL":"String",\
    "SupplierEmail":"String",\
    "NotifyByEmail":"Boolean",\
    "ExportTemplate":"String",\
    "SupplierCurrencyCode":"String",\
    "AccountCode":"String",\
    "FactoryStreet1":"String",\
    "FactoryStreet2":"String",\
    "FactoryCity":"String",\
    "FactoryState":"String",\
    "FactoryPostcode":"String",\
    "FactoryCountry":"String",\
    "SupplierNotes":"String"\
} ] ﻿
}

```

#### <Supplier>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SupplierID | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SupplierReference | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| LeadTime1 | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| LeadTime2 | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SupplierCompany | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SupplierStreet1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SupplierStreet2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SupplierCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SupplierState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SupplierPostcode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| SupplierCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| SupplierPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SupplierFax | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SupplierURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| SupplierEmail | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| NotifyByEmail | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ExportTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| SupplierCurrencyCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(3) |
| AccountCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| FactoryStreet1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| FactoryStreet2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| FactoryCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| FactoryState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| FactoryPostcode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| FactoryCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| SupplierNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## UpdateSupplier Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateSupplier>
   <Supplier>
    <SupplierID>(String)</SupplierID>
   </Supplier>
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
</UpdateSupplier>

```

### JSON Response

```rainbow rainbow-show
{
  "Supplier": [ {\
﻿    "SupplierID":"String"\
} ] ,﻿  "Messages": {
﻿    "Error": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String",\
      "Description":"String"\
} ] ,﻿    "Warning": [ {\
﻿      "Message":"String",\
      "SeverityCode":"String"\
} ] ﻿
} ,﻿
}

```

#### <Supplier>

| Element Name | Field Type |
| --- | --- |
| SupplierID | [String](https://developers.maropost.com/api-data-types) |

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