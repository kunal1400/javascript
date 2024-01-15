/**
 * Info function has only one parameter and in code this operator is present
 */
function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}
console.log(info.call({
    carName: "i10",
    year: 2020
}, "k")); // Owner is k and car model is i10 and manufactured in 2020

/**
 * Output { zip: '11787' } 11888 us
 */
var updateZipCode = function (newZip, country) {
    console.log(this, newZip + ' ' + country);
};
var zipCode = {
    zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us');

/**
 * { checkZipcode: [Function: checkZipcode] }
 * { checkZipcode: [Function: checkZipcode] }
 */
"use strict";
var zipcode = {
    checkZipcode : function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
}
zipcode.checkZipcode();


/**
 * Here second parameter is not array but still it assign value to a, b, c.
 * Output:
 * 1 [Number: 1]
 * 2
 * 3
 * 4
 */
function checkFun(a, b, c){
    console.log(JSON.stringify(this), this);
    console.log(a);
    console.log(b);
    console.log(c);
}

checkFun.call(1, 2, 3, 4);

/**
 * Output:
 * 1 [Number: 1]
 * [ 2, 3, 4 ]
 * undefined
 * undefined
 */
function checkFun(a, b, c){
    console.log(JSON.stringify(this), this);
    console.log(a);
    console.log(b);
    console.log(c);
}

checkFun.call(1,[2,3,4]);