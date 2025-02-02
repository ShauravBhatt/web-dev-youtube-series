//Object Literal Method
let myObj = {};

//Object Constructor Method
let myObj1 = new Object(); //Singleton Pattern

// console.log(myObj)
// console.log(myObj1)

myObj1["full name"]= "Shaurav Bhatt";
myObj1.age = 19;
myObj1.greet=function(){
    console.log(`Hello, Mr. ${myObj1["full name"]}`);
    return "";
}

// console.log(myObj1.greet())

let obj1 = {1:'a',2:'b'};
let obj2 = {3:'c',4:'d'};
let obj3 = {5:'e',6:'f'};
let obj4 ={obj1,obj2,obj3}
// console.log(obj4)
let obj5 = Object.assign({},obj1,obj2,obj3) //standard way to merge your objects
// console.log(obj5)
let obj6 = {...obj1,...obj2,...obj3}
// console.log(obj6);

//Nested Objects
let name = {
    fullname: {
        username: {
            firstName: "Shaurav",
            lastName: "Bhatt"
        }
    }
}

// console.log(name.fullname.username.firstName)

// console.log(obj1);
// console.log(Object.entries(obj1));
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// console.log(obj1.hasOwnProperty('3'))


const userInfo = {
    name: "Shaurav",
    email: "bhatt@gmail.com",
    date: "12-12-2012",
    isLoggedIn: true
}

// console.log(userInfo)
console.log(userInfo.isLoggedIn);

//Object Destructuring
// const {isLoggedIn,date} = userInfo;
// console.log(isLoggedIn,date);
// const {name:n , isLoggedIn:is} = userInfo;
// console.log(n,is)


