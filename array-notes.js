// Creating and initializing an array

let values = [1,2,3];

let values2 = Array.of(1,2,3); // Initialize and create an array

// Accessing array elements

console.log(Array.isArray(values))
console.log(values[0])

// Manipulating Arrays

values.push(4)

console.log(values)

let last = values.pop();

console.log(values, last)

let first = values.shift()

console.log(values, first)

values.unshift(1)

console.log(values)

// Slice and splice

let newValues = values.slice(1,2)

console.log(newValues)

values.splice(1,1)

console.log(values)

values.splice(1,0,4)

console.log(values)

// Looping and searching an array'

const loopArray = Array.of('a', 'b', 'c', 'd', 'e')

console.log( loopArray.indexOf('b'))

const set = loopArray.filter(function(item){
    console.log('item: ', item);
    return item > 'b'
})

console.log(set)

const found = loopArray.find(function(item){
    if (item === 'c'){
        return item
    }
})

console.log(found)

const all = loopArray.forEach(function(item){
    console.log(item)
})