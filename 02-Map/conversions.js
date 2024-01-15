
// Object.entries returns an array of key/value pairs
const fruitsMap = new Map(Object.entries({
    name: 'apple',
    color: 'red'
}));

// Object.fromEntries convert Map to object without entries method
console.log(Object.fromEntries(fruitsMap));

const vegetableMap = new Map();
vegetableMap.set('a', 1);
vegetableMap.set('b', 2);
vegetableMap.set('c', 3);

// Object.fromEntries convert Map to object with entries method
const vegetableObj = Object.fromEntries(vegetableMap.entries());
console.log(vegetableObj)