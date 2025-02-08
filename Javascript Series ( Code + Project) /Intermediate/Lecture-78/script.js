/*Q-12: Create an Immediately Invoked Function Expression (IIFE) that logs "This runs immediately!" to the console.*/
// (() => {
//     console.log("This runs immediately!");
// })();

/*Q-13: Write a function fizzBuzz(n) that prints numbers from 1 to n, for multiples of 3 print "Fizz" instead of the number, and for multiples of 5 print "Buzz". For numbers that are multiples of both 3 and 5 print "FizzBuzz".*/
// function fizzBuzz(n) {
//     if (n%3===0 && n%5===0) {
//         console.log("FizzBuzz");
//     }
//     else if(n%3==0){
//         console.log("Fizz");
//     }
//     else if(n%5==0){
//         console.log("Buzz");
//     }
// }
// fizzBuzz(15);

/*Q-14: Write a function sumOfArray(arr) that calculates the sum of all elements in an array using the forEach loop.*/
// function sumOfArray(arr){
//     let sum = 0;
//     arr.forEach(element => {
//         sum=sum+element;
//     });
//     return sum;
// }

// let arr = [1,2,3,4,5,6];
// console.log(sumOfArray(arr));

/*Q-15: Given an object with properties representing student names and their scores, use a for...in loop to print out each student's name and score.*/
// const students = {
//     Shaurav : 90 ,
//     Piyush : 99 ,
//     Nikhil : 94 ,
//     Himanshu : 95
// }
// for(const key in students){
//     console.log(`${key} scored : ${students[key]}`);
// }

/*Q-16: Write a function logCharacters(str) that logs each character of a string individually using a for...of loop.*/
// function logCharacters(str){
//     for(const ele of str){
//         console.log(ele);
//     }
// }
// logCharacters("Shaurav");

/*Q-17: Create an array of numbers [1, 2, 3, 4, 5, 6]. Use the filter method to create a new array with only the even numbers. Then, use the map method to square each of the even numbers. Combine these operations into a single line of code*/
// let numbers = [1, 2, 3, 4, 5, 6];
// let newNums = numbers.filter( (item) => item%2===0).map( (item) => item*item);
// console.log(newNums);

/*Q-18: Given an object person with properties name, age, and hobbies (which is an array), write a function printHobbies that loops over hobbies and prints each one. Use the for...of loop and object destructuring.*/
// const person = {
//   name: "Shaurav",
//   age: 19,
//   hobbies: ["reading", "teaching", "coding"],
// };

// const {hobbies} = person;

// function printHobbies(person) {
//     for(const ele of hobbies){
//         console.log(ele);
//     }
// }

// printHobbies(person);

/*Q-19: Write a function multiply(a, b) that returns the product of a and b. Immediately invoke this function with the values 5 and 10, and log the result.*/
// (function multiply(a, b){
//     console.log(a*b);
//     return a*b;
// })(5,10);

/*Q-20: Write a function sumOfSquares that takes an array of numbers as input and returns the sum of the squares of all positive numbers in the array. Use a for...of loop and the continue statement to skip negative numbers.*/
// function sumOfSquares(arr) {
//     let sum = 0;
//     for (const element of arr) {
//         if(element>0){
//             sum = sum + Math.pow(element,2);
//         }else{
//             continue;
//         }
//     }
//     return sum;
// }
// const numbers = [2, -3, 4, -1, 5];
// console.log(sumOfSquares(numbers));

/*Q-21:  Given the following array [10, 20, 30, 40, 50], write a function findFirstGreaterThan(arr, threshold) that returns the first value greater than threshold using the for...in loop. Use break to exit the loop once the condition is met.*/
// function findFirstGreaterThan(arr, threshold){
//     let temp ;
//     for (const key in arr) {
//         if (arr[key]>threshold) {
//             temp = arr[key];
//             break;
//         }
//     }
//     return temp;
// }
// let array = [10, 20, 30, 40, 50];
// console.log(findFirstGreaterThan(array,30));

/*Q-22: Write a function formatPrice(price) that takes a number as input and returns it formatted as a string with three decimal place in indian format. For example, formatPrice(5000) should return "5,000".*/
// function formatPrice(price){
//     let finalPrice = price.toLocaleString("en-IN");
//     return finalPrice;
// }

// console.log(formatPrice(5000000000.8776446))
