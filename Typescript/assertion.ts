/**
 * Type Assertion (Type Casting) allows you to override the default type inference of TypeScript.
 */
let a: unknown = "hello";
let b = (a as string).length;
let c = (<string>a).length;
