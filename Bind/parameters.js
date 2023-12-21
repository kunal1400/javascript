// Object literal doesn't create new scope
var car = {
    carName: "i10",
    year: 2020,
    info: function(ownerName) {
        return `Owner is ${ownerName} and car model is ${this.carName} and manufactured in ${this.year}`
    }
}


// Passing parameter after getting a function
var car1Detail = car.info.bind({
    carName: "i20",
    year: 2022
});
console.log(car1Detail("kunal"))

// Passing parameter after getting a function
var car2Detail = car.info.bind({
    carName: "venue",
    year: 2020
}, "kunal");
console.log(car2Detail())