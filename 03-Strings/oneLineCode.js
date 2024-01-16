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


// Accessing character by index
let str = "Hello world";
console.log("+ve char: ", str.at(4), str.charAt(4));
console.log("-ve char: ", str.at(-1), str.charAt(-1));

// Strings are immutable
str[0] = "C";
console.log("Mutating: ", str);

// Changing case
console.log("toUpperCase: ", str.toUpperCase());
console.log("toLowerCase: ", str.toLowerCase());

// finding substring
console.log("Includes: ", str.includes("ll"));

// Extracting substring slice(start, end)
console.log("Substring slice: ", str.slice(1,4));
console.log("Substring slice: ", str.slice(4));
console.log("Substring slice: ", str.slice(-4,-1));

// Iteration of string
for(let c of str) {
    console.log(c)
}