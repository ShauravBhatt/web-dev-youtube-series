//Functions : They are the block of code / Set of Instruction that are designed for a particular task and can be reused.

function sayMyName() {
  console.log("Hello");
  console.log("Shaurav");
  console.log("!!");
}

// console.log(sayMyName) //Refer to the function
// sayMyName(); //Function execute hoga isse

// function addNumbers(num1 , num2){ //It's called parameter
//   let result = num1+num2;
//   return result;
// }

let result = addNumbers(19,5); //It's called arguments
// console.log(result); //always return statement sends a value from the function and it's stored in function call.
// console.log(addNumbers(13,13));


function addNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addNumbers(2, 3));
// console.log(addNumbers(2, "3"));
// console.log(addNumbers(2, "3a"));
// console.log(addNumbers(null, 3));

function addOne(num){
  console.log("The answer is: ");
  return num+1; //After return statement not a single line is executed.
  console.log("Function executed !!")
}

// console.log(addOne(2));
// console.log(addOne()); //Nan

// function SayHii(user) {
//   if (user===undefined) {
//     return "Enter your name !!"
//   }
//   return `Hello, Mr. ${user}` ;
// }

// SayHii("Shaurav")
// console.log(SayHii("XYZ"))

function SayHii(user="xyz") {
  return `Hello, Mr. ${user}` ;
}

// console.log(SayHii());
// console.log(SayHii("Harvard"))

function calcCart(val1,val2,...num){ //rest operator
  return num;
}

// console.log(calcCart(200,122,123,5352,53));

let myObj = {
  name: "Shaurav",
  age: 19
}

function manipObj(obj){
  console.log(`Hello, Mrs. ${obj.name} and your age is ${obj.age}.`)
}

// manipObj(myObj)
// manipObj({name:"Angel",age:21})

let arr = [1,2,34,56,67];

function greatestInArray(array){
  let greatest = Math.max(...array);
  console.log(greatest) 
}

// greatestInArray(arr);