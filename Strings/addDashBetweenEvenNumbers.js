/**
 * Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
 * For example if you accept 025468 the output should be 0-254-6-8. 
 */
function evenDash(input) {
    let nString = ""
    for(i=0; i< input.length; i++) {
        if(input[i] % 2 == 0 && input[i+1] % 2 == 0) {
            nString += input[i] + "-";
        } else {
            nString += input[i];
        }
    }
    return nString;
}

let op = evenDash("0254689")
console.log(op)