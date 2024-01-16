// Write a JavaScript program to sort an array of JavaScript objects.

var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

// Navtive function solution
function sortArrayOfObject(arr, objKey) {
    const sortedIds = arr.map(item => item[objKey]).sort().reverse();
    const sortedArray = [];
    for(i=0; i<sortedIds.length; i++) {
        let libraryID = sortedIds[i];
        const itemFound = arr.find(item => item[objKey] == libraryID);
        sortedArray.push(itemFound);
    }
    return sortedArray;
}
let op = sortArrayOfObject(library, "libraryID");
console.log(op);


// Prototype solution
Array.prototype.sortArrayOfObject = sortArrayOfObject;
function sortArrayOfObject(objKey) {
    const sortedIds = this.map(item => item[objKey]).sort().reverse();
    const sortedArray = [];
    for(i=0; i<sortedIds.length; i++) {
        let libraryID = sortedIds[i];
        const itemFound = this.find(item => item[objKey] == libraryID);
        sortedArray.push(itemFound);
    }
    return sortedArray;
}
library.sortArrayOfObject("libraryID");
console.log(library)