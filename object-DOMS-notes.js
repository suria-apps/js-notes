/// Objects

let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        console.log(this.name + ' is ' + this.age + ' not ' + realAge)
    }
};

person.name = 'Jose'
person['name'] = 'Jan'

console.log(person.name)

// Methods

person.showInfo(23)

// Passing by reference, it changes the objects properties, sub-properties and methods unlike passing a normal variable.
// When passing an object it has free reins to modify its values 

function incrementAge(person){
    person.age++;
}

incrementAge( person )
console.log(person.age)

// Built in objects
// Math objects and Date objects are examples of built in objects, you can google this


//
