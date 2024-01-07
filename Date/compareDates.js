/**
 * function to compare dates
 **/
function compareDate(date1, date2) {
    if(date1 < date2) {
        return "date2 is greater than date1"
    } else if(date1 > date2) {
        return "date1 is greater than date2"
    } else if(date1 == date2) {
        return "date1 is equal to date2"
    }
 }
 
 console.log(compareDate(new Date("2023-12-12"), new Date("2023-11-11")))

 /**
 * function to get the maximum date from an array of dates.
 * console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
 * Output: "2015/02/02"
 **/
 const max_date = (arr) => {
    let maxDate = new Date(arr[0]);
    arr.forEach((i) => {
       let d = new Date(i);
       if(d > maxDate) {
           maxDate = d;
       }
    });
    return maxDate;
}

console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
