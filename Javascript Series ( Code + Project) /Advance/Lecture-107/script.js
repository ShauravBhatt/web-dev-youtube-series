// console.log(Math.PI);
// Math.PI = 9 ;
// console.log(Math.PI); //We can't change the value of PI inside Math Object

// const piDescriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(piDescriptor);

let User = {
    name : "Shaurav",
    email : "s@gmail.com",
    age : 19,
    greet: function(){
        console.log(`Hello, i am ${this.name}`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(User,"name"));
// Object.defineProperty(User,"name",{
//     // enumerable: false,
//     writable: false
// })
// User.name = "Bhatt";

Object.defineProperty(User,"greet",{
    enumerable: false,
    // writable: false
})

// for (const [key, value] of Object.entries(User)) {
//   if (typeof value !== "function") {
//     console.log(`Key: ${key} & Value: ${value}`);
//   }
// }

for (const [key, value] of Object.entries(User)) {
    console.log(`Key: ${key} & Value: ${value}`);
}

// console.log(Object.getOwnPropertyDescriptors(User));