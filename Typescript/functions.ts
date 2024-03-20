interface IceCream {
  flavor: string;
  scoops: number;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

// function tooManyScoops(dessert: IceCream) will also work
function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(
  tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "chocolate" })
);

/**
 * Generic interface as a function definition
 */
interface IdentityOfPerson<T, U> {
  (a: T, b: U): string;
}

function personIdentity<T, U>(a: T, b: U) {
  return `Hello, ${a} and ${b}`;
}

const pi: IdentityOfPerson<number, number> = personIdentity;
console.log(pi(1, 2));

/**
 * Generic Constraint: declare a custom type as a tuple and then extend the type variable with the custom type.
 */
type validTypes = number | string;

function sumOfTwoNumbers<U extends validTypes, V extends validTypes>(
  a: U,
  b: V
) {
  let result = a + b; // Error
  return result;
}

console.log(sumOfTwoNumbers<number, string>(100, "Hello!"));
console.log(sumOfTwoNumbers<string, string>("100", "Hello!"));

/**
 * keyof: validating the second param to be any key of object
 */
function getInfo<T, U extends keyof T>(info: T, key: U) {
  return info[key];
}
const dog = { fname: "Johny", age: 3, color: "black" };
console.log(getInfo(dog, "fname"));

/**
 * typeof: We can use typeof for conditions to reduce errors
 */
function sumOfNumbers<U extends validTypes, V extends validTypes>(a: U, b: V) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  return;
}

/**
 * Function overloading
 */
function addTwo(a: number, b: number): number;
function addTwo(a: string, b: string): string;
function addTwo(a: any, b: any) {
  return a + b;
}
console.log(addTwo(2, 3));
console.log(addTwo("hello", " world"));

// Function overloading with optional parameter
function addThree(a: number, b: number, c?: number): number;
function addThree(a: string, b: string, c?: string): string;
function addThree(a: any, b: any, c?: any): any {
  if (c) return a + b + c;
  return a + b;
}
console.log(addThree(2, 3));
console.log(addThree("hello", " world"));
console.log(addThree(2, 3, 5));
console.log(addThree("hello", " world", " on earth"));
