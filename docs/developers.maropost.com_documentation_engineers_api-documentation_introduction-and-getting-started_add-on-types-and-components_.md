---
url: "https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/add-on-types-and-components/"
title: "Engineers API documentation Introduction and Getting Started Add-on Types and Components"
---

[Skip to main content](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/add-on-types-and-components/#main-content)

[Home](https://developers.maropost.com/) [Products](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/add-on-types-and-components/)

- [Marketing Cloud](https://galaxy.maropost.com/categories/marketing-cloud)
- [Neto by Maropost](https://galaxy.maropost.com/categories/neto-by-maropost)
- [Retail Express by Maropost](https://galaxy.maropost.com/categories/retail-express)
- [Merchandising Cloud](https://galaxy.maropost.com/categories/merchandising-cloud)
- [Service Cloud](https://galaxy.maropost.com/categories/service-cloud)
- [JetSend](https://galaxy.maropost.com/categories/jetsend)
- [InboxAware](https://galaxy.maropost.com/categories/inboxaware)

[Help Articles](https://galaxy.maropost.com/kb/neto-by-maropost) [Ideas](https://galaxy.maropost.com/categories/neto-by-maropost-ideas) [Status](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/add-on-types-and-components/)
- [Marketing Cloud](https://status.maropost.com/)
- [Neto by Maropost](https://status.netohq.com/)
- [Retail Express by Maropost](https://status-retailcloud.maropost.com/)
- [InboxAware](https://status.inboxaware.com/)
- [JetSend](https://status.jetsend.com/)

- [Home](https://developers.maropost.com/)
- [Engineers](https://developers.maropost.com/documentation/engineers)
- [API documentation](https://developers.maropost.com/documentation/engineers/api-documentation)
- [Introduction and Getting Started](https://developers.maropost.com/documentation/engineers/api-documentation/introductions-and-getting-started)
- [Add-on Types and Components](https://developers.maropost.com/documentation/engineers/api-documentation/introduction-and-getting-started/add-on-types-and-components/)

## Types Of Add-Ons

There are two types of add-ons you can develop with Neto by Maropost, public and custom. The type of add-on that you develop largely depends on the size of your intended audience and also their nature.

### Public Add-On

A public add-on is listed in the add-on store that every merchant can find in their Neto control panel. This type of add-on is ideal for developers who are creating something that fits a general need that does not require much customisation. If you are a developer for an existing SaaS solution and are looking at integration with Neto, you are likely creating a public add-on. With this type of add-on:

- Merchants can install your add-on directly from the control panel.
- Your add-on must be approved by Neto.
- Your add-on must authenticate to the Neto API using OAuth.
- Your add-on can be billed through a merchant’s Neto subscription, or through your own.
- You can include front-end (webstore) scripts and markup in the installation process.
- You can include any type of data export in the installation process.

You can browse existing public add-ons in our add-on store [here](https://www.netohq.com/add-ons).

To be listed in our add-on store, additional terms and conditions apply. Please contact us [here](https://www.netohq.com/partners/s/integration-partner).

### Custom Add-On

A custom add-on is usually built with a single or specific merchant in mind. If you are a developer who is creating a connector for a merchant or automation for a specific use case, you are likely creating a custom add-on. With this type of add-on:

- Merchants cannot install your add-on directly from the control panel.
- Your add-on will authenticate to the Neto API using an API key.
- You will bill the merchant directly for your add-on and services.
- You must install all elements of your add-on for each merchant yourself.

Looking for a developer to help with a custom add-on or integration? You can look through our Partner Directory [here](https://www.netohq.com/support/s/partner-directory-list).

* * *

## Components of an Add-on

All add-ons that interact with the Neto API must be hosted on your own infrastructure. Your add-on may include a usable interface which may be hosted and viewed on your domain, or it may be embedded into a merchant’s control panel as an iframe.

An add-on may comprise of one or many components, such as:

- **API Integration**
- **Custom scripts** for the webstore. Including but not limited to:
  - Tracking / marketing scripts
  - Chat boxes
  - Search interfaces
  - Product widgets
- **Data Feeds** in delimited, json or XML format. HTTP accessible or available by FTP.

The API can be authenticated using an API key that a merchant provides you directly or a secret key can be obtained in the OAuth process for public add-ons.

Custom scripts and data feeds can be installed on a merchant’s account when they install your add-on.

For specific examples of an add-on see the following:

- Reviews add-on
- 3PL add-on
- Customer support add-on

#### Was this article useful?

Not usefulSomewhat usefulVery useful

How can we improve this page?Email addressBe notified when this page is updated. Optional.