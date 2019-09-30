const SHA256 = require('crypto-js/sha256');
const LevelDB = require('./LevelDB.js');
const Block = require('./Block.js');

class Blockchain {

  constructor() {
    this.bd = new LevelDB.LevelDB();
    this.generateGenesisBlock();
  }

  // Create a genesis block
  generateGenesisBlock() {
    let self = this;
    this.getBlockHeight()
      .then((height) => {
        if (height === 0) {
          console.log("generateGenesisBlock | Create genesis block");
          let block = new Block.Block("Genesis block")
          block.height = height;
          block.time = new Date().getTime().toString().slice(0, -3);
          block.hash = SHA256(JSON.stringify(block)).toString();
          self.bd.addLevelDBDataWithKey(0, JSON.stringify(block));
        }
      })
  }

  // Get block heights
  getBlockHeight() {
    return this.bd.getBlocksCount()
      .then((height) => {
        console.log("getBlockHeight | Successful, block height:", height);
        return height;
      }).catch((err) => {
        console.log("getBlockHeight | Err:", err);
        return err;
      });
  }

  // Add new block
  addBlock(block) {
    let self = this;
    return new Promise(function (resolve, reject) {
      self.getBlockHeight()
        .then(height => {
          if (height > 0) {
            self.getBlock(height - 1)
              .then(previousBlock => {
                block.height = height;
                block.time = new Date().getTime().toString().slice(0, -3);
                block.previousBlockHash = previousBlock.hash;
                block.hash = SHA256(JSON.stringify(block)).toString();
                self.bd.addLevelDBDataWithKey(height, JSON.stringify(block))
                  .then(block => {
                    console.log("addBlock | Successful, block height:", height);
                    resolve(height);
                  }).catch(error => {
                    reject(error);
                  });
              }).catch(error => {
                reject(error);
              });
          }
        }).catch(error => {
          reject(error);
        });
    });
  }

  // Get block by height
  getBlock(height) {
    return this.bd.getLevelDBData(height)
      .then((block) => {
        console.log("getBlock | Successful, info:", block);
        return JSON.parse(block);
      }).catch((err) => {
        console.log("getBlock | Err:", err);
        return err;
      })
  }

  // Validate if block is being tampered by block height
  validateBlock(height) {
    return this.getBlock(height)
      .then(block => {
        let blockHash = block.hash;
        block.hash = "";
        let validBlockHash = SHA256(JSON.stringify(block)).toString();
        block.hash = blockHash;

        if (validBlockHash === blockHash) {
          return { isValidBlock: true, block: block };
        } else {
          console.log('validateBlock | Failed, block# ' + height + ' invalid hash: ' + blockHash);
          return { isValidBlock: false, block: block };
        }
      });
  }

  // Validate blockchain
  validateChain() {
    let self = this;
    return this.getBlockHeight()
      .then((height) => {
        let errorLog = [];
        for (let j = 0; j < height; j++) {
          // Validate block
          let i = j;
          self.validateBlock(i)
            .then(({ isValidBlock, block }) => {
              if (!isValidBlock) {
                errorLog.push(i);
              }
              let blockHash = block.hash;
              // Compare blocks hash link
              if (i + 1 < height) {
                self.getBlock(i + 1)
                  .then((followingBlock) => {
                    let previousHash = followingBlock.previousBlockHash;
                    if (blockHash !== previousHash) {
                      errorLog.push(i);
                    }
                  });
              }
            })
        }

        setTimeout(function () {
          if (errorLog.length > 0) {
            console.log("validateChain | The chain is not valid:");
            errorLog.forEach(error => {
              console.log(error);
            });
          } else {
            console.log("validateChain | No errors found, The chain is Valid!");
          }
        }, 3000);
      });
  }
}

/**
 * Test codes below
 */
function testGenerateGenesisBlock() {
  blockchain.getBlock(0)
    .then(block => {
      console.log("testGenerateGenesisBlock | Successful, genesis block:", block);
    });
}

function testGetBlockHeight() {
  blockchain.getBlockHeight()
    .then((height) => {
      console.log("testGetBlockHeight | Successful, blockchain height:", height);
      return height;
    });
}

function testGetBlock(height) {
  blockchain.getBlock(height)
    .then(block => {
      console.log("testGetBlock | Successful, block:", block);
    });
}

function testAddBlock() {
  blockchain.addBlock(new Block.Block("test1"))
    .then(height => {
      console.log("testAddBlock | Successful, block height:", height);
    });
}

function testValidateBlock(height) {
  blockchain.validateBlock(height)
    .then(({ isValidBlock, block }) => {
      console.log("testValidateBlock | Block# " + height + " is " + (isValidBlock ? 'valid' : 'invalid'));
    });
}

function testValidateChain() {
  blockchain.validateChain();
}

// Create Tests Blocks, generate new block per 10 seconds
function theLoop(i) {
  setTimeout(function () {
    let blockTest = new Block.Block("Test Block - " + (i + 1));
    blockchain.addBlock(blockTest)
      .then((height) => {
        console.log('theLoop | block height:', height);
        i++;
        if (i < 10) theLoop(i);
      });
  }, 10 * 1000);
}

// Tampering a Block for the purpose of testing the validation methods
function tamperBlock(height) {
  blockchain.getBlock(height)
    .then((block) => {
      let tamperdBlock = block;
      tamperdBlock.body = "Tampered Block";
      blockchain.bd.addLevelDBDataWithKey(tamperdBlock.height, JSON.stringify(tamperdBlock))
        .then((block) => {
          console.log('tamperBlock | Tampered block', height);
        });
    });
}

/**
 * Test only one function once time
 * Comment all test statements when test the others *.js code
 */
var blockchain = new Blockchain();
setTimeout(function () {
  /**
   * theLoop for using add test data before testing
   * Genesis new block per 10 seconds
   */
  // theLoop(0);
  // testGenerateGenesisBlock();
  // testGetBlockHeight();
  // testGetBlock(5);
  // testAddBlock();

  // tamperBlock(5);
  // testValidateBlock(5);
  // testValidateChain();

}, 1000);

module.exports.Blockchain = Blockchain;
