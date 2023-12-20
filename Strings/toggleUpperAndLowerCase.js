/**
 * Write a JavaScript program that accepts a string as input and swaps the case of each character. 
 * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

String.prototype.swapCharacter = function() {
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    let result = []
    for(i=0; i<this.length; i++) {
        if(upperchars.indexOf(this[i]) !== -1) {
            result.push(this[i].toLowerCase())
        }
        else if(lowerchars.indexOf(this[i]) !== -1) {
            result.push(this[i].toUpperCase())
        }
        else {
            result.push(this[i])
        }
    }
    return result.join("");
}

const op = 'The Quick Brown Fox'.swapCharacter();
console.log(op)