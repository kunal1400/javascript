/**
 * Write a JavaScript function to check whether an `input` is an array or not.
 **/
Array.isArray([1, 2, 3]); // true

/**
 * Write a JavaScript function to clone an array.
 **/
const inputArray = [1, 2, [4, 0, [8,7,6,5,4]]]
const cloneArray1 = inputArray.slice(0);
const cloneArray2 = inputArray.concat([]);
const cloneArray3 = [...inputArray];
const cloneArray4 = inputArray.filter(() => true);
const cloneArray5 = Array.from(inputArray);
const cloneArray6 = inputArray.reduce((acc, cur) => acc.concat(cur), []);
const cloneArray7 = inputArray.map(x => x);
const cloneArray8 = JSON.parse(JSON.stringify(inputArray));
const cloneArray9 = inputArray.map(x => Object.assign({}, x));

/**
 * Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
 **/
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
console.log([...new Set(nums)]);

/**
 * Write a JavaScript function that merges two arrays and removes all duplicate elements.
 **/
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

const merge_array = (a, b)  => [...new Set([...a, ...b])]

let op = merge_array(array1, array2);
console.log(op);

/**
 * Write a JavaScript function to retrieve the value of a given property from all elements in an array.
 * Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * Expected result : [15, -22, 47]
 */
[NaN, 0, 15, false, -22, '',undefined, 47, null].filter((item) => Number(item))

/**
 * Write a JavaScript script to empty an array while keeping the original
 **/
var arr = [1, 3, 6, 3, -5];
console.log(arr); // [ 1, 3, 6, 3, -5 ]
arr.length = 0;
console.log(arr); // []