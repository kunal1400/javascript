/**
 * Count the number of occurrences of the specified letter within the string.
 **/
const countOccurence = (str, f) => {
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str.charAt(i) === f) {
            count++;
        }
    }
    return count;
}
let op = countOccurence('w3resource.com', 'o');
console.log(op)