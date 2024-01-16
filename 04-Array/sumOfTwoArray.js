/**
 * There are two arrays with individual values. 
 * Write a JavaScript program to compute the sum of each individual index value in the given array.
 */
var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

const arr = array1 > array2 ? array1 : array2;
const sums = []
for(i=0; i<arr.length; i++) {
    const e1 = array1[i] ? array1[i] : 0;
    const e2 = array2[i] ? array2[i] : 0;
    sums.push(e1 + e2);
}
console.log(sums)
