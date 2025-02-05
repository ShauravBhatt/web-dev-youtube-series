//Control Flow

// let a = 9 ;
// let b = 19 ;
// let result = a+b;
// console.log(a+b); //It's a example of sequential flow


let var1 = 100;

if (var1 < 50) {
    // console.log("Less than 50");
}else{
    // console.log("Greater than 50");
}

// console.log("Greater than 50"); "It executes every time"

//Either 'if' block gets executed or 'else' block gets executed both can't get executed at same time.

// 2>2 , 2=="2" , 2!=2 , 2===2 , 2==="2" , 3>=1 , 3>=3 , 3<=3 , ...

let num = 11 ;

if (num%2==0) {
    // console.log("It's Even");    
} else {
    // console.log("It's Odd");
}

// if (true) console.log("Hello"),console.log("Again Hello"); //don't use it 


let temp = 50;

if (temp < 50) {
//   console.log("Less than 50");
} else if (temp == 50) {
//   console.log("Equal to 50");
} else {
//   console.log("Greater than 50");
}

// && -> Logical AND operator (returns true if and only if when all condition is true)
// || -> Logical OR operator (returns true if any one condition is true)

let num1 = 16 ;
// if (num1>10) {
//     if(num1<20){
//         console.log("It's between 10 and 20");
//     }else{
//         console.log("Not between 10 and 20");
//     }
// }

if (num1 > 10 && num1 < 20) {
//   console.log("Between 10 & 20");
} else {
//   console.log("Not between 10 and 20");
}

let userGmail = true;
let userMail = true;
if(userGmail || userMail){
    // console.log("You're Welcome");
}
else{
    // console.log("Please sign in")
}