---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/categories/updatecategory/"
title: "Engineers API documentation Categories UpdateCategory"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/categories/updatecategory/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/categories/updatecategory/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/categories/updatecategory/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Categories](https://developers.maropost.com/documentation/engineers/api-documentation/categories)
- [UpdateCategory](https://developers.maropost.com/documentation/engineers/api-documentation/categories/updatecategory/)

# UpdateCategory

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to update categories. A successful call to UpdateCategory returns the unique identifier (CategoryID) for the updated category, and the date and time the order was updated (CurrentTime) |
| XSD Schema | [UpdateCategory XSD](https://www.neto.com.au/assets/api/UpdateCategory.xsd)   \|   [UpdateCategory Response XSD](https://www.neto.com.au/assets/api/UpdateCategoryResponse.xsd) |

## UpdateCategory Post

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategory>
  <Category>
    <CategoryID>12</CategoryID>
    <CategoryName>Pants</CategoryName>
    <ParentCategoryID>10</ParentCategoryID>
    <SortOrder>3</SortOrder>
    <Active>True</Active>
    <OnSiteMap>True</OnSiteMap>
    <OnMenu>True</OnMenu>
    <AllowReviews>True</AllowReviews>
    <RequireLogin>True</RequireLogin>
  </Category>
</UpdateCategory>

```

## UpdateCategory Elements

| Element Name | Type | Description | Example | Version |
| --- | --- | --- | --- | --- |
|  | Contains the child elements below. |
| _The following are **mandatory** for an UpdateCategory POST_ |
|  | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The unique ID for the order/invoice. Used for lookups and updates. | 1 | v5.3+ |
| _The following are **optional** for an UpdateCategory POST_ |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The name of the category | T-shirt | v5.3+ |
|  | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The id of the parent category. For category hierarchy purposes. Use GetCategory to get a list of category ID's. | 12 | v5.3+ |
|  | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The sort order of the category in relation to other categories. | 3 | v5.3+ |
|  | [boolean](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Flag to determine if category appears on website or not. | True<br> False | v5.3+ |
|  | [boolean](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Flag to determine if category appears on XML sitemap or not. | True<br> False | v5.3+ |
|  | [boolean](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Flag to determine if category appears on menus or not. | True<br> False | v5.3+ |
|  | [string\_50](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category reference field | Home | Pending Release |
|  | [string\_255](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category short description field 1 |  | Pending Release |
|  | [string\_255](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category short description field 2 |  | Pending Release |
|  | [string\_255](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category short description field 3 |  | Pending Release |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category Description Field 1 |  | Pending Release |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category Description Field 2 |  | Pending Release |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | Category Description Field 3 |  | Pending Release |

## Responses

### Sample UpdateCategory Response (Success)

Category Added

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategoryResponse>
   <Category>
      <CategoryID>N10157</CategoryID>
   </Category>
   <CurrentTime>2014-01-03 02:34:42</CurrentTime>
   <Ack>Success</Ack>
</UpdateCategoryResponse>

```

### UpdateCategory Response (Error)

Required field missing, Category not added

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategoryResponse>
   <Category />
   <CurrentTime>2014-01-03 02:31:27</CurrentTime>
   <Ack>Error</Ack>
   <Messages>
      <Error>
     <Message>CategoryID is a required field and is missing</Message>
         <SeverityCode>Error</SeverityCode>
      </Error>
   </Messages>
</UpdateCategoryResponse>

```

### Sample UpdateCategory Response (Warning)

Non required field in wrong format, field ignored, Category added

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategoryResponse>
   <Category>
      <CategoryID>N10158</CategoryID>
   </Category>
   <CurrentTime>2014-01-03 02:40:10</CurrentTime>
   <Ack>Warning</Ack>
   <Messages>
      <Warning>
         <Message>CategoryStatus Lost does not exist, setting as New</Message>
         <SeverityCode>Warning</SeverityCode>
      </Warning>
   </Messages>
</UpdateCategoryResponse>

```

## UpdateCategory Response Elements

|     |     |     |     |
| --- | --- | --- | --- |
|  | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The unique ID for the category. | 1 |
|  | [datetime](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The time the request was made. | 2014-04-20 06:02:30 |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The acknowledgement message. | Success, Error or Warning |
|  | Contains messages child elements (see below). |

|     |     |     |     |
| --- | --- | --- | --- |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The error message returned. | Request Error |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The severity code. | Error |
|  | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The description of the error. | Internal server error. |

## UpdateCategory Post

You must specify at least one filter and one OutputSelector in your UpdateCategory request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategory>
   <Category>
    <CategoryID>(Integer)</CategoryID>
    <CategoryName>(String)</CategoryName>
    <CategoryReference>(String)</CategoryReference>
    <ShortDescription1>(String)</ShortDescription1>
    <ShortDescription2>(String)</ShortDescription2>
    <ShortDescription3>(String)</ShortDescription3>
    <Description1>(String)</Description1>
    <Description2>(String)</Description2>
    <Description3>(String)</Description3>
    <ParentCategoryID>(Integer)</ParentCategoryID>
    <SortOrder>(Integer)</SortOrder>
    <Active>(Boolean)</Active>
    <OnSiteMap>(Boolean)</OnSiteMap>
    <OnMenu>(Boolean)</OnMenu>
    <AllowReviews>(Boolean)</AllowReviews>
    <RequireLogin>(Boolean)</RequireLogin>
   </Category>

</UpdateCategory>

```

### JSON POST

```rainbow rainbow-show
{
  "Category": [ {\
﻿    "CategoryID":"Integer",\
    "CategoryName":"String",\
    "CategoryReference":"String",\
    "ShortDescription1":"String",\
    "ShortDescription2":"String",\
    "ShortDescription3":"String",\
    "Description1":"String",\
    "Description2":"String",\
    "Description3":"String",\
    "ParentCategoryID":"Integer",\
    "SortOrder":"Integer",\
    "Active":"Boolean",\
    "OnSiteMap":"Boolean",\
    "OnMenu":"Boolean",\
    "AllowReviews":"Boolean",\
    "RequireLogin":"Boolean"\
} ] ﻿
}

```

#### <Category>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| CategoryID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CategoryName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| CategoryReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShortDescription1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| Description1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| ParentCategoryID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnSiteMap | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnMenu | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AllowReviews | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RequireLogin | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

## UpdateCategory Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateCategory>
   <Category>
    <CategoryID>(Integer)</CategoryID>
   </Category>
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
</UpdateCategory>

```

### JSON Response

```rainbow rainbow-show
{
  "Category": [ {\
﻿    "CategoryID":"Integer"\
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

#### <Category>

| Element Name | Field Type |
| --- | --- |
| CategoryID | [Integer](https://developers.maropost.com/api-data-types) |

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