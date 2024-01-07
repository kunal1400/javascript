let user = {
    name: "kunal",
    gender: "Male",
    toString(){
        return this.name;
    }
}

//1. Display {value:'kunal', writable:true, enumerable:true, configurable:true}
console.log(1, Object.getOwnPropertyDescriptor(user, "name")); 

//2. Setting value john and making writable false
Object.defineProperty(user, "name", {value: "john", writable: false});
user.name = "Rock";
console.log(2, user) // { name: 'john', gender: 'Male', toString: [Function: toString] }

//3. excluded from Object.keys, for..in
Object.defineProperty(user, "toString", {enumerable: false})
console.log(3, user) // { name: 'john', gender: 'Male' }

//4. Doesn't allowed to be deleted however value changed
Object.defineProperty(user, "gender", {configurable: false})
user.gender = "Female";
delete user.gender;
console.log(4, user) // { name: 'john', gender: 'Female' }

`===============================================================================================================`

Object.defineProperties(user, {
    name: {value: "john", writable: false},
    gender: {configurable: false},
    toString: {enumerable: false}
})

user.name = "Rock";
console.log(1, user) // { name: 'john', gender: 'Male' }

//3. excluded from Object.keys, for..in
console.log(2, user) // { name: 'john', gender: 'Male' }

//4. Doesn't allowed to be deleted however value changed
user.gender = "Female";
delete user.gender;
console.log(3, user) // { name: 'john', gender: 'Female' }