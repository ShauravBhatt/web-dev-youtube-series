const myObj = {
  names: "Shaurav",
  greet: function () {
    console.log(`Hello, Mr. ${this.names} !!`);
    console.log(this);
  },
};

// myObj.greet();
myObj.names = "Xyz";
// myObj.greet();

// console.log(this);

function name(params) {
  console.log(this);
}

// name();

function greet() {
    names = "Shaurav"; //global context ke andar declare hua hai 
    console.log(this.names);
}

// greet();

const greet1 = function() {
  let names = "Shaurav"; //let ke vajeh se local context ke andar declare hua hai
  console.log(this.names);
}

// greet1();


const greet2 = function () {
  console.log(this);
};

// greet2();


/********************** Arrow Functions **************************/

const greeting = function() {
    console.log("Hello Shaurav"); 
}

// greeting()

const greetings =  () => {
  console.log(this); //values are not here, we are getting {}
};

// greetings();

// const addNum = (num1,num2) => {
//     return num1+num2; //Explicit return
// }

// const addNum = (num1,num2) => num1+num2; //Implicit return

// const addNum = (num1,num2) => ( "shaurav" ) ; //Implicit return

// const addNum = (num1,num2) => ({name:"Shaurav"}) ; //Implicit return

// console.log(addNum(1,2));


/****************************** IIFE ***************************/

// const run = function () {
//     console.log("Running..")
// }

// run(); //It's not an iife

(function runn(){ //Named IIFE
    console.log("Running in faster way !!");
})(); //between 2 IIFE's always put a ';' to make sure to tell the first IIFE that where to end it's context !!

((num1=0,num2=1)=>{ //Un-Named IIFE
    console.log(num1+num2);
})(3,6);

(()=>{
    console.log("Database Connected")
})();

