function Person(name) {
  this.name = name;
}

const p1 = new Person("Shaurav");
const p2 = new Person("Bhatt");

Person.prototype.hello = function () {
  console.log(`Hello, ${this.name}`);
};

// p1.hello();
// p2.hello();

function multiply(num) {
  this.num = num;
  return num * 5;
}

// console.log(multiply(3));
// multiply.power = 9;
// multiply.power = 19;
// console.log(multiply.power);
// console.log(multiply.prototype);

let myArray = [1, 2, 3, 4, true];

// Array.prototype.print = function (message="Array is: ") {
//     console.log(message);
//     console.log(this);
// }

// myArray.print("My array is:");
// [1,2].print();

const myobj = {
  name: "shaurav",
};

// myobj.print();

const str = "Shaurav";
// str.print();

Object.prototype.print = function (message = "Array is: ") {
  console.log(message);
  console.log(this);
};

// myArray.print("My Str is: ");

function user(name, score) {
  this.name = name;
  this.score = score;

  return [this.name, this.score];
}

user.prototype.greet = function () {
  console.log(`Hello, ${this.name} your score is ${this.score}`);
};

const u1 = user("shaurav", 10);
// u1.greet();
// console.log(u1);

// let isLoggedIn = {
//     result : true
// }

// let userOne = {
//     name: "Shaurav",
//     __proto__ : isLoggedIn
// }

// console.log(userOne.result);

let isLoggedIn = {
  result: true,
};

let userOne = {
  name: "Shaurav",
};

Object.setPrototypeOf(userOne, isLoggedIn);
console.log(userOne.result);

/*Homework*/

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True Length of Array is : ${this.trim().length}`);
};

let arr1 = "Shaurav   ";
arr1.trueLength();
"Bhatt    ".trueLength();
