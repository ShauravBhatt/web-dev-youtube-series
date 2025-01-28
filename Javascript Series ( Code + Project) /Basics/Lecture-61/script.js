const num = 100;
// console.log(typeof num); //number data type

let numVar = new Number(500); 
// console.log(typeof numVar); //It's object datatype with properties drop down menu

let number1 = 1000000;
// console.log(number1.toString().length); //we can find the length of our number

let number2 = 5000.5423524256;
// console.log(number2.toFixed(3)); //jitni value input me denge utni hi decimal ke baad vali values visible hongi

let number3 = 50.542;
// console.log(number3.toPrecision(4)); //50.54
// console.log(number3.toPrecision(3)); //50.5
// console.log(number3.toPrecision(2)); //51
// console.log(number3.toPrecision(1)); 

let hundredCount = 1000000;
//console.log(hundredCount.toLocaleString('en-IN')) //Make the value acc. to indian standard

/******************      MATH        ******************/

// console.log(Math); //In browser it tells us about the function that it contains

let numVarOne = 10;
// console.log(Math.pow(numVarOne,4)) //Power function is there

let numVarTwo = 25;
// console.log(Math.sqrt(numVarTwo)) //Square Root function is there

let numVarThree = 13.1;
// console.log(Math.ceil(numVarThree)); //14 is the ceil value for number range 13.1 to 13.9
// console.log(Math.floor(numVarThree)); ////13 is the floor value for number range 13.1 to 13.9

let negValue = -10;
// console.log(Math.abs(negValue)); //abs function results postive always

// console.log(Math.max(1,26,2,-423,74,-132)) //results maximum value from the set

// console.log(Math.min(-234,32,5235,-34523,-0,23)) //results minimum value from the set

/* Important Concept of Random() function */

// console.log(Math.random()); //To generate a random value at every execution from [0,1) !

// console.log(Math.random()*10); //Now it generate from [0,10) !

// console.log(Math.floor(Math.random()*10)); //Now it generate from [0,10) but this time we don't see that big point numbers

// console.log(Math.floor(Math.random() * 10)+1); //Now it generates from [1,10]

let min = 100;
let max = 150;
let result = Math.floor((Math.random()*(max-min+1))+min);
console.log(result);
