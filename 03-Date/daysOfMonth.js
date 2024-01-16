/**
 * function to check last day of month
 **/
const isWeekend = (d1) => {
   const days = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]
   const day = new Date(d1.getFullYear(), d1.getMonth()+1, 0).getDay();
   return days[day];
}
console.log(isWeekend(new Date("2023-12-25")))

 /**
 * function to get yesterday date
 **/
const getYesterdayDate = (d1) => {
   const d = new Date();
   return new Date(d.setDate(d1.getDate() -1)).toString()
}
console.log(getYesterdayDate(new Date("2023-12-22")))

 /**
 * function to get the number of days in a month.
 **/
function numberOfDaysInMonth(month, year) {
   // Day 0 is the last day in the previous month
   let dateI = new Date(year, month, 0);
   return dateI.getDate();
}
console.log(numberOfDaysInMonth(1, 2023))