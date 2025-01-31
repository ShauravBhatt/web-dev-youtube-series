//Array -> It's a linear data structure which enables us to store multiple items of different or same data types under a single variable name.

let name = new String("Shaurav 12"); //It's a fault in primitive data type

let array1 = ["Shaurav", "Piyush", "Nikhil"];

let array2 = ["Shaurav", false, 123, [1, 2, 3], { key: "Value" }];

// console.log(array2[4].key);

array2[0] = "Piyush"; //over write the existing value of a specifix index
array2[5] = true; //assign or added a value to the specific position
// console.log(array2);

/* ************* Methods in Array *************** */

let myArr = [1, 2, 3, 4, 5];

// console.log(myArr.length)

// const push_return = myArr.push(6);
// myArr.push(6,7,8);
// console.log(myArr); //appends the new element at last and return the new length of the array.
// console.log(push_return); //simply prints the new length of the array

// const pop_return = myArr.pop();
// console.log(myArr); //removes the element from the end and return it
// console.log(pop_return); //print the removed element

// myArr.shift(); //return the element which is removed
// console.log(myArr)

// myArr.unshift(0,0.1,0.3); //return the length of the new Array
// console.log(myArr)

let str1 = [1,2,3,4];
let str2 = [5,6,7,8];
let str4 = [9,10]
const str3 = str1.concat(str2,str4);
// console.log(str3);
// console.table([str1,str2,str3])