/**
 * Set - alternative for uniqueness checks
 **/
 
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

var users = new Set();
users.add(john)
users.add(pete)
users.add(mary)
users.add(john)

for(let i of users) {
    console.log(i)   
}

console.log(users.keys());
// [Set Iterator] { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

console.log(users.values());
// [Set Iterator] { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

console.log(users.entries())
/**
 * [Set Entries] {
 * [ { name: 'John' }, { name: 'John' } ],
 * [ { name: 'Pete' }, { name: 'Pete' } ],
 * [ { name: 'Mary' }, { name: 'Mary' } ]
 * }
**/

// Creating map from set
const a = new Map(users.entries());
console.log(a);
/**
 * Map(3) {
 * { name: 'John' } => { name: 'John' },
 * { name: 'Pete' } => { name: 'Pete' },
 * { name: 'Mary' } => { name: 'Mary' }
 * }
 **/
