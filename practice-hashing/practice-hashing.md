# Let's do some Coding Practice

In the previous concept, you learned about Hashing. Now, it is time to see how to code and get the hash using Javascript and Node.js.



## Steps to follow

> | **Step 1** | Verify `crypto-js` module is installed in your project |
> | ---------- | ------------------------------------------------------ |
> | **Step 2** | Import from `crypto-js` module the sha265 library      |
> | **Step 3** | Add the code to the `generateHash` function            |

Each step you’ll take to complete this exercise is called out in comments throughout the code. You can find more details and guidance about each of these steps in the text provided below the code.

Let’s get started!



## Step 1. Verify `crypto-js` module is installed in your project

It is always helpful to verify that all the module dependencies for the project are already installed. Navigate to the workspace at the bottom of this page and open your Project folder.

Localize the `package.json` file. This is a `json` file that contains the configuration for your Node.js project. In this file, you can check the dependencies by adding:

```
"dependencies": {
    "crypto-js": "^3.1.9-1"
  }
```

**Note**: Checkout [this documentation](https://www.npmjs.com/package/crypto-js) to learn more about `crypto-js` modules and how to install them.

Check if everything looks ok and move forward to the next Step.



## Step 2. Import from `crypto-js` module the sha265 library

Module libraries allow you to use code developed by other people in your own project.

Go to the `crypto-js` [documentation](https://www.npmjs.com/package/crypto-js#usage) and find the piece of code to import the module into your file.



## Step 3. Add the code to the `generateHash` function

The `generateHash` function will take an object as its parameter, and it will allow us to get a hash from the object we pass into it.

To create this function, use the `SHA256 ()` function from `crypto-js`. The `SHA256 ()` function will receive an object as its parameter and return a hash of that object. The returned value will be logged in the console.

To test your program, just open a new **Terminal** and write: `node hashing.js`. Make sure you're in the Project folder (`cd Project`).

**Tip**: It's always a good option to use `JSON.stringify(obj)`to convert an object to `String` and then use it to generate the hash.

### How to run your application?

Open the terminal in the "+" symbol in the Workspace, now you have open a terminal. To be able to execute your code the first thing is to move to the project folder, type in your terminal `cd Project` now you are positioning in the **Project** folder. To run your application type in your terminal the command `node hashing.js`.



## Workspace

**Note**: If you want to work locally on your computer, you can copy the boilerplate code in root directory.

