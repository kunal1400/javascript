// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

var colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}

function toggleKeyValue(obj) {
    let newObj = {}
    for(key in obj) {
        newObj[obj[key]] = key
    }
    return newObj;
}

const a = toggleKeyValue(colors);
console.log(a)