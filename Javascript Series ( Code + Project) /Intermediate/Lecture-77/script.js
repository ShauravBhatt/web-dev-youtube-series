/*Q1: Given a string "Hello, World! JavaScript is awesome.", perform the following tasks:
a.)Extract the word "JavaScript" using the slice method.
b.)Check if the string contains the word "awesome" using the includes method.
c.)Replace "Hello" with "Hi" using the replace method.*/
// let str = "Hello, World! JavaScript is awesome.";
// console.log(str.slice(14,25));
// console.log(str.includes("awesome"));
// console.log(str.replace("Hello","Hi"));

/*Q2: Write a function truncateString(str, num) that truncates a string to a given number of characters and adds "..." at the end if the string was truncated. Use slice and concat methods.*/
// function truncateString(str, num) {
//     if (str.length >= num) {
//         let tempStr = str.slice(0,num);
//         return tempStr.concat("...");
//     }else{
//         return str.concat("...");
//     }
// }
// let demoStr = "Hello, World! JavaScript is awesome.";
// console.log(truncateString(demoStr,5));

/*Q-3: Given an array [3, 6, 9, 12, 15], perform the following operations:
a.)Add 18 to the end of the array using push.
b.)Remove the first element using shift.
c.)Find the index of the number 12 using indexOf.*/
// let arr = [3, 6, 9, 12, 15];
// arr.push(18);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.indexOf(12));

/*Q-4: Write a function removeDuplicates(arr) that removes duplicate values from an array using the filter method.*/
// function removeDuplicates(arr){
//     const newArr = arr.filter( (element,index) => {
//         return arr.indexOf(element) === index;
//     });
//     return newArr;
// }
// let arr = [1,2,1,3,4,1,2,1,5,6,3];
// const newArr = removeDuplicates(arr);
// console.log(newArr);

/*Q-5: Using the array [10, 20, 30, 40, 50], write a code that multiplies each element by 2 using the map method and filters out values greater than 60 using the filter method.*/
// let arr = [10, 20, 30, 40, 50];
// let arrNew = arr.map( (item) => item*2).filter( (item) => item>60);
// console.log(arrNew);

/*Q-6: Write a function randomInt(min, max) that generates a random integer between min (inclusive) and max (inclusive) using Math.random() and Math.floor().*/
// function randomInt(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// const num = randomInt(40,50);
// console.log(num);

/*Q-7: Given a number 12345.6789, round it to 2 decimal places and convert it to a string using appropriate methods.*/
// let ogNum = 12345.6789;
// let newNum = ogNum.toFixed(2);
// console.log(newNum)
// console.log(typeof newNum)

/*Q-8: Create an object person with properties name, age, and greet. The greet property should be a method that logs "Hello, my name is [name]". Use this keyword to access the name property.*/
// const person = {
//     name: "Shaurav",
//     age: 19,
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// person.greet();

/*Q-9: Given the following object, use object destructuring to extract name and age into variables: const person = { name: "Alice", age: 25, city: "New York" }; */
// const person = { name: "Alice", age: 25, city: "New York" };
// const {name: n , age: a} = person;
// console.log(`Hello, ${n} your age is ${a}`);

/*Q-10: Write a function cloneObject(obj) that returns a shallow copy of the object passed to it.*/
// function cloneObject(obj){
//     return {...obj};
// }
// const myObj = { name: "Alice", age: 25, city: "New York" };
// console.log(cloneObject(myObj));

/*Q-11: Write a nested function where the inner function has access to a variable from the outer function's scope. Demonstrate this with a simple example that calculates the area of a rectangle.*/
// function outerfunction(length,width){
//     let l = length;
//     let w = width;
//     function innerFunction(){
//         return l*w;
//     }
//     return innerFunction();
// }
// console.log(outerfunction(2,4));
