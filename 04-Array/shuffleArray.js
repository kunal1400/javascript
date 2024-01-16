/**
 * Write a JavaScript program to shuffle an array.
 */
Array.prototype.shuffle = function() {
    const newArray = []
    for(i=0; i<this.length; i++) {
        const randomIndex = Math.floor(Math.random() * this.length);
        newArray.push(this[randomIndex]);
    }
    return newArray;
}

const op = [2,3,3,4].shuffle();
console.log(op)