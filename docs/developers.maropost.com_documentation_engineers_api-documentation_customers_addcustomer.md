---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer"
title: "Engineers API documentation Customers AddCustomer"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Customers](https://developers.maropost.com/documentation/engineers/api-documentation/customers)
- [AddCustomer](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer)

# AddCustomer

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCustomer |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCustomer |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new customer. |
| XSD Schema | [AddCustomer XSD](https://www.neto.com.au/assets/api/AddCustomer.xsd)   \|   [AddCustomer Response XSD](https://www.neto.com.au/assets/api/AddCustomerResponse.xsd) |

## AddCustomer Post

You must specify at least one filter and one OutputSelector in your AddCustomer request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCustomer>
   <Customer>
    <Username>(String)</Username>
    <Type></Type>
    <Password>(String)</Password>
    <EmailAddress>(String)</EmailAddress>
    <SecondaryEmailAddress>(String)</SecondaryEmailAddress>
    <NewsletterSubscriber>(Boolean)</NewsletterSubscriber>
    <ParentUsername>(String)</ParentUsername>
    <ApprovalUsername>(String)</ApprovalUsername>
    <ReferralUsername>(String)</ReferralUsername>
    <ReferralCommission>(Decimal)</ReferralCommission>
    <Gender></Gender>
    <DateOfBirth>(DateTime)</DateOfBirth>
    <IdentificationType>(String)</IdentificationType>
    <IdentificationDetails>(String)</IdentificationDetails>
    <DefaultDiscounts>(Decimal)</DefaultDiscounts>
    <DefaultDocumentTemplate>(String)</DefaultDocumentTemplate>
    <InternalNotes>(String)</InternalNotes>
    <ABN>(String)</ABN>
    <WebsiteURL>(String)</WebsiteURL>
    <CreditLimit>(Decimal)</CreditLimit>
    <DefaultInvoiceTerms>(String)</DefaultInvoiceTerms>
    <Classification1>(String)</Classification1>
    <Classification2>(String)</Classification2>
    <SalesChannel>(String)</SalesChannel>
    <Active>(Boolean)</Active>
    <OnCreditHold>(Boolean)</OnCreditHold>
    <UserGroup>(String)</UserGroup>
    <AccountManager>(String)</AccountManager>
    <DefaultOrderType></DefaultOrderType>
    <UserCustom1>(String)</UserCustom1>
    <UserCustom2>(String)</UserCustom2>
    <UserCustom3>(String)</UserCustom3>
    <UserCustom4>(String)</UserCustom4>
    <UserCustom5>(String)</UserCustom5>
    <UserCustom6>(String)</UserCustom6>
    <UserCustom7>(String)</UserCustom7>
    <UserCustom8>(String)</UserCustom8>
    <UserCustom9>(String)</UserCustom9>
    <UserCustom10>(String)</UserCustom10>
    <UserCustom11>(String)</UserCustom11>
    <UserCustom12>(String)</UserCustom12>
    <UserCustom13>(String)</UserCustom13>
    <UserCustom14>(String)</UserCustom14>
    <UserCustom15>(String)</UserCustom15>
    <UserCustom16>(String)</UserCustom16>
    <UserCustom17>(String)</UserCustom17>
    <UserCustom18>(String)</UserCustom18>
    <UserCustom19>(String)</UserCustom19>
    <UserCustom20>(String)</UserCustom20>
    <UserCustom21>(String)</UserCustom21>
    <UserCustom22>(String)</UserCustom22>
    <UserCustom23>(String)</UserCustom23>
    <UserCustom24>(String)</UserCustom24>
    <UserCustom25>(String)</UserCustom25>
    <UserCustom26>(String)</UserCustom26>
    <UserCustom27>(String)</UserCustom27>
    <UserCustom28>(String)</UserCustom28>
    <UserCustom29>(String)</UserCustom29>
    <UserCustom30>(String)</UserCustom30>
    <UserCustom31>(String)</UserCustom31>
    <UserCustom32>(String)</UserCustom32>
    <UserCustom33>(String)</UserCustom33>
    <UserCustom34>(String)</UserCustom34>
    <UserCustom35>(String)</UserCustom35>
    <UserCustom36>(String)</UserCustom36>
    <UserCustom37>(String)</UserCustom37>
    <UserCustom38>(String)</UserCustom38>
    <UserCustom39>(String)</UserCustom39>
    <UserCustom40>(String)</UserCustom40>
    <UserCustom41>(String)</UserCustom41>
    <UserCustom42>(String)</UserCustom42>
    <UserCustom43>(String)</UserCustom43>
    <UserCustom44>(String)</UserCustom44>
    <UserCustom45>(String)</UserCustom45>
    <UserCustom46>(String)</UserCustom46>
    <UserCustom47>(String)</UserCustom47>
    <UserCustom48>(String)</UserCustom48>
    <UserCustom49>(String)</UserCustom49>
    <UserCustom50>(String)</UserCustom50>
     <BillingAddress>
      <BillFirstName>(String)</BillFirstName>
      <BillLastName>(String)</BillLastName>
      <BillCompany>(String)</BillCompany>
      <BillStreetLine1>(String)</BillStreetLine1>
      <BillStreetLine2>(String)</BillStreetLine2>
      <BillCity>(String)</BillCity>
      <BillState>(String)</BillState>
      <BillPostCode>(String)</BillPostCode>
      <BillCountry>(String)</BillCountry>
      <BillPhone>(String)</BillPhone>
      <BillFax>(String)</BillFax>
     </BillingAddress>     <ShippingAddress>
      <ShipTitle>(String)</ShipTitle>
      <ShipFirstName>(String)</ShipFirstName>
      <ShipLastName>(String)</ShipLastName>
      <ShipCompany>(String)</ShipCompany>
      <ShipStreetLine1>(String)</ShipStreetLine1>
      <ShipStreetLine2>(String)</ShipStreetLine2>
      <ShipCity>(String)</ShipCity>
      <ShipState>(String)</ShipState>
      <ShipPostCode>(String)</ShipPostCode>
      <ShipCountry>(String)</ShipCountry>
      <ShipPhone>(String)</ShipPhone>
      <ShipFax>(String)</ShipFax>
     </ShippingAddress>   </Customer>

</AddCustomer>

```

### JSON POST

```rainbow rainbow-show
{
  "Customer": [ {\
﻿    "Username":"String",\
    "Type":"Enumeration",\
    "Password":"String",\
    "EmailAddress":"String",\
    "SecondaryEmailAddress":"String",\
    "NewsletterSubscriber":"Boolean",\
    "ParentUsername":"String",\
    "ApprovalUsername":"String",\
    "ReferralUsername":"String",\
    "ReferralCommission":"Decimal",\
    "Gender":"Enumeration",\
    "DateOfBirth":"DateTime",\
    "IdentificationType":"String",\
    "IdentificationDetails":"String",\
    "DefaultDiscounts":"Decimal",\
    "DefaultDocumentTemplate":"String",\
    "InternalNotes":"String",\
    "ABN":"String",\
    "WebsiteURL":"String",\
    "CreditLimit":"Decimal",\
    "DefaultInvoiceTerms":"String",\
    "Classification1":"String",\
    "Classification2":"String",\
    "SalesChannel":"String",\
    "Active":"Boolean",\
    "OnCreditHold":"Boolean",\
    "UserGroup":"String",\
    "AccountManager":"String",\
    "DefaultOrderType":"Enumeration",\
    "UserCustom1":"String",\
    "UserCustom2":"String",\
    "UserCustom3":"String",\
    "UserCustom4":"String",\
    "UserCustom5":"String",\
    "UserCustom6":"String",\
    "UserCustom7":"String",\
    "UserCustom8":"String",\
    "UserCustom9":"String",\
    "UserCustom10":"String",\
    "UserCustom11":"String",\
    "UserCustom12":"String",\
    "UserCustom13":"String",\
    "UserCustom14":"String",\
    "UserCustom15":"String",\
    "UserCustom16":"String",\
    "UserCustom17":"String",\
    "UserCustom18":"String",\
    "UserCustom19":"String",\
    "UserCustom20":"String",\
    "UserCustom21":"String",\
    "UserCustom22":"String",\
    "UserCustom23":"String",\
    "UserCustom24":"String",\
    "UserCustom25":"String",\
    "UserCustom26":"String",\
    "UserCustom27":"String",\
    "UserCustom28":"String",\
    "UserCustom29":"String",\
    "UserCustom30":"String",\
    "UserCustom31":"String",\
    "UserCustom32":"String",\
    "UserCustom33":"String",\
    "UserCustom34":"String",\
    "UserCustom35":"String",\
    "UserCustom36":"String",\
    "UserCustom37":"String",\
    "UserCustom38":"String",\
    "UserCustom39":"String",\
    "UserCustom40":"String",\
    "UserCustom41":"String",\
    "UserCustom42":"String",\
    "UserCustom43":"String",\
    "UserCustom44":"String",\
    "UserCustom45":"String",\
    "UserCustom46":"String",\
    "UserCustom47":"String",\
    "UserCustom48":"String",\
    "UserCustom49":"String",\
    "UserCustom50":"String",\
    "BillingAddress": {\
﻿      "BillFirstName":"String",\
      "BillLastName":"String",\
      "BillCompany":"String",\
      "BillStreetLine1":"String",\
      "BillStreetLine2":"String",\
      "BillCity":"String",\
      "BillState":"String",\
      "BillPostCode":"String",\
      "BillCountry":"String",\
      "BillPhone":"String",\
      "BillFax":"String"\
} ,﻿    "ShippingAddress": {\
﻿      "ShipTitle":"String",\
      "ShipFirstName":"String",\
      "ShipLastName":"String",\
      "ShipCompany":"String",\
      "ShipStreetLine1":"String",\
      "ShipStreetLine2":"String",\
      "ShipCity":"String",\
      "ShipState":"String",\
      "ShipPostCode":"String",\
      "ShipCountry":"String",\
      "ShipPhone":"String",\
      "ShipFax":"String"\
} ﻿\
} ] ﻿
}

```

#### <Customer>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Username | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Type | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Customer, Prospect) |
| Password | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| EmailAddress | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SecondaryEmailAddress | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| NewsletterSubscriber | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ParentUsername | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ApprovalUsername | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ReferralUsername | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ReferralCommission | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Gender | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(male, female, unisex) |
| DateOfBirth | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| IdentificationType | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| IdentificationDetails | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| DefaultDiscounts | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DefaultDocumentTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| InternalNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ABN | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| WebsiteURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| CreditLimit | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DefaultInvoiceTerms | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Classification1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| Classification2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| SalesChannel | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnCreditHold | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| UserGroup | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| AccountManager | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| DefaultOrderType | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(dropshipping, sales) |
| UserCustom1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom4 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom5 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom6 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom7 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom8 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom9 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom10 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom11 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom12 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom13 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom14 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom15 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom16 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom17 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom18 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom19 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom20 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom21 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom22 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom23 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom24 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom25 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom26 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom27 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom28 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom29 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom30 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom31 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom32 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom33 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom34 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom35 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom36 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom37 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom38 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom39 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom40 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom41 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom42 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom43 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom44 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom45 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom46 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom47 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom48 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom49 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| UserCustom50 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| BillingAddress | Optional | [BillingAddress](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer#BillingAddress) |
| ShippingAddress | Optional | [ShippingAddress](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/customers/addcustomer#ShippingAddress) |

* * *

#### <BillingAddress>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| BillFirstName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillLastName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillCompany | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillStreetLine1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillStreetLine2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BillPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| BillCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| BillPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| BillFax | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |

* * *

#### <ShippingAddress>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ShipTitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShipFirstName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipLastName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipCompany | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipStreetLine1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipStreetLine2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipCity | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipState | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShipPostCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| ShipCountry | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2) |
| ShipPhone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| ShipFax | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |

* * *

## AddCustomer Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCustomer>
   <Customer>
    <Username>(String)</Username>
   </Customer>
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
</AddCustomer>

```

### JSON Response

```rainbow rainbow-show
{
  "Customer": [ {\
﻿    "Username":"String"\
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

#### <Customer>

| Element Name | Field Type |
| --- | --- |
| Username | [String](https://developers.maropost.com/api-data-types) |

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