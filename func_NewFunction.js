/**
 * Return a function created by using string
 * we can receive a new function from a server and then execute it:
 **/
let sumOfTwoNumbers = new Function("a","b", "return a + b");
let sumOfAnyNumbers = new Function("a", "return a");
console.log(sumOfTwoNumbers(2,3));
console.log(sumOfAnyNumbers([2,3]));

/**
 * It can access to current lexical environment not global one
 **/
function getFunc() {
  let value = "test";
  let func = new Function('alert(value)');
  return func;
}
let alert = getFunc();
console.log(alert())