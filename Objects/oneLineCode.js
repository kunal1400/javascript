// Write a JavaScript function to check whether an object contains a given property.
// Point to see that even hasOwnProperty is not in colors object, it is still returning true.

var colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}.hasOwnProperty("red");
console.log(colors) // true