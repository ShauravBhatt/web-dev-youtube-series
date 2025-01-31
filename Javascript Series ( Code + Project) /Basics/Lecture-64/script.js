//Array Methods

let arr = [1,2,3,4,5];

// console.log(`Og Array: ${arr}`);
// const slice_return = arr.slice(1,4); //End index is not included
// console.log(slice_return); //2,3,4
// console.log(`Array after slice: ${arr}`); //1,2,3,4,5

// console.log(`Og Array: ${arr}`);
// const splice_return = arr.splice(1,4); //End index is included
// console.log(splice_return); //2,3,4,5
// console.log(`Array after splice: ${arr}`); //1

//splice and splice are two different function where slice doesn't include the last index but splice includes and slice doesn't change the original array but your splice does.

// console.log(arr) //1,2,3,4,5
// const new_arr = arr.splice(1,2,'b','c'); //it returns the value deleted
// console.log(arr)

// console.log(arr);
// const new_arr_string = arr.join('.');
// console.log(new_arr_string);

// console.log(arr); //1,2,3,4,5
// const pow_arr = arr.map(element => element**2);
// console.log(pow_arr);

// console.log(arr); //1,2,3,4,5
// const fil_arr = arr.filter(element => element%2===0);
// console.log(fil_arr);

// arr.reverse(); //changes order of element in the original array
// arr.reverse();
// console.log(arr)

// let arr1 = [1,2,3,4,[5,6,7],[8,9,[10,11]],[12,13,14,[15,16,[17,18]]]];
// console.log(arr1.flat(3))

// console.log(Array.isArray("Shaurav"))

// console.log(Array.isArray(["shaurav"]))

// console.log(Array.from({name:'shaurav'})) //from function cant convert numbers, boolean and object.

let s1 = 100;
let s2 = 101;
let s3 = 102;
let s4 = "Shaurav"
// console.log(Array.of(s1,s2,s4,s3))

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
// console.log([...arr2, ...arr1]); //spread operator