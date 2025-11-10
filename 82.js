// Dates in js


/*
JavaScript Date and Time
In JavScript, date amd time are represented by the date object. The Date object provides the data and time
information and also provides various methods.

A JS date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time
is the same as the UNIX epoch (predominant base value for computer-recorded date and time vlaues).


Creating Data Objects
There are four ways to create a data object.

new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month, day, hours, minute, seconds, milliseconds)

JavaScript has a built=in date object to handle dates and times.
*/




let currentDate = new Date()
console.log(currentDate);

const date1 = new Date("2025-11-10T11:23:45.45Z")
console.log(date1);

const date2 = new Date(2025,11,10,19,14,29)
console.log(date2);

const date3 = new Date(1760000000000);
console.log(date3);






// Date methods
// Fetch
const now = new Date()
console.log(now);



let MILI = now.getMilliseconds()
console.log(MILI);


let FULLYEAR = now.getFullYear()
console.log(FULLYEAR);

let month = now.getMonth()
console.log(month);

let date = now.getDate()
console.log(date);

let day = now.getDay()
console.log(day);

let hours = now.getHours()
console.log(hours);

let minute = now.getMinutes()
console.log(minute);

let milliseconds = now.getMilliseconds()
console.log(milliseconds);


// How to get till now Milliseconds


console.log(now.getTime());


/// let new = new Date();

let tillNowMilliseconds = Date.now()
console.log(tillNowMilliseconds);

let tillNow = +new Date()
console.log(tillNow);