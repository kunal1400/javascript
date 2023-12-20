// Write a JavaScript function to print all the methods in a JavaScript object.

function ObjectAllMethods(obj) {
    const allProperties = Object.getOwnPropertyNames(obj).filter((item) =>{
        return typeof obj[item] === "function";
    })
    console.log(allProperties);
}

const sampleObject = {
    name: "kunal"
}

const a = ObjectAllMethods(Object)