// Object literal doesn't create new scope
var car = {
    carName: "i10",
    year: 2020
}

function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}

console.log(info.apply(car, ["k"])); // Owner is k and car model is i10 and manufactured in 2020

/**
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

checkFun.call(1,2,3,4);

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

/**
 * 11888 us
 */
var updateZipCode = function (newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = {
    zip: '11787'
};
updateZipCode.apply(zipCode, ['11888', 'us']);
