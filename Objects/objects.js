//Write a JavaScript program to list the properties of a JavaScript object.

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

function getObjectKeys(input) {
    return Object.keys(student).join(",")
}

let a = getObjectKeys(student);
console.log(a)