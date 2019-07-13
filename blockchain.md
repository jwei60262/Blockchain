---

typora-root-url: ./
---

# 1 Blockchain Overview

## 1.1 What Is The Blockchain?

The blockchain has been described as everything from digital gold to a replacement for the internet.

This field is developing incredibly fast, and there are so many opportunities for you to get involved with.

The blockchain has the potential to revolutionize industries like finance, government, and medicine. It's even re-imagining the way we think about personal identity and security.

区块链被描述为从数字黄金到互联网替代品的所有东西。

这个领域发展得非常快，你有很多机会参与其中。

区块链有可能彻底改变金融，政府和医药等行业。 它甚至重新想象了我们对个人身份和安全的思考方式。

## 1.2 Blockchain Overview

区块链是一个共享的数据库：

![blockchain](/images/blockchain.png)

一个区块包含多个交易：

![blockchain-with-tran](/images/blockchain-with-tran.png)

每一个区块都有一个hash值：

![hash](/images/hash.png)

通过hash将区块连成链：

![blockchain-with-hash](/images/blockchain-with-hash.png)

# 2 Blockchain Framework

## 2.1 Blockchain Basics

From here, you learn the basics of Blockchain are introduced to topics like Bitcoin to begin creating your very own bitcoin identity.

Things like blocks, hash values, memory pools, consensus, and more will all be introduced, defined, and added to your understanding of the blockchain!

从这里，您将学习区块链的基础知识，这些基础知识被引入比特币这样的主题，以开始创建您自己的比特币身份。

诸如块，哈希值，内存池，共识等内容都将被引入，定义并添加到您对区块链的理解中！

### 2.1.1 Financial Transactions

Current State of Financial Transactions? 可信的第三方。

Problems with the Current System?

### 2.1.2  Bitcoin

The blockchain is a huge topic spanning many platforms and industries. With so much to learn and new updates happening everyday it's tough to know where to start. We believe the best place to start is where it all started - with Bitcoin!

The concepts and ideas bitcoin developed continue to influence all other blockchains. For that reason, we'll use bitcoin as a way to help walk through some important concepts in the program.

We'll be starting off by going over the basics of Bitcoin!

区块链是一个跨越许多平台和行业的巨大话题。 每天都有很多学习和新的更新，很难知道从哪里开始。我们相信最好的起点是一切都在这里 - 比特币！

比特币开发的概念和想法继续影响所有其他区块链。 出于这个原因，我们将使用比特币作为一种方式来帮助您完成程序中的一些重要概念。

我们将首先介绍比特币的基础知识！

#### What is Bitcoin?

Bitcoin is not *THE* blockchain, it is *A* blockchain.

Once you can grasp these core ideas of bitcoin you’ll be able to apply them anywhere.

比特币核心概念：

![blockchain-framework](/images/blockchain-framework.png)

**Resources**

> [How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)

> [Bitcoin: A Peer to Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

> [bitcoin.org](https://bitcoin.org/en/)

### 2.1.3 Hashing

Hashing is an idea you may already be familiar with. It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work. Understanding hashing will help you connect other ideas that we'll discuss later.

Coming up, we'll discuss what hashing is, why it's important, and the basics of how hashing helps contribute to the structure of the blockchain.

哈希是你可能已经熟悉的一个想法。 这是为一段数据创建数字指纹的一种方法。 这是区块链工作背后的一个基本理念。 理解哈希将帮助您连接我们稍后将讨论的其他想法。

接下来，我们将讨论散列是什么，为什么重要，以及散列如何有助于区块链结构的基础知识。

#### Hashing Demo

Now that you have some idea of how hash values work, lets go through a simple demonstration. Here we'll walk through a website that allows you to experiment with ideas like hash values, blocks, and more. We'll come back to this website a few times throughout the lesson.

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/hash.html).

**Resources**

> [Anders.com](https://anders.com/blockchain/hash.html)

> [Bitcoin Hash Wiki](https://en.bitcoin.it/wiki/Hash)

> [Cryptographic Hash Function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

### 2.1.4 Blocks

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

### 2.1.5 Blockchain

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

### 2.1.6 Distributed Peer-to-Peer Networks

The idea of a network is what allows the blockchain to bypass the need for 3rd parties like we discussed earlier.We'll go over how that happens, what the network is, and why it's so important to making an effective blockchain.

We'll break down distributed peer-to-peer networks into a few core ideas. First, we'll define **distributed**, and then we'll define **peer-to-peer**. Finally, putting these ideas together helps you see how powerful this combination can be. Then we'll go over how this network helps support the entire system behind the blockchain.

**Key Terms**

> **Peer-to-Peer Network:** A network of computers that allows information to be shared across users.

> **Distributed Network:** A network that allows information to spread out across many users.

While being peer-to-peer allows open  communication across users,being distributed allows that information itself to be owned by those users.

Peer-to-Peer网络：

![peer-to-peer](/images/peer-to-peer.png)

Peer-to-Peer应用：

![p2p-app](/images/p2p-app.png)

几种网络类型：

![distributed-network](/images/distributed-network.png)

Distributed Peer-to-Peer区块链网络：

![distributed-p2p-network](/images/distributed-p2p-network.png)

### 2.1.7 Memory Pool

Before getting onto the blockchain or becoming part of the network, transactions go into what is known as the memory pool.

The **memory pool** (also known as the **mempool**) is the waiting place for transactions before they enter the blockchain. The blockchain can only handle so much information at once, and the backlog of information goes here.

在进入区块链或成为网络的一部分之前，交易进入所谓的内存池。

**内存池**（也称为** mempool **）是进入区块链之前进行交易的等待场所。 区块链只能同时处理如此多的信息，积压的信息就在这里。

Waiting place for all unconfirmed transactions before they are added to the blockchain.

![mem-pool](/images/mem-pool.png)

**Resources**

> [Blockchain.com](https://www.blockchain.com/about/index.html)
>
> - See [Unconfirmed Transactions](https://blockchain.info/unconfirmed-transactions)
> - Explore [Blockchain Data Charts](https://blockchain.info/charts)

> [Bitcoin Visuals](https://bitcoinvisuals.com/stats) - Another fun site to check bitcoin stats (e.g. fees, mempool, block speed, and hashrate)

### 2.1.8 Consensus

**Consensus:**

How the network reaches agreement about which transactions are most trustworthy.

Consensus is a very large topic. 

Consensus is how the blockchain makes decisions. Basically **consensus** is an idea, but the idea is implemented through many different algorithms. These algorithms are all different ways to try and achieve consensus more effectively. Things like **proof of work**, **proof of stake**, and **DBFT** are all consensus algorithms we'll discuss soon.

共识是一个非常大的话题。

共识是区块链如何做出决策。 基本上**共识**是一个想法，但这个想法是通过许多不同的算法实现的。这些算法都是尝试更有效地达成共识的不同方法。像**工作证明**，**证明**和** DBFT **这些都是我们将很快讨论的共识算法。

Byzantine Generals Problem:

![byzantine-generals-problem](/images/byzantine-generals-problem.png)

**Byzantine Generals Problem**

1. 将军中间有叛徒
2. 消息通过士兵传递，士兵被捕，士兵误传消息
3. 拜占庭将军问题也有不同的版本，假设通信信道是安全的，有恶意节点——拜占庭节点——存在

**分布式网络中存在类似的问题**

1. 网络中存在恶意节点
2. 节点之间不能有效的沟通

### 2.1.9 Proof of Work

One of the first algorithms created for consensus is known as **proof of work**. The idea behind **proof of work** is that whoever puts in the most work to contribute to the system is the most trustworthy.

为保证一致性而创建的第一个算法称为工作证明。 工作证明**背后的想法**是，无论谁投入最多的工作来为系统做出贡献，都是最值得信赖的。

The **basic idea** behind proof of work:

System where information can be costly to produce,but easy to verify.

为了方便实现，有一个**要求**：信息生产成本高，但易于验证的系统。

比特币中工作量证明的**具体做法**是：旷工节点经过竞争计算出一个Nonce值，以保证 **Block Data + Nonce = Hash value**。

To  [Anders.com](https://anders.com/blockchain/block.html),you will go over a demonstration showing how proof of work contributes to the blockchain. 

**Resources**

> [Anders.com](https://anders.com/blockchain/block.html).

> [Bitcoin’s whitepaper on PoW](https://bitcoin.org/bitcoin.pdf)
>
> [比特币节点](https://zhuanlan.zhihu.com/p/56100510)

**Problems with Proof of Work**

1. Extremely High-Energy Consumption

2. A Monopoly of miners leads to concern for Centralization

### 2.1.10 Proof of Stake

There are no miners, There are validators--stakeholders. 

Proof of Stake (PoS) is a category of consensus algorithms for public blockchains that depend on a validator's economic stake in the network. In PoS-based public blockchains (e.g. Ethereum's upcoming Casper implementation), a set of validators take turns proposing and voting on the next block, and the weight of each validator's vote depends on the size of its deposit (i.e. stake). Significant advantages of PoS include security, reduced risk of centralization, and energy efficiency.

股权证明（PoS）是公共区块链的一类共识算法，它依赖于validator在网络中的经济利益。在基于PoS的公共区块链（例如以太坊即将发布的Casper实现）中，一组validator轮流提议并对下一个块进行投票，并且每个验证器的投票权重取决于其存款的大小（即投注）。PoS的显著优势包括安全性，降低集中风险和能源效率。

In general, a proof of stake algorithm looks as follows. The blockchain keeps track of a set of validators, and anyone who holds the blockchain's base cryptocurrency (in Ethereum's case, ether) can become a validator by sending a special type of transaction that locks up their ether into a deposit. The process of creating and agreeing to new blocks is then done through a consensus algorithm that all current validators can participate in.

通常，权益证明如下。区块链跟踪一组validator，任何持有区块链基本加密货币的人（在以太坊上是以太币）都可以通过发送特殊类型的交易将其以太币锁定到存款中，从而成为validator。然后，通过所有当前validator都可以参与的一致性算法来完成创建和同意新块的过程。

In chain-based proof of stake, the algorithm pseudo-randomly selects a validator during each time slot (e.g. every period of 10 seconds might be a time slot), and assigns that validator the right to create a single block, and this block must point to some previous block (normally the block at the end of the previously longest chain), and so over time most blocks converge into a single constantly growing chain.

在基于链的证明中，算法在每个时隙中伪随机选择一个验证器（例如，每个10秒的周期可能是一个时隙），并为该validator分配创建单个块的权限，并且该块必须指向前一个块（通常是前一个最长链末端的块），因此随着时间的推移，大多数块会聚成一个不断增长的链。

**Proof of Stake共识过程：**

> 1. 广播交易
> 2. 节点发出一个特殊交易锁存基本币，这个过程相当于为下一个区块投注。通过这个行为节点成为validator
> 3. 算法在每个时隙中伪随机选择一个验证器validator，validator获得权限，创建区块。选择validator的过程依赖validator的投注（投注 = 币龄 = 币量 * 币持有时间）。
> 4. 验证节点验证区块。验证通过之后validator获得回报。
> 5. 区块最终入链

**Resources**

下面几种区块链平台采用了 Proof of Stake。

> [Ethereum](https://ethereum.org/)
>
> - Switching from PoW to PoS in the Casper Project

> [Dash](https://www.dash.org/) 
>
> - A Pioneer of PoS
> - Built form the core Bitcoin platform with added features for privacy and Tx speed

> [Lisk](https://lisk.io/) 
>
> - Focused on creating Decentralized Apps
> - Uses Delegated Proof of Stake
> - **Delegated Proof of Stake**: Only the top 101 delegates can have stakes int the network and these delegates are voted on a rolling basis by the community.

Also check out Ethereum's Proof of Stake FAQ which provides more details around some of the concepts covered here:

> [Ethereum’s Proof of Stake FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs)

### 2.1.11 Other Consensus Algorithms

**Proof of Work**

> [Bitcoin’s whitepaper on PoW](https://bitcoin.org/bitcoin.pdf)

**Proof of Stake**

> [Ethereum’s Proof of Stake FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ)
>
> - Block Selection methods
>   - Randomized block selection
>   - Coin age-based selection
> - [Alternative Proof of Stake Methods](https://dailyfintech.com/2016/01/20/why-proof-of-stake-matters-for-blockchain/#content-wrapper)
>   - Transparent Forging
>   - Delegated Proof of Stake

**Delegated Byzantine Fault Tolerance**

> - [NEO's Consensus Protocol](https://steemit.com/neo/@basiccrypto/neo-s-consensus-protocol-how-delegated-byzantine-fault-tolerance-works)

**Practical Byzantine Fault Tolerance**

> - [FISCO-BCOS](https://github.com/FISCO-BCOS)

**RAFT**

> - [FISCO-BCOS](https://github.com/FISCO-BCOS)

**Proof Of Activity**

> - [Proof of Activity Explained: A Hybrid Consensus Algorithm](https://www.coinbureau.com/blockchain/proof-of-activity-explained-hybrid-consensus-algorithm/)

**Proof Of Burn**

> - [What is Proof of Burn?](https://99bitcoins.com/what-is-proof-of-burn/)

## 2.2 Blockchain Transactions

### 2.2.1 Blockchain Identity

币的拥有者可以花费币，交易不被追溯

通过钱包进行身份管理，身份包含下面三个内容

**Wallet Address**: A unique identifier for your wallet

**Private Key**: A secret number that allows you to spend bitcoin from your wallet. These are randomly generated numbers that your wallet creates

**Public Key**: Publicly shareable key that cannot be used to spend bitcoin

Wallets can contain one or mare of  these private keys and these should not be shared with anyone.

私钥是一组随机数，以这种方式产生的钱包是“不确定性钱包”。

椭圆曲线数字签名算法Elliptic Curve Digital Signature Algorithm，生成公钥

![generate-pub-with-ecdsa](/images/generate-pub-with-ecdsa.png)

公钥几乎不能推断出私钥，至少难度非常大

![private-pub-key](/images/private-pub-key.png)

通过公钥生成钱包地址

![generate-address](/images/generate-address.png)

钱包地址不能推断出公钥。

![pub-address-key](/images/pub-address-key.png)

每一笔交易中都包含了一个转账地址

![wallet-address](/images/wallet-address.png)

### 2.2.2 Wallet

**Non-deterministic Wallet**: (random wallets) A wallet where private keys are generated from random numbers.

**Deterministic Wallet**: A wallet where addresses, private keys, and public keys can be traced back to their original seed words.

**Hierarchical Deterministic Wallet**: An advanced type of deterministic wallet that contains keys derived in a tree structure.

| Wallet Type                   | Non-Deterministic Wallet                                     | Sequential Deterministic Wallet                              | Hierarchical Deterministic Wallet                            |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Description                   | These wallets are simply collections of randomly generated private keys. | These wallets contain private keys that are derived sequentially from a single seed and can be traced back to that seed. | These wallets contain keys derived in a tree structure, such that a parent key derives children keys, children keys derive grandchildren keys and so on to an infinite depth. |
| How to get a new private key? | Private key = randomly generated between 1 and 2 ^256        | Private key = sha256(seed + n)， where seed = 128 purely random bits | Private key = sha256(address(publicKey(seed) + n))           |

[比特币钱包是什么](https://zhuanlan.zhihu.com/p/32822703)

[区块链钱包分类](https://cloud.tencent.com/developer/article/1192508)



## 2.3 Verify Message Signature

Use Bitcoin Javascript Libraries to sign and verify messages that authenticate transactions

## 2.4 Manage Your Blockchain Identity

Learn to create your identity on the Blockchain and interact with an existing web service.

# 3 Blockchain Data

# 4 Blockchain Web Services

# 5 Identity and Smart Contracts