/**
 * Writing very large and very small numbers in JS
 * JS ignore _ between digits
 **/
let a = 1000000000;
let b = 1_000_000_000;
let c = 1e9;
let d = 7.3e9;
let e = 1e-6;
console.log(a, b, c, d, e);

/**
 * tostring()
 **/
 let num = 255;
 console.log(num.toString()) // 255 default base 10
 console.log(num.toString(2)) // 2 is minimum base
 console.log(num.toString(36)) // 36 is maximum base
 console.log(123456..toString(36)) // two dots method
 console.log((123456).toString(36)) // brackets dots method