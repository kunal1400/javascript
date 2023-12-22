/**
 * Returns a string that has letters in alphabetical order.
 * Example string: 'webmaster'
 * Expected Output: 'abeemrstw'
 **/
const alphabeticalOrder = (ns) => ns.split("").sort().join("");
let op1 = alphabeticalOrder("webmaster");
console.log(op1);

/**
 * converts the first letter of each word into upper case.
 * Example string: 'the quick brown fox'
 * Expected Output: The Quick Brown Fox'
 **/
const upperCaseFirstWord = (ns) => ns.split(" ").map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" ");
let op2 = upperCaseFirstWord('the quick brown fox');
console.log(op2);