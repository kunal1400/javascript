/**
 * Template Literal Types
 */
// 1 - boolean and number are passed in string
type stringFormat = `${string}-${boolean}-${number}`;
const formatedString: stringFormat = `#000000-true-1`;

// 2. More precise string Literal
type Color = "black" | "white";
type Hexcode<T extends Color> = `#${string}`;
const blackHexColor: Hexcode<"black"> = `#000000`;

/**
 * Index signature labels
 */
// 1. For array
interface IceCreamForcingToArray {
  [index: number]: string;
}
const myIcecreamArray: IceCreamForcingToArray = ["vanila", "choclate"];
console.log(myIcecreamArray); // ["vanila", "choclate"]

// 2. For object
interface IceCreamForcingToObject {
  [index: string]: string;
}
const myIcecreamObject: IceCreamForcingToObject = {
  name: "vanila",
  color: "white"
};
console.log(myIcecreamObject); // {"name": "vanila", "color": "white"}
