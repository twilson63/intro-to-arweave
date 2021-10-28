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

## Wallets

## Transactions

## GraphQL

## arkb

## Summary

## Resources
