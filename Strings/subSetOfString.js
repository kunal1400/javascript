// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function stringSubSet(string) {
    let s = [];
    for(i=0; i<string.length; i++) {
        let x = string[i];
        s.push(x);
        for(j=i+1; j<string.length; j++) {
                x += string[j]
                s.push(x)
        }   
    }
    return s;
}

// String.prototype.subString = function() {
//     let subset = [];
//     for(i=0; i<this.length; i++) {
//         for(j=i+1; j<this.length; j++){
//             subset.push(this.slice(i,j))
//         }
//     }
//     return subset;
// }

let op = stringSubSet("dog");
    console.log(op)