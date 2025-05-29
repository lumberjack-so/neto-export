---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/api-best-practices/"
title: "Engineers API documentation Introduction and Getting Started API Best Practices"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/api-best-practices/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/api-best-practices/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/api-best-practices/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Introduction and Getting Started](https://developers.maropost.com/documentation/engineers/api-documentation/introductions-and-getting-started)
- [API Best Practices](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/api-best-practices/)

## API Limits

The limit on API calls is 500 requests per minute. If you are rate limited you will receive a 429 (Too many requests) response.

Neto monitors API usage on a per account basis.

* * *

## Create and Update Objects

You can create and update multiple objects in a single request. It is recommended that where possible you should combine as many actions in a single request as to reduce the number of requests you’re making to the API.

* * *

## Fetching Objects

You can specify the detail of the resource you want using the OutputSelector field when fetching a resource from the API. The speed of your response depends on both the number of objects you’re fetching at once and the requested detail of the resource. If your requests are spread out over a longer period of time, you might find that the objects you are requesting have changed in between requests and may no longer match some of the filters that you originally supplied.

When fetching large and detailed datasets from the API you should consider first fetching the IDs of the relevant objects that you need, and fetching the details of those objects afterwards. This will ensure that you are capturing all of the objects that match your filters quickly.

* * *

## Order Processing

Not every order follows a linear path from creation to completion in Neto. In many cases, orders are split apart, backordered, put on hold or cancelled. If you need to keep track of an order it is recommended that you follow each order line instead of an order ID.

Review [this document](https://www.netohq.com/support/s/article/sales-orders-overview) on order workflow if you are having trouble understanding order processing.

* * *

## Dates

You will find a UTC variant on most date fields in the Neto API. It is highly recommended that you use these where possible as it will reduce any error introduced by time zone differences.

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.