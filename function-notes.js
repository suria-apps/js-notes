/// Functions

function showMessage() {
    console.log('hello');
}
showMessage();

/// Funtion expression

let fn = function loggingFunction (){ 
    console.log('function expression')
}

fn();

// Passing information to functions

function passingParameter(parameter){
    console.log(`This is your parameter -> ${parameter}`);
}
passingParameter('Hello');

// Function Return Values

function secretCode(value) {
    code = value * 42;
    return code;
}

console.log(secretCode(43));

// Function Scope

function getSecretCode(value) {
    code = value * 42;
    return code;
}

// console.log(code); <- This will give an error as it's in the function scope

// Nested functions

let key = 4;

function mutiplyValue(value) {

    let keyGenerator = function() {
        let key = 6;
        console.log('in keyGenerator:', key)
        return key;
    }

    let code1 = value * keyGenerator();
    console.log('In code1:', key)
    return code1
}

console.log(mutiplyValue(4))