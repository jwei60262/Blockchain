---
typora-root-url: ./
---

# 1 Blockchain

## 1.1 What Is The Blockchain?

The blockchain has been described as everything from digital gold to a replacement for the internet.

This field is developing incredibly fast, and there are so many opportunities for you to get involved with.

The blockchain has the potential to revolutionize industries like finance, government, and medicine. It's even re-imagining the way we think about personal identity and security.

区块链被描述为从数字黄金到互联网替代品的所有东西。

这个领域发展得非常快，你有很多机会参与其中。

区块链有可能彻底改变金融，政府和医药等行业。 它甚至重新想象了我们对个人身份和安全的思考方式。

## 1.2 Blockchain Overview

区块链是一个共享的数据库

![blockchain](/images/blockchain.png)

一个区块包含多个交易

![blockchain-with-tran](/images/blockchain-with-tran.png)

每一个区块都有一个hash值

![hash](/images/hash.png)

通过hash将区块连成链

![blockchain-with-hash](/images/blockchain-with-hash.png)

# 2 Blockchain Identity

## 2.1 Blockchain Basics

From here, you learn the basics of Blockchain are introduced to topics like Bitcoin to begin creating your very own bitcoin identity.

Things like blocks, hash values, memory pools, consensus, and more will all be introduced, defined, and added to your understanding of the blockchain!

从这里，您将学习区块链的基础知识，这些基础知识被引入比特币这样的主题，以开始创建您自己的比特币身份。

诸如块，哈希值，内存池，共识等内容都将被引入，定义并添加到您对区块链的理解中！

![blockchain-framework](/images/blockchain-framework.png)

### 2.1.1 Financial Transactions

Current State of Financial Transactions? 可信的第三方。

Problems with the Current System?

### 2.1.2  Bitcoin

The blockchain is a huge topic spanning many platforms and industries. With so much to learn and new updates happening everyday it's tough to know where to start. We believe the best place to start is where it all started - with Bitcoin!

The concepts and ideas bitcoin developed continue to influence all other blockchains. For that reason, we'll use bitcoin as a way to help walk through some important concepts in the program.

In this section, we'll be starting off by going over the basics of Bitcoin!

区块链是一个跨越许多平台和行业的巨大话题。 每天都有很多学习和新的更新，很难知道从哪里开始。 我们相信最好的起点是一切都在这里 - 比特币！

比特币开发的概念和想法继续影响所有其他区块链。 出于这个原因，我们将使用比特币作为一种方式来帮助您完成程序中的一些重要概念。

在本节中，我们将首先介绍比特币的基础知识！

#### What is Bitcoin?

Bitcoin is not *THE* blockchain, it is *A* blockchain.

Once you can grasp these core ideas of bitcoin you’ll be able to apply them anywhere.

[Read:How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)

[Read:Bitcoin: A Peer to Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

### 2.1.3 Hashing

Hashing is an idea you may already be familiar with. It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work. Understanding hashing will help you connect other ideas that we'll discuss later.

Coming up, we'll discuss what hashing is, why it's important, and the basics of how hashing helps contribute to the structure of the blockchain.

哈希是你可能已经熟悉的一个想法。 这是为一段数据创建数字指纹的一种方法。 这是区块链工作背后的一个基本理念。 理解哈希将帮助您连接我们稍后将讨论的其他想法。

接下来，我们将讨论散列是什么，为什么重要，以及散列如何有助于区块链结构的基础知识。

#### Hashing Demo

Now that you have some idea of how hash values work, lets go through a simple demonstration. Here we'll walk through a website that allows you to experiment with ideas like hash values, blocks, and more. We'll come back to this website a few times throughout the lesson.

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/hash.html).

#### Resources

> [Anders.com](https://anders.com/blockchain/hash.html)

> [Bitcoin Hash Wiki](https://en.bitcoin.it/wiki/Hash)

> [Cryptographic Hash Function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

### 2.1.4 Practice Hashing

#### Let's do some Coding Practice

In the previous concept, you learned about Hashing. Now, it is time to see how to code and get the hash using Javascript and Node.js.

#### Steps to follow

> | **Step 1** | Verify `crypto-js` module is installed in your project |
> | ---------- | ------------------------------------------------------ |
> | **Step 2** | Import from `crypto-js` module the sha265 library      |
> | **Step 3** | Add the code to the `generateHash` function            |

Each step you’ll take to complete this exercise is called out in comments throughout the code. You can find more details and guidance about each of these steps in the text provided below the code.

Let’s get started!

#### Step 1. Verify `crypto-js` module is installed in your project

It is always helpful to verify that all the module dependencies for the project are already installed. Navigate to the workspace at the bottom of this page and open your Project folder.

Localize the `package.json` file. This is a `json` file that contains the configuration for your Node.js project. In this file, you can check the dependencies by adding:

```
"dependencies": {
    "crypto-js": "^3.1.9-1"
  }
```

**Note**: Checkout [this documentation](https://www.npmjs.com/package/crypto-js) to learn more about `crypto-js` modules and how to install them.

Check if everything looks ok and move forward to the next Step.

#### Step 2. Import from `crypto-js` module the sha265 library

Module libraries allow you to use code developed by other people in your own project.

Go to the `crypto-js` [documentation](https://www.npmjs.com/package/crypto-js#usage) and find the piece of code to import the module into your file.

#### Step 3. Add the code to the `generateHash` function

The `generateHash` function will take an object as its parameter, and it will allow us to get a hash from the object we pass into it.

To create this function, use the `SHA256 ()` function from `crypto-js`. The `SHA256 ()` function will receive an object as its parameter and return a hash of that object. The returned value will be logged in the console.

To test your program, just open a new **Terminal** and write: `node hashing.js`. Make sure you're in the Project folder (`cd Project`).

**Tip**: It's always a good option to use `JSON.stringify(obj)`to convert an object to `String` and then use it to generate the hash.

#### How to run your application?

Open the terminal, now you have open a terminal. To be able to execute your code the first thing is to move to the project folder, type in your terminal `cd Project` now you are positioning in the **Project** folder. To run your application type in your terminal the command `node hashing.js`.

**Note**: You can clone the boilerplate code from this [Github Repository](https://github.com/udacity/nd1309_hashing).

### 2.1.5 Blocks

Blocks are the fundamental components of the blockchain. The word "block" is an interesting way to think about the information it stores; but what a block is, might be a little different than you expect.

A container that holds a list of transactions to be added to the blockchain.

Shared digital ledger that records a list of transactions.

![block](/images/block.png)

#### Block Header

> Previous Blocks Hash

> Time

> Merkle Root

> Nonce

![merkle-tree](/images/merkle-tree.png)

#### Block Demonstration

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/block.html).

### 2.1.6 Blockchain

Digital ledger that contains the entire history of transactions made on the network.

![blockchain-linked-hash](/images/blockchain-linked-hash.png)

#### 思考几个问题

> Valid block?

> Valid blockchain?

> Block number?

> Block height?

#### Blockchain Demo

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/blockchain.html).

#### Wrapping Up

We made it through the basics of blockchains. Great work! Having a better idea of how blocks and blockchains are formed is great, but it leaves us with one big question.

Where is all this information stored?

The answer is interesting. It's stored across a network of users that all have their own copy of the blockchain. No one user owns the data, everyone has access, and anyone can participate.

我们通过区块链的基础知识完成了它。 做得好！ 更好地了解块和区块链是如何形成的很好，但它给我们留下了一个大问题。

这些信息存储在哪里？

答案很有趣。 它存储在一个用户网络中，这些用户都拥有自己的区块链副本。 没有用户拥有这些数据，每个人都可以访问，任何人都可以参与。

### 2.1.7 Distributed Peer-to-Peer Networks

The idea of a network is what allows the blockchain to bypass the need for 3rd parties like we discussed earlier.We'll go over how that happens, what the network is, and why it's so important to making an effective blockchain.

We'll break down distributed peer-to-peer networks into a few core ideas. First, we'll define **distributed**, and then we'll define **peer-to-peer**. Finally, putting these ideas together helps you see how powerful this combination can be. Then we'll go over how this network helps support the entire system behind the blockchain.

#### Key Terms

> **Peer-to-Peer Network:** A network of computers that allows information to be shared across users.

> **Distributed Network:** A network that allows information to spread out across many users.

While being peer-to-peer allows open  communication across users,being distributed allows that information itself to be owned by those users.

Peer-to-Peer网络

![peer-to-peer](/images/peer-to-peer.png)

Peer-to-Peer应用

![p2p-app](/images/p2p-app.png)

几种网络类型

![distributed-network](/images/distributed-network.png)

Distributed Peer-to-Peer区块链网络

![distributed-p2p-network](/images/distributed-p2p-network.png)

### 2.1.8 Memory Pool



## 2.2 Blockchain Transactions

Identify various wallet types, private/public key generation between non-deterministic, sequential deterministic, and hierarchical deterministic wallets.

## 2.3 Verify Message Signature

Use Bitcoin Javascript Libraries to sign and verify messages that authenticate transactions

## 2.4 Manage Your Blockchain Identity

Learn to create your identity on the Blockchain and interact with an existing web service.

# 3 Blockchain Data

# 4 Blockchain Web Services

# 5 Identity and Smart Contracts