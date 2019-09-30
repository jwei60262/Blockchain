# 文档介绍
1. 本文档介绍培训交流的项目、内容、常用工具、代码规范和软件开发方法
2. [blockchain.md](blockchain.md)是区块链文档，介绍区块链的基本知识
3. [project-practice.md](project-practice.md)是动手练习文档，练习的步骤说明
4. practice-block目录是“区块”练习的代码模板
5. practice-hashing目录是“hash”练习的代码模板
6. practice-private-blockchain目录是private blockchain练习的代码模板

# 项目

为了帮助同学更好地理解区块链原理，提高工程技术能力，特别开展技术培训课程。培训过程围绕下面几个项目展开。

## 项目一

做一个简单项目，搭建一个私有链。通过这个项目理解区块链数据结构，hash函数在区块链中的作用，区块的生成，区块链的验证，数据持久化等内容。同时学习nodejs编程方法，作为编程的入门项目。

- 项目来源：在根目录下找到 private-blockchain 项目
- 项目内容：private blockchain
- 开发环境：nodejs，levelDB
- 开发工具：npm，git bash
- 开发语言：javascript
- 培训人员：卫佳

## 项目二

深入了解公司社会治理区块链项目。了解区块链在实际场景中如何落地，区块链如何为文明行为赋能。理解区块链如何与人脸设备融合，真实场景中区跨链共识机制如何发挥作用。思考在这个项目中共识机制存在哪些问题，分布式账本的作用，分布式账本能不能支撑复杂数据模型。

- 项目来源：公司对外项目
- 项目内容：FISCO BCOS底层搭链，solidity合约开发，缓存模块，客户端DAPP，人脸识别设备开发。
- 开发环境：FISCO BCOS，mysql，nginx，tomcat
- 开发工具：remix，intelliJ IDEA，spring framework，maven
- 开发语言：solidaty，Java
- 培训人员：朱发远、周恩愿、胡佳琪

## 项目三

公司服务器上搭建了一些工具类软件系统，帮助办公。服务器运行centOS系统，软件系统通过docker容器方式部署。通过运维培训，了解公司运维情况、Linux系统、docker容器的使用、工具类软件的用法。

- 项目来源：公司运维
- 项目内容：使用VMware Workstation Pro，创建centOS虚拟机，运行docker环境，部署media wiki
- 培训人员：李嘉和

## 项目四

学习以太坊开发，了解区块链公链、以太坊架构、智能合约开发，钱包应用。

- 项目来源：在根目录下找到 decentralized-star-notary
- 项目内容：开发ICO智能合约，在以太坊测试网上部署，调用智能合约，合约测试用例
- 开发环境：以太坊，EVM，nodejs
- 开发工具：MetaMask，ganache，truffle，remix
- 开发语言：solidaty，Javascript
- 主持：卫佳

## 项目五

Fabric，电子发票，征信，药品溯源

- 开发语言：go
- 培训人员：吴志辉，李嘉和

# 实验环境

### Markdown

- 下载：[MarkdownPad](http://markdownpad.com/) is a full-featured Markdown editor for Windows.
- [Markdown 中文文档](https://markdown-zh.readthedocs.io/en/latest/)
- [Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)

### Typora

- [Typora](https://typora.io/) — a markdown editor, markdown reader.

### VS Code

- [Visual Studio Code](https://code.visualstudio.com/) Code editing. Redefined.

### Node.js

- [Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Node.js®](https://nodejs.org/zh-cn/) 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- [npm](https://www.npmjs.com/) Essential JavaScript development tools that help you go to market faster and build powerful applications using modern open source code.
- [npm 中文文档](https://www.npmjs.cn/)
- [level](https://www.npmjs.com/package/level)
- [crypto-js](https://www.npmjs.com/package/crypto-js)

### JavaScript

- [JavaScript教程](https://www.w3school.com.cn/js/index.asp)
- [JavaScript菜鸟教程](https://www.runoob.com/js/js-tutorial.html)
- Promise
  - [Promisejs]([https://www.promisejs.org](https://www.promisejs.org/))
  - [MDN Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [Promise菜鸟教程](https://www.runoob.com/w3cnote/javascript-promise-object.html)

### Electrum

- [electrum](https://electrum.org/#home) Electrum is one of the most popular Bitcoin wallets. Electrum is fast, secure and easy to use.It suits the needs of a wide spectrum of users.

### Ganache

- [Ganache](https://www.trufflesuite.com/ganache) Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

### Firefox

- [Firefox ](https://www.firefox.com.cn/?utm_medium=referral&utm_source=mozilla.org)

### MetaMask

- [MetaMask](https://metamask.io/) Brings Ethereum to your browser

### VMware

[VMware Workstation Pro](https://my.vmware.com/cn/web/vmware/info/slug/desktop_end_user_computing/vmware_workstation_pro/15_0)

### Ubuntu

[Ubuntu镜像](https://ubuntu.com/download)

### FISCO BCOS

- [FISCO BCOS官网](http://fisco-bcos.org/zh/) 打造公众联盟链基础设施，赋能分布式商业
- [FISCO BCOS 技术文档](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/)
- [WeBASE 技术文档](https://webasedoc.readthedocs.io/zh_CN/latest/index.html#)

# 代码规范

使用任何编程语言，都应该遵守语言一般的规范编写代码。严格要求自己，培养良好习惯。

## Solidity

- [Solidity style guide](https://solidity.readthedocs.io/en/v0.5.10/style-guide.html)

## Java

- [Oracle Java Code Conventions](https://www.oracle.com/technetwork/java/codeconventions-150003.pdf)

## JavaScript

- [JavaScript Style Guide and Coding Conventions](https://www.w3schools.com/js/js_conventions.asp)
- [JavaScript Best Practices](https://www.w3schools.com/js/js_best_practices.asp)
- [JavaScript style guide, linter, and formatter](https://standardjs.com/) npm 工具

# 常用工具

## 编辑器

### Markdown

- 下载：[MarkdownPad](http://markdownpad.com/) is a full-featured Markdown editor for Windows.
- [Markdown 中文文档](https://markdown-zh.readthedocs.io/en/latest/)
- [Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)

### Typora

- [Typora](https://typora.io/) — a markdown editor, markdown reader.

## 代码托管、版本控制

### Git

- 下载：[Git](https://git-scm.com/)
- [Documentation](https://git-scm.com/doc)
- [Git Book](https://git-scm.com/book/en/v2)

### SSH key

- [Generating a new SSH key and adding it to the ssh-agent.](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Gitlab

- [GitLab](https://about.gitlab.com/) is a single application for the entire software development lifecycle.
- [GitLab Community Edition](https://gitlab.com/gitlab-org/gitlab-ce/)

### Github

- [GitHub](https://github.com/) is a development platform inspired by the way you work.

### Gerrit

- [Gerrit Code Review](https://www.gerritcodereview.com/)

## 软件构建工具

### Maven

- [Apache Maven](https://maven.apache.org/) is a software project management and comprehension tool

### Gradle

- [Gradle build tool](https://gradle.org/)

## Web服务器

### Nginx

- [Nginx](https://nginx.org/en/)

### Apache

- [The Apache HTTP Server](https://httpd.apache.org/)

### Tomcat

- [The Apache Tomcat® software](http://tomcat.apache.org/) is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies.

## Node.js

- [Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Node.js®](https://nodejs.org/zh-cn/) 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- [npm](https://www.npmjs.com/) Essential JavaScript development tools that help you go to market faster and build powerful applications using modern open source code.
- [npm 中文文档](https://www.npmjs.cn/)

## Docker

- [Docker](https://www.docker.com/) Debug your app, not your environment. Securely build, share and run any application, anywhere
- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/) is the world's easiest way to create, manage, and deliver your teams' container applications.

# 分享软件开发的方法心得

## 软件项目复杂性

采用迭代的方法

## 极限编程

### 结对编程

### TDD——测试驱动开发

1. 极端情况

2. 边界条件

### 代码重构

## 敏捷开发

1. 极限编程

2. scrum

## Devops

将运维与开发融合

## 代码规范的重要性

分布式开发

团队合作开发复杂软件

## 如何写代码注释

注释（comment）需要维护

编码文档化

## 积累自己的工具箱

丰富的工具箱展示解决问题的能力

用好运维工具事半功倍