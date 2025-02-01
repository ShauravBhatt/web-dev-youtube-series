//Object: It's a collection of key value pairs where key is also known as properties and it's either of string data type or symbol and values are of any data types. It's used to store data in organise manner.

//Singleton method -> Created by using constructer method !!


// Literal Method

let mySym = Symbol("key1");

let myObj = {
    "name":"Shaurav",
    "full name":"ShauravDeveloper",
    email:"bhatt@gmail.com",
    [mySym] : "myKey1",
    isLoggedIn:true,
    dayOfLogin:["Monday","Thursday"]
}

// console.log(myObj.name);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);

// console.log(myObj["full name"]);
// Object.freeze(myObj) //This method is used to stop the manipulation in object
// myObj["full name"]="Nikhil"
// console.log(myObj["full name"]);

myObj.greeting = function(){
    console.log("Hello Guys !!");
}

// console.log(myObj.greeting); //function defination batayega
// console.log(myObj.greeting()); //function ko execute kar dega


myObj.greet = function(){
    console.log(`Hello ${this["full name"]}`);
}

// console.log(myObj.greet());




