/**
 * Reduce
 **/
let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, item) => {
    return acc + item;
}, 0);

console.log(result)