// 0ms delay setTimeout, “right after” the current script.
setTimeout(() =>console.log("Welcome to the scheduler"));
alert("Hello");
// OP: Hello, Welcome to the scheduler


// In every 1 sec we are consoling
const intervalId  = setInterval(function(a, b){
    console.log("Hello,", a, b, intervalId)
}, 1000, "k", "m");

// After 10 second we are clearing the interval
setTimeout(function(){
    console.log("clearing the interval after 10 seconds", intervalId);
    clearInterval(intervalId)
}, 10000);