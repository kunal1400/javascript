# Global object
- The global object provides variables and functions that are available anywhere.
- In a browser it is named `window`, for Node.js it is `global`
- In a browser, global functions and variables declared with var (not let/const!) become the property of the global object.
# Arrow functions
- Do not have `this`
- Do not have `arguments`
- Can’t be called with `new`
- They also don’t have `super`
- () => 
