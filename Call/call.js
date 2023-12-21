// Object literal doesn't create new scope
var car = {
    carName: "i10",
    year: 2020
}

function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}

console.log(info.call(car, "k")); // Owner is k and car model is i10 and manufactured in 2020

/**
 * 11888 us
 */
var updateZipCode = function (newZip, country) {
    console.log(newZip + ' ' + country);
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
