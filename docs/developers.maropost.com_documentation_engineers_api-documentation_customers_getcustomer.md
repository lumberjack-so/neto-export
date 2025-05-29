---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/customers/getcustomer"
title: "Engineers API documentation Customers GetCustomer"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/customers/getcustomer#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/customers/getcustomer)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/customers/getcustomer)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Customers](https://developers.maropost.com/documentation/engineers/api-documentation/customers)
- [GetCustomer](https://developers.maropost.com/documentation/engineers/api-documentation/customers/getcustomer)

# GetCustomer

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCustomer |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCustomer |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get customer data. A successful call to GetCustomer returns the data requested |
| XSD Schema | [GetCustomer XSD](https://www.neto.com.au/assets/api/GetCustomer.xsd)   \|   [GetCustomer Response XSD](https://www.neto.com.au/assets/api/GetCustomerResponse.xsd) |

## GetCustomer Post

You must specify at least one filter and one OutputSelector in your GetCustomer request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCustomer>
   <Filter>
    <ID>(Integer)</ID>
    <Username>(String)</Username>
    <Type>Prospect</Type>
    <Type>Customer</Type>
    <Active>(Boolean)</Active>
    <Email>(String)</Email>
    <Company>(String)</Company>
    <OnCreditHold>(Boolean)</OnCreditHold>
    <NewsletterSubscriber>(Boolean)</NewsletterSubscriber>
    <UserGroup>(String)</UserGroup>
    <BillState>(String)</BillState>
    <DateAddedFrom>(DateTime)</DateAddedFrom>
    <DateAddedTo>(DateTime)</DateAddedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OutputSelector>Username</OutputSelector>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>Type</OutputSelector>
    <OutputSelector>Password</OutputSelector>
    <OutputSelector>EmailAddress</OutputSelector>
    <OutputSelector>SecondaryEmailAddress</OutputSelector>
    <OutputSelector>NewsletterSubscriber</OutputSelector>
    <OutputSelector>BillingAddress</OutputSelector>
    <OutputSelector>ShippingAddress</OutputSelector>
    <OutputSelector>ShippingAddressBook</OutputSelector>
    <OutputSelector>ParentUsername</OutputSelector>
    <OutputSelector>ApprovalUsername</OutputSelector>
    <OutputSelector>ReferralUsername</OutputSelector>
    <OutputSelector>ReferralCommission</OutputSelector>
    <OutputSelector>Gender</OutputSelector>
    <OutputSelector>DateOfBirth</OutputSelector>
    <OutputSelector>IdentificationType</OutputSelector>
    <OutputSelector>IdentificationDetails</OutputSelector>
    <OutputSelector>DefaultDiscounts</OutputSelector>
    <OutputSelector>DefaultDocumentTemplate</OutputSelector>
    <OutputSelector>RegistrationDate</OutputSelector>
    <OutputSelector>InternalNotes</OutputSelector>
    <OutputSelector>ABN</OutputSelector>
    <OutputSelector>WebsiteURL</OutputSelector>
    <OutputSelector>CreditLimit</OutputSelector>
    <OutputSelector>DefaultInvoiceTerms</OutputSelector>
    <OutputSelector>Classification1</OutputSelector>
    <OutputSelector>Classification2</OutputSelector>
    <OutputSelector>SalesChannel</OutputSelector>
    <OutputSelector>DefaultShippingAddress</OutputSelector>
    <OutputSelector>Active</OutputSelector>
    <OutputSelector>OnCreditHold</OutputSelector>
    <OutputSelector>UserGroup</OutputSelector>
    <OutputSelector>AccountBalance</OutputSelector>
    <OutputSelector>AvailableCredit</OutputSelector>
    <OutputSelector>AccountManager</OutputSelector>
    <OutputSelector>DefaultOrderType</OutputSelector>
    <OutputSelector>UserCustom1</OutputSelector>
    <OutputSelector>UserCustom2</OutputSelector>
    <OutputSelector>UserCustom3</OutputSelector>
    <OutputSelector>UserCustom4</OutputSelector>
    <OutputSelector>UserCustom5</OutputSelector>
    <OutputSelector>UserCustom6</OutputSelector>
    <OutputSelector>UserCustom7</OutputSelector>
    <OutputSelector>UserCustom8</OutputSelector>
    <OutputSelector>UserCustom9</OutputSelector>
    <OutputSelector>UserCustom10</OutputSelector>
    <OutputSelector>UserCustom11</OutputSelector>
    <OutputSelector>UserCustom12</OutputSelector>
    <OutputSelector>UserCustom13</OutputSelector>
    <OutputSelector>UserCustom14</OutputSelector>
    <OutputSelector>UserCustom15</OutputSelector>
    <OutputSelector>UserCustom16</OutputSelector>
    <OutputSelector>UserCustom17</OutputSelector>
    <OutputSelector>UserCustom18</OutputSelector>
    <OutputSelector>UserCustom19</OutputSelector>
    <OutputSelector>UserCustom20</OutputSelector>
    <OutputSelector>UserCustom21</OutputSelector>
    <OutputSelector>UserCustom22</OutputSelector>
    <OutputSelector>UserCustom23</OutputSelector>
    <OutputSelector>UserCustom24</OutputSelector>
    <OutputSelector>UserCustom25</OutputSelector>
    <OutputSelector>UserCustom26</OutputSelector>
    <OutputSelector>UserCustom27</OutputSelector>
    <OutputSelector>UserCustom28</OutputSelector>
    <OutputSelector>UserCustom29</OutputSelector>
    <OutputSelector>UserCustom30</OutputSelector>
    <OutputSelector>UserCustom31</OutputSelector>
    <OutputSelector>UserCustom32</OutputSelector>
    <OutputSelector>UserCustom33</OutputSelector>
    <OutputSelector>UserCustom34</OutputSelector>
    <OutputSelector>UserCustom35</OutputSelector>
    <OutputSelector>UserCustom36</OutputSelector>
    <OutputSelector>UserCustom37</OutputSelector>
    <OutputSelector>UserCustom38</OutputSelector>
    <OutputSelector>UserCustom39</OutputSelector>
    <OutputSelector>UserCustom40</OutputSelector>
    <OutputSelector>UserCustom41</OutputSelector>
    <OutputSelector>UserCustom42</OutputSelector>
    <OutputSelector>UserCustom43</OutputSelector>
    <OutputSelector>UserCustom44</OutputSelector>
    <OutputSelector>UserCustom45</OutputSelector>
    <OutputSelector>UserCustom46</OutputSelector>
    <OutputSelector>UserCustom47</OutputSelector>
    <OutputSelector>UserCustom48</OutputSelector>
    <OutputSelector>UserCustom49</OutputSelector>
    <OutputSelector>UserCustom50</OutputSelector>
    <OutputSelector>DateAdded</OutputSelector>
    <OutputSelector>DateAddedLocal</OutputSelector>
    <OutputSelector>DateAddedUTC</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>DateUpdatedLocal</OutputSelector>
    <OutputSelector>DateUpdatedUTC</OutputSelector>
    <OutputSelector>CustomerLog</OutputSelector>
   </Filter>
</GetCustomer>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "ID":["Integer"﻿/*, ...*/],
    "Username":["String"﻿/*, ...*/],
    "Type":["Enumeration"﻿/*, ...*/],
    "Active":["Boolean"﻿/*, ...*/],
    "Email":["String"﻿/*, ...*/],
    "Company":["String"﻿/*, ...*/],
    "OnCreditHold":["Boolean"﻿/*, ...*/],
    "NewsletterSubscriber":["Boolean"﻿/*, ...*/],
    "UserGroup":["String"﻿/*, ...*/],
    "BillState":["String"﻿/*, ...*/],
    "DateAddedFrom":"DateTime",
    "DateAddedTo":"DateTime",
    "DateUpdatedFrom":"DateTime",
    "DateUpdatedTo":"DateTime",
    "Page":"Integer",
    "Limit":"Integer",
    "OutputSelector":["Enumeration"﻿/*, ...*/]
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| Username | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Type | Optional<br>_Supports Multiple Elements_ | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Prospect, Customer) |
| Active | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Email | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Company | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| OnCreditHold | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| NewsletterSubscriber | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| UserGroup | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| BillState | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| DateAddedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateAddedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (Username, ID, Type, Password, EmailAddress, SecondaryEmailAddress, NewsletterSubscriber, BillingAddress, ShippingAddress, ShippingAddressBook, ParentUsername, ApprovalUsername, ReferralUsername, ReferralCommission, Gender, DateOfBirth, IdentificationType, IdentificationDetails, DefaultDiscounts, DefaultDocumentTemplate, RegistrationDate, InternalNotes, ABN, WebsiteURL, CreditLimit, DefaultInvoiceTerms, Classification1, Classification2, SalesChannel, DefaultShippingAddress, Active, OnCreditHold, UserGroup, AccountBalance, AvailableCredit, AccountManager, DefaultOrderType, UserCustom1, UserCustom2, UserCustom3, UserCustom4, UserCustom5, UserCustom6, UserCustom7, UserCustom8, UserCustom9, UserCustom10, UserCustom11, UserCustom12, UserCustom13, UserCustom14, UserCustom15, UserCustom16, UserCustom17, UserCustom18, UserCustom19, UserCustom20, UserCustom21, UserCustom22, UserCustom23, UserCustom24, UserCustom25, UserCustom26, UserCustom27, UserCustom28, UserCustom29, UserCustom30, UserCustom31, UserCustom32, UserCustom33, UserCustom34, UserCustom35, UserCustom36, UserCustom37, UserCustom38, UserCustom39, UserCustom40, UserCustom41, UserCustom42, UserCustom43, UserCustom44, UserCustom45, UserCustom46, UserCustom47, UserCustom48, UserCustom49, UserCustom50, DateAdded, DateAddedLocal, DateAddedUTC, DateUpdated, DateUpdatedLocal, DateUpdatedUTC, CustomerLog) |

* * *

## GetCustomer Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCustomer>
   <Customer>
    <ID>(Integer)</ID>
    <Username>(String)</Username>
    <Type>(String)</Type>
    <Password>(String)</Password>
    <EmailAddress>(String)</EmailAddress>
    <SecondaryEmailAddress>(String)</SecondaryEmailAddress>
    <NewsletterSubscriber>(Boolean)</NewsletterSubscriber>
    <ParentUsername>(String)</ParentUsername>
    <ApprovalUsername>(String)</ApprovalUsername>
    <ReferralUsername>(String)</ReferralUsername>
    <ReferralCommission>(String)</ReferralCommission>
    <Gender>(String)</Gender>
    <DateOfBirth>(Date)</DateOfBirth>
    <IdentificationType>(String)</IdentificationType>
    <IdentificationDetails>(String)</IdentificationDetails>
    <DefaultDiscounts>(String)</DefaultDiscounts>
    <DefaultDocumentTemplate>(String)</DefaultDocumentTemplate>
    <RegistrationDate>(DateTime)</RegistrationDate>
    <InternalNotes>(String)</InternalNotes>
    <ABN>(String)</ABN>
    <WebsiteURL>(String)</WebsiteURL>
    <CreditLimit>(Decimal)</CreditLimit>
    <DefaultInvoiceTerms>(String)</DefaultInvoiceTerms>
    <Classification1>(String)</Classification1>
    <Classification2>(String)</Classification2>
    <SalesChannel>(String)</SalesChannel>
     <ShippingAddress>
      <ShipCompany>(String)</ShipCompany>
      <ShipFax>(String)</ShipFax>
      <ShipStreetLine1>(String)</ShipStreetLine1>
      <ShipCity>(String)</ShipCity>
      <ShipState>(String)</ShipState>
      <ShipLastName>(String)</ShipLastName>
      <ShipFirstName>(String)</ShipFirstName>
      <ShipCountry>(String)</ShipCountry>
      <ShipStreetLine2>(String)</ShipStreetLine2>
      <ShipPostCode>(String)</ShipPostCode>
      <ShipPhone>(String)</ShipPhone>
     </ShippingAddress>     <ShippingAddressBook>
       <ShippingAddress>
        <Id>(Integer)</Id>
        <Title>(String)</Title>
        <Default>(Boolean)</Default>
        <ShipCompany>(String)</ShipCompany>
        <ShipFax>(String)</ShipFax>
        <ShipStreetLine1>(String)</ShipStreetLine1>
        <ShipCity>(String)</ShipCity>
        <ShipState>(String)</ShipState>
        <ShipLastName>(String)</ShipLastName>
        <ShipFirstName>(String)</ShipFirstName>
        <ShipCountry>(String)</ShipCountry>
        <ShipStreetLine2>(String)</ShipStreetLine2>
        <ShipPostCode>(String)</ShipPostCode>
        <ShipPhone>(String)</ShipPhone>
       </ShippingAddress>
     </ShippingAddressBook>     <BillingAddress>
      <BillCompany>(String)</BillCompany>
      <BillFax>(String)</BillFax>
      <BillStreetLine1>(String)</BillStreetLine1>
      <BillCity>(String)</BillCity>
      <BillState>(String)</BillState>
      <BillLastName>(String)</BillLastName>
      <BillFirstName>(String)</BillFirstName>
      <BillCountry>(String)</BillCountry>
      <BillStreetLine2>(String)</BillStreetLine2>
      <BillPostCode>(String)</BillPostCode>
      <BillPhone>(String)</BillPhone>
     </BillingAddress>    <Active>(Boolean)</Active>
    <OnCreditHold>(Boolean)</OnCreditHold>
    <UserGroup>(String)</UserGroup>
    <AccountBalance>(String)</AccountBalance>
    <AvailableCredit>(String)</AvailableCredit>
     <AccountManager>
      <FirstName>(String)</FirstName>
      <LastName>(String)</LastName>
      <Username>(String)</Username>
      <Email>(String)</Email>
     </AccountManager>    <DefaultOrderType>(String)</DefaultOrderType>
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
    <DateAdded>(DateTime)</DateAdded>
    <DateAddedLocal>(DateTime)</DateAddedLocal>
    <DateAddedUTC>(DateTime)</DateAddedUTC>
    <DateUpdated>(DateTime)</DateUpdated>
    <DateUpdatedLocal>(DateTime)</DateUpdatedLocal>
    <DateUpdatedUTC>(DateTime)</DateUpdatedUTC>
     <CustomerLogs>
       <CustomerLog>
        <LogID>(Integer)</LogID>
        <Customer>(String)</Customer>
        <AllocatedTo>(String)</AllocatedTo>
        <Status>(String)</Status>
        <DateRequiredFollowUp>(Date)</DateRequiredFollowUp>
        <LastContacted>(DateTime)</LastContacted>
        <LastContactedLocal>(DateTime)</LastContactedLocal>
        <LastContactedUTC>(DateTime)</LastContactedUTC>
        <Notes>(String)</Notes>
       </CustomerLog>
     </CustomerLogs>   </Customer>
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
</GetCustomer>

```

### JSON Response

```rainbow rainbow-show
{
  "Customer": [ {\
﻿    "ID":"Integer",\
    "Username":"String",\
    "Type":"String",\
    "Password":"String",\
    "EmailAddress":"String",\
    "SecondaryEmailAddress":"String",\
    "NewsletterSubscriber":"Boolean",\
    "ParentUsername":"String",\
    "ApprovalUsername":"String",\
    "ReferralUsername":"String",\
    "ReferralCommission":"String",\
    "Gender":"String",\
    "DateOfBirth":"Date",\
    "IdentificationType":"String",\
    "IdentificationDetails":"String",\
    "DefaultDiscounts":"String",\
    "DefaultDocumentTemplate":"String",\
    "RegistrationDate":"DateTime",\
    "InternalNotes":"String",\
    "ABN":"String",\
    "WebsiteURL":"String",\
    "CreditLimit":"Decimal",\
    "DefaultInvoiceTerms":"String",\
    "Classification1":"String",\
    "Classification2":"String",\
    "SalesChannel":"String",\
    "ShippingAddress": {\
﻿      "ShipCompany":"String",\
      "ShipFax":"String",\
      "ShipStreetLine1":"String",\
      "ShipCity":"String",\
      "ShipState":"String",\
      "ShipLastName":"String",\
      "ShipFirstName":"String",\
      "ShipCountry":"String",\
      "ShipStreetLine2":"String",\
      "ShipPostCode":"String",\
      "ShipPhone":"String"\
} ,﻿    "ShippingAddressBook": {\
﻿      "ShippingAddress": [ {\
﻿        "Id":"Integer",\
        "Title":"String",\
        "Default":"Boolean",\
        "ShipCompany":"String",\
        "ShipFax":"String",\
        "ShipStreetLine1":"String",\
        "ShipCity":"String",\
        "ShipState":"String",\
        "ShipLastName":"String",\
        "ShipFirstName":"String",\
        "ShipCountry":"String",\
        "ShipStreetLine2":"String",\
        "ShipPostCode":"String",\
        "ShipPhone":"String"\
} ] ﻿\
} ,﻿    "BillingAddress": {\
﻿      "BillCompany":"String",\
      "BillFax":"String",\
      "BillStreetLine1":"String",\
      "BillCity":"String",\
      "BillState":"String",\
      "BillLastName":"String",\
      "BillFirstName":"String",\
      "BillCountry":"String",\
      "BillStreetLine2":"String",\
      "BillPostCode":"String",\
      "BillPhone":"String"\
} ,﻿    "Active":"Boolean",\
    "OnCreditHold":"Boolean",\
    "UserGroup":"String",\
    "AccountBalance":"String",\
    "AvailableCredit":"String",\
    "AccountManager": {\
﻿      "FirstName":"String",\
      "LastName":"String",\
      "Username":"String",\
      "Email":"String"\
} ,﻿    "DefaultOrderType":"String",\
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
    "DateAdded":"DateTime",\
    "DateAddedLocal":"DateTime",\
    "DateAddedUTC":"DateTime",\
    "DateUpdated":"DateTime",\
    "DateUpdatedLocal":"DateTime",\
    "DateUpdatedUTC":"DateTime",\
    "CustomerLogs": {\
﻿      "CustomerLog": [ {\
﻿        "LogID":"Integer",\
        "Customer":"String",\
        "AllocatedTo":"String",\
        "Status":"String",\
        "DateRequiredFollowUp":"Date",\
        "LastContacted":"DateTime",\
        "LastContactedLocal":"DateTime",\
        "LastContactedUTC":"DateTime",\
        "Notes":"String"\
} ] ﻿\
} ﻿\
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
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| Username | [String](https://developers.maropost.com/api-data-types) |
| Type | [String](https://developers.maropost.com/api-data-types) |
| Password | [String](https://developers.maropost.com/api-data-types) |
| EmailAddress | [String](https://developers.maropost.com/api-data-types) |
| SecondaryEmailAddress | [String](https://developers.maropost.com/api-data-types) |
| NewsletterSubscriber | [Boolean](https://developers.maropost.com/api-data-types) |
| ParentUsername | [String](https://developers.maropost.com/api-data-types) |
| ApprovalUsername | [String](https://developers.maropost.com/api-data-types) |
| ReferralUsername | [String](https://developers.maropost.com/api-data-types) |
| ReferralCommission | [String](https://developers.maropost.com/api-data-types) |
| Gender | [String](https://developers.maropost.com/api-data-types) |
| DateOfBirth | [Date](https://developers.maropost.com/api-data-types) |
| IdentificationType | [String](https://developers.maropost.com/api-data-types) |
| IdentificationDetails | [String](https://developers.maropost.com/api-data-types) |
| DefaultDiscounts | [String](https://developers.maropost.com/api-data-types) |
| DefaultDocumentTemplate | [String](https://developers.maropost.com/api-data-types) |
| RegistrationDate | [DateTime](https://developers.maropost.com/api-data-types) |
| InternalNotes | [String](https://developers.maropost.com/api-data-types) |
| ABN | [String](https://developers.maropost.com/api-data-types) |
| WebsiteURL | [String](https://developers.maropost.com/api-data-types) |
| CreditLimit | [Decimal](https://developers.maropost.com/api-data-types) |
| DefaultInvoiceTerms | [String](https://developers.maropost.com/api-data-types) |
| Classification1 | [String](https://developers.maropost.com/api-data-types) |
| Classification2 | [String](https://developers.maropost.com/api-data-types) |
| SalesChannel | [String](https://developers.maropost.com/api-data-types) |
| ShippingAddress | [ShippingAddressType](https://developers.maropost.com/api-data-types) |
| ShippingAddressBook | [ShippingAddressBookType](https://developers.maropost.com/api-data-types) |
| BillingAddress | [BillingAddressType](https://developers.maropost.com/api-data-types) |
| Active | [Boolean](https://developers.maropost.com/api-data-types) |
| OnCreditHold | [Boolean](https://developers.maropost.com/api-data-types) |
| UserGroup | [String](https://developers.maropost.com/api-data-types) |
| AccountBalance | [String](https://developers.maropost.com/api-data-types) |
| AvailableCredit | [String](https://developers.maropost.com/api-data-types) |
| AccountManager | [AccountManagerType](https://developers.maropost.com/api-data-types) |
| DefaultOrderType | [String](https://developers.maropost.com/api-data-types) |
| UserCustom1 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom2 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom3 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom4 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom5 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom6 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom7 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom8 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom9 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom10 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom11 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom12 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom13 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom14 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom15 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom16 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom17 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom18 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom19 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom20 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom21 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom22 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom23 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom24 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom25 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom26 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom27 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom28 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom29 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom30 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom31 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom32 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom33 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom34 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom35 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom36 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom37 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom38 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom39 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom40 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom41 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom42 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom43 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom44 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom45 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom46 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom47 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom48 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom49 | [String](https://developers.maropost.com/api-data-types) |
| UserCustom50 | [String](https://developers.maropost.com/api-data-types) |
| DateAdded | [DateTime](https://developers.maropost.com/api-data-types) |
| DateAddedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DateAddedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| CustomerLogs | [CustomerLogsType](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingAddress>

| Element Name | Field Type |
| --- | --- |
| ShipCompany | [String](https://developers.maropost.com/api-data-types) |
| ShipFax | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine1 | [String](https://developers.maropost.com/api-data-types) |
| ShipCity | [String](https://developers.maropost.com/api-data-types) |
| ShipState | [String](https://developers.maropost.com/api-data-types) |
| ShipLastName | [String](https://developers.maropost.com/api-data-types) |
| ShipFirstName | [String](https://developers.maropost.com/api-data-types) |
| ShipCountry | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine2 | [String](https://developers.maropost.com/api-data-types) |
| ShipPostCode | [String](https://developers.maropost.com/api-data-types) |
| ShipPhone | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingAddressBook>

| Element Name | Field Type |
| --- | --- |
| ShippingAddress | [ShippingAddressType](https://developers.maropost.com/api-data-types) |

* * *

#### <ShippingAddress>

| Element Name | Field Type |
| --- | --- |
| Id | [Integer](https://developers.maropost.com/api-data-types) |
| Title | [String](https://developers.maropost.com/api-data-types) |
| Default | [Boolean](https://developers.maropost.com/api-data-types) |
| ShipCompany | [String](https://developers.maropost.com/api-data-types) |
| ShipFax | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine1 | [String](https://developers.maropost.com/api-data-types) |
| ShipCity | [String](https://developers.maropost.com/api-data-types) |
| ShipState | [String](https://developers.maropost.com/api-data-types) |
| ShipLastName | [String](https://developers.maropost.com/api-data-types) |
| ShipFirstName | [String](https://developers.maropost.com/api-data-types) |
| ShipCountry | [String](https://developers.maropost.com/api-data-types) |
| ShipStreetLine2 | [String](https://developers.maropost.com/api-data-types) |
| ShipPostCode | [String](https://developers.maropost.com/api-data-types) |
| ShipPhone | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <BillingAddress>

| Element Name | Field Type |
| --- | --- |
| BillCompany | [String](https://developers.maropost.com/api-data-types) |
| BillFax | [String](https://developers.maropost.com/api-data-types) |
| BillStreetLine1 | [String](https://developers.maropost.com/api-data-types) |
| BillCity | [String](https://developers.maropost.com/api-data-types) |
| BillState | [String](https://developers.maropost.com/api-data-types) |
| BillLastName | [String](https://developers.maropost.com/api-data-types) |
| BillFirstName | [String](https://developers.maropost.com/api-data-types) |
| BillCountry | [String](https://developers.maropost.com/api-data-types) |
| BillStreetLine2 | [String](https://developers.maropost.com/api-data-types) |
| BillPostCode | [String](https://developers.maropost.com/api-data-types) |
| BillPhone | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <AccountManager>

| Element Name | Field Type |
| --- | --- |
| FirstName | [String](https://developers.maropost.com/api-data-types) |
| LastName | [String](https://developers.maropost.com/api-data-types) |
| Username | [String](https://developers.maropost.com/api-data-types) |
| Email | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <CustomerLogs>

| Element Name | Field Type |
| --- | --- |
| CustomerLog | [CustomerLogType](https://developers.maropost.com/api-data-types) |

* * *

#### <CustomerLog>

| Element Name | Field Type |
| --- | --- |
| LogID | [Integer](https://developers.maropost.com/api-data-types) |
| Customer | [String](https://developers.maropost.com/api-data-types) |
| AllocatedTo | [String](https://developers.maropost.com/api-data-types) |
| Status | [String](https://developers.maropost.com/api-data-types) |
| DateRequiredFollowUp | [Date](https://developers.maropost.com/api-data-types) |
| LastContacted | [DateTime](https://developers.maropost.com/api-data-types) |
| LastContactedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| LastContactedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| Notes | [String](https://developers.maropost.com/api-data-types) |

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