let globalVariable = "Global Variable"; //It's accessible in whole code in this file

function scopeExample() {
  let functionVariable = "Function Variable"; //It's accessible throught the function
  if (true) {
    var x = "var variable"; //Global scope it't mean accessible in whole file
    let y = "let variable"; //block scope means it's only accessible inside if block
    const z = "const variable"; //block scope means it's only accessible inside if block

    console.log(x); //Accessible
    console.log(y); //Accessible
    console.log(z); //Accessible
    console.log(globalVariable); //Accessible
    console.log(functionVariable); //Accessible
  }

  console.log(x); //Accessible
//   console.log(y); //Not Accessible
//   console.log(z); //Not Accessible
  console.log(globalVariable); //Accessible
  console.log(functionVariable); //Accessible
}

// console.log(x); //Not Accessible
// console.log(y);//Not Accessible
// console.log(z);//Not Accessible
// console.log(globalVariable); //Accessible
// console.log(functionVariable); //Not Accessible

// scopeExample();


//Global scope vs Function Scope
//var behaves as a global variable in a functional scope.


// //Simple Way to define function , It support hoisting
// one();

// function one(){
//     console.log("One");
// }

// //Function expression , It doesn't support Hoisting
// // two();

// const two = function(){
//     console.log("Two");
// }
