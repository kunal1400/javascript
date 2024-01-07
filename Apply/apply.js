/**
 * Info function has only one parameter and in code this operator is present
 */
function info (ownerName) {
    return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
}

console.log(info.apply({
    carName: "i10",
    year: 2020
}, ["k"])); // Owner is k and car model is i10 and manufactured in 2020

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
