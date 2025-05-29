---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/"
title: "Engineers API documentation Introduction and Getting Started API Field Types"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Introduction and Getting Started](https://developers.maropost.com/documentation/engineers/api-documentation/introductions-and-getting-started)
- [API Field Types](https://developers.maropost.com/documentation/engineers/api-documentation/getting-started/api-field-types/)

## API Field Types

Below is a list of field types used throughout the API.

|     |     |
| --- | --- |
| OrderIdType | numeric string with optional alpha prefix, max length 15 characters |
| UsernameType | alphanumeric string, max length 25 characters |
| SKUType | alphanumeric string, max length 25 characters |
| string | character string, min length 1000 characters |
| string\_3 | character string, 3 characters maximum |
| string\_10 | character string, 10 characters maximum |
| string\_15 | character string, 15 characters maximum |
| string\_20 | character string, 20 characters maximum |
| string\_25 | character string, 25 characters maximum |
| string\_30 | character string, 30 characters maximum |
| string\_50 | character string, 50 characters maximum |
| string\_100 | character string, 100 characters maximum |
| string\_150 | character string, 150 characters maximum |
| string\_255 | character string, 255 characters maximum |
| boolean | True or False |
| datetime | date format YYYY-MM-DD HH:MM:SS (UTC)( |
| integer | whole number value eg: 1 |
| integer\_2 | whole number value, 2 numeral maximum eg: 12 |
| integer\_3 | whole number value, 3 numeral maximum eg: 123 |
| decimal\_2 | floating point number to 2 decimal places eg: 1.02 |
| decimal\_3 | floating point number to 3 decimal places eg: 1.002 |
| decimal\_4 | floating point number to 4 decimal places eg: 1.0002 |
| PaymentStatusType | FullyPaid<br>PartialPaid<br>Pending |
| StandingOrderRepeatType | once<br>always |
| OrderStatusType | Quote<br> New<br> On Hold<br> New Backorder<br> Backorder Approved<br> Pick<br> Pack<br> Pending Pickup<br> Pending Dispatch<br> Dispatched<br> Cancelled<br> Uncommitted |
| OrderType | sales<br>dropshipping |
| CompleteStatusType | Approved<br>Incomplete |
| ExportStatusType | Pending<br>Exported |
| StockActionType | increment<br>decrement<br>set |
| CustomerType | Prospect<br>Customer |
| PickStatusType | Complete<br>Incomplete |
| OrderOutputSelectorType | ShippingOption<br> DeliveryInstruction<br> Username<br> Email<br> ShipAddress<br> BillAddress<br> CustomerRef1<br> CustomerRef2<br> CustomerRef3<br> CustomerRef4<br> SalesChannel<br> GrandTotal<br> ShippingTotal<br> ShippingDiscount<br> OrderType<br> OrderPayment<br> OrderPayment.PaymentType<br> DatePlaced<br> DateRequired<br> DateInvoiced<br> DatePaid<br> OrderLine<br> OrderLine.ProductName<br> OrderLine.PickQuantity<br> OrderLine.BackorderQuantity<br> OrderLine.UnitPrice<br> OrderLine.WarehouseID<br> OrderLine.Quantity<br> OrderLine.PercentDiscount<br> OrderLine.ProductDiscount<br> OrderLine.CostPrice<br> ShippingSignature<br> eBay.eBayUsername<br> eBay.eBayStoreName<br> eBay.eBayTransactionID<br> eBay.eBayAuctionID<br> eBay.ListingType<br> eBay.DateCreated<br> eBay.DatePaid |
| WarehouseOutputSelectorType | WarehouseID<br> IsPrimary<br> IsActive<br> ShowQuantity<br> WarehouseReference<br> WarehouseName<br> WarehouseStreet1<br> WarehouseStreet2<br> WarehouseCity<br> WarehouseState<br> WarehousePostcode<br> WarehouseCountry<br> WarehouseContact<br> WarehousePhone<br> WarehouseNotes |
| CustomerOutputSelectorType | BillFirstName<br> BillLastName<br> BillCompany<br> BillStreet1<br> BillStreet2<br> BillCity<br> BillState<br> BillPostCode<br> BillCountry<br> Username<br> NewsletterSubscriber<br> Email<br> SecondaryEmail<br> Type<br> Phone<br> Fax<br> Gender<br> DateOfBirth<br> RegistrationDate<br> Active<br> CreditHold<br> UserGroup<br> ABN<br> AccountBalance<br> Credit<br> Classification1<br> Classification2<br> CreditLimit<br> ResidentialProperty1<br> ResidentialProperty2<br> ResidentialCity<br> ResidentialCountry<br> ResidentialStreetNum<br> ResidentialState<br> ResidentialPostCode<br> ResidentialStreet<br> ResidentialStreetType<br> ResidentialUnitNum<br> DefaultDiscounts<br> DefaultInvoiceTerms<br> DefaultOrderType<br> DocumentTemplateID<br> IdentificationDetails<br> IdentificationType<br> ParentUsername<br> QuoteApprovalUsername<br> TotalSalesRevenue<br> WebsiteURL<br> UserCustom1<br> UserCustom2<br> UserCustom3<br> UserCustom4<br> UserCustom5<br> UserCustom6<br> UserCustom7<br> UserCustom8<br> UserCustom9<br> UserCustom10<br> UserCustom11<br> UserCustom12<br> UserCustom13<br> UserCustom14<br> UserCustom15<br> UserCustom16<br> UserCustom17<br> UserCustom18<br> UserCustom19<br> UserCustom20<br> UserCustom21 |
| ItemOutputSelectorType | ParentSKU <br> Brand<br> Model<br> PrimarySupplier<br> Approved<br> Visible<br> ItemLength<br> ItemWidth<br> ItemHeight<br> ShippingLength<br> ShippingWidth<br> ShippingHeight<br> ShippingWeight<br> CubicWeight<br> WarehouseQuantity<br> CommittedQuantity<br> ItemSpecifics |

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.