---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem"
title: "Engineers API documentation Products GetItem"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Products](https://developers.maropost.com/documentation/engineers/api-documentation/products)
- [GetItem](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem)

# GetItem

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetItem |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetItem |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to get product data. A successful call to GetItem returns the data requested. |
| XSD Schema | [GetItem XSD](https://www.neto.com.au/assets/api/GetItem.xsd)   \|   [GetItem Response XSD](https://www.neto.com.au/assets/api/GetItemResponse.xsd) |

## GetItem Post

You must specify at least one filter and one OutputSelector in your GetItem request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetItem>
   <Filter>
    <SKU>(String)</SKU>
    <RestockQty>(Integer)</RestockQty>
    <ReorderQty>(Integer)</ReorderQty>
    <RestockWarningLevel>(Integer)</RestockWarningLevel>
    <AccountingCode>(String)</AccountingCode>
    <InventoryID>(Integer)</InventoryID>
    <ParentSKU>(String)</ParentSKU>
    <Brand>(String)</Brand>
    <Model>(String)</Model>
    <Name>(String)</Name>
    <PrimarySupplier>(String)</PrimarySupplier>
    <Approved>(Boolean)</Approved>
    <ApprovedForPOS>(Boolean)</ApprovedForPOS>
    <ApprovedForMobileStore>(Boolean)</ApprovedForMobileStore>
     <SalesChannels>
       <SalesChannel>
        <SalesChannelID>(Integer)</SalesChannelID>
        <IsApproved>(Boolean)</IsApproved>
       </SalesChannel>
     </SalesChannels>    <Visible>(Boolean)</Visible>
    <IsActive>(Boolean)</IsActive>
    <IsNetoUtility>(Boolean)</IsNetoUtility>
    <IsGiftVoucher>(Boolean)</IsGiftVoucher>
    <EditableKitBundle>(Boolean)</EditableKitBundle>
    <AuGstExempt>(Boolean)</AuGstExempt>
    <NzGstExempt>(Boolean)</NzGstExempt>
    <DateAddedFrom>(DateTime)</DateAddedFrom>
    <DateAddedTo>(DateTime)</DateAddedTo>
    <DateCreatedFrom>(DateTime)</DateCreatedFrom>
    <DateCreatedTo>(DateTime)</DateCreatedTo>
    <DateUpdatedFrom>(DateTime)</DateUpdatedFrom>
    <DateUpdatedTo>(DateTime)</DateUpdatedTo>
    <CategoryID>(Integer)</CategoryID>
    <Priority>(Integer)</Priority>
    <Page>(Integer)</Page>
    <Limit>(Integer)</Limit>
    <OrderBy></OrderBy>
    <OrderDirection></OrderDirection>
    <OutputSelector>ParentSKU</OutputSelector>
    <OutputSelector>ID</OutputSelector>
    <OutputSelector>Brand</OutputSelector>
    <OutputSelector>Model</OutputSelector>
    <OutputSelector>Virtual</OutputSelector>
    <OutputSelector>Name</OutputSelector>
    <OutputSelector>PrimarySupplier</OutputSelector>
    <OutputSelector>Approved</OutputSelector>
    <OutputSelector>IsActive</OutputSelector>
    <OutputSelector>IsNetoUtility</OutputSelector>
    <OutputSelector>AuGstExempt</OutputSelector>
    <OutputSelector>NzGstExempt</OutputSelector>
    <OutputSelector>IsGiftVoucher</OutputSelector>
    <OutputSelector>OriginCountry</OutputSelector>
    <OutputSelector>FreeGifts</OutputSelector>
    <OutputSelector>CrossSellProducts</OutputSelector>
    <OutputSelector>UpsellProducts</OutputSelector>
    <OutputSelector>PriceGroups</OutputSelector>
    <OutputSelector>PriceGroups.MultilevelBands</OutputSelector>
    <OutputSelector>ItemLength</OutputSelector>
    <OutputSelector>ItemWidth</OutputSelector>
    <OutputSelector>ItemHeight</OutputSelector>
    <OutputSelector>ShippingLength</OutputSelector>
    <OutputSelector>ShippingWidth</OutputSelector>
    <OutputSelector>ShippingHeight</OutputSelector>
    <OutputSelector>ShippingWeight</OutputSelector>
    <OutputSelector>CubicWeight</OutputSelector>
    <OutputSelector>HandlingTime</OutputSelector>
    <OutputSelector>WarehouseQuantity</OutputSelector>
    <OutputSelector>WarehouseLocations</OutputSelector>
    <OutputSelector>CommittedQuantity</OutputSelector>
    <OutputSelector>AvailableSellQuantity</OutputSelector>
    <OutputSelector>ItemSpecifics</OutputSelector>
    <OutputSelector>Categories</OutputSelector>
    <OutputSelector>AccountingCode</OutputSelector>
    <OutputSelector>SortOrder1</OutputSelector>
    <OutputSelector>SortOrder2</OutputSelector>
    <OutputSelector>RRP</OutputSelector>
    <OutputSelector>DefaultPrice</OutputSelector>
    <OutputSelector>DefaultPurchasePrice</OutputSelector>
    <OutputSelector>PromotionPrice</OutputSelector>
    <OutputSelector>PromotionStartDate</OutputSelector>
    <OutputSelector>PromotionStartDateLocal</OutputSelector>
    <OutputSelector>PromotionStartDateUTC</OutputSelector>
    <OutputSelector>PromotionExpiryDate</OutputSelector>
    <OutputSelector>PromotionExpiryDateLocal</OutputSelector>
    <OutputSelector>PromotionExpiryDateUTC</OutputSelector>
    <OutputSelector>DateArrival</OutputSelector>
    <OutputSelector>DateArrivalUTC</OutputSelector>
    <OutputSelector>CostPrice</OutputSelector>
    <OutputSelector>UnitOfMeasure</OutputSelector>
    <OutputSelector>BaseUnitOfMeasure</OutputSelector>
    <OutputSelector>BaseUnitPerQuantity</OutputSelector>
    <OutputSelector>QuantityPerScan</OutputSelector>
    <OutputSelector>BuyUnitQuantity</OutputSelector>
    <OutputSelector>SellUnitQuantity</OutputSelector>
    <OutputSelector>PreOrderQuantity</OutputSelector>
    <OutputSelector>PickPriority</OutputSelector>
    <OutputSelector>PickZone</OutputSelector>
    <OutputSelector>eBayProductIDs</OutputSelector>
    <OutputSelector>TaxCategory</OutputSelector>
    <OutputSelector>TaxFreeItem</OutputSelector>
    <OutputSelector>TaxInclusive</OutputSelector>
    <OutputSelector>SearchKeywords</OutputSelector>
    <OutputSelector>ShortDescription</OutputSelector>
    <OutputSelector>Description</OutputSelector>
    <OutputSelector>Features</OutputSelector>
    <OutputSelector>Specifications</OutputSelector>
    <OutputSelector>Warranty</OutputSelector>
    <OutputSelector>eBayDescription</OutputSelector>
    <OutputSelector>TermsAndConditions</OutputSelector>
    <OutputSelector>ArtistOrAuthor</OutputSelector>
    <OutputSelector>Format</OutputSelector>
    <OutputSelector>ModelNumber</OutputSelector>
    <OutputSelector>Subtitle</OutputSelector>
    <OutputSelector>AvailabilityDescription</OutputSelector>
    <OutputSelector>Images</OutputSelector>
    <OutputSelector>ImageURL</OutputSelector>
    <OutputSelector>BrochureURL</OutputSelector>
    <OutputSelector>ProductURL</OutputSelector>
    <OutputSelector>DateAdded</OutputSelector>
    <OutputSelector>DateAddedLocal</OutputSelector>
    <OutputSelector>DateAddedUTC</OutputSelector>
    <OutputSelector>DateCreatedLocal</OutputSelector>
    <OutputSelector>DateCreatedUTC</OutputSelector>
    <OutputSelector>DateUpdated</OutputSelector>
    <OutputSelector>DateUpdatedLocal</OutputSelector>
    <OutputSelector>DateUpdatedUTC</OutputSelector>
    <OutputSelector>UPC</OutputSelector>
    <OutputSelector>UPC1</OutputSelector>
    <OutputSelector>UPC2</OutputSelector>
    <OutputSelector>UPC3</OutputSelector>
    <OutputSelector>Type</OutputSelector>
    <OutputSelector>SubType</OutputSelector>
    <OutputSelector>NumbersOfLabelsToPrint</OutputSelector>
    <OutputSelector>ReferenceNumber</OutputSelector>
    <OutputSelector>InternalNotes</OutputSelector>
    <OutputSelector>BarcodeHeight</OutputSelector>
    <OutputSelector>SupplierItemCode</OutputSelector>
    <OutputSelector>SplitForWarehousePicking</OutputSelector>
    <OutputSelector>DisplayTemplate</OutputSelector>
    <OutputSelector>EditableKitBundle</OutputSelector>
    <OutputSelector>RequiresPackaging</OutputSelector>
    <OutputSelector>IsAsset</OutputSelector>
    <OutputSelector>IsServiceItem</OutputSelector>
    <OutputSelector>WhenToRepeatOnStandingOrders</OutputSelector>
    <OutputSelector>SerialTracking</OutputSelector>
    <OutputSelector>Group</OutputSelector>
    <OutputSelector>ShippingCategory</OutputSelector>
    <OutputSelector>MonthlySpendRequirement</OutputSelector>
    <OutputSelector>RestrictedToUserGroup</OutputSelector>
    <OutputSelector>IsInventoried</OutputSelector>
    <OutputSelector>IsBought</OutputSelector>
    <OutputSelector>IsSold</OutputSelector>
    <OutputSelector>ExpenseAccount</OutputSelector>
    <OutputSelector>PurchaseTaxCode</OutputSelector>
    <OutputSelector>CostOfSalesAccount</OutputSelector>
    <OutputSelector>IncomeAccount</OutputSelector>
    <OutputSelector>AssetAccount</OutputSelector>
    <OutputSelector>KitComponents</OutputSelector>
    <OutputSelector>SEOPageTitle</OutputSelector>
    <OutputSelector>SEOMetaKeywords</OutputSelector>
    <OutputSelector>SEOPageHeading</OutputSelector>
    <OutputSelector>SEOMetaDescription</OutputSelector>
    <OutputSelector>SEOCanonicalURL</OutputSelector>
    <OutputSelector>ItemURL</OutputSelector>
    <OutputSelector>CustomContent</OutputSelector>
    <OutputSelector>CustomNonDelivery</OutputSelector>
    <OutputSelector>AutomaticURL</OutputSelector>
    <OutputSelector>Job</OutputSelector>
    <OutputSelector>RelatedContents</OutputSelector>
    <OutputSelector>SalesChannels</OutputSelector>
    <OutputSelector>VariantInventoryIDs</OutputSelector>
    <OutputSelector>IsVariant</OutputSelector>
    <OutputSelector>HSTariffNumber</OutputSelector>
    <OutputSelector>Misc01</OutputSelector>
    <OutputSelector>Misc02</OutputSelector>
    <OutputSelector>Misc03</OutputSelector>
    <OutputSelector>Misc04</OutputSelector>
    <OutputSelector>Misc05</OutputSelector>
    <OutputSelector>Misc06</OutputSelector>
    <OutputSelector>Misc07</OutputSelector>
    <OutputSelector>Misc08</OutputSelector>
    <OutputSelector>Misc09</OutputSelector>
    <OutputSelector>Misc10</OutputSelector>
    <OutputSelector>Misc11</OutputSelector>
    <OutputSelector>Misc12</OutputSelector>
    <OutputSelector>Misc13</OutputSelector>
    <OutputSelector>Misc14</OutputSelector>
    <OutputSelector>Misc15</OutputSelector>
    <OutputSelector>Misc16</OutputSelector>
    <OutputSelector>Misc17</OutputSelector>
    <OutputSelector>Misc18</OutputSelector>
    <OutputSelector>Misc19</OutputSelector>
    <OutputSelector>Misc20</OutputSelector>
    <OutputSelector>Misc21</OutputSelector>
    <OutputSelector>Misc22</OutputSelector>
    <OutputSelector>Misc23</OutputSelector>
    <OutputSelector>Misc24</OutputSelector>
    <OutputSelector>Misc25</OutputSelector>
    <OutputSelector>Misc26</OutputSelector>
    <OutputSelector>Misc27</OutputSelector>
    <OutputSelector>Misc28</OutputSelector>
    <OutputSelector>Misc29</OutputSelector>
    <OutputSelector>Misc30</OutputSelector>
    <OutputSelector>Misc31</OutputSelector>
    <OutputSelector>Misc32</OutputSelector>
    <OutputSelector>Misc33</OutputSelector>
    <OutputSelector>Misc34</OutputSelector>
    <OutputSelector>Misc35</OutputSelector>
    <OutputSelector>Misc36</OutputSelector>
    <OutputSelector>Misc37</OutputSelector>
    <OutputSelector>Misc38</OutputSelector>
    <OutputSelector>Misc39</OutputSelector>
    <OutputSelector>Misc40</OutputSelector>
    <OutputSelector>Misc41</OutputSelector>
    <OutputSelector>Misc42</OutputSelector>
    <OutputSelector>Misc43</OutputSelector>
    <OutputSelector>Misc44</OutputSelector>
    <OutputSelector>Misc45</OutputSelector>
    <OutputSelector>Misc46</OutputSelector>
    <OutputSelector>Misc47</OutputSelector>
    <OutputSelector>Misc48</OutputSelector>
    <OutputSelector>Misc49</OutputSelector>
    <OutputSelector>Misc50</OutputSelector>
    <OutputSelector>Misc51</OutputSelector>
    <OutputSelector>Misc52</OutputSelector>
    <OutputSelector>eBayItems</OutputSelector>
    <OutputSelector>eBayActiveItems</OutputSelector>
   </Filter>
</GetItem>

```

### JSON POST

```rainbow rainbow-show
{
  "Filter": {
﻿    "SKU":["String"﻿/*, ...*/],
    "RestockQty":"Integer",
    "ReorderQty":"Integer",
    "RestockWarningLevel":"Integer",
    "AccountingCode":["String"﻿/*, ...*/],
    "InventoryID":["Integer"﻿/*, ...*/],
    "ParentSKU":"String",
    "Brand":["String"﻿/*, ...*/],
    "Model":["String"﻿/*, ...*/],
    "Name":["String"﻿/*, ...*/],
    "PrimarySupplier":["String"﻿/*, ...*/],
    "Approved":["Boolean"﻿/*, ...*/],
    "ApprovedForPOS":["Boolean"﻿/*, ...*/],
    "ApprovedForMobileStore":["Boolean"﻿/*, ...*/],
    "SalesChannels": {
﻿      "SalesChannel": [ {\
﻿        "SalesChannelID":"Integer",\
        "IsApproved":"Boolean"\
} ] ﻿
} ,﻿    "Visible":["Boolean"﻿/*, ...*/],
    "IsActive":["Boolean"﻿/*, ...*/],
    "IsNetoUtility":["Boolean"﻿/*, ...*/],
    "IsGiftVoucher":"Boolean",
    "EditableKitBundle":"Boolean",
    "AuGstExempt":["Boolean"﻿/*, ...*/],
    "NzGstExempt":["Boolean"﻿/*, ...*/],
    "DateAddedFrom":"DateTime",
    "DateAddedTo":"DateTime",
    "DateCreatedFrom":"DateTime",
    "DateCreatedTo":"DateTime",
    "DateUpdatedFrom":"DateTime",
    "DateUpdatedTo":"DateTime",
    "CategoryID":["Integer"﻿/*, ...*/],
    "Priority":"Integer",
    "Page":"Integer",
    "Limit":"Integer",
    "OrderBy":"Enumeration",
    "OrderDirection":"Enumeration",
    "OutputSelector":["Enumeration"﻿/*, ...*/]
} ﻿
}

```

#### <Filter>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| RestockQty | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ReorderQty | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| RestockWarningLevel | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| AccountingCode | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| InventoryID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ParentSKU | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Brand | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Model | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Name | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| PrimarySupplier | Optional<br>_Supports Multiple Elements_ | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Approved | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ApprovedForPOS | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ApprovedForMobileStore | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| SalesChannels | Optional | [SalesChannels](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem#SalesChannels) |
| Visible | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsActive | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsNetoUtility | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsGiftVoucher | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| EditableKitBundle | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AuGstExempt | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| NzGstExempt | Optional<br>_Supports Multiple Elements_ | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| DateAddedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateAddedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateCreatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateCreatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedFrom | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateUpdatedTo | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CategoryID | Optional<br>_Supports Multiple Elements_ | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Priority | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Page | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Limit | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| OrderBy | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(ParentSKU, ID, Model, Name, IsActive, DateAdded, DateUpdated) |
| OrderDirection | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(ASC, DESC) |

#### <OutputSelector>

Determines what is returned by the POST. Refer to the example response below this table or the related XSD schema for details and restrictions of each output element.

**Note:** Each OutputSelector should be a separate element in your post.

|     |     |
| --- | --- |
| OutputSelector | [Enumeration](https://developers.maropost.com/api-data-types) (ParentSKU, ID, Brand, Model, Virtual, Name, PrimarySupplier, Approved, IsActive, IsNetoUtility, AuGstExempt, NzGstExempt, IsGiftVoucher, OriginCountry, FreeGifts, CrossSellProducts, UpsellProducts, PriceGroups, PriceGroups.MultilevelBands, ItemLength, ItemWidth, ItemHeight, ShippingLength, ShippingWidth, ShippingHeight, ShippingWeight, CubicWeight, HandlingTime, WarehouseQuantity, WarehouseLocations, CommittedQuantity, AvailableSellQuantity, ItemSpecifics, Categories, AccountingCode, SortOrder1, SortOrder2, RRP, DefaultPrice, DefaultPurchasePrice, PromotionPrice, PromotionStartDate, PromotionStartDateLocal, PromotionStartDateUTC, PromotionExpiryDate, PromotionExpiryDateLocal, PromotionExpiryDateUTC, DateArrival, DateArrivalUTC, CostPrice, UnitOfMeasure, BaseUnitOfMeasure, BaseUnitPerQuantity, QuantityPerScan, BuyUnitQuantity, SellUnitQuantity, PreOrderQuantity, PickPriority, PickZone, eBayProductIDs, TaxCategory, TaxFreeItem, TaxInclusive, SearchKeywords, ShortDescription, Description, Features, Specifications, Warranty, eBayDescription, TermsAndConditions, ArtistOrAuthor, Format, ModelNumber, Subtitle, AvailabilityDescription, Images, ImageURL, BrochureURL, ProductURL, DateAdded, DateAddedLocal, DateAddedUTC, DateCreatedLocal, DateCreatedUTC, DateUpdated, DateUpdatedLocal, DateUpdatedUTC, UPC, UPC1, UPC2, UPC3, Type, SubType, NumbersOfLabelsToPrint, ReferenceNumber, InternalNotes, BarcodeHeight, SupplierItemCode, SplitForWarehousePicking, DisplayTemplate, EditableKitBundle, RequiresPackaging, IsAsset, IsServiceItem, WhenToRepeatOnStandingOrders, SerialTracking, Group, ShippingCategory, MonthlySpendRequirement, RestrictedToUserGroup, IsInventoried, IsBought, IsSold, ExpenseAccount, PurchaseTaxCode, CostOfSalesAccount, IncomeAccount, AssetAccount, KitComponents, SEOPageTitle, SEOMetaKeywords, SEOPageHeading, SEOMetaDescription, SEOCanonicalURL, ItemURL, CustomContent, CustomNonDelivery, AutomaticURL, Job, RelatedContents, SalesChannels, VariantInventoryIDs, IsVariant, HSTariffNumber, Misc01, Misc02, Misc03, Misc04, Misc05, Misc06, Misc07, Misc08, Misc09, Misc10, Misc11, Misc12, Misc13, Misc14, Misc15, Misc16, Misc17, Misc18, Misc19, Misc20, Misc21, Misc22, Misc23, Misc24, Misc25, Misc26, Misc27, Misc28, Misc29, Misc30, Misc31, Misc32, Misc33, Misc34, Misc35, Misc36, Misc37, Misc38, Misc39, Misc40, Misc41, Misc42, Misc43, Misc44, Misc45, Misc46, Misc47, Misc48, Misc49, Misc50, Misc51, Misc52, eBayItems, eBayActiveItems) |

* * *

#### <SalesChannels>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SalesChannel | **Required**<br>_Supports Multiple Elements_ | [SalesChannel](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/getitem#SalesChannel) |

* * *

#### <SalesChannel>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SalesChannelID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| IsApproved | **Required** | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

## GetItem Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetItem>
   <Item>
    <ID>(Integer)</ID>
    <SKU>(String)</SKU>
    <InventoryID>(Integer)</InventoryID>
    <ParentSKU>(String)</ParentSKU>
    <AccountingCode>(String)</AccountingCode>
    <Virtual>(Boolean)</Virtual>
    <Brand>(String)</Brand>
    <Name>(String)</Name>
    <Model>(String)</Model>
    <SortOrder1>(Integer)</SortOrder1>
    <SortOrder2>(Integer)</SortOrder2>
    <RRP>(Decimal)</RRP>
    <DefaultPrice>(Decimal)</DefaultPrice>
    <PromotionPrice>(Decimal)</PromotionPrice>
    <PromotionStartDate>(DateTime)</PromotionStartDate>
    <PromotionStartDateLocal>(DateTime)</PromotionStartDateLocal>
    <PromotionStartDateUTC>(DateTime)</PromotionStartDateUTC>
    <PromotionExpiryDate>(DateTime)</PromotionExpiryDate>
    <PromotionExpiryDateLocal>(DateTime)</PromotionExpiryDateLocal>
    <PromotionExpiryDateUTC>(DateTime)</PromotionExpiryDateUTC>
    <DateArrival>(Date)</DateArrival>
    <DateArrivalUTC>(Date)</DateArrivalUTC>
    <CostPrice>(Decimal)</CostPrice>
    <UnitOfMeasure>(String)</UnitOfMeasure>
    <BaseUnitOfMeasure>(String)</BaseUnitOfMeasure>
    <BaseUnitPerQuantity>(Decimal)</BaseUnitPerQuantity>
    <BuyUnitQuantity>(Integer)</BuyUnitQuantity>
    <QuantityPerScan>(Integer)</QuantityPerScan>
    <SellUnitQuantity>(Integer)</SellUnitQuantity>
    <PreOrderQuantity>(Integer)</PreOrderQuantity>
    <PickPriority>(String)</PickPriority>
    <PickZone>(String)</PickZone>
    <Approved>(Boolean)</Approved>
    <IsActive>(Boolean)</IsActive>
    <IsNetoUtility>(Boolean)</IsNetoUtility>
    <IsGiftVoucher>(Boolean)</IsGiftVoucher>
    <OriginCountry>(String)</OriginCountry>
    <Visible>(Boolean)</Visible>
    <TaxFreeItem>(Boolean)</TaxFreeItem>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <ApprovedForPOS>(Boolean)</ApprovedForPOS>
    <ApprovedForMobileStore>(Boolean)</ApprovedForMobileStore>
    <SearchKeywords>(String)</SearchKeywords>
    <ShortDescription>(String)</ShortDescription>
    <Description>(String)</Description>
    <TermsAndConditions>(String)</TermsAndConditions>
    <Features>(String)</Features>
    <Specifications>(String)</Specifications>
    <Warranty>(String)</Warranty>
    <ArtistOrAuthor>(String)</ArtistOrAuthor>
    <Format>(String)</Format>
    <ModelNumber>(String)</ModelNumber>
    <Subtitle>(String)</Subtitle>
    <AvailabilityDescription>(String)</AvailabilityDescription>
     <SalesChannels>
       <SalesChannel>
        <SalesChannelID>(Integer)</SalesChannelID>
        <SalesChannelName>(String)</SalesChannelName>
        <IsApproved>(Boolean)</IsApproved>
       </SalesChannel>
     </SalesChannels>     <Images>
       <Image>
        <Name>(String)</Name>
        <URL>(String)</URL>
        <ThumbURL>(String)</ThumbURL>
        <MediumThumbURL>(String)</MediumThumbURL>
        <Timestamp>(DateTime)</Timestamp>
       </Image>
     </Images>    <ImageURL>(String)</ImageURL>
    <BrochureURL>(String)</BrochureURL>
    <ProductURL>(String)</ProductURL>
    <DateAdded>(DateTime)</DateAdded>
    <DateAddedLocal>(DateTime)</DateAddedLocal>
    <DateAddedUTC>(DateTime)</DateAddedUTC>
    <DateUpdated>(DateTime)</DateUpdated>
    <DateUpdatedLocal>(DateTime)</DateUpdatedLocal>
    <DateUpdatedUTC>(DateTime)</DateUpdatedUTC>
    <UPC>(String)</UPC>
    <UPC1>(String)</UPC1>
    <UPC2>(String)</UPC2>
    <UPC3>(String)</UPC3>
    <Type>(String)</Type>
    <SubType>(String)</SubType>
    <NumbersOfLabelsToPrint>(Integer)</NumbersOfLabelsToPrint>
    <ReferenceNumber>(Integer)</ReferenceNumber>
    <InternalNotes>(String)</InternalNotes>
    <BarcodeHeight>(Integer)</BarcodeHeight>
    <IsInventoried>(String)</IsInventoried>
    <IsBought>(String)</IsBought>
    <IsSold>(String)</IsSold>
    <ExpenseAccount>(String)</ExpenseAccount>
    <PurchaseTaxCode>(String)</PurchaseTaxCode>
    <CostOfSalesAccount>(String)</CostOfSalesAccount>
    <IncomeAccount>(String)</IncomeAccount>
    <AssetAccount>(String)</AssetAccount>
    <ItemHeight>(Decimal)</ItemHeight>
    <ItemLength>(Decimal)</ItemLength>
    <ItemWidth>(Decimal)</ItemWidth>
    <ShippingHeight>(Decimal)</ShippingHeight>
    <ShippingLength>(Decimal)</ShippingLength>
    <ShippingWidth>(Decimal)</ShippingWidth>
    <ShippingWeight>(Decimal)</ShippingWeight>
    <CubicWeight>(Decimal)</CubicWeight>
    <HandlingTime>(Integer)</HandlingTime>
    <SupplierItemCode>(String)</SupplierItemCode>
    <SplitForWarehousePicking>(String)</SplitForWarehousePicking>
    <eBayDescription>(String)</eBayDescription>
    <PrimarySupplier>(String)</PrimarySupplier>
    <DisplayTemplate>(String)</DisplayTemplate>
    <EditableKitBundle>(Boolean)</EditableKitBundle>
    <RequiresPackaging>(Boolean)</RequiresPackaging>
    <SEOPageTitle>(String)</SEOPageTitle>
    <SEOMetaKeywords>(String)</SEOMetaKeywords>
    <SEOPageHeading>(String)</SEOPageHeading>
    <SEOMetaDescription>(String)</SEOMetaDescription>
    <SEOCanonicalURL>(String)</SEOCanonicalURL>
    <IsAsset>(Boolean)</IsAsset>
    <WhenToRepeatOnStandingOrders>(String)</WhenToRepeatOnStandingOrders>
    <SerialTracking>(Boolean)</SerialTracking>
    <Group>(String)</Group>
    <ShippingCategory>(String)</ShippingCategory>
    <Job>(String)</Job>
    <MonthlySpendRequirement>(Decimal)</MonthlySpendRequirement>
    <RestrictedToUserGroup>(String)</RestrictedToUserGroup>
    <ItemURL>(String)</ItemURL>
    <AutomaticURL>(Boolean)</AutomaticURL>
    <CommittedQuantity>(Integer)</CommittedQuantity>
    <AvailableSellQuantity>(Integer)</AvailableSellQuantity>
    <HSTariffNumber>(String)</HSTariffNumber>
    <Misc01>(String)</Misc01>
    <Misc02>(String)</Misc02>
    <Misc03>(String)</Misc03>
    <Misc04>(String)</Misc04>
    <Misc05>(String)</Misc05>
    <Misc06>(String)</Misc06>
    <Misc07>(String)</Misc07>
    <Misc08>(String)</Misc08>
    <Misc09>(String)</Misc09>
    <Misc10>(String)</Misc10>
    <Misc11>(String)</Misc11>
    <Misc12>(String)</Misc12>
    <Misc13>(String)</Misc13>
    <Misc14>(String)</Misc14>
    <Misc15>(String)</Misc15>
    <Misc16>(String)</Misc16>
    <Misc17>(String)</Misc17>
    <Misc18>(String)</Misc18>
    <Misc19>(String)</Misc19>
    <Misc20>(String)</Misc20>
    <Misc21>(String)</Misc21>
    <Misc22>(String)</Misc22>
    <Misc23>(String)</Misc23>
    <Misc24>(String)</Misc24>
    <Misc25>(String)</Misc25>
    <Misc26>(String)</Misc26>
    <Misc27>(String)</Misc27>
    <Misc28>(String)</Misc28>
    <Misc29>(String)</Misc29>
    <Misc30>(String)</Misc30>
    <Misc31>(String)</Misc31>
    <Misc32>(String)</Misc32>
    <Misc33>(String)</Misc33>
    <Misc34>(String)</Misc34>
    <Misc35>(String)</Misc35>
    <Misc36>(String)</Misc36>
    <Misc37>(String)</Misc37>
    <Misc38>(String)</Misc38>
    <Misc39>(String)</Misc39>
    <Misc40>(String)</Misc40>
    <Misc41>(String)</Misc41>
    <Misc42>(String)</Misc42>
    <Misc43>(String)</Misc43>
    <Misc44>(String)</Misc44>
    <Misc45>(String)</Misc45>
    <Misc46>(String)</Misc46>
    <Misc47>(String)</Misc47>
    <Misc48>(String)</Misc48>
    <Misc49>(String)</Misc49>
    <Misc50>(String)</Misc50>
    <Misc51>(String)</Misc51>
    <Misc52>(String)</Misc52>
     <FreeGifts>
       <FreeGift>
        <SKU>(String)</SKU>
       </FreeGift>
     </FreeGifts>     <CrossSellProducts>
       <CrossSellProduct>
        <SKU>(String)</SKU>
       </CrossSellProduct>
     </CrossSellProducts>     <UpsellProducts>
       <UpsellProduct>
        <SKU>(String)</SKU>
       </UpsellProduct>
     </UpsellProducts>     <KitComponents>
       <KitComponent>
        <ComponentSKU>(String)</ComponentSKU>
        <ComponentValue>(String)</ComponentValue>
        <AssembleQuantity>(Integer)</AssembleQuantity>
        <MinimumQuantity>(Integer)</MinimumQuantity>
        <MaximumQuantity>(Integer)</MaximumQuantity>
        <SortOrder>(Integer)</SortOrder>
       </KitComponent>
     </KitComponents>     <PriceGroups>
       <PriceGroup>
        <GroupID>(String)</GroupID>
        <Group>(String)</Group>
        <Price>(Decimal)</Price>
        <PromotionPrice>(Decimal)</PromotionPrice>
        <MinimumQuantity>(Integer)</MinimumQuantity>
        <MaximumQuantity>(Integer)</MaximumQuantity>
        <Multiple>(Integer)</Multiple>
        <MultipleStartQuantity>(Integer)</MultipleStartQuantity>
         <MultilevelBands>
           <MultiLevelBand>
            <Price>(Decimal)</Price>
            <MinimumQuantity>(Integer)</MinimumQuantity>
            <MaximumQuantity>(Integer)</MaximumQuantity>
           </MultiLevelBand>
         </MultilevelBands>       </PriceGroup>
     </PriceGroups>     <Categories>
       <Category>
        <CategoryID>(Integer)</CategoryID>
        <Priority>(Integer)</Priority>
        <CategoryName>(String)</CategoryName>
       </Category>
     </Categories>     <ItemSpecifics>
       <ItemSpecific>
        <Name>(String)</Name>
        <Value>(String)</Value>
       </ItemSpecific>
     </ItemSpecifics>     <WarehouseQuantity>
      <WarehouseID>(Integer)</WarehouseID>
      <Quantity>(Integer)</Quantity>
     </WarehouseQuantity>
     <WarehouseLocations>
       <WarehouseLocation>
        <LocationID>(String)</LocationID>
        <WarehouseID>(String)</WarehouseID>
        <Type>(String)</Type>
        <Priority>(Integer)</Priority>
       </WarehouseLocation>
     </WarehouseLocations>     <RelatedContents>
      <ContentID>(Integer)</ContentID>
      <ContentName>(String)</ContentName>
      <ContentTypeID>(Integer)</ContentTypeID>
      <ContentTypeName>(String)</ContentTypeName>
      <Priority>(Integer)</Priority>
     </RelatedContents>
     <eBayItems>
       <eBayItem>
        <ListingTemplateID>(String)</ListingTemplateID>
        <DesignTemplateID>(String)</DesignTemplateID>
        <eBayCategory1>(String)</eBayCategory1>
        <eBayCategory2>(String)</eBayCategory2>
        <eBayStoreCategory1>(String)</eBayStoreCategory1>
        <eBayStoreCategory2>(String)</eBayStoreCategory2>
       </eBayItem>
     </eBayItems>     <eBayActiveItems>
       <eBayActiveItem>
        <eBayItemID>(String)</eBayItemID>
       </eBayActiveItem>
     </eBayActiveItems>     <eBayProductIDs>
       <eBayProductID>
        <eBaySiteFullName>(String)</eBaySiteFullName>
        <eBayProductIDValue>(String)</eBayProductIDValue>
       </eBayProductID>
     </eBayProductIDs>   </Item>
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
</GetItem>

```

### JSON Response

```rainbow rainbow-show
{
  "Item": [ {\
﻿    "ID":"Integer",\
    "SKU":"String",\
    "InventoryID":"Integer",\
    "ParentSKU":"String",\
    "AccountingCode":"String",\
    "Virtual":"Boolean",\
    "Brand":"String",\
    "Name":"String",\
    "Model":"String",\
    "SortOrder1":"Integer",\
    "SortOrder2":"Integer",\
    "RRP":"Decimal",\
    "DefaultPrice":"Decimal",\
    "PromotionPrice":"Decimal",\
    "PromotionStartDate":"DateTime",\
    "PromotionStartDateLocal":"DateTime",\
    "PromotionStartDateUTC":"DateTime",\
    "PromotionExpiryDate":"DateTime",\
    "PromotionExpiryDateLocal":"DateTime",\
    "PromotionExpiryDateUTC":"DateTime",\
    "DateArrival":"Date",\
    "DateArrivalUTC":"Date",\
    "CostPrice":"Decimal",\
    "UnitOfMeasure":"String",\
    "BaseUnitOfMeasure":"String",\
    "BaseUnitPerQuantity":"Decimal",\
    "BuyUnitQuantity":"Integer",\
    "QuantityPerScan":"Integer",\
    "SellUnitQuantity":"Integer",\
    "PreOrderQuantity":"Integer",\
    "PickPriority":"String",\
    "PickZone":"String",\
    "Approved":"Boolean",\
    "IsActive":"Boolean",\
    "IsNetoUtility":"Boolean",\
    "IsGiftVoucher":"Boolean",\
    "OriginCountry":"String",\
    "Visible":"Boolean",\
    "TaxFreeItem":"Boolean",\
    "TaxInclusive":"Boolean",\
    "ApprovedForPOS":"Boolean",\
    "ApprovedForMobileStore":"Boolean",\
    "SearchKeywords":"String",\
    "ShortDescription":"String",\
    "Description":"String",\
    "TermsAndConditions":"String",\
    "Features":"String",\
    "Specifications":"String",\
    "Warranty":"String",\
    "ArtistOrAuthor":"String",\
    "Format":"String",\
    "ModelNumber":"String",\
    "Subtitle":"String",\
    "AvailabilityDescription":"String",\
    "SalesChannels": {\
﻿      "SalesChannel": [ {\
﻿        "SalesChannelID":"Integer",\
        "SalesChannelName":"String",\
        "IsApproved":"Boolean"\
} ] ﻿\
} ,﻿    "Images": {\
﻿      "Image": [ {\
﻿        "Name":"String",\
        "URL":"String",\
        "ThumbURL":"String",\
        "MediumThumbURL":"String",\
        "Timestamp":"DateTime"\
} ] ﻿\
} ,﻿    "ImageURL":"String",\
    "BrochureURL":"String",\
    "ProductURL":"String",\
    "DateAdded":"DateTime",\
    "DateAddedLocal":"DateTime",\
    "DateAddedUTC":"DateTime",\
    "DateUpdated":"DateTime",\
    "DateUpdatedLocal":"DateTime",\
    "DateUpdatedUTC":"DateTime",\
    "UPC":"String",\
    "UPC1":"String",\
    "UPC2":"String",\
    "UPC3":"String",\
    "Type":"String",\
    "SubType":"String",\
    "NumbersOfLabelsToPrint":"Integer",\
    "ReferenceNumber":"Integer",\
    "InternalNotes":"String",\
    "BarcodeHeight":"Integer",\
    "IsInventoried":"String",\
    "IsBought":"String",\
    "IsSold":"String",\
    "ExpenseAccount":"String",\
    "PurchaseTaxCode":"String",\
    "CostOfSalesAccount":"String",\
    "IncomeAccount":"String",\
    "AssetAccount":"String",\
    "ItemHeight":"Decimal",\
    "ItemLength":"Decimal",\
    "ItemWidth":"Decimal",\
    "ShippingHeight":"Decimal",\
    "ShippingLength":"Decimal",\
    "ShippingWidth":"Decimal",\
    "ShippingWeight":"Decimal",\
    "CubicWeight":"Decimal",\
    "HandlingTime":"Integer",\
    "SupplierItemCode":"String",\
    "SplitForWarehousePicking":"String",\
    "eBayDescription":"String",\
    "PrimarySupplier":"String",\
    "DisplayTemplate":"String",\
    "EditableKitBundle":"Boolean",\
    "RequiresPackaging":"Boolean",\
    "SEOPageTitle":"String",\
    "SEOMetaKeywords":"String",\
    "SEOPageHeading":"String",\
    "SEOMetaDescription":"String",\
    "SEOCanonicalURL":"String",\
    "IsAsset":"Boolean",\
    "WhenToRepeatOnStandingOrders":"String",\
    "SerialTracking":"Boolean",\
    "Group":"String",\
    "ShippingCategory":"String",\
    "Job":"String",\
    "MonthlySpendRequirement":"Decimal",\
    "RestrictedToUserGroup":"String",\
    "ItemURL":"String",\
    "AutomaticURL":"Boolean",\
    "CommittedQuantity":"Integer",\
    "AvailableSellQuantity":"Integer",\
    "HSTariffNumber":"String",\
    "Misc01":"String",\
    "Misc02":"String",\
    "Misc03":"String",\
    "Misc04":"String",\
    "Misc05":"String",\
    "Misc06":"String",\
    "Misc07":"String",\
    "Misc08":"String",\
    "Misc09":"String",\
    "Misc10":"String",\
    "Misc11":"String",\
    "Misc12":"String",\
    "Misc13":"String",\
    "Misc14":"String",\
    "Misc15":"String",\
    "Misc16":"String",\
    "Misc17":"String",\
    "Misc18":"String",\
    "Misc19":"String",\
    "Misc20":"String",\
    "Misc21":"String",\
    "Misc22":"String",\
    "Misc23":"String",\
    "Misc24":"String",\
    "Misc25":"String",\
    "Misc26":"String",\
    "Misc27":"String",\
    "Misc28":"String",\
    "Misc29":"String",\
    "Misc30":"String",\
    "Misc31":"String",\
    "Misc32":"String",\
    "Misc33":"String",\
    "Misc34":"String",\
    "Misc35":"String",\
    "Misc36":"String",\
    "Misc37":"String",\
    "Misc38":"String",\
    "Misc39":"String",\
    "Misc40":"String",\
    "Misc41":"String",\
    "Misc42":"String",\
    "Misc43":"String",\
    "Misc44":"String",\
    "Misc45":"String",\
    "Misc46":"String",\
    "Misc47":"String",\
    "Misc48":"String",\
    "Misc49":"String",\
    "Misc50":"String",\
    "Misc51":"String",\
    "Misc52":"String",\
    "FreeGifts": {\
﻿      "FreeGift": [ {\
﻿        "SKU":"String"\
} ] ﻿\
} ,﻿    "CrossSellProducts": {\
﻿      "CrossSellProduct": [ {\
﻿        "SKU":"String"\
} ] ﻿\
} ,﻿    "UpsellProducts": {\
﻿      "UpsellProduct": [ {\
﻿        "SKU":"String"\
} ] ﻿\
} ,﻿    "KitComponents": {\
﻿      "KitComponent": [ {\
﻿        "ComponentSKU":"String",\
        "ComponentValue":"String",\
        "AssembleQuantity":"Integer",\
        "MinimumQuantity":"Integer",\
        "MaximumQuantity":"Integer",\
        "SortOrder":"Integer"\
} ] ﻿\
} ,﻿    "PriceGroups": {\
﻿      "PriceGroup": [ {\
﻿        "GroupID":"String",\
        "Group":"String",\
        "Price":"Decimal",\
        "PromotionPrice":"Decimal",\
        "MinimumQuantity":"Integer",\
        "MaximumQuantity":"Integer",\
        "Multiple":"Integer",\
        "MultipleStartQuantity":"Integer",\
        "MultilevelBands": {\
﻿          "MultiLevelBand": [ {\
﻿            "Price":"Decimal",\
            "MinimumQuantity":"Integer",\
            "MaximumQuantity":"Integer"\
} ] ﻿\
} ﻿\
} ] ﻿\
} ,﻿    "Categories": {\
﻿      "Category": [ {\
﻿        "CategoryID":"Integer",\
        "Priority":"Integer",\
        "CategoryName":"String"\
} ] ﻿\
} ,﻿    "ItemSpecifics": {\
﻿      "ItemSpecific": [ {\
﻿        "Name":"String",\
        "Value":"String"\
} ] ﻿\
} ,﻿    "WarehouseQuantity": [ {\
﻿      "WarehouseID":"Integer",\
      "Quantity":"Integer"\
} ] ,﻿    "WarehouseLocations": {\
﻿      "WarehouseLocation": [ {\
﻿        "LocationID":"String",\
        "WarehouseID":"String",\
        "Type":"String",\
        "Priority":"Integer"\
} ] ﻿\
} ,﻿    "RelatedContents": [ {\
﻿      "ContentID":"Integer",\
      "ContentName":"String",\
      "ContentTypeID":"Integer",\
      "ContentTypeName":"String",\
      "Priority":"Integer"\
} ] ,﻿    "eBayItems": {\
﻿      "eBayItem": [ {\
﻿        "ListingTemplateID":"String",\
        "DesignTemplateID":"String",\
        "eBayCategory1":"String",\
        "eBayCategory2":"String",\
        "eBayStoreCategory1":"String",\
        "eBayStoreCategory2":"String"\
} ] ﻿\
} ,﻿    "eBayActiveItems": {\
﻿      "eBayActiveItem": [ {\
﻿        "eBayItemID":"String"\
} ] ﻿\
} ,﻿    "eBayProductIDs": {\
﻿      "eBayProductID": [ {\
﻿        "eBaySiteFullName":"String",\
        "eBayProductIDValue":"String"\
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

#### <Item>

| Element Name | Field Type |
| --- | --- |
| ID | [Integer](https://developers.maropost.com/api-data-types) |
| SKU | [String](https://developers.maropost.com/api-data-types) |
| InventoryID | [Integer](https://developers.maropost.com/api-data-types) |
| ParentSKU | [String](https://developers.maropost.com/api-data-types) |
| AccountingCode | [String](https://developers.maropost.com/api-data-types) |
| Virtual | [Boolean](https://developers.maropost.com/api-data-types) |
| Brand | [String](https://developers.maropost.com/api-data-types) |
| Name | [String](https://developers.maropost.com/api-data-types) |
| Model | [String](https://developers.maropost.com/api-data-types) |
| SortOrder1 | [Integer](https://developers.maropost.com/api-data-types) |
| SortOrder2 | [Integer](https://developers.maropost.com/api-data-types) |
| RRP | [Decimal](https://developers.maropost.com/api-data-types) |
| DefaultPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| PromotionPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| PromotionStartDate | [DateTime](https://developers.maropost.com/api-data-types) |
| PromotionStartDateLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| PromotionStartDateUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| PromotionExpiryDate | [DateTime](https://developers.maropost.com/api-data-types) |
| PromotionExpiryDateLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| PromotionExpiryDateUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| DateArrival | [Date](https://developers.maropost.com/api-data-types) |
| DateArrivalUTC | [Date](https://developers.maropost.com/api-data-types) |
| CostPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| UnitOfMeasure | [String](https://developers.maropost.com/api-data-types) |
| BaseUnitOfMeasure | [String](https://developers.maropost.com/api-data-types) |
| BaseUnitPerQuantity | [Decimal](https://developers.maropost.com/api-data-types) |
| BuyUnitQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| QuantityPerScan | [Integer](https://developers.maropost.com/api-data-types) |
| SellUnitQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| PreOrderQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| PickPriority | [String](https://developers.maropost.com/api-data-types) |
| PickZone | [String](https://developers.maropost.com/api-data-types) |
| Approved | [Boolean](https://developers.maropost.com/api-data-types) |
| IsActive | [Boolean](https://developers.maropost.com/api-data-types) |
| IsNetoUtility | [Boolean](https://developers.maropost.com/api-data-types) |
| IsGiftVoucher | [Boolean](https://developers.maropost.com/api-data-types) |
| OriginCountry | [String](https://developers.maropost.com/api-data-types) |
| Visible | [Boolean](https://developers.maropost.com/api-data-types) |
| TaxFreeItem | [Boolean](https://developers.maropost.com/api-data-types) |
| TaxInclusive | [Boolean](https://developers.maropost.com/api-data-types) |
| ApprovedForPOS | [Boolean](https://developers.maropost.com/api-data-types) |
| ApprovedForMobileStore | [Boolean](https://developers.maropost.com/api-data-types) |
| SearchKeywords | [String](https://developers.maropost.com/api-data-types) |
| ShortDescription | [String](https://developers.maropost.com/api-data-types) |
| Description | [String](https://developers.maropost.com/api-data-types) |
| TermsAndConditions | [String](https://developers.maropost.com/api-data-types) |
| Features | [String](https://developers.maropost.com/api-data-types) |
| Specifications | [String](https://developers.maropost.com/api-data-types) |
| Warranty | [String](https://developers.maropost.com/api-data-types) |
| ArtistOrAuthor | [String](https://developers.maropost.com/api-data-types) |
| Format | [String](https://developers.maropost.com/api-data-types) |
| ModelNumber | [String](https://developers.maropost.com/api-data-types) |
| Subtitle | [String](https://developers.maropost.com/api-data-types) |
| AvailabilityDescription | [String](https://developers.maropost.com/api-data-types) |
| SalesChannels | [SalesChannelsType](https://developers.maropost.com/api-data-types) |
| Images | [ImagesType](https://developers.maropost.com/api-data-types) |
| ImageURL | [String](https://developers.maropost.com/api-data-types) |
| BrochureURL | [String](https://developers.maropost.com/api-data-types) |
| ProductURL | [String](https://developers.maropost.com/api-data-types) |
| DateAdded | [DateTime](https://developers.maropost.com/api-data-types) |
| DateAddedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DateAddedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdated | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedLocal | [DateTime](https://developers.maropost.com/api-data-types) |
| DateUpdatedUTC | [DateTime](https://developers.maropost.com/api-data-types) |
| UPC | [String](https://developers.maropost.com/api-data-types) |
| UPC1 | [String](https://developers.maropost.com/api-data-types) |
| UPC2 | [String](https://developers.maropost.com/api-data-types) |
| UPC3 | [String](https://developers.maropost.com/api-data-types) |
| Type | [String](https://developers.maropost.com/api-data-types) |
| SubType | [String](https://developers.maropost.com/api-data-types) |
| NumbersOfLabelsToPrint | [Integer](https://developers.maropost.com/api-data-types) |
| ReferenceNumber | [Integer](https://developers.maropost.com/api-data-types) |
| InternalNotes | [String](https://developers.maropost.com/api-data-types) |
| BarcodeHeight | [Integer](https://developers.maropost.com/api-data-types) |
| IsInventoried | [String](https://developers.maropost.com/api-data-types) |
| IsBought | [String](https://developers.maropost.com/api-data-types) |
| IsSold | [String](https://developers.maropost.com/api-data-types) |
| ExpenseAccount | [String](https://developers.maropost.com/api-data-types) |
| PurchaseTaxCode | [String](https://developers.maropost.com/api-data-types) |
| CostOfSalesAccount | [String](https://developers.maropost.com/api-data-types) |
| IncomeAccount | [String](https://developers.maropost.com/api-data-types) |
| AssetAccount | [String](https://developers.maropost.com/api-data-types) |
| ItemHeight | [Decimal](https://developers.maropost.com/api-data-types) |
| ItemLength | [Decimal](https://developers.maropost.com/api-data-types) |
| ItemWidth | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingHeight | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingLength | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingWidth | [Decimal](https://developers.maropost.com/api-data-types) |
| ShippingWeight | [Decimal](https://developers.maropost.com/api-data-types) |
| CubicWeight | [Decimal](https://developers.maropost.com/api-data-types) |
| HandlingTime | [Integer](https://developers.maropost.com/api-data-types) |
| SupplierItemCode | [String](https://developers.maropost.com/api-data-types) |
| SplitForWarehousePicking | [String](https://developers.maropost.com/api-data-types) |
| eBayDescription | [String](https://developers.maropost.com/api-data-types) |
| PrimarySupplier | [String](https://developers.maropost.com/api-data-types) |
| DisplayTemplate | [String](https://developers.maropost.com/api-data-types) |
| EditableKitBundle | [Boolean](https://developers.maropost.com/api-data-types) |
| RequiresPackaging | [Boolean](https://developers.maropost.com/api-data-types) |
| SEOPageTitle | [String](https://developers.maropost.com/api-data-types) |
| SEOMetaKeywords | [String](https://developers.maropost.com/api-data-types) |
| SEOPageHeading | [String](https://developers.maropost.com/api-data-types) |
| SEOMetaDescription | [String](https://developers.maropost.com/api-data-types) |
| SEOCanonicalURL | [String](https://developers.maropost.com/api-data-types) |
| IsAsset | [Boolean](https://developers.maropost.com/api-data-types) |
| WhenToRepeatOnStandingOrders | [String](https://developers.maropost.com/api-data-types) |
| SerialTracking | [Boolean](https://developers.maropost.com/api-data-types) |
| Group | [String](https://developers.maropost.com/api-data-types) |
| ShippingCategory | [String](https://developers.maropost.com/api-data-types) |
| Job | [String](https://developers.maropost.com/api-data-types) |
| MonthlySpendRequirement | [Decimal](https://developers.maropost.com/api-data-types) |
| RestrictedToUserGroup | [String](https://developers.maropost.com/api-data-types) |
| ItemURL | [String](https://developers.maropost.com/api-data-types) |
| AutomaticURL | [Boolean](https://developers.maropost.com/api-data-types) |
| CommittedQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| AvailableSellQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| HSTariffNumber | [String](https://developers.maropost.com/api-data-types) |
| Misc01 | [String](https://developers.maropost.com/api-data-types) |
| Misc02 | [String](https://developers.maropost.com/api-data-types) |
| Misc03 | [String](https://developers.maropost.com/api-data-types) |
| Misc04 | [String](https://developers.maropost.com/api-data-types) |
| Misc05 | [String](https://developers.maropost.com/api-data-types) |
| Misc06 | [String](https://developers.maropost.com/api-data-types) |
| Misc07 | [String](https://developers.maropost.com/api-data-types) |
| Misc08 | [String](https://developers.maropost.com/api-data-types) |
| Misc09 | [String](https://developers.maropost.com/api-data-types) |
| Misc10 | [String](https://developers.maropost.com/api-data-types) |
| Misc11 | [String](https://developers.maropost.com/api-data-types) |
| Misc12 | [String](https://developers.maropost.com/api-data-types) |
| Misc13 | [String](https://developers.maropost.com/api-data-types) |
| Misc14 | [String](https://developers.maropost.com/api-data-types) |
| Misc15 | [String](https://developers.maropost.com/api-data-types) |
| Misc16 | [String](https://developers.maropost.com/api-data-types) |
| Misc17 | [String](https://developers.maropost.com/api-data-types) |
| Misc18 | [String](https://developers.maropost.com/api-data-types) |
| Misc19 | [String](https://developers.maropost.com/api-data-types) |
| Misc20 | [String](https://developers.maropost.com/api-data-types) |
| Misc21 | [String](https://developers.maropost.com/api-data-types) |
| Misc22 | [String](https://developers.maropost.com/api-data-types) |
| Misc23 | [String](https://developers.maropost.com/api-data-types) |
| Misc24 | [String](https://developers.maropost.com/api-data-types) |
| Misc25 | [String](https://developers.maropost.com/api-data-types) |
| Misc26 | [String](https://developers.maropost.com/api-data-types) |
| Misc27 | [String](https://developers.maropost.com/api-data-types) |
| Misc28 | [String](https://developers.maropost.com/api-data-types) |
| Misc29 | [String](https://developers.maropost.com/api-data-types) |
| Misc30 | [String](https://developers.maropost.com/api-data-types) |
| Misc31 | [String](https://developers.maropost.com/api-data-types) |
| Misc32 | [String](https://developers.maropost.com/api-data-types) |
| Misc33 | [String](https://developers.maropost.com/api-data-types) |
| Misc34 | [String](https://developers.maropost.com/api-data-types) |
| Misc35 | [String](https://developers.maropost.com/api-data-types) |
| Misc36 | [String](https://developers.maropost.com/api-data-types) |
| Misc37 | [String](https://developers.maropost.com/api-data-types) |
| Misc38 | [String](https://developers.maropost.com/api-data-types) |
| Misc39 | [String](https://developers.maropost.com/api-data-types) |
| Misc40 | [String](https://developers.maropost.com/api-data-types) |
| Misc41 | [String](https://developers.maropost.com/api-data-types) |
| Misc42 | [String](https://developers.maropost.com/api-data-types) |
| Misc43 | [String](https://developers.maropost.com/api-data-types) |
| Misc44 | [String](https://developers.maropost.com/api-data-types) |
| Misc45 | [String](https://developers.maropost.com/api-data-types) |
| Misc46 | [String](https://developers.maropost.com/api-data-types) |
| Misc47 | [String](https://developers.maropost.com/api-data-types) |
| Misc48 | [String](https://developers.maropost.com/api-data-types) |
| Misc49 | [String](https://developers.maropost.com/api-data-types) |
| Misc50 | [String](https://developers.maropost.com/api-data-types) |
| Misc51 | [String](https://developers.maropost.com/api-data-types) |
| Misc52 | [String](https://developers.maropost.com/api-data-types) |
| FreeGifts | [FreeGiftsType](https://developers.maropost.com/api-data-types) |
| CrossSellProducts | [CrossSellProductsType](https://developers.maropost.com/api-data-types) |
| UpsellProducts | [UpsellProductsType](https://developers.maropost.com/api-data-types) |
| KitComponents | [KitComponentsType](https://developers.maropost.com/api-data-types) |
| PriceGroups | [PriceGroupsType](https://developers.maropost.com/api-data-types) |
| Categories | [CategoriesType](https://developers.maropost.com/api-data-types) |
| ItemSpecifics | [ItemSpecificsType](https://developers.maropost.com/api-data-types) |
| WarehouseQuantity | [WarehouseQuantityType](https://developers.maropost.com/api-data-types) |
| WarehouseLocations | [WarehouseLocationsType](https://developers.maropost.com/api-data-types) |
| RelatedContents | [RelatedContentsType](https://developers.maropost.com/api-data-types) |
| eBayItems | [eBayItemsType](https://developers.maropost.com/api-data-types) |
| eBayActiveItems | [eBayActiveItemsType](https://developers.maropost.com/api-data-types) |
| eBayProductIDs | [eBayProductIDsType](https://developers.maropost.com/api-data-types) |

* * *

#### <SalesChannels>

| Element Name | Field Type |
| --- | --- |
| SalesChannel | [SalesChannelType](https://developers.maropost.com/api-data-types) |

* * *

#### <SalesChannel>

| Element Name | Field Type |
| --- | --- |
| SalesChannelID | [Integer](https://developers.maropost.com/api-data-types) |
| SalesChannelName | [String](https://developers.maropost.com/api-data-types) |
| IsApproved | [Boolean](https://developers.maropost.com/api-data-types) (True, False) |

* * *

#### <Images>

| Element Name | Field Type |
| --- | --- |
| Image | [ImageType](https://developers.maropost.com/api-data-types) |

* * *

#### <Image>

| Element Name | Field Type |
| --- | --- |
| Name | [String](https://developers.maropost.com/api-data-types) |
| URL | [String](https://developers.maropost.com/api-data-types) |
| ThumbURL | [String](https://developers.maropost.com/api-data-types) |
| MediumThumbURL | [String](https://developers.maropost.com/api-data-types) |
| Timestamp | [DateTime](https://developers.maropost.com/api-data-types) |

* * *

#### <FreeGifts>

| Element Name | Field Type |
| --- | --- |
| FreeGift | [FreeGiftType](https://developers.maropost.com/api-data-types) |

* * *

#### <FreeGift>

| Element Name | Field Type |
| --- | --- |
| SKU | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <CrossSellProducts>

| Element Name | Field Type |
| --- | --- |
| CrossSellProduct | [CrossSellProductType](https://developers.maropost.com/api-data-types) |

* * *

#### <CrossSellProduct>

| Element Name | Field Type |
| --- | --- |
| SKU | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <UpsellProducts>

| Element Name | Field Type |
| --- | --- |
| UpsellProduct | [UpsellProductType](https://developers.maropost.com/api-data-types) |

* * *

#### <UpsellProduct>

| Element Name | Field Type |
| --- | --- |
| SKU | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <KitComponents>

| Element Name | Field Type |
| --- | --- |
| KitComponent | [KitComponentType](https://developers.maropost.com/api-data-types) |

* * *

#### <KitComponent>

| Element Name | Field Type |
| --- | --- |
| ComponentSKU | [String](https://developers.maropost.com/api-data-types) |
| ComponentValue | [String](https://developers.maropost.com/api-data-types) |
| AssembleQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| MinimumQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| MaximumQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| SortOrder | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <PriceGroups>

| Element Name | Field Type |
| --- | --- |
| PriceGroup | [PriceGroupType](https://developers.maropost.com/api-data-types) |

* * *

#### <PriceGroup>

| Element Name | Field Type |
| --- | --- |
| GroupID | [String](https://developers.maropost.com/api-data-types) |
| Group | [String](https://developers.maropost.com/api-data-types) |
| Price | [Decimal](https://developers.maropost.com/api-data-types) |
| PromotionPrice | [Decimal](https://developers.maropost.com/api-data-types) |
| MinimumQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| MaximumQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| Multiple | [Integer](https://developers.maropost.com/api-data-types) |
| MultipleStartQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| MultilevelBands | [MultilevelBandsType](https://developers.maropost.com/api-data-types) |

* * *

#### <MultilevelBands>

| Element Name | Field Type |
| --- | --- |
| MultiLevelBand | [MultiLevelBandType](https://developers.maropost.com/api-data-types) |

* * *

#### <MultiLevelBand>

| Element Name | Field Type |
| --- | --- |
| Price | [Decimal](https://developers.maropost.com/api-data-types) |
| MinimumQuantity | [Integer](https://developers.maropost.com/api-data-types) |
| MaximumQuantity | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <Categories>

| Element Name | Field Type |
| --- | --- |
| Category | [CategoryType](https://developers.maropost.com/api-data-types) |

* * *

#### <Category>

| Element Name | Field Type |
| --- | --- |
| CategoryID | [Integer](https://developers.maropost.com/api-data-types) |
| Priority | [Integer](https://developers.maropost.com/api-data-types) |
| CategoryName | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <ItemSpecifics>

| Element Name | Field Type |
| --- | --- |
| ItemSpecific | [ItemSpecificType](https://developers.maropost.com/api-data-types) |

* * *

#### <ItemSpecific>

| Element Name | Field Type |
| --- | --- |
| Name | [String](https://developers.maropost.com/api-data-types) |
| Value | [String](https://developers.maropost.com/api-data-types) |

* * *

#### <WarehouseQuantity>

| Element Name | Field Type |
| --- | --- |
| WarehouseID | [Integer](https://developers.maropost.com/api-data-types) |
| Quantity | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <WarehouseLocations>

| Element Name | Field Type |
| --- | --- |
| WarehouseLocation | [WarehouseLocationType](https://developers.maropost.com/api-data-types) |

* * *

#### <WarehouseLocation>

| Element Name | Field Type |
| --- | --- |
| LocationID | [String](https://developers.maropost.com/api-data-types) |
| WarehouseID | [String](https://developers.maropost.com/api-data-types) |
| Type | [String](https://developers.maropost.com/api-data-types) |
| Priority | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <RelatedContents>

| Element Name | Field Type |
| --- | --- |
| ContentID | [Integer](https://developers.maropost.com/api-data-types) |
| ContentName | [String](https://developers.maropost.com/api-data-types) |
| ContentTypeID | [Integer](https://developers.maropost.com/api-data-types) |
| ContentTypeName | [String](https://developers.maropost.com/api-data-types) |
| Priority | [Integer](https://developers.maropost.com/api-data-types) |

* * *

#### <eBayItems>

| Element Name | Field Type |
| --- | --- |
| eBayItem | [eBayItemType](https://developers.maropost.com/api-data-types) |

* * *

#### <eBayItem>

| Element Name | Field Type |
| --- | --- |
| ListingTemplateID | [String](https://developers.maropost.com/api-data-types) (50) |
| DesignTemplateID | [String](https://developers.maropost.com/api-data-types) (50) |
| eBayCategory1 | [String](https://developers.maropost.com/api-data-types) (50) |
| eBayCategory2 | [String](https://developers.maropost.com/api-data-types) (50) |
| eBayStoreCategory1 | [String](https://developers.maropost.com/api-data-types) (50) |
| eBayStoreCategory2 | [String](https://developers.maropost.com/api-data-types) (50) |

* * *

#### <eBayActiveItems>

| Element Name | Field Type |
| --- | --- |
| eBayActiveItem | [eBayActiveItemType](https://developers.maropost.com/api-data-types) |

* * *

#### <eBayActiveItem>

| Element Name | Field Type |
| --- | --- |
| eBayItemID | [String](https://developers.maropost.com/api-data-types) (50) |

* * *

#### <eBayProductIDs>

| Element Name | Field Type |
| --- | --- |
| eBayProductID | [eBayProductIDType](https://developers.maropost.com/api-data-types) |

* * *

#### <eBayProductID>

| Element Name | Field Type |
| --- | --- |
| eBaySiteFullName | [String](https://developers.maropost.com/api-data-types) (50) |
| eBayProductIDValue | [String](https://developers.maropost.com/api-data-types) (50) |

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