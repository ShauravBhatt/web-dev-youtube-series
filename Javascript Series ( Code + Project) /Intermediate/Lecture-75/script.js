//High Ordered Array

/*************** forof -> Iterates over the elements directly **********************/
const myObj = {
  name: "Shaurav",
  age: 19,
  city: "Delhi",
};

const arr = [1, 2, 3, 4, 5];

const str = "Shaurav";

for (const ele of arr) {
  // console.log(ele);
}

for (let element of str) {
  // console.log(element);
}

// for (const element of myObj) {
//     // console.log(element)
// } //we cant use for of loop in object !!

const map = new Map();
map.set("DL", "delhi");
map.set("UK", "Uttarakhand");
map.set("HR", "Haryana");
// map.set("DLC", "delhi");
// console.log(map);

for (const element of map) {
  // console.log(element)
}

for (const [keys, values] of map) {
  // console.log(`${keys} stands for ${values}`)
}

for (const [key] of str) {
  // console.log(`${key}`);
}

/*************************** forin -> Iterates over the keys  ***************************/

for (const key in myObj) {
  // console.log(key);
  // console.log(`${key} is ${myObj[key]}`);
}

for (const key in arr) {
  // console.log(key)
  // console.log(`${key} index has value ${arr[key]}`)
}

for (const key in str) {
  // console.log(key)
  // console.log(`${key} stands for ${str[key]}`);
}

// for (const key in map) {
//     console.log(map[key]);
// }

/******************* foreach -> It iterates over the element of an array and executes a callack function on that element */

arr.forEach(function (item) {
  // console.log(item)
});

arr.forEach(
    (item) => {
        // console.log(item+1);
    }
);

function addOne(item) {
    // console.log(item+2);
}

arr.forEach(addOne) //don't use addOne() in this way !!

arr.forEach(
    (item, index, array) => {
        // console.log(item,index,array)
    }
)

const dataArr = [
  {
    lang: "js",
    lang_desc: "Javascript",
  },
  {
    lang: "py",
    lang_desc: "Python",
  },
  {
    lang: "java",
    lang_desc: "Java",
  }
];

dataArr.forEach(
    (item) => {
        // console.log(`${item.lang} stands for ${item.lang_desc}`);
    }
)