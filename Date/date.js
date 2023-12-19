// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday at 1PM:22:22;

function currentTimeString() {
    let todayDate = new Date();
    let allDays = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    let todayDay = todayDate.getDay();
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes(); 
    let seconds = todayDate.getSeconds();
    hours = hours >= 12 ? hours - 12 + "PM" : hours + "AM";
    return `Today is ${allDays[todayDay]} at ${hours}:${minutes}:${seconds}`
}
const t = currentTimeString();
console.log(t)
