---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/getting-started-with-the-api/"
title: "Engineers API documentation Introduction and Getting Started Getting Started with the API"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/getting-started-with-the-api/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/getting-started-with-the-api/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/getting-started-with-the-api/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Introduction and Getting Started](https://developers.maropost.com/documentation/engineers/api-documentation/introductions-and-getting-started)
- [Getting Started with the API](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/getting-started-with-the-api/)

The Neto by Maropost API allows you to interact with the data inside of a merchant’s Neto control panel in other apps and services. This includes product, customer and order data. As a developer, you can build with Neto's API in one of the following ways:

- **Add-ons** that are listed in the Neto Control Panel for any merchant to install and generate revenue for you. Our [add-ons page](https://www.netohq.com/add-ons)) can give you some ideas about the kind of add-ons that other developers have already made.
- **Custom Development** for clients who use Neto to create specific integrations, automations or customisations.

Want to experiment with our API quickly? Check out the quick start guide for some tips.

* * *

## Connect to the Neto API

All transactions with the Neto API are performed using a HTTPS POST request to a fixed endpoint on a merchant’s domain. For example:

[https://www.mysite.com.au/do/WS/NetoAPI](https://www.mysite.com.au/do/WS/NetoAPI)

To specify what action you want to use, the NETOAPI\_ACTION header must be included:

e.g. `NETOAPI_ACTION: GetCustomer`

You can use either XML or JSON with the API. If you’re using JSON, you will need to specify the Accept header to receive JSON back; otherwise you will receive XML.

Putting this all together yields the following request:

```rainbow rainbow-show
Curl -d ‘{“Filter”: { “Limit”: 5, “Page”: 0 }}’ -H “Accept: application/json, Content-Type: application/json, NETOAPI_ACTION: GetCustomer” -X POST https://www.mynetosite.com.au/do/WS/NetoAPI

```

## Support

We are intent on continually updating and improving the API. Currently, there are functions not available through the API and until we have made all functions available the API will remain in development. All available functions in this documentation are tested and available for live environments.

For support, please contact our support team at [partnersupport@neto.com.au](mailto:partnersupport@neto.com.au).

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.