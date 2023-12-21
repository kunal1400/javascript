/**
 * Write a JavaScript program to convert a given string's length to bytes.
 */
const byteSize = (str) => new Blob([str])
console.log(byteSize("arra1")); // Blob { size: 5, type: '' }
