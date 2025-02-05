//Switch case statements

let day = 4 ;

// if (day == 1) {
//   console.log("Sunday");
// } else if (day == 2) {
//   console.log("Monday");
// } else if (day == 3) {
//   console.log("Tuesday");
// } else if (day == 4) {
//   console.log("Wednesday");
// } else if (day == 5) {
//   console.log("Thursday");
// } else if (day == 6) {
//   console.log("Friday");
// } else if (day == 7) {
//   console.log("Saturday");
// }else{
//     console.log("Please enter a valid Input");
// }


// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4: 
//         console.log("Wednesday");
//         break;
//     case 5: 
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Please enter a valid Input");
//         break;
// }

if (" ") {
//   console.log("Executed..");
} else {
//   console.log("Not Executed");
}

//Truthy Values : true , " " ,"anything" , "false" , "0", [], {}, function(){}, 1 

//Falsy Values : false , "", 0 , -0 , 0n , null , undefined , NaN 

// let arr = [1,2,3];

// if (arr.length === 0) {
//     console.log("Array is Empty !");
    
// } else {
//     console.log("Array is Not Empty !");
    
// }

/************************* Nullish Coalescing Operator ******************************/
// Basically it works only with 'null' and 'undefined'

let val1;
// val1 = 10;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 16;
// val1 = null ?? undefined;
// val1 = undefined ?? null;
val1 = undefined ?? 10 ?? null;

// console.log(val1);

//It's use is that it avoids the null and undefined data type till an extent and sets the predefined values.

/************************* Ternary Operator ***********************/
// (condition) ? (if true) : (if false) ;

let num3 = 20 ;
// (num3%2==0) ? (console.log("Even")) : (console.log("Odd"));