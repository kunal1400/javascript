/**
 * add specified weeks to a date.
 **/
const addWeek = (d, n) => new Date(d.setDate(d.getDate() + (n*7)))
const weeks = addWeek( new Date(2014,10,2), 3)
console.log(weeks)

/**
 * add specified years to a date.
 **/
const addYears = (d, n) => new Date(d.setFullYear(d.getFullYear() + n))
const years = addYears( new Date(2014,10,2), 3)
console.log(years)

/**
 * add specified weeks to a date.
 **/
const addMonth = (d, n) => new Date(d.setMonth(d.getMonth() + n))
const month = addMonth( new Date(2014,0,2), 1)
console.log(month)