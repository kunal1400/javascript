/**
 * “Promisification” is a long word for a simple transformation. 
 * It’s the conversion of a function that accepts a callback into a function that returns a promise.
 */

/**
 * Order is same
 * o/p: [ 1, 2, 3, 'a', 'b', [ 'c', 'd', 'e' ] ]
 **/
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),  // 3
    "a",
    "b",
    ["c", "d", "e"]
  ]).then((d) => console.log(d));
  
  /**
   * If one promise rejects, Promise.all immediately rejects.
   * all or nothing
   **/
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ])
  .then((d) => console.log(d))
  .catch((e) => console.log(e.message));
  
  /**
   * Race - between first error and fulfilled
   * o/p: Data and loop through status 3
   **/
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ])
  .then((d) => console.log("Data and loop through status", d))
  .catch((e) => console.log("Error message", e.message));

  /**
   * Race - between first error and fulfilled
   * o/p: Error message Whoops
   **/
  Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 200)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ])
  .then((d) => console.log("Data and loop through status", d))
  .catch((e) => console.log("Error message", e.message));
  
  /**
 * Any - race between first fulfilled
 * o/p: Data and loop through status 3
 **/
Promise.any([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 200)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
  ])
  .then((d) => console.log("Data and loop through status", d))
  .catch((e) => console.log("Error message", e.message));
  
  /**
   * Any - race between first fulfilled
   * o/p: AggregateError: All promises were rejected
   **/
  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 300)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 200))
  ])
  .then((d) => console.log("Data and loop through status", d))
  .catch((e) => console.log("Error message", e));
  