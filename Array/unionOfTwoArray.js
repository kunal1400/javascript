/**
 * Write a JavaScript program to compute the union of two arrays.
 */
function arrayUnion(a1, a2) {
    const op = []
    for(i=0; i<a1.length; i++) {
        if(op.indexOf(a1[i]) === -1) {
            op.push(a1[i])
        }
    }
    for(i=0; i<a2.length; i++) {
        if(op.indexOf(a2[i]) === -1) {
            op.push(a2[i])
        }
    }
    return op.sort();
}

let op = arrayUnion([1, 2, 3], [100, 2, 1, 10]);
console.log(op)