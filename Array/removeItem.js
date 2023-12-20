/**
 * Write a JavaScript function to remove a specific element from an array.
 */
function removeElementByValue(arr, value) {
    
    const index = arr.indexOf(value);
    if(index !== -1) {
        arr.splice(index, 1)
    }
    return arr
}

let op = removeElementByValue([2, 5, 9, 6], 54);
console.log(op);

/**
 * One line solution
 */
const newItems = arr.filter((item) => item !== value);
