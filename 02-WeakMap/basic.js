/**
 * WeakMap has only the following methods:
 * 
 * weakMap.set(key, value)
 * weakMap.get(key)
 * weakMap.delete(key)
 * weakMap.has(key)
 * 
 * size & clear not present
 */

/**
 * WeakMap - If key value is changed then it will be undefined
 * It will only accept primitive as key
 * Useful for cleanup
 **/
// let john = ["kunal"]
let john = {name: "kunal"}
const johnWeak = new WeakMap();

johnWeak.set(john, "123");
console.log(johnWeak.get(john)) // 123

john = null
console.log(johnWeak.get(john)) // undefined

john = {name: "Malviya"}
console.log(johnWeak.get(john)) // undefined