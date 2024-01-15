/**
 * Bind creates new function with this context, Its kind of borrowing a function from object literal
 */


/**
 * Info function has only one parameter and in code this operator is present
 */
function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}
console.log(info.bind({
    carName: "i10",
    year: 2020
})("k")); // Owner is k and car model is i10 and manufactured in 2020


/**
 * { checkZipcode: [Function: checkZipcode] }
 * { checkZipcode: [Function: checkZipcode] }
 */
"use strict";
var zipcode = {
    checkZipcode : function() {
        console.log(this);
        var updateZipCode = function() {
            console.log(this);
        }.bind(this);
        updateZipCode();
    }
}
zipcode.checkZipcode();

/**
 * Jack
 * Daniel
 */
"use strict";
var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

var name1 = person.prop.getName.bind(person);
console.log(name1());

var  name2 = person.prop.getName();
console.log(name2);

/**
 * Binding a function with a number instead of an object
 */
var func = function() {
    console.log(this)
}.bind(1)

func(); // [Number: 1]