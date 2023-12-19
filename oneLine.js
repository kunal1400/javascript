// Call the window.print() method to initiate the printing of the current page
window.print();

// Output of the following code
function runFunc(){
	console.log("1" + 1); // 11
	console.log("A" - 1); // NaN
	console.log(2 + "-2" + "2"); // 2 - 22
	console.log("Hello" - "World" + 78); // NaN
	console.log("Hello"+ "78");	// Hello78
}
runFunc();


// What is the output of the following code? i.e 1
(function(x) {    
    return (function(y) {        
        console.log(x);    
    })(2) 
   })(1);