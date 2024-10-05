// Declaring a variable
let total = 123.23;
let product = 'Hiking Boots';
let discounted = true;

// or 

let total1 = 123.23,
    product1 = 'Hiking Boots',
    discounted1 = true;

// or

let price;

price = 56.99

price = 45.77

const finalPrice = 34.55;

console.log(total, product, discounted)
console.log(total1, product1, discounted1)
console.log(price, finalPrice)

// Validating what type of data it is

console.log(typeof total, typeof product)

// Numbers

let numPrice = 12
console.log(++numPrice)
let decimalPrice = 1.1 + 1.3;

// Strings

let message = 'strings \'yay\'';
let myName = 'JAN';
myName = myName.toLowerCase();
let call = `Hello ${myName}`;
console.log(message, call + myName)

// Conversions

let amountString = Number.parseFloat('123.23');
let amountNumber = 123.23.toString();
console.log(amountNumber, amountString)

let saved = true;
saved = !saved
console.log(saved)

// Null best practice to wipe data from a variable

let nullNumber = 10;
nullNumber = null;
console.log(nullNumber)

// Objects 

let thisPerson = {
    firstName: 'John',
    lastName: 'Adams'
    };
console.log(thisPerson.firstName, thisPerson.lastName)