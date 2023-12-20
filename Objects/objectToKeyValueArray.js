// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

var colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}

// Object.prototype.getKeyValueArray = function() {
//     let kvp = [];
//     // This console only returned [ 'red', 'green', 'white' ]
//     // console.log(Object.getOwnPropertyNames(this))
//    // in is also iteraing the methos of the object
//     for(key in this) {
//             kvp.push(key);
//             kvp.push(this[key]);
//     }
//     return kvp;
// }

Object.prototype.getKeyValueArray = function() {
    let kvp = [];
    // This console only returned [ 'red', 'green', 'white' ]
    // console.log(Object.getOwnPropertyNames(this))
    for(key of Object.keys(this)) {
        kvp.push(key);
        kvp.push(this[key]);
    }
    return kvp;
}

const kvp = colors.getKeyValueArray();
console.log(kvp);