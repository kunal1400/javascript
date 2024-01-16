/**
 * function to check weekend
 **/
const dateDiffInDays = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return (Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate()) - Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()))/(1000*60*60*24)
}
console.log(dateDiffInDays('2023-01-01', '2023-01-31'));


/**
 * Get time differences in minutes between two dates.
 **/
const differenceInMinutes = (d1, d2) => {
    return (d2.getTime() - d1.getTime())/(1000*60)
}
const mins = differenceInMinutes( new Date(2023,11,1), new Date(2023,11,2))
console.log(mins)