---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/categories/getcategory"
title: "Engineers API documentation Categories GetCategory"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/categories/getcategory#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/categories/getcategory)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/categories/getcategory)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Categories](https://developers.maropost.com/documentation/engineers/api-documentation/categories)
- [GetCategory](https://developers.maropost.com/documentation/engineers/api-documentation/categories/getcategory)

# GetCategory

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetCategory |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get product category data. A successful call to GetCategory returns the data requested. |
| XSD Schema | [GetCategory XSD](https://www.neto.com.au/assets/api/GetCategory.xsd)   \|   [GetCategory Response XSD](https://www.neto.com.au/assets/api/GetCategoryResponse.xsd) |

## GetCategory Post

You must specify at least one Filter and one OutputSelector in your GetCategory request. These will determine the results returned.

## Responses

#### Sample GetCategory Response (Success)

Includes all outputs

```rainbow rainbow-show
<?xml version="1.0" encoding="UTF-8"?>
<GetCategoryResponse>
   <Category>
    <CategoryID>13</CategoryID>
    <CategoryName>Shirts</CategoryName>
    <ParentCategoryID>10</ParentCategoryID>
    <SortOrder>1</SortOrder>
    <Active>True</Active>
    <OnSiteMap>True</OnSiteMap>
    <OnMenu>True</OnMenu>
    <AllowReviews>True</AllowReviews>
    <RequireLogin>True</RequireLogin>
   </Category>
   <CurrentTime>2014-04-07 11:50:40</CurrentTime>
   <Ack>Success</Ack>
</GetCategoryResponse>

```

#### Sample GetCategory Response (Error)

Input call, no data returned.

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCategoryResponse>
   <Category />
   <CurrentTime>2014-01-03 02:31:27</CurrentTime>
   <Ack>Error</Ack>
   <Messages>
      <Error>
     <Message>Message describing reason for error.</Message>
         <SeverityCode>Error</SeverityCode>
      </Error>
   </Messages>
</GetCategoryResponse>

```

#### Sample GetCategory Response (Warning)

Warning message, data returned.

```rainbow rainbow-show
<?xml version="1.0" encoding="UTF-8"?>
<GetCategoryResponse>
   <Category>
    <CategoryID>13</CategoryID>
    <CategoryName>Shirts</CategoryName>
    <ParentCategoryID>10</ParentCategoryID>
    <SortOrder>1</SortOrder>
    <Active>True</Active>
    <OnSiteMap>True</OnSiteMap>
    <OnMenu>True</OnMenu>
    <AllowReviews>True</AllowReviews>
    <RequireLogin>True</RequireLogin>
   </Category>
  <CurrentTime>2014-04-06 06:03:39</CurrentTime>
  <Ack>Warning</Ack>
   <Messages>
    <Warning>
      <Message>Message describing reason for warning.</Message>
      <SeverityCode>Waring</SeverityCode>
    </Warning>
  </Messages>
</GetCategoryResponse>

```

## GetCategory Post

You must specify at least one filter and one OutputSelector in your GetCategory request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCategory>
   <Filter>
    <CategoryID>20</CategoryID>
    <ParentCategoryID>2</ParentCategoryID>
    <CategoryName>T-Shirts</CategoryName>
    <Active>True</Active>
    <OnSiteMap>True</OnSiteMap>
    <OnMenu>True</OnMenu>
    <AllowReviews>True</AllowReviews>
    <RequireLogin>True</RequireLogin>
    <DatePostedFrom>(DateTime)</DatePostedFrom>
    <DatePostedTo>(DateTime)</DatePostedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OutputSelector>CategoryID</OutputSelector>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>CategoryName</OutputSelector>
    <OutputSelector>ParentCategoryID</OutputSelector>
    <OutputSelector>Active</OutputSelector>
    <OutputSelector>SortOrder</OutputSelector>
    <OutputSelector>OnSiteMap</OutputSelector>
    <OutputSelector>OnMenu</OutputSelector>
    <OutputSelector>AllowReviews</OutputSelector>
    <OutputSelector>CategoryReference</OutputSelector>
    <OutputSelector>ShortDescription1</OutputSelector>
    <OutputSelector>ShortDescription2</OutputSelector>
    <OutputSelector>ShortDescription3</OutputSelector>
    <OutputSelector>Description1</OutputSelector>
    <OutputSelector>Description2</OutputSelector>
    <OutputSelector>Description3</OutputSelector>
    <OutputSelector>ExternalSource</OutputSelector>
    <OutputSelector>ExternalReference1</OutputSelector>
    <OutputSelector>ExternalReference2</OutputSelector>
    <OutputSelector>ExternalReference3</OutputSelector>
    <OutputSelector>DatePosted</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
   </Filter>
</GetCategory>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "CategoryID":["Integer"﻿/*, ...*/],
    "ParentCategoryID":["Integer"﻿/*, ...*/],
    "CategoryName":["String"﻿/*, ...*/],
    "Active":"Boolean",
    "OnSiteMap":"Boolean",
    "OnMenu":"Boolean",
    "AllowReviews":"Boolean",
    "RequireLogin":"Boolean",
    "DatePostedFrom":"DateTime",
    "DatePostedTo":"DateTime",
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
| CategoryID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ParentCategoryID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CategoryName | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnSiteMap | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnMenu | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AllowReviews | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RequireLogin | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| DatePostedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DatePostedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (CategoryID, ID, CategoryName, ParentCategoryID, Active, SortOrder, OnSiteMap, OnMenu, AllowReviews, CategoryReference, ShortDescription1, ShortDescription2, ShortDescription3, Description1, Description2, Description3, ExternalSource, ExternalReference1, ExternalReference2, ExternalReference3, DatePosted, DateUpdated) |

* * *

## GetCategory Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetCategory>
   <Category>
    <ID>(Integer)</ID>
    <CategoryID>(Integer)</CategoryID>
    <CategoryName>(String)</CategoryName>
    <ParentCategoryID>(Integer)</ParentCategoryID>
    <Active>(Boolean)</Active>
    <SortOrder>(Boolean)</SortOrder>
    <OnSiteMap>(Boolean)</OnSiteMap>
    <OnMenu>(Boolean)</OnMenu>
    <AllowReviews>(Boolean)</AllowReviews>
    <RequireLogin>(String)</RequireLogin>
    <CategoryReference>(String)</CategoryReference>
    <ShortDescription1>(String)</ShortDescription1>
    <ShortDescription2>(String)</ShortDescription2>
    <ShortDescription3>(String)</ShortDescription3>
    <Description1>(String)</Description1>
    <Description2>(String)</Description2>
    <Description3>(String)</Description3>
    <ExternalSource>(String)</ExternalSource>
    <ExternalReference1>(String)</ExternalReference1>
    <ExternalReference2>(String)</ExternalReference2>
    <ExternalReference3>(String)</ExternalReference3>
    <DatePosted>(DateTime)</DatePosted>
    <DateUpdated>(DateTime)</DateUpdated>
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
</GetCategory>

```

### JSON Response

```rainbow rainbow-show
{
  "Category": [ {\
﻿    "ID":"Integer",\
    "CategoryID":"Integer",\
    "CategoryName":"String",\
    "ParentCategoryID":"Integer",\
    "Active":"Boolean",\
    "SortOrder":"Boolean",\
    "OnSiteMap":"Boolean",\
    "OnMenu":"Boolean",\
    "AllowReviews":"Boolean",\
    "RequireLogin":"String",\
    "CategoryReference":"String",\
    "ShortDescription1":"String",\
    "ShortDescription2":"String",\
    "ShortDescription3":"String",\
    "Description1":"String",\
    "Description2":"String",\
    "Description3":"String",\
    "ExternalSource":"String",\
    "ExternalReference1":"String",\
    "ExternalReference2":"String",\
    "ExternalReference3":"String",\
    "DatePosted":"DateTime",\
    "DateUpdated":"DateTime"\
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
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| CategoryID | [Integer](https://developers.maropost.com/api-data-types) |
| CategoryName | [String](https://developers.maropost.com/api-data-types) |
| ParentCategoryID | [Integer](https://developers.maropost.com/api-data-types) |
| Active | [Boolean](https://developers.maropost.com/api-data-types) |
| SortOrder | [Boolean](https://developers.maropost.com/api-data-types) |
| OnSiteMap | [Boolean](https://developers.maropost.com/api-data-types) |
| OnMenu | [Boolean](https://developers.maropost.com/api-data-types) |
| AllowReviews | [Boolean](https://developers.maropost.com/api-data-types) |
| RequireLogin | [String](https://developers.maropost.com/api-data-types) |
| CategoryReference | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription1 | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription2 | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription3 | [String](https://developers.maropost.com/api-data-types) |
| Description1 | [String](https://developers.maropost.com/api-data-types) |
| Description2 | [String](https://developers.maropost.com/api-data-types) |
| Description3 | [String](https://developers.maropost.com/api-data-types) |
| ExternalSource | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference1 | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference2 | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference3 | [String](https://developers.maropost.com/api-data-types) |
| DatePosted | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |

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