/**
 * CLOSURES: All functions in JavaScript are closures
 */

// Nested functions - A function is called “nested” when it is created inside another function.

// a nested function can be returned
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
