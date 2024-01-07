// try-catch-finally

function division(a, b) {
    if(typeof a !== 'number' || typeof a !== 'number') {
        throw new Error("a/b is not a number");
    } 
    if(b == 0) {
        throw new Error("b cannot be 0");
    }
    return a/b;
}

try {
    const op = division(10, 0);
    console.log(op)    
} catch(error) {
    console.log(error.message)
} finally {
    console.log("clean up")
}


/**
 * try catch
 **/
let message = "Throwing an error forcefully";
let error = new Error(message);
let syntaxError = new SyntaxError(message);
let referenceError = new ReferenceError(message);


try {
    throw error;
} catch(error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    // It will run always
  console.log( 'finally' );
}