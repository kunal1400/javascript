/**
 * Write a JavaScript function that reverses a number.
 */
function reverse(n) {
    let ns = n + "";
    return ns.split("").reverse().join("")
    
}
let op = reverse(123);
console.log(op);

/**
 * function that checks whether a passed string is a palindrome or not
 */
const isPelindrome = (str) => reverse(str) === str ? console.log("Pelindrome") : console.log("Not Pelindrome");
    