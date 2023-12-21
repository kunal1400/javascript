/**
 * Binding a function with a number instead of an object
 */
var func = function() {
    console.log(this)
}.bind(1)

func(); // [Number: 1]