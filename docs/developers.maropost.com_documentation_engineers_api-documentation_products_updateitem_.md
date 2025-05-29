---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/"
title: "Engineers API documentation Products UpdateItem"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Products](https://developers.maropost.com/documentation/engineers/api-documentation/products)
- [UpdateItem](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/)

# UpdateItem

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateItem |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | UpdateItem |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description | Use this call to update a product. A successful call to UpdateItem returns the unique identifier (SKU) for the product, and the date and time the product was updated (CurrentTime) |
| XSD Schema | [UpdateItem XSD](https://www.neto.com.au/assets/api/UpdateItem.xsd)   \|   [UpdateItem Response XSD](https://www.neto.com.au/assets/api/UpdateItemResponse.xsd) |

## Examples

### Update the stock for multiple SKU's in specific warehouse - Post

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
  <Item>
    <SKU>SHIRT-RED</SKU>
    <WarehouseQuantity>
      <WarehouseID>1</WarehouseID>
      <Quantity>25</Quantity>
      <Action>Set</Action>
    </WarehouseQuantity>
  </Item>
  <Item>
    <SKU>SHIRT-BLUE</SKU>
    <WarehouseQuantity>
      <WarehouseID>1</WarehouseID>
      <Quantity>21</Quantity>
      <Action>Set</Action>
    </WarehouseQuantity>
  </Item>
  <Item>
    <SKU>SHIRT-GREEN</SKU>
    <WarehouseQuantity>
      <WarehouseID>1</WarehouseID>
      <Quantity>15</Quantity>
      <Action>Set</Action>
    </WarehouseQuantity>
  </Item>
</UpdateItem>

```

### Add a product to multiple product categories - Post

You can use the GetCategory call to get a list of categories and category ID's.

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
  <Item>
    <SKU>SHIRT-RED</SKU>
    <Categories>
      <Category>
        <CategoryID>29</CategoryID>
      </Category>
        <Category>
        <CategoryID>35</CategoryID>
      </Category>
    </Categories>
  </Item>
</UpdateItem>

```

#### JSON

```rainbow rainbow-show
{
  "Item": {
    "SKU": "SHIRT-RED",
    "Categories": {
      "Category": [\
        { "CategoryID": "29" },\
        { "CategoryID": "35" }\
      ]
    }
  }
}

```

### Update the default price of a product - Post

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
  <Item>
    <SKU>SHIRT-RED</SKU>
    <DefaultPrice>29.95</DefaultPrice>
  </Item>
</UpdateItem>

```

#### JSON

```rainbow rainbow-show
{
  "Item": {
    "SKU": "SHIRT-RED",
    "DefaultPrice": "29.95"
  }
}

```

### Update the price of a product for a specific price group - Post

#### XML

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
  <Item>
    <SKU>SHIRT-RED</SKU>
    <PriceGroups>
        <PriceGroup>
          <Group>2</Group>
          <Price>19.95</Price>
        </PriceGroup>
    </PriceGroups>
  </Item>
</UpdateItem>

```

#### JSON

```rainbow rainbow-show
{
  "Item": {
    "SKU": "SHIRT-RED",
    "PriceGroups": {
      "PriceGroup": [\
        {\
          "Group": "2",\
          "Price": 19.95\
        }\
      ]
    }
  }
}

```

## UpdateItem Post

You must specify at least one filter and one OutputSelector in your UpdateItem request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
   <Item>
    <SKU>(String)</SKU>
    <RestockQty>(Integer)</RestockQty>
    <ReorderQty>(Integer)</ReorderQty>
    <RestockWarningLevel>(Integer)</RestockWarningLevel>
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
    <DefaultPurchasePrice>(Decimal)</DefaultPurchasePrice>
    <PromotionPrice>(Decimal)</PromotionPrice>
    <PromotionStartDate>(DateTime)</PromotionStartDate>
    <PromotionExpiryDate>(DateTime)</PromotionExpiryDate>
    <DateArrival>(Date)</DateArrival>
    <CostPrice>(Decimal)</CostPrice>
    <UnitOfMeasure>(String)</UnitOfMeasure>
    <BaseUnitOfMeasure>(String)</BaseUnitOfMeasure>
    <BaseUnitPerQuantity>(Decimal)</BaseUnitPerQuantity>
    <BuyUnitQuantity>(Integer)</BuyUnitQuantity>
    <SellUnitQuantity>(Integer)</SellUnitQuantity>
    <PreOrderQuantity>(Integer)</PreOrderQuantity>
    <PickPriority></PickPriority>
    <PickZone>(String)</PickZone>
    <RestrictedToUserGroup>(String)</RestrictedToUserGroup>
    <Approved>(Boolean)</Approved>
    <ApprovedForPOS>(Boolean)</ApprovedForPOS>
    <ApprovedForMobileStore>(Boolean)</ApprovedForMobileStore>
    <IsActive>(Boolean)</IsActive>
    <Active>(Boolean)</Active>
    <Visible>(Boolean)</Visible>
    <TaxCategory>(String)</TaxCategory>
    <TaxFreeItem>(Boolean)</TaxFreeItem>
    <TaxInclusive>(Boolean)</TaxInclusive>
    <AuGstExempt>(Boolean)</AuGstExempt>
    <NzGstExempt>(Boolean)</NzGstExempt>
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
    <ImageURL>(String)</ImageURL>
     <Images>
       <Image>
        <Name>(String)</Name>
        <URL>(String)</URL>
        <Base64>(String)</Base64>
        <Delete>(Boolean)</Delete>
       </Image>
     </Images>    <BrochureURL>(String)</BrochureURL>
    <ProductURL>(String)</ProductURL>
    <UPC>(String)</UPC>
    <UPC1>(String)</UPC1>
    <UPC2>(String)</UPC2>
    <UPC3>(String)</UPC3>
    <Type>(String)</Type>
    <Subtype>(String)</Subtype>
    <NumbersOfLabelsToPrint>(Integer)</NumbersOfLabelsToPrint>
    <ReferenceNumber>(Integer)</ReferenceNumber>
    <InternalNotes>(String)</InternalNotes>
    <BarcodeHeight>(Integer)</BarcodeHeight>
    <IsInventoried>(Boolean)</IsInventoried>
    <IsBought>(Boolean)</IsBought>
    <IsSold>(Boolean)</IsSold>
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
    <SplitForWarehousePicking>(Boolean)</SplitForWarehousePicking>
    <eBayDescription>(String)</eBayDescription>
    <PrimarySupplier>(String)</PrimarySupplier>
    <DisplayTemplate>(String)</DisplayTemplate>
    <EditableKitBundle>(Boolean)</EditableKitBundle>
    <RequiresPackaging>(Boolean)</RequiresPackaging>
    <ItemURL>(String)</ItemURL>
    <CustomContent>(String)</CustomContent>
    <CustomNonDelivery>(String)</CustomNonDelivery>
    <SEOPageTitle>(String)</SEOPageTitle>
    <SEOMetaKeywords>(String)</SEOMetaKeywords>
    <SEOPageHeading>(String)</SEOPageHeading>
    <SEOMetaDescription>(String)</SEOMetaDescription>
    <SEOCanonicalURL>(String)</SEOCanonicalURL>
    <AutomaticURL>(Boolean)</AutomaticURL>
    <IsAsset>(Boolean)</IsAsset>
    <IsServiceItem>(Boolean)</IsServiceItem>
    <WhenToRepeatOnStandingOrders></WhenToRepeatOnStandingOrders>
    <SerialTracking>(Boolean)</SerialTracking>
    <Group>(String)</Group>
    <ShippingCategory>(String)</ShippingCategory>
    <HSTariffNumber>(String)</HSTariffNumber>
    <Job>(String)</Job>
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
    <MonthlySpendRequirement>(Decimal)</MonthlySpendRequirement>
     <FreeGifts>
       <FreeGift>
        <SKU>(String)</SKU>
        <Delete>(Boolean)</Delete>
       </FreeGift>
     </FreeGifts>     <CrossSellProducts>
       <CrossSellProduct>
        <SKU>(String)</SKU>
        <Delete>(Boolean)</Delete>
       </CrossSellProduct>
     </CrossSellProducts>     <UpsellProducts>
       <UpsellProduct>
        <SKU>(String)</SKU>
        <Delete>(Boolean)</Delete>
       </UpsellProduct>
     </UpsellProducts>     <KitComponents>
       <KitComponent>
        <ComponentSKU>(String)</ComponentSKU>
        <ComponentValue>(String)</ComponentValue>
        <AssembleQuantity>(Integer)</AssembleQuantity>
        <MinimumQuantity>(Integer)</MinimumQuantity>
        <MaximumQuantity>(Integer)</MaximumQuantity>
        <SortOrder>(Integer)</SortOrder>
        <Delete>(Boolean)</Delete>
       </KitComponent>
     </KitComponents>     <PriceGroups>
       <PriceGroup>
        <Group>(String)</Group>
        <Price>(Decimal)</Price>
        <PromotionPrice>(Decimal)</PromotionPrice>
        <MinimumQuantity>(Integer)</MinimumQuantity>
        <MaximumQuantity>(Integer)</MaximumQuantity>
        <Multiple>(Integer)</Multiple>
        <MultipleStartQuantity>(Integer)</MultipleStartQuantity>
        <Delete>(Boolean)</Delete>
       </PriceGroup>
     </PriceGroups>     <Categories>
       <Category>
        <CategoryID>(Integer)</CategoryID>
        <Priority>(Integer)</Priority>
        <Delete>(Boolean)</Delete>
       </Category>
     </Categories>     <RelatedContents>
       <RelatedContent>
        <ContentTypeID>(Integer)</ContentTypeID>
        <ContentID>(Integer)</ContentID>
        <Priority>(Integer)</Priority>
        <Delete>(Boolean)</Delete>
       </RelatedContent>
     </RelatedContents>     <ItemSpecifics>
       <ItemSpecific>
        <Name>(String)</Name>
        <Value>(String)</Value>
        <SpecificValue>(String)</SpecificValue>
        <SpecificValueID>(Integer)</SpecificValueID>
        <SortOrder>(Integer)</SortOrder>
       </ItemSpecific>
     </ItemSpecifics>     <StoreQuantity>
      <Quantity>(Integer)</Quantity>
      <Action></Action>
     </StoreQuantity>     <WarehouseQuantity>
      <WarehouseID>(Integer)</WarehouseID>
      <Quantity>(Integer)</Quantity>
      <Action></Action>
     </WarehouseQuantity>     <SalesChannels>
       <SalesChannel>
        <SalesChannelID>(Integer)</SalesChannelID>
        <IsApproved>(Boolean)</IsApproved>
       </SalesChannel>
     </SalesChannels>     <WarehouseLocations>
       <WarehouseLocation>
        <WarehouseID>(Integer)</WarehouseID>
        <LocationID>(String)</LocationID>
        <WarehouseName>(String)</WarehouseName>
        <WarehouseReference>(String)</WarehouseReference>
        <Type></Type>
        <Priority>(Integer)</Priority>
        <Delete>(Boolean)</Delete>
       </WarehouseLocation>
     </WarehouseLocations>     <eBayItems>
       <eBayItem>
        <ListingTemplateID>(String)</ListingTemplateID>
        <DesignTemplateID>(String)</DesignTemplateID>
        <eBayCategory1>(String)</eBayCategory1>
        <eBayCategory2>(String)</eBayCategory2>
        <eBayStoreCategory1>(String)</eBayStoreCategory1>
        <eBayStoreCategory2>(String)</eBayStoreCategory2>
       </eBayItem>
     </eBayItems>     <eBayProductIDs>
       <eBayProductID>
        <eBaySiteFullName>(String)</eBaySiteFullName>
        <eBayProductIDValue>(String)</eBayProductIDValue>
       </eBayProductID>
     </eBayProductIDs>   </Item>

</UpdateItem>

```

### JSON POST

```rainbow rainbow-show
{
  "Item": [ {\
﻿    "SKU":"String",\
    "RestockQty":"Integer",\
    "ReorderQty":"Integer",\
    "RestockWarningLevel":"Integer",\
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
    "DefaultPurchasePrice":"Decimal",\
    "PromotionPrice":"Decimal",\
    "PromotionStartDate":"DateTime",\
    "PromotionExpiryDate":"DateTime",\
    "DateArrival":"Date",\
    "CostPrice":"Decimal",\
    "UnitOfMeasure":"String",\
    "BaseUnitOfMeasure":"String",\
    "BaseUnitPerQuantity":"Decimal",\
    "BuyUnitQuantity":"Integer",\
    "SellUnitQuantity":"Integer",\
    "PreOrderQuantity":"Integer",\
    "PickPriority":"Enumeration",\
    "PickZone":"String",\
    "RestrictedToUserGroup":"String",\
    "Approved":"Boolean",\
    "ApprovedForPOS":"Boolean",\
    "ApprovedForMobileStore":"Boolean",\
    "IsActive":"Boolean",\
    "Active":"Boolean",\
    "Visible":"Boolean",\
    "TaxCategory":"String",\
    "TaxFreeItem":"Boolean",\
    "TaxInclusive":"Boolean",\
    "AuGstExempt":"Boolean",\
    "NzGstExempt":"Boolean",\
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
    "ImageURL":"String",\
    "Images": {\
﻿      "Image": [ {\
﻿        "Name":"String",\
        "URL":"String",\
        "Base64":"String",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "BrochureURL":"String",\
    "ProductURL":"String",\
    "UPC":"String",\
    "UPC1":"String",\
    "UPC2":"String",\
    "UPC3":"String",\
    "Type":"String",\
    "Subtype":"String",\
    "NumbersOfLabelsToPrint":"Integer",\
    "ReferenceNumber":"Integer",\
    "InternalNotes":"String",\
    "BarcodeHeight":"Integer",\
    "IsInventoried":"Boolean",\
    "IsBought":"Boolean",\
    "IsSold":"Boolean",\
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
    "SplitForWarehousePicking":"Boolean",\
    "eBayDescription":"String",\
    "PrimarySupplier":"String",\
    "DisplayTemplate":"String",\
    "EditableKitBundle":"Boolean",\
    "RequiresPackaging":"Boolean",\
    "ItemURL":"String",\
    "CustomContent":"String",\
    "CustomNonDelivery":"String",\
    "SEOPageTitle":"String",\
    "SEOMetaKeywords":"String",\
    "SEOPageHeading":"String",\
    "SEOMetaDescription":"String",\
    "SEOCanonicalURL":"String",\
    "AutomaticURL":"Boolean",\
    "IsAsset":"Boolean",\
    "IsServiceItem":"Boolean",\
    "WhenToRepeatOnStandingOrders":"Enumeration",\
    "SerialTracking":"Boolean",\
    "Group":"String",\
    "ShippingCategory":"String",\
    "HSTariffNumber":"String",\
    "Job":"String",\
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
    "MonthlySpendRequirement":"Decimal",\
    "FreeGifts": {\
﻿      "FreeGift": [ {\
﻿        "SKU":"String",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "CrossSellProducts": {\
﻿      "CrossSellProduct": [ {\
﻿        "SKU":"String",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "UpsellProducts": {\
﻿      "UpsellProduct": [ {\
﻿        "SKU":"String",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "KitComponents": {\
﻿      "KitComponent": [ {\
﻿        "ComponentSKU":"String",\
        "ComponentValue":"String",\
        "AssembleQuantity":"Integer",\
        "MinimumQuantity":"Integer",\
        "MaximumQuantity":"Integer",\
        "SortOrder":"Integer",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "PriceGroups": {\
﻿      "PriceGroup": [ {\
﻿        "Group":"String",\
        "Price":"Decimal",\
        "PromotionPrice":"Decimal",\
        "MinimumQuantity":"Integer",\
        "MaximumQuantity":"Integer",\
        "Multiple":"Integer",\
        "MultipleStartQuantity":"Integer",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "Categories": {\
﻿      "Category": [ {\
﻿        "CategoryID":"Integer",\
        "Priority":"Integer",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "RelatedContents": {\
﻿      "RelatedContent": [ {\
﻿        "ContentTypeID":"Integer",\
        "ContentID":"Integer",\
        "Priority":"Integer",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "ItemSpecifics": {\
﻿      "ItemSpecific": [ {\
﻿        "Name":"String",\
        "Value":"String",\
        "SpecificValue":"String",\
        "SpecificValueID":"Integer",\
        "SortOrder":"Integer"\
} ] ﻿\
} ,﻿    "StoreQuantity": {\
﻿      "Quantity":"Integer",\
      "Action":"Enumeration"\
} ,﻿    "WarehouseQuantity": {\
﻿      "WarehouseID":"Integer",\
      "Quantity":"Integer",\
      "Action":"Enumeration"\
} ,﻿    "SalesChannels": {\
﻿      "SalesChannel": [ {\
﻿        "SalesChannelID":"Integer",\
        "IsApproved":"Boolean"\
} ] ﻿\
} ,﻿    "WarehouseLocations": {\
﻿      "WarehouseLocation": [ {\
﻿        "WarehouseID":"Integer",\
        "LocationID":"String",\
        "WarehouseName":"String",\
        "WarehouseReference":"String",\
        "Type":"Enumeration",\
        "Priority":"Integer",\
        "Delete":"Boolean"\
} ] ﻿\
} ,﻿    "eBayItems": {\
﻿      "eBayItem": [ {\
﻿        "ListingTemplateID":"String",\
        "DesignTemplateID":"String",\
        "eBayCategory1":"String",\
        "eBayCategory2":"String",\
        "eBayStoreCategory1":"String",\
        "eBayStoreCategory2":"String"\
} ] ﻿\
} ,﻿    "eBayProductIDs": {\
﻿      "eBayProductID": [ {\
﻿        "eBaySiteFullName":"String",\
        "eBayProductIDValue":"String"\
} ] ﻿\
} ﻿\
} ] ﻿
}

```

#### <Item>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| RestockQty | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ReorderQty | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| RestockWarningLevel | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| InventoryID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ParentSKU | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| AccountingCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Virtual | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Brand | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Name | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| Model | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| SortOrder1 | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder2 | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| RRP | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DefaultPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DefaultPurchasePrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PromotionPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PromotionStartDate | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PromotionExpiryDate | Optional | [DateTime](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| DateArrival | Optional | [Date](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CostPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| UnitOfMeasure | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| BaseUnitOfMeasure | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| BaseUnitPerQuantity | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| BuyUnitQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SellUnitQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PreOrderQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PickPriority | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(FIFO, FEFO, LIFO) |
| PickZone | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| RestrictedToUserGroup | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Approved | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ApprovedForPOS | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ApprovedForMobileStore | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsActive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Active | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Visible | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| TaxCategory | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| TaxFreeItem | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| TaxInclusive | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| AuGstExempt | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| NzGstExempt | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| SearchKeywords | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| ShortDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| Description | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| TermsAndConditions | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Features | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Specifications | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Warranty | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ArtistOrAuthor | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Format | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ModelNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| Subtitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| AvailabilityDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ImageURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2083) |
| Images | Optional | [Images](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#Images) |
| BrochureURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2083) |
| ProductURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2083) |
| UPC | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| UPC1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| UPC2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| UPC3 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| Type | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| Subtype | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| NumbersOfLabelsToPrint | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ReferenceNumber | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| InternalNotes | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| BarcodeHeight | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| IsInventoried | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsBought | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsSold | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ExpenseAccount | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| PurchaseTaxCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| CostOfSalesAccount | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| IncomeAccount | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| AssetAccount | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(20) |
| ItemHeight | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ItemLength | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ItemWidth | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingHeight | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingLength | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingWidth | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ShippingWeight | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| CubicWeight | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| HandlingTime | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SupplierItemCode | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| SplitForWarehousePicking | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| eBayDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PrimarySupplier | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| DisplayTemplate | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| EditableKitBundle | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| RequiresPackaging | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| ItemURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| CustomContent | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| CustomNonDelivery | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| SEOPageTitle | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| SEOMetaKeywords | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(255) |
| SEOPageHeading | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(100) |
| SEOMetaDescription | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(320) |
| SEOCanonicalURL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(2083) |
| AutomaticURL | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsAsset | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| IsServiceItem | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| WhenToRepeatOnStandingOrders | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(once, always) |
| SerialTracking | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |
| Group | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| ShippingCategory | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| HSTariffNumber | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| Job | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Misc01 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc02 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc03 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc04 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc05 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc06 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc07 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc08 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc09 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc10 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc11 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc12 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc13 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc14 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc15 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc16 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc17 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc18 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc19 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc20 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc21 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc22 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc23 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc24 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc25 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc26 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc27 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc28 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc29 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc30 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc31 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc32 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc33 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc34 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc35 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc36 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc37 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc38 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc39 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc40 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc41 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc42 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc43 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc44 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc45 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc46 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc47 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Misc48 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc49 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc50 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc51 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Misc52 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| MonthlySpendRequirement | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| FreeGifts | Optional | [FreeGifts](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#FreeGifts) |
| CrossSellProducts | Optional | [CrossSellProducts](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#CrossSellProducts) |
| UpsellProducts | Optional | [UpsellProducts](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#UpsellProducts) |
| KitComponents | Optional | [KitComponents](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#KitComponents) |
| PriceGroups | Optional | [PriceGroups](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#PriceGroups) |
| Categories | Optional | [Categories](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#Categories) |
| RelatedContents | Optional | [RelatedContents](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#RelatedContents) |
| ItemSpecifics | Optional | [ItemSpecifics](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#ItemSpecifics) |
| StoreQuantity | Optional | [StoreQuantity](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#StoreQuantity) |
| WarehouseQuantity | Optional | [WarehouseQuantity](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#WarehouseQuantity) |
| SalesChannels | Optional | [SalesChannels](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#SalesChannels) |
| WarehouseLocations | Optional | [WarehouseLocations](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#WarehouseLocations) |
| eBayItems | Optional | [eBayItems](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#eBayItems) |
| eBayProductIDs | Optional | [eBayProductIDs](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#eBayProductIDs) |

* * *

#### <Images>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Image | Optional<br>_Supports Multiple Elements_ | [Image](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#Image) |

* * *

#### <Image>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Name | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| URL | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Base64 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <FreeGifts>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| FreeGift | Optional<br>_Supports Multiple Elements_ | [FreeGift](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#FreeGift) |

* * *

#### <FreeGift>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <CrossSellProducts>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| CrossSellProduct | Optional<br>_Supports Multiple Elements_ | [CrossSellProduct](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#CrossSellProduct) |

* * *

#### <CrossSellProduct>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <UpsellProducts>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| UpsellProduct | Optional<br>_Supports Multiple Elements_ | [UpsellProduct](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#UpsellProduct) |

* * *

#### <UpsellProduct>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <KitComponents>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| KitComponent | Optional<br>_Supports Multiple Elements_ | [KitComponent](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#KitComponent) |

* * *

#### <KitComponent>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ComponentSKU | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ComponentValue | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| AssembleQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| MinimumQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| MaximumQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <PriceGroups>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| PriceGroup | Optional<br>_Supports Multiple Elements_ | [PriceGroup](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#PriceGroup) |

* * *

#### <PriceGroup>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Group | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(25) |
| Price | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| PromotionPrice | Optional | [Decimal](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| MinimumQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| MaximumQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Multiple | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| MultipleStartQuantity | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <Categories>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Category | Optional<br>_Supports Multiple Elements_ | [Category](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#Category) |

* * *

#### <Category>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| CategoryID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Priority | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <RelatedContents>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| RelatedContent | Optional<br>_Supports Multiple Elements_ | [RelatedContent](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#RelatedContent) |

* * *

#### <RelatedContent>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ContentTypeID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| ContentID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Priority | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <ItemSpecifics>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ItemSpecific | Optional<br>_Supports Multiple Elements_ | [ItemSpecific](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#ItemSpecific) |

* * *

#### <ItemSpecific>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Name | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| Value | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| SpecificValue | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(150) |
| SpecificValueID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| SortOrder | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |

* * *

#### <StoreQuantity>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| Quantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Action | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(increment, decrement, set) |

* * *

#### <WarehouseQuantity>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| WarehouseID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Quantity | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Action | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(increment, decrement, set) |

* * *

#### <SalesChannels>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SalesChannel | **Required**<br>_Supports Multiple Elements_ | [SalesChannel](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#SalesChannel) |

* * *

#### <SalesChannel>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| SalesChannelID | **Required** | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| IsApproved | **Required** | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <WarehouseLocations>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| WarehouseLocation | Optional<br>_Supports Multiple Elements_ | [WarehouseLocation](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#WarehouseLocation) |

* * *

#### <WarehouseLocation>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| WarehouseID | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| LocationID | **Required** | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(15) |
| WarehouseName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(30) |
| WarehouseReference | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(10) |
| Type | Optional | [Enumeration](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(Pick, Bulk) |
| Priority | Optional | [Integer](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) |
| Delete | Optional | [Boolean](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(True, False) |

* * *

#### <eBayItems>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| eBayItem | Optional<br>_Supports Multiple Elements_ | [eBayItem](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#eBayItem) |

* * *

#### <eBayItem>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| ListingTemplateID | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| DesignTemplateID | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| eBayCategory1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| eBayCategory2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| eBayStoreCategory1 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| eBayStoreCategory2 | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |

* * *

#### <eBayProductIDs>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| eBayProductID | Optional<br>_Supports Multiple Elements_ | [eBayProductID](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/) [Type](https://developers.maropost.com/documentation/engineers/api-documentation/products/updateitem/#eBayProductID) |

* * *

#### <eBayProductID>

| Element Name | Required | Field Type / Options |
| --- | --- | --- |
| eBaySiteFullName | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |
| eBayProductIDValue | Optional | [String](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)(50) |

* * *

## UpdateItem Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<UpdateItem>
   <Item>
    <SKU>(String)</SKU>
   </Item>
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
</UpdateItem>

```

### JSON Response

```rainbow rainbow-show
{
  "Item": [ {\
﻿    "SKU":"String"\
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
| SKU | [String](https://developers.maropost.com/api-data-types) |

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