/**
 * generates a string ID (specified length) of random characters.
 **/
const unique = (l) => {
    const sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = "";
    for(i=0; i<l; i++) {
         str += sample.charAt(Math.floor(Math.random() * sample.length));
    }
    return str;
}
let op = unique(4);
console.log(op)