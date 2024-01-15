/**
 * Methods and properties are:
 * 
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the element (the key/value pair) by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 * 
 */


/**
 * Map - Store key of any type
 * It returns map so chaining is possible
 **/
let map = new Map();
map.set('1', "hello")
map.set(1, "hello")
map.set(true, "hello")
.set(NaN, "Chalega")
.set(undefined, "Chalega")
.set(function(){}, "hello")

var john = { name: "John" };

// Setting object as key in Map
map.set(john, 123)

// Setting object as in JSON
var anyObj = {[john]: 123}


/**
 * Type of map is object
 * Map(3) {'1' =>'hello', 1 =>'hello', true =>'hello'}
 **/
console.log(typeof map, map);

console.log(map.size); //
console.log(map.get(true)); // hello
console.log(map.get(john)); // 123
console.log(anyObj, anyObj[john]); // { '[object Object]': 123 } 123

