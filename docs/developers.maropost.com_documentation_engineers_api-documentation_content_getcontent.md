---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/content/getcontent"
title: "Engineers API documentation Content GetContent"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/content/getcontent#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/content/getcontent)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/content/getcontent)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Content](https://developers.maropost.com/documentation/engineers/api-documentation/content)
- [GetContent](https://developers.maropost.com/documentation/engineers/api-documentation/content/getcontent)

# GetContent

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetContent |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetContent |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get product content data. A successful call to GetContent returns the data requested. |
| XSD Schema | [GetContent XSD](https://www.neto.com.au/assets/api/GetContent.xsd)   \|   [GetContent Response XSD](https://www.neto.com.au/assets/api/GetContentResponse.xsd) |

## GetContent Post

You must specify at least one filter and one OutputSelector in your GetContent request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetContent>
   <Filter>
    <ContentID>(Integer)</ContentID>
    <ParentContentID>(Integer)</ParentContentID>
    <ContentName>(String)</ContentName>
    <Active>(Boolean)</Active>
    <ContentType>(String)</ContentType>
    <OnSiteMap>(Boolean)</OnSiteMap>
    <OnMenu>(Boolean)</OnMenu>
    <AllowReviews>(Boolean)</AllowReviews>
    <RequireLogin>(Boolean)</RequireLogin>
    <DatePostedFrom>(DateTime)</DatePostedFrom>
    <DatePostedTo>(DateTime)</DatePostedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OutputSelector>ContentID</OutputSelector>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>ContentName</OutputSelector>
    <OutputSelector>ContentType</OutputSelector>
    <OutputSelector>ParentContentID</OutputSelector>
    <OutputSelector>Active</OutputSelector>
    <OutputSelector>SortOrder</OutputSelector>
    <OutputSelector>OnSiteMap</OutputSelector>
    <OutputSelector>OnMenu</OutputSelector>
    <OutputSelector>AllowReviews</OutputSelector>
    <OutputSelector>ContentReference</OutputSelector>
    <OutputSelector>ShortDescription1</OutputSelector>
    <OutputSelector>ShortDescription2</OutputSelector>
    <OutputSelector>ShortDescription3</OutputSelector>
    <OutputSelector>Description1</OutputSelector>
    <OutputSelector>Description2</OutputSelector>
    <OutputSelector>Description3</OutputSelector>
    <OutputSelector>Author</OutputSelector>
    <OutputSelector>ContentURL</OutputSelector>
    <OutputSelector>Label1</OutputSelector>
    <OutputSelector>Label2</OutputSelector>
    <OutputSelector>Label3</OutputSelector>
    <OutputSelector>SEOMetaDescription</OutputSelector>
    <OutputSelector>SEOMetaKeywords</OutputSelector>
    <OutputSelector>SEOPageHeading</OutputSelector>
    <OutputSelector>SEOPageTitle</OutputSelector>
    <OutputSelector>SEOCanonicalURL</OutputSelector>
    <OutputSelector>SearchKeywords</OutputSelector>
    <OutputSelector>HeaderTemplate</OutputSelector>
    <OutputSelector>BodyTemplate</OutputSelector>
    <OutputSelector>FooterTemplate</OutputSelector>
    <OutputSelector>SearchResultsTemplate</OutputSelector>
    <OutputSelector>RelatedContents</OutputSelector>
    <OutputSelector>ExternalSource</OutputSelector>
    <OutputSelector>ExternalReference1</OutputSelector>
    <OutputSelector>ExternalReference2</OutputSelector>
    <OutputSelector>ExternalReference3</OutputSelector>
    <OutputSelector>DatePosted</OutputSelector>
    <OutputSelector>DatePostedLocal</OutputSelector>
    <OutputSelector>DatePostedUTC</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>DateUpdatedLocal</OutputSelector>
    <OutputSelector>DateUpdatedUTC</OutputSelector>
   </Filter>
</GetContent>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "ContentID":["Integer"﻿/*, ...*/],
    "ParentContentID":["Integer"﻿/*, ...*/],
    "ContentName":["String"﻿/*, ...*/],
    "Active":"Boolean",
    "ContentType":"String",
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
| ContentID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ParentContentID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ContentName | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ContentType | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
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
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (ContentID, ID, ContentName, ContentType, ParentContentID, Active, SortOrder, OnSiteMap, OnMenu, AllowReviews, ContentReference, ShortDescription1, ShortDescription2, ShortDescription3, Description1, Description2, Description3, Author, ContentURL, Label1, Label2, Label3, SEOMetaDescription, SEOMetaKeywords, SEOPageHeading, SEOPageTitle, SEOCanonicalURL, SearchKeywords, HeaderTemplate, BodyTemplate, FooterTemplate, SearchResultsTemplate, RelatedContents, ExternalSource, ExternalReference1, ExternalReference2, ExternalReference3, DatePosted, DatePostedLocal, DatePostedUTC, DateUpdated, DateUpdatedLocal, DateUpdatedUTC) |

* * *

## GetContent Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetContent>
   <Content>
    <ID>(Integer)</ID>
    <ContentID>(Integer)</ContentID>
    <ContentName>(String)</ContentName>
    <ParentContentID>(Integer)</ParentContentID>
    <Active>(Boolean)</Active>
    <SortOrder>(Integer)</SortOrder>
    <OnSiteMap>(Boolean)</OnSiteMap>
    <OnMenu>(Boolean)</OnMenu>
    <AllowReviews>(Boolean)</AllowReviews>
    <RequireLogin>(String)</RequireLogin>
    <ContentReference>(String)</ContentReference>
    <ShortDescription1>(String)</ShortDescription1>
    <ShortDescription2>(String)</ShortDescription2>
    <ShortDescription3>(String)</ShortDescription3>
    <Description1>(String)</Description1>
    <Description2>(String)</Description2>
    <Description3>(String)</Description3>
    <Author>(String)</Author>
    <ContentURL>(String)</ContentURL>
    <Label1>(String)</Label1>
    <Label2>(String)</Label2>
    <Label3>(String)</Label3>
    <SEOMetaDescription>(String)</SEOMetaDescription>
    <SEOMetaKeywords>(String)</SEOMetaKeywords>
    <SEOPageHeading>(String)</SEOPageHeading>
    <SEOPageTitle>(String)</SEOPageTitle>
    <SEOCanonicalURL>(String)</SEOCanonicalURL>
    <SearchKeywords>(String)</SearchKeywords>
    <HeaderTemplate>(String)</HeaderTemplate>
    <BodyTemplate>(String)</BodyTemplate>
    <FooterTemplate>(String)</FooterTemplate>
    <SearchResultsTemplate>(String)</SearchResultsTemplate>
     <RelatedContents>
       <RelatedContent>
        <ContentID>(Integer)</ContentID>
       </RelatedContent>
     </RelatedContents>    <ExternalSource>(String)</ExternalSource>
    <ExternalReference1>(String)</ExternalReference1>
    <ExternalReference2>(String)</ExternalReference2>
    <ExternalReference3>(String)</ExternalReference3>
    <DatePosted>(DateTime)</DatePosted>
    <DatePostedLocal>(DateTime)</DatePostedLocal>
    <DatePostedUTC>(DateTime)</DatePostedUTC>
    <DateUpdated>(DateTime)</DateUpdated>
    <DateUpdatedLocal>(DateTime)</DateUpdatedLocal>
    <DateUpdatedUTC>(DateTime)</DateUpdatedUTC>
   </Content>
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
</GetContent>

```

### JSON Response

```rainbow rainbow-show
{
  "Content": [ {\
﻿    "ID":"Integer",\
    "ContentID":"Integer",\
    "ContentName":"String",\
    "ParentContentID":"Integer",\
    "Active":"Boolean",\
    "SortOrder":"Integer",\
    "OnSiteMap":"Boolean",\
    "OnMenu":"Boolean",\
    "AllowReviews":"Boolean",\
    "RequireLogin":"String",\
    "ContentReference":"String",\
    "ShortDescription1":"String",\
    "ShortDescription2":"String",\
    "ShortDescription3":"String",\
    "Description1":"String",\
    "Description2":"String",\
    "Description3":"String",\
    "Author":"String",\
    "ContentURL":"String",\
    "Label1":"String",\
    "Label2":"String",\
    "Label3":"String",\
    "SEOMetaDescription":"String",\
    "SEOMetaKeywords":"String",\
    "SEOPageHeading":"String",\
    "SEOPageTitle":"String",\
    "SEOCanonicalURL":"String",\
    "SearchKeywords":"String",\
    "HeaderTemplate":"String",\
    "BodyTemplate":"String",\
    "FooterTemplate":"String",\
    "SearchResultsTemplate":"String",\
    "RelatedContents": {\
﻿      "RelatedContent": [ {\
﻿        "ContentID":"Integer"\
} ] ﻿\
} ,﻿    "ExternalSource":"String",\
    "ExternalReference1":"String",\
    "ExternalReference2":"String",\
    "ExternalReference3":"String",\
    "DatePosted":"DateTime",\
    "DatePostedLocal":"DateTime",\
    "DatePostedUTC":"DateTime",\
    "DateUpdated":"DateTime",\
    "DateUpdatedLocal":"DateTime",\
    "DateUpdatedUTC":"DateTime"\
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

#### <Content>

| Element Name | Field Type |
| --- | --- |
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| ContentID | [Integer](https://developers.maropost.com/api-data-types) |
| ContentName | [String](https://developers.maropost.com/api-data-types) |
| ParentContentID | [Integer](https://developers.maropost.com/api-data-types) |
| Active | [Boolean](https://developers.maropost.com/api-data-types) |
| SortOrder | [Integer](https://developers.maropost.com/api-data-types) |
| OnSiteMap | [Boolean](https://developers.maropost.com/api-data-types) |
| OnMenu | [Boolean](https://developers.maropost.com/api-data-types) |
| AllowReviews | [Boolean](https://developers.maropost.com/api-data-types) |
| RequireLogin | [String](https://developers.maropost.com/api-data-types) |
| ContentReference | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription1 | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription2 | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription3 | [String](https://developers.maropost.com/api-data-types) |
| Description1 | [String](https://developers.maropost.com/api-data-types) |
| Description2 | [String](https://developers.maropost.com/api-data-types) |
| Description3 | [String](https://developers.maropost.com/api-data-types) |
| Author | [String](https://developers.maropost.com/api-data-types) |
| ContentURL | [String](https://developers.maropost.com/api-data-types) |
| Label1 | [String](https://developers.maropost.com/api-data-types) |
| Label2 | [String](https://developers.maropost.com/api-data-types) |
| Label3 | [String](https://developers.maropost.com/api-data-types) |
| SEOMetaDescription | [String](https://developers.maropost.com/api-data-types) |
| SEOMetaKeywords | [String](https://developers.maropost.com/api-data-types) |
| SEOPageHeading | [String](https://developers.maropost.com/api-data-types) |
| SEOPageTitle | [String](https://developers.maropost.com/api-data-types) |
| SEOCanonicalURL | [String](https://developers.maropost.com/api-data-types) |
| SearchKeywords | [String](https://developers.maropost.com/api-data-types) |
| HeaderTemplate | [String](https://developers.maropost.com/api-data-types) |
| BodyTemplate | [String](https://developers.maropost.com/api-data-types) |
| FooterTemplate | [String](https://developers.maropost.com/api-data-types) |
| SearchResultsTemplate | [String](https://developers.maropost.com/api-data-types) |
| RelatedContents | [RelatedContentsType](https://developers.maropost.com/api-data-types) |
| ExternalSource | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference1 | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference2 | [String](https://developers.maropost.com/api-data-types) |
| ExternalReference3 | [String](https://developers.maropost.com/api-data-types) |
| DatePosted | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePostedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DatePostedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedUTC | [DateTime](https://developers.maropost.com/api-data-types) |

* * *

#### <RelatedContents>

| Element Name | Field Type |
| --- | --- |
| RelatedContent | [RelatedContentType](https://developers.maropost.com/api-data-types) |

* * *

#### <RelatedContent>

| Element Name | Field Type |
| --- | --- |
| ContentID | [Integer](https://developers.maropost.com/api-data-types) |

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