/**
* Replace all illegal character and spaces from file name except .
* https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re
**/
let uploadFileName = str.replace(/[^A-Z0-9.]+/ig, "_");
