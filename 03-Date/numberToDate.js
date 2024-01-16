/**
 * function to get the number of days in a month.
 **/
function numberOfDaysInMonth(month, year) {
    // Day 0 is the last day in the previous month
    let dateI = new Date(year, month, 0);
    return dateI.getDate();
}

console.log(numberOfDaysInMonth(1, 2023))