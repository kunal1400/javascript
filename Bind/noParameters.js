
// Object literal doesn't create new scope
var car = {
    carName: "i10",
    year: 2020,
    info: function() {
        return `Name is ${this.carName} and manufactured in ${this.year}`
    },
    // Arrow function doesn't have their own this context
    infoNew: () => {
        return `Name is ${this.carName} and manufactured in ${this.year}`
    },
}
console.log("1. ", car.info()); // 1.  Name is i10 and manufactured in 2020
console.log("2. ", car.infoNew()); // 2.  Name is undefined and manufactured in undefined

/**
 * Bind creates new function with this context, Its kind of borrowing a function from object literal
 */
var carDetail = car.info.bind({
    carName: "i20",
    year: 2022
});
console.log("3. ", carDetail())