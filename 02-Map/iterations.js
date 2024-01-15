/**
 * Iterating over map
 **/
let vegetables = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    [NaN, 50]
]);

for(let i of vegetables.keys()) {
    console.log(i)
}

for(let i of vegetables.values()) {
    console.log(i)
}

for(let i of vegetables.entries()) {
    console.log(i)
}

/**
 * Iterating over object
 **/
let fruits = {
    name: 'apple',
    color: 'red'
}

for(let i of Object.keys(fruits)) {
    console.log("Object keys", i)
}

for(let i of Object.values(fruits)) {
    console.log("Object values", i)
}

for(let i of Object.entries(fruits)) {
    console.log("Object entries", i)
}