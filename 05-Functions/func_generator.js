/**
 * Generators - returns multiple values, one after another, on-demand
 */
function* generateSequence() {
    for(let i=1; i<5; i++) {
        yield i;
    }
    // yield 10;
    // yield 11;
    // return 12;
}
let sequence = generateSequence();
// console.log("Sequence ==>>", sequence) //Object [Generator] {}
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());

for(let k of sequence) {
    console.log(k) // only 10&11 will console not 12 because it is not yield
}

console.log([0, ...generateSequence()])