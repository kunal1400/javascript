/**
 * Custom error
 **/
class CustomError {
    constructor(message) {
        this.message = message;
        this.name = "Custom Error";
    }
}

try {
    throw new CustomError("Pata nhi kon sa nasha karta h");
    // throw "Any string can even break";
} catch(error) {
    console.log(error.message);
    console.log(error instanceof CustomError);
}