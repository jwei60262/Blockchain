# 动手过程步骤说明

1. 安装markdown，用于编辑项目readme文档。
2. 本机安装VMware Workstation Pro，创建centOS虚拟机，在虚拟机中运行Docker环境，用Docker部署Gitlab CE；参考 http://www.fall-like-snow.com/tales/2019_07_13
3. 在本机安装Git，用Git工具生成ssh key，参考 [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)；
4. 在Gitlab CE上设置ssh项，设置成功后就可以使用ssh协议拉代码；
5. 在根目录下找到 practice-hashing 项目，在虚拟机上创建 Gitlab 代码库，将此项目传入Gitlab 代码库；
6. practice-hashing 是一个不完整的项目，完成此项目，将代码提交至 Gitlab 代码库；
7. 在根目录下找到 practice-block 项目，在虚拟机上创建 gitlab 代码库，将此项目传入 Gitlab 代码库；
8. practice-block 是一个不完整的项目，完成此项目，将代码提交至 Gitlab 代码库；
9. 在根目录下找到 private-blockchain 项目，在虚拟机上创建 gitlab 代码库，将此项目传入 Gitlab 代码库；
10. private-blockchain 是一个不完整的项目，完成此项目，将代码提交至 Gitlab 代码库；
11. 在centOS上部署BCOS节点，编写智能合约，部署到链上，写java DAPP调用合约。

