/**
 * Function prototype
 * new objects can be created with a constructor function, like new F().
 **/
const animal = {
    eat: true,
    walk() {
        return "Animals can walk";
    }
}

// Inheriting animals in Rabit function
function Rabit() {
    return "I am rabit";
}
Rabit.prototype = animal;
Rabit.prototype.jump = true;

const t = new Rabit();
// This will create new property on object like { prototype: { eat: true, walk: [Function: walk] } }
// t.prototype = animal;

// If we want to inheritance in object instead of function then we can do like this as well
// t.__proto__ = animal;

console.log(t, t.eat, t.jump)