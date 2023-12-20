/**
 * Write a JavaScript function to check whether an object contains a given property.
 * Point to see that even hasOwnProperty is not in colors object, it is still returning true.
 */
var colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}.hasOwnProperty("red");
console.log(colors) // true

/**
 * Write a JavaScript program to list the properties of a JavaScript object.
 */
Object.keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}).join(",")

/**
 * Write a JavaScript function to print all the methods in a JavaScript object.
 */
function ObjectAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter((item) =>{
        return typeof obj[item] === "function";
    })
}

const a = ObjectAllMethods(Math)