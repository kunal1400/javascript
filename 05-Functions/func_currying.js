/**
 * Currying - function transformation from f(a, b, c) to f(a)(b)(c)
 * The currying requires the function to have a fixed number of arguments.
 */
function add(a) {
    console.log(arguments)
    return function(b) {
        return a+b;
    }
}

console.log(add(2)(3));