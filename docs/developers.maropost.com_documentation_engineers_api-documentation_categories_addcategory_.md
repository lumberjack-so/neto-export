---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/categories/addcategory/"
title: "Engineers API documentation Categories AddCategory"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/categories/addcategory/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/categories/addcategory/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/categories/addcategory/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Categories](https://developers.maropost.com/documentation/engineers/api-documentation/categories)
- [AddCategory](https://developers.maropost.com/documentation/engineers/api-documentation/categories/addcategory/)

# AddCategory

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new product category. |
| XSD Schema | [AddCategory XSD](https://www.neto.com.au/assets/api/AddCategory.xsd)   \|   [AddCategory Response XSD](https://www.neto.com.au/assets/api/AddCategoryResponse.xsd) |

## AddCategory Post

### Advanced (All Fields)

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategory>
  <Category>
    <CategoryName>Shirts</CategoryName>
    <ParentCategoryID>10</ParentCategoryID>
    <SortOrder>1</SortOrder>
    <Active>True</Active>
    <OnSiteMap>True</OnSiteMap>
    <OnMenu>True</OnMenu>
    <AllowReviews>True</AllowReviews>
    <RequireLogin>True</RequireLogin>
  </Category>
</AddCategory>

```

### Basic (Only Required Fields)

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategory>
  <Category>
    <CategoryName>Shirts</CategoryName>
  </Category>
</AddCategory>

```

### Sample AddCategory Response (Success)

Category Added

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategoryResponse>
  <Category>
    <CategoryID>12</CategoryID>
  </Category>
  <CurrentTime>2014-01-03 02:31:27</CurrentTime>
</AddCategoryResponse>

```

### Sample AddCategory Response (Error)

Required field missing, category not added

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategoryResponse>
   <Category />
   <CurrentTime>2014-01-03 02:31:27</CurrentTime>
   <Ack>Error</Ack>
   <Messages>
      <Error>
     <Message>CategoryName is a required field and is missing</Message>
         <SeverityCode>Error</SeverityCode>
      </Error>
   </Messages>
</AddCategoryResponse>

```

### Sample Add Multiple Categories in a Single Call Post

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategory>
     <Category>
        <CategoryName>Shirts</CategoryName>
    </Category>
     <Category>
        <CategoryName>Shorts</CategoryName>
    </Category>
     <Category>
        <CategoryName>Pants</CategoryName>
    </Category>
</AddCategory>

```

## AddCategory Response Elements

| Element Name | Type | Description | Example |
| --- | --- | --- | --- |
| \`\` | [integer](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The unique ID for the category. System generated. | 34 |
| \`\` | [datetime](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The time the request was made. | 2014-04-20 06:02:30 |
| \`\` | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The acknowledgement message. | Success, Error or Warning |
| **_\`\`_** | Contains the child elements below. |
| \`\` | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The error message returned. | Request Error |
| \`\` | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The severity code. | Error |
| \`\` | [string](https://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/api-field-types) | The description of the error. | Internal server error. |

## AddCategory Post

You must specify at least one filter and one OutputSelector in your AddCategory request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategory>
   <Category>
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
    <DatePosted>(DateTime)</DatePosted>
   </Category>

</AddCategory>

```

### JSON POST

```rainbow rainbow-show
{
  "Category": [ {\
﻿    "CategoryName":"String",\
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
    "RequireLogin":"Boolean",\
    "DatePosted":"DateTime"\
} ] ﻿
}

```

#### <Category>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| CategoryName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| CategoryReference | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShortDescription1 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription2 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription3 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| Description1 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description2 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description3 | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| ParentCategoryID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnSiteMap | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnMenu | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AllowReviews | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RequireLogin | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| DatePosted | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## AddCategory Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddCategory>
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
</AddCategory>

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