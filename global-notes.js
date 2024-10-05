// Global Scope

const app = {
    value: 123,
    name: 'Jan',
    product: 'Shoes',
};

function showInformation(){
    console.log(app.name),
    console.log(app.value),
    console.log(app.product)
};

showInformation();

// Function scope, can only be used inside the function

function showProductID() {
    let productID = 1234;
    console.log(productID)
};

showProductID();

// Undeclared Variables and Sctrict Mode

"use strict";

test = 123;

console.log(test)