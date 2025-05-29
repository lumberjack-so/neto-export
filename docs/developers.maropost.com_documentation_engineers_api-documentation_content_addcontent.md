---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent"
title: "Engineers API documentation Content AddContent"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Content](https://developers.maropost.com/documentation/engineers/api-documentation/content)
- [AddContent](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent)

# AddContent

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddContent |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | AddContent |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to add a new content page. |
| XSD Schema | [AddContent XSD](https://www.neto.com.au/assets/api/AddContent.xsd)   \|   [AddContent Response XSD](https://www.neto.com.au/assets/api/AddContentResponse.xsd) |

## AddContent Post

You must specify at least one filter and one OutputSelector in your AddContent request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddContent>
   <Content>
    <ContentName>(String)</ContentName>
    <ContentType>(String)</ContentType>
    <ContentReference>(String)</ContentReference>
    <ShortDescription1>(String)</ShortDescription1>
    <ShortDescription2>(String)</ShortDescription2>
    <ShortDescription3>(String)</ShortDescription3>
    <Description1>(String)</Description1>
    <Description2>(String)</Description2>
    <Description3>(String)</Description3>
    <HeaderTemplate>(String)</HeaderTemplate>
    <BodyTemplate>(String)</BodyTemplate>
    <FooterTemplate>(String)</FooterTemplate>
    <SearchResultsTemplate>(String)</SearchResultsTemplate>
    <SearchKeywords>(String)</SearchKeywords>
    <Author>(String)</Author>
    <Label1>(String)</Label1>
    <Label2>(String)</Label2>
    <Label3>(String)</Label3>
    <SEOMetaDescription>(String)</SEOMetaDescription>
    <SEOMetaKeywords>(String)</SEOMetaKeywords>
    <SEOPageHeading>(String)</SEOPageHeading>
    <SEOPageTitle>(String)</SEOPageTitle>
    <SEOCanonicalURL>(String)</SEOCanonicalURL>
    <ContentURL>(String)</ContentURL>
    <AutomaticURL>(Boolean)</AutomaticURL>
    <ParentContentID>(Integer)</ParentContentID>
    <SortOrder>(Integer)</SortOrder>
    <Active>(Boolean)</Active>
    <OnSiteMap>(Boolean)</OnSiteMap>
    <OnMenu>(Boolean)</OnMenu>
    <AllowReviews>(Boolean)</AllowReviews>
    <RequireLogin>(Boolean)</RequireLogin>
     <RelatedContents>
       <RelatedContent>
        <ContentID>(Integer)</ContentID>
       </RelatedContent>
     </RelatedContents>    <DatePosted>(DateTime)</DatePosted>
   </Content>

</AddContent>

```

### JSON POST

```rainbow rainbow-show
{
  "Content": [ {\
﻿    "ContentName":"String",\
    "ContentType":"String",\
    "ContentReference":"String",\
    "ShortDescription1":"String",\
    "ShortDescription2":"String",\
    "ShortDescription3":"String",\
    "Description1":"String",\
    "Description2":"String",\
    "Description3":"String",\
    "HeaderTemplate":"String",\
    "BodyTemplate":"String",\
    "FooterTemplate":"String",\
    "SearchResultsTemplate":"String",\
    "SearchKeywords":"String",\
    "Author":"String",\
    "Label1":"String",\
    "Label2":"String",\
    "Label3":"String",\
    "SEOMetaDescription":"String",\
    "SEOMetaKeywords":"String",\
    "SEOPageHeading":"String",\
    "SEOPageTitle":"String",\
    "SEOCanonicalURL":"String",\
    "ContentURL":"String",\
    "AutomaticURL":"Boolean",\
    "ParentContentID":"Integer",\
    "SortOrder":"Integer",\
    "Active":"Boolean",\
    "OnSiteMap":"Boolean",\
    "OnMenu":"Boolean",\
    "AllowReviews":"Boolean",\
    "RequireLogin":"Boolean",\
    "RelatedContents": {\
﻿      "RelatedContent": [ {\
﻿        "ContentID":"Integer"\
} ] ﻿\
} ,﻿    "DatePosted":"DateTime"\
} ] ﻿
}

```

#### <Content>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ContentName | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ContentType | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| ContentReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| ShortDescription1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| Description1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Description3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| HeaderTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| BodyTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| FooterTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SearchResultsTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| SearchKeywords | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(5000) |
| Author | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Label1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Label2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Label3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| SEOMetaDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(320) |
| SEOMetaKeywords | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| SEOPageHeading | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| SEOPageTitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| SEOCanonicalURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2083) |
| ContentURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| AutomaticURL | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ParentContentID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnSiteMap | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| OnMenu | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AllowReviews | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RequireLogin | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RelatedContents | Optional | [RelatedContents](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent#RelatedContents) |
| DatePosted | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

#### <RelatedContents>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| RelatedContent | Optional<br>_Supports Multiple Elements_ | [RelatedContent](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/content/addcontent#RelatedContent) |

* * *

#### <RelatedContent>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ContentID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

## AddContent Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<AddContent>
   <Content>
    <ContentID>(Integer)</ContentID>
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
</AddContent>

```

### JSON Response

```rainbow rainbow-show
{
  "Content": [ {\
﻿    "ContentID":"Integer"\
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