<h1 align="center">Intro to ARWeave and the Permaweb</h1>
<p align="center">ARWeave is a protocol that allows you to store data permanetly, sustainably, with a single upfront fee</p>
<p align="center">In this workshop, we will build a simple checkin app called 8pin to explore Arweave developer tools and the ecosystem.</p>

---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Arweave-js](#arweave-js)
- [Wallets](#wallets)
- [Transactions](#transactions)
- [GraphQL](#graphql)
- [arkb](#arkb)
- [Summary](#summary)
- [Resources](#resources)

---

## Introduction

Today, we will be building `8pin` a universal checkin application, the application will allow users to create a pin for a few cents. A pin is a document of a time and place with a note and an optional selfie attached, this pin can then be queried by user to show a history of pins documented. 

### What will I learn by attending this workshop?

You will learn how to use some of the development tools of the arweave and permaweb ecosystem.

### User stories

Feature: create a pin

As a user     
I want to create a pin    
This pin should contain my location identified by my device      
And the pin should contain a public identifier of myself     
And the pin should contain a timestamp of the documentation
And the pin should contain a note    
And optionally the pin could contain a picture
And it is important to note that a pin is permanent it can not be deleted or edited.

Feature: list pins by user

As a user
I want to view a list of pins       
created by myself

### Technical Stack (Web3)

* Web (Svelte)
* Arweave (Storage)

Web3 is a movement to build software applications that are fully decentrailized and distributed in a network of machines providing reliability, sustainability and availability. Arweave is a protocol and network that allows users to store data in a pay once and store forever model. This model is based on a sustainable endowment mechanism ensuring the data is stored in  perpetuity. The permaweb is a global, permanent web of pages and applications that live forever. We will be using these technologies to build our application.

## Prerequisites

### What do I need to know in order to take this workshop?

* Javascript
* Git/Github Account
* html/css - a little Svelte 
* JSON/fetch 
* NodeJS/npm

## Setup

To save time in setting up a project and to make sure everyone is on the same page, we are going to use gitpod as our virtual machine development environment. If you can use a code editor like VS Code, you can use gitpod. It does require a github account to use the free version.

<a href="https://gitpod.io#https://github.com/twilson63/intro-to-arweave" target="new">Open in Gitpod</a>

Already setup is a Svelte project and a local server that emulates the Arweave protocol called arLocal. We will be using arLocal to build our application in a free dev environment. The project will have also downloaded the `arweave-js` for using in our svelte application. For our styles, we will use `mvp.css` to keep the design clean and simple. Finally, we will use `tinro` for our routing library.

The svelte ux is already setup, although it can be radically improved, we have two routes, `/create` create a pin, and `/pins` list pins. 

## Arweave-js

Arweave-js is the javascript library used to connect to the `weave`. We will use it to create a transaction of our pin document, then sign it and post it to the `weave`.

In our case, we will add the cdn version to our `public/index.html` page.

``` html
	<script src="https://unpkg.com/arweave/bundles/web.bundle.min.js"></script>
```

## Wallets

Try to use the ArConnect wallet, using the connect button, handle the click event and try
to connect to the ArConnect wallet:

``` js
if (arweaveWallet) {
  await arweaveWallet.connect(["ACCESS_ADDRESS", "SIGN_TRANACTION"], {
    name: "8pin",
  });
}
```

We want to be able to access the wallet address and the sign transactions.

## Transactions

Arweave transactions is how we post documents to the `weave`, first we create the 
transaction, then we sign it using a wallet, and finally we post it.

``` js

if (!Arweave) {
  alert("ERROR: Arweave not loaded!");
}

const arweave = Arweave.init({
  host: "1984-silver-silkworm-odm72ped.ws-us18.gitpod.io",
  port: 443,
  protocol: "https",
});

const transaction = await arweave.createTransaction({
  data: JSON.stringify({
    name,
    note,
    lat: location.lat,
    lng: location.lng,
  }),
});

transaction.addTag("Content-Type", "application/json");
transaction.addTag("App", "8pin");
transaction.addTag("Type", "pin");

await arweave.transactions.sign(transaction);
const response = await arweave.transactions.post(transaction);

    
```

## GraphQL

GraphQL is how we query the `weave`, using fetch, we can create a graphql query document,
this document will posted to the `/graphql` endpoint and return a graphql response of results.

These results can then be transformed into a record set to show on the pins.svelte page.

``` js

```


## arkb

For the final part of this workshop, we will deploy our whole app onto the permaweb, then it will be forever 
available for users to use.

``` sh
# TODO: Generate Wallet
## Install arkb
npm install -g arkb
arkb --gateway localhost:1984 --wallet key.json  d public
```

## Summary

In this workshop, we learned about web3, arweave, the permaweb and some developer tools in the arweave ecosystem. 

- ArConnect
- ArLocal
- arweave-js
- arkb

Arweave is a community driven distributed ecosystem that enables anyone to permenantly store data on the internet forever! This workshop, just touches some of the basic features of arweave and there are more exciting features and tools built on top of this platform that you should check out.

- Smartweave
- Profit Sharing Tokens
- Profit Sharing Communities
- Open Web Foundry

## Resources

- [arweave](https://arweave.org)
- [arwiki](https://arwiki.wiki/#/en/main)
- [Developer Discord](https://discord.gg/BXk8tq7)
- [OnlyArweave Twitter](https://twitter.com/onlyarweave)

## Projects

- [ArConnect](https://arconnect.io/)
- [ArDrive](https://ardrive.io/)
- [Amplify](https://www.amplify.host/)
- [ArVerify](https://arverify.org/)
- [ArGo](https://argoapp.net/)

[And more](https://arwiki.wiki/#/en/Community-Resources)