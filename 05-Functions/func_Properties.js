// In JavaScript, functions are objects.
/**
 * 1. func.name that returns the name of the function
 */

// Normal function
function sayHi() {
    alert("Hi");
}

// Function Expression
let sayHi = function() {
    alert("Hi");
};
alert(sayHi.name); // sayHi (there's a name!)

// object method
let user = {
    sayHi() {},
    sayBye: function() {}
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// Nameless or anonymous functions
let arr = [function() {}];
alert( arr[0].name ); // <empty string>

/**
 * 2. func.length that returns the number of arguments
 */
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/**
 * 3. Custom properties - used code block just to remove name conflicts
 */
{
    function makeCounter() {
        // instead of: let count = 0
        // Point to note that function is treated a object
        function counter() {
            return counter.count++;
        };
        counter.count = 0;
        return counter;
    }
    
    // The count is now stored in the function directly, not in its outer Lexical Environment.
    let counter = makeCounter();
    alert( counter() ); // 0
    alert( counter() ); // 1
}


/**
 * 4. Named Function Expression(NFE)
 */
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // Now all fine
    }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)