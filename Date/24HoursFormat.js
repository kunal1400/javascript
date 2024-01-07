/**
 * Get the 12-hour format of an hour with leading zeros.
**/
const hoursWithZero = (d) => {
    const hours = d.getHours();
    if(hours < 12) {
        return `${hours < 10 ? "0"+hours : hours} AM`
    } else {
        const hoursAfterTwelve = hours - 12;
        return `${(hoursAfterTwelve) < 10 ? "0"+hoursAfterTwelve : hoursAfterTwelve} PM`
    }
}
dt = new Date();
console.log(hoursWithZero(dt));