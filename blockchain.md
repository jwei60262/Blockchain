# Blockchain 

## 1 Blockchain Overview

### 1.1 What Is The Blockchain?

The blockchain has been described as everything from digital gold to a replacement for the internet.

This field is developing incredibly fast, and there are so many opportunities for you to get involved with.

The blockchain has the potential to revolutionize industries like finance, government, and medicine. It's even re-imagining the way we think about personal identity and security.

区块链被描述为从数字黄金到互联网替代品的所有东西。

这个领域发展得非常快，你有很多机会参与其中。

区块链有可能彻底改变金融，政府和医药等行业。 它甚至重新想象了我们对个人身份和安全的思考方式。

### 1.2 Blockchain Overview

区块链是一个共享的数据库：

![blockchain](/images/blockchain.png)

一个区块包含多个交易：

![blockchain-with-tran](/images/blockchain-with-tran.png)

每一个区块都有一个hash值：

![hash](/images/hash.png)

通过hash将区块连成链：

![blockchain-with-hash](/images/blockchain-with-hash.png)

## 2 Blockchain Components

### 2.1 Blockchain Basics

From here, you learn the basics of Blockchain are introduced to topics like Bitcoin to begin creating your very own bitcoin identity.

Things like blocks, hash values, memory pools, consensus, and more will all be introduced, defined, and added to your understanding of the blockchain!

从这里，您将学习区块链的基础知识，这些基础知识被引入比特币这样的主题，以开始创建您自己的比特币身份。

诸如块，哈希值，内存池，共识等内容都将被引入，定义并添加到您对区块链的理解中！

#### 2.1.1 Financial Transactions

Current State of Financial Transactions? 可信的第三方。

Problems with the Current System?

#### 2.1.2  Bitcoin

The blockchain is a huge topic spanning many platforms and industries. With so much to learn and new updates happening everyday it's tough to know where to start. We believe the best place to start is where it all started - with Bitcoin!

The concepts and ideas bitcoin developed continue to influence all other blockchains. For that reason, we'll use bitcoin as a way to help walk through some important concepts in the program.

We'll be starting off by going over the basics of Bitcoin!

区块链是一个跨越许多平台和行业的巨大话题。 每天都有很多学习和新的更新，很难知道从哪里开始。我们相信最好的起点是一切都在这里 - 比特币！

比特币开发的概念和想法继续影响所有其他区块链。 出于这个原因，我们将使用比特币作为一种方式来帮助您完成程序中的一些重要概念。

我们将首先介绍比特币的基础知识！

**What is Bitcoin?**

Bitcoin is not *THE* blockchain, it is *A* blockchain.

Once you can grasp these core ideas of bitcoin you’ll be able to apply them anywhere.

比特币核心概念：

![blockchain-framework](/images/blockchain-framework.png)

**Resources**

> [How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)

> [Bitcoin: A Peer to Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

> [bitcoin.org](https://bitcoin.org/en/)

#### 2.1.3 Hashing

Hashing is an idea you may already be familiar with. It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work. Understanding hashing will help you connect other ideas that we'll discuss later.

Coming up, we'll discuss what hashing is, why it's important, and the basics of how hashing helps contribute to the structure of the blockchain.

哈希是你可能已经熟悉的一个想法。 这是为一段数据创建数字指纹的一种方法。 这是区块链工作背后的一个基本理念。 理解哈希将帮助您连接我们稍后将讨论的其他想法。

接下来，我们将讨论散列是什么，为什么重要，以及散列如何有助于区块链结构的基础知识。

**Hashing Demo**

Now that you have some idea of how hash values work, lets go through a simple demonstration. Here we'll walk through a website that allows you to experiment with ideas like hash values, blocks, and more. We'll come back to this website a few times throughout the lesson.

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/hash.html).

**Resources**

> [Anders.com](https://anders.com/blockchain/hash.html)

> [Bitcoin Hash Wiki](https://en.bitcoin.it/wiki/Hash)

> [Cryptographic Hash Function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

#### 2.1.4 Blocks

Blocks are the fundamental components of the blockchain. The word "block" is an interesting way to think about the information it stores; but what a block is, might be a little different than you expect.

A container that holds a list of transactions to be added to the blockchain.

Shared digital ledger that records a list of transactions.

![block](/images/block.png)

**Block Header**

> Previous Blocks Hash

> Time

> Merkle Root

> Nonce

![merkle-tree](/images/merkle-tree.png)

**Block Demonstration**

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/block.html).

#### 2.1.5 Blockchain

Digital ledger that contains the entire history of transactions made on the network.

![blockchain-linked-hash](/images/blockchain-linked-hash.png)

**思考几个问题**

> Valid block?

> Valid blockchain?

> Block number?

> Block height?

**Blockchain Demo**

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/blockchain.html).

**总结**

We made it through the basics of blockchains. Great work! Having a better idea of how blocks and blockchains are formed is great, but it leaves us with one big question.

Where is all this information stored?

The answer is interesting. It's stored across a network of users that all have their own copy of the blockchain. No one user owns the data, everyone has access, and anyone can participate.

我们通过区块链的基础知识完成了它。 做得好！ 更好地了解块和区块链是如何形成的很好，但它给我们留下了一个大问题。

这些信息存储在哪里？

答案很有趣。 它存储在一个用户网络中，这些用户都拥有自己的区块链副本。 没有用户拥有这些数据，每个人都可以访问，任何人都可以参与。

#### 2.1.6 Distributed Peer-to-Peer Networks

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

#### 2.1.7 Memory Pool

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

#### 2.1.8 Consensus

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

#### 2.1.9 Proof of Work

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

#### 2.1.10 Proof of Stake

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

**Potential Issues**

We discussed the “Nothing At Stake” problem in which a bad acting Validator places bets on multiple forks so they theoretically always win out in the end.

**Proposed Solutions**

**Slasher** Strategy which entails penalizing validators if they simultaneously create blocks on multiple chains.

Additionally there’s the **Punisher** Strategy which simply punishes validators for creating blocks on the wrong chain. In this method, Validators will be motivated to be selective and conscious about the blockchain in which they put their stake.

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

#### 2.1.11 Other Consensus Algorithms

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
> - [BCOS共识算法](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/design/consensus/index.html)

**RAFT**

> - [FISCO-BCOS](https://github.com/FISCO-BCOS)
> - [BCOS共识算法](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/design/consensus/index.html)

**Proof Of Activity**

> - [Proof of Activity Explained: A Hybrid Consensus Algorithm](https://www.coinbureau.com/blockchain/proof-of-activity-explained-hybrid-consensus-algorithm/)

**Proof Of Burn**

> - [What is Proof of Burn?](https://99bitcoins.com/what-is-proof-of-burn/)

### 2.2 Blockchain Transactions

#### 2.2.1 Blockchain Identity

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

每一笔交易中都包含了一个转账地址，参考 https://live.blockcypher.com/

![wallet-address](/images/wallet-address.png)

#### 2.2.2 Wallet

**Non-deterministic Wallet**: (random wallets) A wallet where private keys are generated from random numbers.

**Deterministic Wallet**: A wallet where addresses, private keys, and public keys can be traced back to their original seed words.

**Hierarchical Deterministic Wallet**: An advanced type of deterministic wallet that contains keys derived in a tree structure.

**非确定性钱包**（nondeterministic wallet）：每个密钥都是从随机数独立生成，密钥彼此之间无关联，这种钱包也被称为“Just a Bunch Of Keys（一堆密钥）”，简称JBOK钱包。

**确定性钱包（deterministic wallet）**：所有密钥都是从一个主密钥派生出来，这个密钥即为种子（Seed）。该类型钱包中所有密钥都相互关联，通过原始种子可以找到所有密钥。确定性钱包中使用了很多不同的密钥推导方法，最常用的是使用树状结构，称为分级确定性钱包或者HD (hierarchical deterministic)钱包。

| Wallet Type                   | Non-Deterministic Wallet                                     | Sequential Deterministic Wallet                              | Hierarchical Deterministic Wallet                            |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Description                   | These wallets are simply collections of randomly generated private keys. | These wallets contain private keys that are derived sequentially from a single seed and can be traced back to that seed. | These wallets contain keys derived in a tree structure, such that a parent key derives children keys, children keys derive grandchildren keys and so on to an infinite depth. |
| How to get a new private key? | Private key = randomly generated between 1 and 2 ^256        | Private key = sha256(seed + n)， where seed = 128 purely random bits | Private key = sha256(address(publicKey(seed) + n))           |

分别看一下每一种钱包：

**Non-deterministic Wallet**

------

这种钱包的多个私钥之间没有联系，备份比较麻烦

![non-deterministic](/images/non-deterministic.png)

生成私钥的过程，一种可能的实践是，每次交易生成一个新的钱包地址。生成的钱包地址多，每次需要备份私钥。

![non-deterministic-key-process](/images/non-deterministic-key-process.png)

**Sequential Deterministic Wallet**

------

私钥为一串无规律字符串，不便于记忆，不方便使用，从设计的角度，就出现了助记词

随机数生成种子（seed），种子转化为一串助记词（Mnemonic），再生成主私钥，依次生成新的私钥，最后生成钱包地址

![sequential-deterministic-wallet](/images/sequential-deterministic-wallet.png)

在生成私钥时用序号作为输入参数，所以叫顺序确定性钱包

种子钱包的私钥之间有关联，有了种子seed，就可以恢复所有的私钥，便于备份，可以很方便在多个钱包之间迁移

**Hierarchical Deterministic Wallet (HD Wallet)**

------

HD Wallet基于BIP-32

密钥的生成过程是一个树状结构，主私钥可以生成子孙私钥，以至无穷，主公钥也如此。生成子公钥的时候，不需要私钥在场

![hd-wallet](/images/hd-wallet.png)

密钥的树状结构对应组织机构。HD Wallet在一个组织机构中可以全部或者部分分享，比如可以向一个下层组织分享对应层级的公私钥对及钱包地址，这种情况下，这个组织就有花钱的能力。再比如只向下层组织分享对应的钱包地址，这种情况下，组织只能收钱，不能花钱。任何情况下上层组织都可以监控钱包状况。

![hd-wallet-sharing](/images/hd-wallet-sharing.png)

**Key store**

用户不习惯区块链钱包的使用方式，更熟悉现有的密码操作方式。针对此，有的钱包提供了keystore，让用户导出密钥文件，Keystore会存储在使用的设备里，这样每次登录只用输入相应密码即可。Keystore是私钥经过加密过后的一个文件，需要用户密码才能打开。即使keystore文件被盗，只要用户设置的密码够长够随机，短时间内私钥也不会泄露，有充足的时间转移地址里的数字资产。

钱包的作用？

钱包的通信方式，RPC？

**Restore your Wallet Identity**

参考 restoring-bc-identity.md 文档

**参考资料**

> - https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
> - https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
> - https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki
> - https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
> - [比特币钱包是什么](https://zhuanlan.zhihu.com/p/32822703)
> - [HD Wallet 剖析](https://www.arcblock.io/zh/post/2018/12/01/hd-wallets-design-and-implementation)
> - [区块链钱包分类](https://cloud.tencent.com/developer/article/1192508)
> - [Address_reuse](https://en.bitcoin.it/wiki/Address_reuse)
> - [为什么比特币要使用地址](https://zhuanlan.zhihu.com/p/28196364)
> - [为什么使用地址而不是公钥](https://haoduoshipin.com/videos/357/)
> - [比特币如何验证交易](https://zhuanlan.zhihu.com/p/24838810)

#### 2.2.3 Wallet App

A good way to get started is just to google ‘bitcoin wallets’ and start looking around.

**Electrum**

We’re using electrum for a few reasons. It works on almost any computer. It’s fast and lightweight. And it includes all the functionality we’ll need.

下载地址：https://electrum.org/#home

安装视频：[Getting started with Electrum](https://www.youtube.com/watch?v=WdVlH9N2oKU)

**MetaMask**

安装浏览器插件MetaMask，Google和Firefox都支持这个插件。

![metamask](/images/metamask.png)

**Ganache**

安装Ganache

1. 安装包安装，下载地址：https://www.trufflesuite.com/ganache

2. 命令行安装，先装nodejs，然后使用npm install -g ganache-cli安装

中文网：https://truffleframework.org/docs/ganache/using#-

**MetaMask + Ganache演示**

1. 安装Ganache，启动Ganache，确保 RPC server 地址是 HTTP://127.0.0.1:8545；
2. 打开MetaMask，切换到本地网络——Localhost 8545；
3. 在MetaMask中导入Ganache钱包地址，查看变化；
4. 尝试转账，查看变化。

#### 2.2.4 Restore your Wallet Identity

We’ve all forgotten passwords from time to time, and no one is immune from password horror stories!

There are times you may end up needing to restore your wallet identity.

**This could happen for a few reasons**

- You might forget your password.
- You could lose the 2-step verification device.
- The wallet service might even become unavailable.
- It’s also possible that you lose your computer or it gets stolen.

Hopefully none of these things happen, but it’s important to be ready just in case!

To help prepare for situations like this, it’s helpful to know how to restore your bitcoin wallet.

**Ways to Restore a Wallet**

If you ever need to restore your wallet, there are 2 ways to do it. You can do it with the wallet words you saved, or with the private keys from when you first created your wallet.

##### Use a Seed

One way to restore a wallet is using a seed. The ‘seed’ is the 12 words you were given when creating your wallet. If you can remember these words, you can use them to restore your wallet!

The benefit of restoring your identity using the seed is that it can be much simpler than using the private key. It's easier to remember a list of words than a random string of numbers and letters.

The hardest part to any of this is safely storing or remembering this information for when you need it. Anybody else who discovers the list of words can access the wallet and any funds tied to it.

So be VERY careful!

##### Use a Private Key

Another way to restore a wallet is with a private key.

When restoring a wallet using a private key, there are 2 ways to do it. You can either import or sweep this key, and it’s useful to understand the difference.

- **Import a Private Key**

When importing a private key, you'll have a source wallet and a destination wallet. The destination wallet is likely filled with a group of private keys already. To import the key you move the private key from the source wallet to the destination wallet.

This results in you getting access to both the source wallet AND the destination wallet.

The downside to importing is that the private key from the source wallet is essentially compromised since it was shared. If someone gets access to the private key from the source wallet, they can access those bitcoins.

See more on how to import a private key at [BitcoinElectrum.com](https://bitcoinelectrum.com/importing-your-private-keys-into-electrum/).

- **Sweep a Private Key**

When you sweep a private key, you add a private key from a source wallet into the destination wallet. All the bitcoins that belong to that private key are swept from the source wallet over into the destination wallet.

This is a little different than importing because it completely removes the funds from the original wallet. You’ll now only be using this new wallet to make future transactions.

See more on how to sweep a private key at [BitcoinElectrum.com](https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/).

**Which should you choose?**

Why would you import or sweep a private key?

Sweep a wallet if you're worried about wallet security.This might happen in the case that you think someone might have access to your private key. Sweeping completely cleans out the wallet so that no one will have access to your bitcoins.

If you are certain no one has gotten access to your private key, and that no one ever will, then you can import the key instead. This is useful in cases where you need the funds to be available from multiple wallets.

When in doubt, stick with sweeping. It’s more secure this way, and it avoids some problems that are associated with importing a wallet.

#### 2.2.5 Public Key Infrastructure

**Private Keys**

1. 私钥目的
2. 私钥的安全性
3. 生成私钥的方式

私钥：1 —— 2^256，256-bits random number

地球上的沙子：2^63

私钥的表现形式：

1. Hex(Hexadecimal)
2. WIF(Base58Check)
3. WIF-Compressed(Base58Check added suffix 0x01 before encoding)

私钥的生成：

1. 不要自己轻易生成随机数
2. 密码学专家经过长期的工作，会产生一个牢不可破的随机数生成器。
3. Most operating systems have a source of entropy or a library with a cryptographically secure number generator.

Entropy: Lack of order or predictability. The degree of disorder or randomness in the system.

**扔硬币**

仍256次硬币，记录每一次的结果，将结果的组合作为私钥值。

**website**

这个网站 [https://www.bitaddress.org](https://www.bitaddress.org/) 利用底层操作系统的随机数生成器，生成私钥和地址。建议离线状态时获取私钥，可以先把网页存到本地，然后断网，打开本地网页。

**Electrum**

钱包可以生成私钥和地址。

**编程方式生成私钥**

https://github.com/bitcoinjs/bitcoinjs-message

**SSH**

使用putty或xshell登陆远程服务器。

**HTTPS**

SSL(Secure Sockets Layer 安全套接层),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层对网络连接进行加密。

参考 https://www.cnblogs.com/franson-2016/p/5530671.html

#### 2.2.6 Transaction

**Sign a Transaction**

用钱包签名交易，然后向全网广播交易。签名可以证明自己的所有者身份。

Transaction inputs：支付款

Transaction outputs：接收款

Unspent transaction output known as UTXO。

查看链接 https://live.blockcypher.com/ 理解UTXO。

只有UTXO可作为下一个交易的input。

**Transaction Lifecycle**

1. 获得对方地址
2. 产生一个交易
3. 用私钥对交易签名
4. 交易在全网广播，进入memory pool
5. 矿工接受交易，将交易打包到区块
6. 矿工为区块计算hash，完成工作量证明
7. 其它节点验证区块，区块上链
8. 转账交易完成

交易验证的脚本参考：https://zhuanlan.zhihu.com/p/24838810

### 2.3 Message Signature

#### 2.3.1 Generate Key Pair and a Wallet Address

下面几种方式都可以生成key和address。

[bitaddress](https://www.bitaddress.org)

[Electrum](https://electrum.org/#home)

MetaMask

#### 2.3.2 Sign a Message

通过签名算法(signing algorithm)签名

使用签名的好处

- Authentication - A valid digital signature proves to the recipient, that the message was sent by a known sender.
- Integrity - The recipient and sender can prove the message was not altered in transmission.
- Non-repudiation - The Sender cannot deny sending the message.

#### 2.3.3 Verify a Message

传入Wallet Address, the *Signature*, and a Message到验证算法，进行验证。

在nodejs环境下打开node session，运行以下代码。

```javascript
const bitcoinMessage = require('bitcoinjs-message')

const address = '1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN'
const signature = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'
const message = 'This is an example of a signed message.'
console.log(bitcoinMessage.verify(message,address,signature));
```

#### 2.3.4 Sign and Verify

![sign-verify](/images/sign-verify.png)

Use Bitcoin Javascript Libraries to sign and verify messages that authenticate transactions

Figure out which signatures pass verification and which ones fail verification using the Bitcoin Javascript Library [bitcoinjs-message](https://github.com/bitcoinjs/bitcoinjs-message).

[bitcoinjs-message](https://github.com/bitcoinjs/bitcoinjs-message)中提到的[Segwit ](https://zhuanlan.zhihu.com/p/32613487)是指把脚本签名(scriptSig)信息从基本结构 (base block) 里拿出来，放在一个新的数据结构当中。做验证工作的节点和矿工也会验证这个新的数据结构里的脚本签名，以确保交易是有效的。

## 3 Blockchain Data

### 3.1 Database

**Database Contrast**

|               | Traditional Database            | Blockchain                             |
| ------------- | ------------------------------- | -------------------------------------- |
| Network       | Centralized                     | Distributed                            |
| Functions     | Create,Read,Update,Delete(CRUD) | Read,append（new record）,and validate |
| Mutability    | Mutable                         | Inmutable                              |
| Authorization | Centralized                     | Distributed                            |
| Transparency  | Low                             | High                                   |

**Traditional Database Security**

- CRUD
- 灵活性
- 误删除、恶意攻击

**Blockchain Characteristics**

- 数据需要共识，对网络要求高
- 不能删除数据，保留完整历史纪录
- 控制权在所有的节点
- 需要更多的存储空间

**区块链的适用场景**

- Do you need a database?
- Does it require shared write access?
- Will you need to create the trust between users?
- Can you operate without trusted 3rd parties?
- Can you operate without control over permissions?

### 3.2 Blockchain Type

**Difference**

|                       | Public Blockchain | Private Blockchain |
| --------------------- | ----------------- | ------------------ |
| Permissions           | Permissionless    | Permissioned       |
| Scalability           | More Difficult    | Simpler            |
| Vulnerability         | Less Vulnerable   | More Vulnerable    |
| Regulatory Compliance | More Difficult    | Simpler            |

去中心化的公链难以监管。

关于公链、私链，可以参考下面链接：

[The difference between public and private blockchains - IBM](https://www.ibm.com/blogs/blockchain/2017/05/the-difference-between-public-and-private-blockchain/)

[3 types of blockchains you need to know - Hackernoon](https://hackernoon.com/3-popular-types-of-blockchains-you-need-to-know-7a5b98ee545a)

**Public private or hybrid**

| 公开程度                                                     | 类型               |
| :----------------------------------------------------------- | ------------------ |
| Will transactions be public                                  | Public Blockchain  |
| Will companies need access to your data                      | Private Blockchain |
| Should some information be public while other information is restricted | Hybrid Blockchain  |

**Public and private blockchain communication**

链与链之间的交互可以产生跨链（cross chain）操作，跨链操作让不同协议的区块链网络和谐交互，为分布式应用留下了想象空间。跨链、多链的内容可以参考：https://zh.wikipedia.org/zh-hans/Polkadot

看下面的截图，私链监听公链，当公链上新区块产生的时候，将交易的哈希值存入私链。也可以将私有链的哈希值存入公链。

![public-private-blockchain-link](/images/public-private-blockchain-link.png)

### 3.3 Data

通过区块链浏览器查看data

https://blockchair.com/

https://www.blockchain.com/explorer 

https://live.blockcypher.com/

https://btc.com/

https://explorer.bitcoin.com/btc

https://explorer.viabtc.com/btc

通过nodejs library [blockexplorer.js](https://www.npmjs.com/package/blockexplorer) 查看data

```
const be = require('blockexplorer');

be.blockIndex(0)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    throw err
  })
```

查表 [Bitcoin Developer Glosary](https://bitcoin.org/en/developer-glossary#section) 理解区块链data

### 3.4 Forks

**Hardforks**: Large change to the blockchain protocol

free money

![hardforks](/images/hardforks.png)

**Softforks**: Small change to the blockchain protocol

![softforks](/images/softforks.png)

**Source Code Forks**: Copy of blockchain code base with no connection to the origin blockchain

![source-code-forks](/images/source-code-forks.png)

|                          | Hardfork     | Softfork  | Source Code Fork |
| ------------------------ | ------------ | --------- | ---------------- |
| Change                   | Large        | Small     | Small or large   |
| Copies original codebase | Yes          | Yes       | Yes              |
| Backwards compatible     | No           | Yes       | No               |
| Split                    | Permanent    | Temporary | Permanent        |
| Example                  | Bitcoin Cash | Segwit    | Litecoin         |



### 3.5 Bitcoin Core

**Resources**

> - [Bitcoin Improvement Proposals](https://github.com/bitcoin/bips)
> - [Bitcoin Codebase](https://github.com/bitcoin/bitcoin)
> - [Bitcoin Improvement Proposals](https://github.com/bitcoin/bips)
> - [github.com/litecoin-project/litecoin](https://github.com/litecoin-project/litecoin)
> -  [Bitcoin Developer Glosary](https://bitcoin.org/en/developer-glossary#section) 



## 4 Blockchain Web Services

## 5 Identity and Smart Contracts

### 5.1 Solidity

A brief Solidity review provided . For full developer documentation, review the following: https://solidity.readthedocs.io/en/v0.4.24/，https://solidity.readthedocs.io/en/v0.5.0/index.html

Topics covered in this section are:

- Solidity versioning
- Contracts
- Variables
  - Variable types
  - Booleans
  - Integers
  - Addresses
  - Strings
  - Variable definition
- Arithmetics
  - Arithmetic operations
- Structs
- Mappings

#### 5.1.1 Solidity versioning

Solidity source files can contain any number of contract definitions. Each Solidity file also includes a thing called "Version Pragma". It is used to prevent the code from being compiled with future compiler versions that might introduce incompatible changes. Most of the time, the definition looks like this:

```
pragma solidity ^0.4.20;
```

In the example above 0.4.20 is the desired compiler version.

#### 5.1.2 Contracts

Now, let's put it into code.

Contracts in Solidity are similar to classes in object-oriented languages. They contain data in variables and functions that can modify these variables.

They are defined by using a contract keyword, followed by the contract name and two brackets { } which will later enclose contract variables and functions. For example:

```
pragma solidity ^0.4.20;

contract ParentObject {



}
```

#### 5.1.3 Variables

Wow! You've successfully created the frame of your contract! Now, it's time to start learning about how your contract will work. We'll start by finding out what type of variables there are.

**Variable types**

State variables are used to store information on the blockchain. They can also be manipulated by the functions within the contract.

Solidity is a statically typed programming language, meaning that each variable must have its type specified. Examples of the main data types:

**Booleans**

Can only have one of the two following values: true or false. The keyword for booleans is bool.

**Integers**

Integers can be split into main groups: regular integers (can store both positive and negative values) and unsigned integers (can only store values that are 0 or higher)

Regular integer has keywords from int8 to int256. The number signifies the maximum number of bits it can store (thus limiting the maximum value), and it can be any number between 8 and 256 as long as it incremented in steps of 8 (e.g., int16 is valid but int17is not). The int keyword alone would be understood as int256.

Unsigned integers follow the same logic. The only difference is the keyword which ranges from uint8 to uint256. Keyword uintcan also be used instead of uint256.

**Addresses**

The address keyword is used to hold Ethereum addresses. If you're planning to store an Ethereum address, you will need to use the address keyword.

**Strings**

The string variable is used to store text information. If you need to store a variable that should contain text information use the string keyword.

**Variable definition**

There are more data types, but we will go into more details in further lessons.

Variables and their values are defined like this.

contract Pizza {

```
bool isWarm = true;

uint slicesLeft = 3;
```

}

```
pragma solidity ^0.4.20;

contract ParentObject {

    // Write your solution below

    uint maxChildrenPerParentOpject = 10;

    uint minChildrenPerParentOpject = 1;

}
```

#### 5.1.4 Arithmetics

Now that you learned to define the variables for your contract, it's time to go through some basic math commands that will be useful later for defining your smart contract code.

**Arithmetic operations**

Integers can be used for arithmetic operations:

- Addition x + y
- Subtraction x - y
- Multiplication x * y
- Division x / y
- Remainder x % y
- Exponentiation x ** y (x to the power of y)

For example:

```
uint x = 16;
uint pizza = 4;
uint result = 0;
result = x + pizza;     // 16 + 4 = 20
result = x - pizza;     // 16 - 4 = 12
result = x * pizza;     // 16 * 4 = 64
result = x / pizza;     // 16 / 4 = 4
result = x % pizza;     // 16 % 4 = 0
result = x ** pizza;    // 16 ^ 4 = 65536
```

A real world example:

```
uint pizzaSlices = 6;

uint people = 2;

uint slicesPerPerson = pizzaSlices / people;
```

#### 5.1.5 Structs

As we've learned the basics for defining variables, now we will learn to create the structure that defines your variables properties: name, type, coordinates (X and Y), and so forth.

**Structs**

A struct is a special data type that allows the programmer to group a list of variables.

Structures are defined like this:

struct Car {

```
string make;

string model;

uint16 year;

uint16 horsepower;
```

}

#### 5.1.6 Mappings

Now that you've defined your variables, we'll learn how to create a variable that will later map your variable to the blockchain - a special list where all other variables are stored.

Mappings allow the programmer to create key-value pairs and store them as a list. Concepts like this also are known as hash tables.

Mappings are defined like this:

mapping(key_type => key_value) mappingName;

key_type should be replaced by a data type. Two commonly used variable types for mapping keys that we already know about are address and uint. It is important to note that not every data type can be used as a key. For instance, structs and other mappings cannot be used as keys.

Similarly, key_value should be replaced by the value type. Unlike with keys, Solidity does not limit the data type for values. It can be anything, including structs and other mappings.

A real-world example of a mapping:

mapping(address => uint256) balance;

This mapping could hold the bank account balance in uint256 for the given address.

## 6 DID

分布式身份管理

**微软**

- [Decentralized digital identities and blockchain: The future as we see it](https://www.microsoft.com/en-us/microsoft-365/blog/2018/02/12/decentralized-digital-identities-and-blockchain-the-future-as-we-see-it/)
- [A new approach to digital IDENTITY](https://didproject.azurewebsites.net/)
- [Decentralized identity APIs](https://didproject.azurewebsites.net/docs/overview.html)
- [ion](https://github.com/decentralized-identity/ion)
- [DIF](https://identity.foundation/)

**w3c**

- [Decentralized Identifiers (DIDs) v0.13](https://w3c-ccg.github.io/did-spec/)

**微众**

- [WeIdentity](https://github.com/WeBankFinTech/WeIdentity)
- [WeIdentity use-cases](https://weidentity.readthedocs.io/zh_CN/master/docs/use-cases.html)
- [WeIdentity 规范文档](https://weidentity.readthedocs.io/zh_CN/master/docs/weidentity-spec.html)

**公链身份DID**

- ERC-725
- uPort
- Sovrin

