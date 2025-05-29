---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpaymentmethods"
title: "Engineers API documentation Payments GetPaymentMethods"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpaymentmethods#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpaymentmethods)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpaymentmethods)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Payments](https://developers.maropost.com/documentation/engineers/api-documentation/payments)
- [GetPaymentMethods](https://developers.maropost.com/documentation/engineers/api-documentation/payments/getpaymentmethods)

# GetPaymentMethods

|     |     |
| --- | --- |
| Endpoint URL | https://www.yournetosite.com.au/do/WS/NetoAPI |
| Method | POST |
| XML Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetPaymentMethods |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) | |
| JSON Headers | |     |     |
| --- | --- |
| NETOAPI\_ACTION | GetPaymentMethods |
| NETOAPI\_USERNAME | Your Neto Username (generate this in your Neto control panel) |
| NETOAPI\_KEY | Your Neto API Secure Key (generate this in your Neto control panel) |
| Accept | application/json | |
| Description |  |
| XSD Schema | [GetPaymentMethods XSD](https://www.neto.com.au/assets/api/GetPaymentMethods.xsd)   \|   [GetPaymentMethods Response XSD](https://www.neto.com.au/assets/api/GetPaymentMethodsResponse.xsd) |

## GetPaymentMethods Post

You must specify at least one filter and one OutputSelector in your GetPaymentMethods request. These will determine the results returned.

### XML POST

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetPaymentMethods>

</GetPaymentMethods>

```

### JSON POST

```rainbow rainbow-show
{

}

```

## GetPaymentMethods Responses

### XML Response

```rainbow rainbow-show
<?xml version="1.0" encoding="utf-8"?>
<GetPaymentMethods>
   <PaymentMethods>
     <PaymentMethod>
      <id>(Integer)</id>
      <name>(String)</name>
      <active>(Boolean)</active>
      <visible>(Boolean)</visible>
      <acc_code>(String)</acc_code>
     </PaymentMethod>
   </PaymentMethods>
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
</GetPaymentMethods>

```

### JSON Response

```rainbow rainbow-show
{
  "PaymentMethods": [ {\
﻿    "PaymentMethod": [ {\
﻿      "id":"Integer",\
      "name":"String",\
      "active":"Boolean",\
      "visible":"Boolean",\
      "acc_code":"String"\
} ] ﻿\
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

#### <PaymentMethods>

| Element Name | Field Type |
| --- | --- |
| PaymentMethod | [PaymentMethodType](https://developers.maropost.com/api-data-types) |

* * *

#### <PaymentMethod>

| Element Name | Field Type |
| --- | --- |
| id | [Integer](https://developers.maropost.com/api-data-types) |
| name | [String](https://developers.maropost.com/api-data-types) |
| active | [Boolean](https://developers.maropost.com/api-data-types) |
| visible | [Boolean](https://developers.maropost.com/api-data-types) |
| acc\_code | [String](https://developers.maropost.com/api-data-types) |

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