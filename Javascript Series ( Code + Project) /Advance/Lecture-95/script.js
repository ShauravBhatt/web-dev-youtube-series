// // Promise is an object that represents the eventual completion or failure of asynchoronus code !!

// const prm = new Promise((resolve,reject)=>{
//     setTimeout(function () {
//         console.log("Hello i am Printed !!");
//         resolve();
//     },2000)
// });

// prm.then(()=>{
//     console.log("Promise is Completed !!");
// })

// new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Hello i am Printed !!");
//     resolve();
//   }, 1000);
// }).then(function(){
//     console.log("Promise 2 is completed !!");
// })

// new Promise((resolve, reject) => {
//   let data = false;
//   if(data){
//     console.log("Data is received !!");
//     resolve();
//   }else{
//     console.log("Data is not received !!");
//     reject();
//   }
// }).then(function () {
//     console.log("Promise 3 is successfully Completed !!");
// }).catch(function () {
//     console.log("Promise 3 is not Completed !!")
// })

// const pmr4 = new Promise(function (resolve,reject) {
//     let data = false;
//     if(data){
//         console.log("Data arrived from Database");
//         resolve({name: "Shaurav", age:19});
//     }else{
//         console.log("Data is not arrived !!");
//         reject("E: something Went Wrong !!");
//     }
// }).then((data)=>{
//     console.log(data);
//     return data.name;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected but completed !!");
// })

// const pmr5 = new Promise((resolve,reject)=>{
//     const xhr = new XMLHttpRequest(); //0
//     xhr.open("GET", "https://randomuser.me/ai/"); //1
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(this.responseText);
//         resolve(data.results[0]);
//       }else{
//         reject();
//       }
//     };
//     xhr.send();
// // })
// pmr5.then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log("Something Happened Try Again !!");
// })

async function data() {
  try {
    const raw_data = await fetch("https://api.github.com/users/ShauravBhatt");
    const data = await raw_data.json();
    console.log(data);
  } catch (error) {
    console.log("E: "+error);
  }
}
data();

// fetch("https://api.github.com/  users/ShauravBhatt").then((data)=>{
//     console.log("Converting Data into JSON !!");
//     return data.json();
// }).then((dataProper)=>console.log(dataProper)).catch("Error Occured !!").finally("code is Finished and we got the Data !!")
