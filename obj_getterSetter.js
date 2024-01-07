let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return this.name +" "+ this.surname;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
        // this.name = value.split(" ")[0]
        // this.surname = value.split(" ")[1]
    }
};

user.fullName = "Rock bottom";
console.log(user.fullName); // Rock bottom


  
/**
 * Accessor descriptors
 * No value or writable, but instead there are get and set functions.
 **/
let user = {
    name: "John",
    surname: "Smith"
};
Object.defineProperty(user, "fullName", {
    enumerable: false,
    configurable: false,
    get() {
        return `${this.name} ${this.surname}`
    },
    set(value) {
        [this.name, this.surname] = value.split(" ")
    }
});

console.log(user)
console.log(user.fullName)
user.fullName = "Rock bottom";
console.log(user.fullName)




/**
 * Smarter getters/setters
 **/
let user = {
    get name() {
        return this._name
    },
    set name(value) {
        if(value.length < 4) {
            console.log(value, "should be greater than 4")
            return;
        }
        this._name = value;
        return this._name;
    }
};
console.log(user)
user.name = "kunal";
console.log(user)