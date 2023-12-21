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
