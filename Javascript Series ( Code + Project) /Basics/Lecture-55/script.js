//"user-strict" //Browser understand that it has to understand the newer version of js only

// alert("Hello"); //We are on nodejs and some functionality of js is not implicable here

// *********** DATA TYPES ************

let name = "Shaurav Bhatt is a Developer" ; //String
const three = 3 ; //Number
let isLoggedIn = true ; //Boolean
let BigNum = 298563278n ; //BigInt
let number; //Undefined
let temp = null; //Null
let Sym = Symbol('id'); //Symbol

// console.log(typeof Sym); //typeof operator is used to show the datatype of any variable or constant

let num = "33";
// console.log(num); //string type
let convNum = Number(num); // converted string into number explicitly
// console.log(convNum); //number type
// console.log(typeof convNum)

let user_input = "33abd"; //string
let convNum1 = Number(user_input);
// console.log(convNum1); //NaN means Not a Number
// console.log(typeof convNum1);

let num1; //undefined
let convNum2 = Number(num1); //NaN
// console.log(convNum2);
// console.log(typeof convNum2)

let temp1 = null; //object
let convNum3 = Number(temp1); //0
// console.log(convNum3);
// console.log(typeof convNum3);

// In computers 0 -> False , 1 -> True

let isLoggedInGmail = false ;
let convNum4 = Number(isLoggedInGmail);
// console.log(convNum4)

let str = ""; //""-> False , "anythinh" -> True
let value = Boolean(str);
// console.log(value)

let num12 = 124 ; //number
let convStr = String(num12) ; //String 
console.log(typeof convStr)

