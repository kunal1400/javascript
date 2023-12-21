/**
 * Write a JavaScript program to find the most frequent item in an array.
 */

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Array.prototype.mostFrequent = function() {
    let count = 0;
    let mostCount = 0;
    let element = null;
    for(i=0; i<this.length; i++) {
        for(j=i; j<this.length; j++) {
            if(arr1[i] == arr1[j]) count++;
            if(mostCount < count) {
                mostCount = count;
                element = this[i];
            }
        }
        count = 0;
    }
    return element;
}

let op = arr1.mostFrequent()
console.log(op)

/**
 * Using object
 */
Array.prototype.findDuplicates = function() {
    let obj = {}
    for(i=0; i<this.length; i++) {
        if( obj.hasOwnProperty(this[i]) ) {
            obj[this[i]] += 1;
        } else {
            obj[this[i]] = 1;
        }
    }
    let result = []
    for(key in obj) {
        if(obj[key] > 1) {
            result.push(key)
        }
    }
    return result
}

let op1 = arr.findDuplicates();
console.log(op1)

/**
 * JavaScript program to filter out non-unique values in an array.
 * const obj = [1, 2, 2, 3, 4, 4, 5]
 * [1,3,5]
 */
const uniqueNums = nums.filter(i => nums.indexOf(i) === nums.lastIndexOf(i));