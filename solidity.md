# Solidity

------

A brief Solidity review provided . For full developer documentation, review the following: https://solidity.readthedocs.io/en/v0.4.24/

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



[![img](https://s3.cn-north-1.amazonaws.com.cn/u-img/220a97a2-5c33-4084-a5ed-4837e2091c7c)](https://classroom.udacity.com/nanodegrees/nd1309/parts/2e478a90-310b-4703-aa20-efec12eb258c/modules/f615d662-ae4c-4634-ba85-9804b3a7c159/lessons/d2f7eb7c-0368-4f3f-9288-39069990a0e3/concepts/f74a248c-2cb0-4750-a851-89d1b39eb94f#)



# Solidity review

This page list common Solidity syntax. It's geared for a quick review as your working through the development of your smart contracts. For more depth, please review Solidity developer documentation: https://solidity.readthedocs.io/en/v0.4.24/

## Solidity versioning

Solidity source files can contain any number of contract definitions. Each Solidity file also includes a thing called "Version Pragma". It is used to prevent the code from being compiled with future compiler versions that might introduce incompatible changes. Most of the time, the definition looks like this:

```
pragma solidity ^0.4.20;
```

In the example above 0.4.20 is the desired compiler version.

## Contracts

Now, let's put it into code.

Contracts in Solidity are similar to classes in object-oriented languages. They contain data in variables and functions that can modify these variables.

They are defined by using a contract keyword, followed by the contract name and two brackets { } which will later enclose contract variables and functions. For example:

```
pragma solidity ^0.4.20;

contract ParentObject {



}
```

## Variables

Wow! You've successfully created the frame of your contract! Now, it's time to start learning about how your contract will work. We'll start by finding out what type of variables there are.

### Variable types

State variables are used to store information on the blockchain. They can also be manipulated by the functions within the contract.

Solidity is a statically typed programming language, meaning that each variable must have its type specified. Examples of the main data types:

### Booleans

Can only have one of the two following values: true or false. The keyword for booleans is bool.

### Integers

Integers can be split into main groups: regular integers (can store both positive and negative values) and unsigned integers (can only store values that are 0 or higher)

Regular integer has keywords from int8 to int256. The number signifies the maximum number of bits it can store (thus limiting the maximum value), and it can be any number between 8 and 256 as long as it incremented in steps of 8 (e.g., int16 is valid but int17is not). The int keyword alone would be understood as int256.

Unsigned integers follow the same logic. The only difference is the keyword which ranges from uint8 to uint256. Keyword uintcan also be used instead of uint256.

### Addresses

The address keyword is used to hold Ethereum addresses. If you're planning to store an Ethereum address, you will need to use the address keyword.

### Strings

The string variable is used to store text information. If you need to store a variable that should contain text information use the string keyword.

### Variable definition

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

## Arithmetics

Now that you learned to define the variables for your contract, it's time to go through some basic math commands that will be useful later for defining your smart contract code.

### Arithmetic operations

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

## Structs

As we've learned the basics for defining variables, now we will learn to create the structure that defines your variables properties: name, type, coordinates (X and Y), and so forth.

### Structs

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

## Mappings

Now that you've defined your variables, we'll learn how to create a variable that will later map your variable to the blockchain - a special list where all other variables are stored.

Mappings allow the programmer to create key-value pairs and store them as a list. Concepts like this also are known as hash tables.

Mappings are defined like this:

mapping(key_type => key_value) mappingName;

key_type should be replaced by a data type. Two commonly used variable types for mapping keys that we already know about are address and uint. It is important to note that not every data type can be used as a key. For instance, structs and other mappings cannot be used as keys.

Similarly, key_value should be replaced by the value type. Unlike with keys, Solidity does not limit the data type for values. It can be anything, including structs and other mappings.

A real-world example of a mapping:

mapping(address => uint256) balance;

This mapping could hold the bank account balance in uint256 for the given address.