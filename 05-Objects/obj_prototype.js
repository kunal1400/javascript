/**
 * Object prototype inheritance
 * Animal is prototype of rabit or Rabit inherit from animal
 **/
{
    const animal = {
        eat: true,
        walk() {
            return "Animals can walk";
        }
    }
    // rabit.__proto__ = animal;
    const rabit = {
        jump: true,
        __proto__: animal
    }
    
    console.log(1, rabit.jump); // 1 true
    console.log(2, rabit.eat); // 2 true
    console.log(3, rabit.walk()); // 3 Animals can walk
    console.log(4, Object.keys(rabit)); // 4 [ 'jump' ]
    for(let key in rabit) console.log(5, key); // 5 jump, eat, walk
    console.log(6, rabit.hasOwnProperty("eat")) // 6 false
}



/**
 * Object create
 **/
{
    const animal = {
        eat: true
    }
    const rabit = Object.create(animal, {
        jump: {
            value: true
        }
    });
    
    console.log(1, Object.getPrototypeOf(rabit)); // { eat: true }
    for(key in rabit) console.log(2, key); // eat
    console.log(3, rabit.jump); // true

    Object.setPrototypeOf(rabit, null);
    console.log(4, Object.getPrototypeOf(rabit)); // null
    for(key in rabit) console.log(5, key) // NOT CONSOLED
    console.log(6, rabit.jump) // true
}
