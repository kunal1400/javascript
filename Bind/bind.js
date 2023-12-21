// Object literal doesn't create new scope
var car = {
    carName: "i10",
    year: 2020
}

function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}

console.log(info.bind(car)("k")); // Owner is k and car model is i10 and manufactured in 2020


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
