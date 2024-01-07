
/**
 * There are 9 ways to create a new date object:
 * new Date()
 * new Date(date string)
 * new Date(year,month)
 * new Date(year,month,day)
 * new Date(year,month,day,hours)
 * new Date(year,month,day,hours,minutes)
 * new Date(year,month,day,hours,minutes,seconds)
 * new Date(year,month,day,hours,minutes,seconds,ms)
 * new Date(milliseconds)
 **/

/**
 * Check if the given argument is a date
 **/
const isDate = (d) => Object.prototype.toString.call(d) === "[object Date]"
const op = isDate(new Date());
console.log(op)

/**
 * function to check weekend
 **/
const isWeekend = (date1) => [0,6].indexOf(date1.getDay()) > -1 ? true : false;
console.log(isWeekend(new Date("2023-12-25")))

/**
 * Convert a Unix timestamp to time.
 **/
const unixTimestamp = (t) => new Date(t*1000).toString();
console.log(unixTimestamp(1412743274));

/**
 * CalculateAge
 **/
const calculateAge = (b) => {
    return new Date().getFullYear() - b.getFullYear();
}
console.log(calculateAge(new Date(2007, 11, 4)));
