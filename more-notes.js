// If Statements

if (5 === 5) {
    console.log('Yes')
}

if (5 > 10){
    console.log('False')
}

if (5 >=5) {
    console.log('Yes')
}

let state = 'FL';
let taxPercent = 0;

if (state === 'FL') {
    taxPercent = 7;
}

if (state !== 'FL') {
    taxPercent = 0;
}

console.log(taxPercent)

// If Else Statements

if (state === 'FL') {
    taxPercent = 8
}
else {
    taxPercent = 0
}
console.log(taxPercent)

/// The Ternary Operator 
/// Used the following way: (condition) ? true-statement : false-statement

let price = 11;
let message = (price > 10) ? 'expensive' : 'cheap';
console.log(message);

/// Code block variables using let

if (true) {
    let temp = 'im temporary';
    console.log(temp);
}
// console.log(temp); <- this causes an error

// Looping with for()

for (let i = 0; i < 3; i++) {
    console.log(i)
}

// While loops and do while loops

let i = 1;

while (i < 5) {
    console.log(i);
    i++;
}

let itwo = -4;

do {
    console.log(itwo);
    itwo--;
} while (itwo > 0);