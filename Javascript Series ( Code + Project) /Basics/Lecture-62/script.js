// Date & Time (1 Jan 1970 se Js ki clock start hui hai !!)

let num = 199 ;
let name = "Shaurav"

let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); //object
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toUTCString())

let dateFormat = new Date(2022,0,26,7,45,49,60); //month starts from zero
// console.log(dateFormat.toString())
// console.log(dateFormat.getTime()) //It's the millisecond count from 1 jan 1970 to 26 jan 2022 7:45:49
// console.log(dateFormat.getMonth()+1)
// console.log(dateFormat.getDay()+1) 

let dateFormat1 = new Date("2024-01-12") //YYYY-MM-DD
// console.log(dateFormat1.toString())

let dateFormat2 = new Date("02-12-2023") //MM-DD-YYYY
// console.log(dateFormat2.toString())

let timestamp = Date.now();
// console.log(Math.floor(timestamp/1000));

let rawDate = new Date(timestamp);
// console.log(rawDate.toLocaleString())

/* Main Syntax */
let newTimestamp = Date.now();
let newRawdate = new Date(newTimestamp);
let customizeDate = newRawdate.toLocaleString('default',{
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    weekday:"short"
});
// console.log(customizeDate)





