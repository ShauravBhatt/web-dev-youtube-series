//for , while , do-while

/************************ FOR LOOP *************************/

// for (let index = 0; index < 5; index++) {
//     console.log(` Shaurav ${index}`);
// }
// console.log(index) //We can't access it 

// for(let i =50 ; i<=100 ; i=i+10){
//     console.log(i)
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer Iteration No. : ${i}`);
//     for (let j = 1; j <=5; j++) {
//         console.log(`Inner Iteration No. : ${j}`)        
//     }
// }

// for (let num = 1; num <= 10 ; num++) {
//     console.log(`2 * ${num} = ${2*num}`);
// }

// for (let num = 1; num <= 10; num++) {
//     console.log(`Table of ${num} : `)
//     for (let num1 = 1; num1<=10; num1++) {
//         console.log(`${num}*${num1} = ${num*num1}`);
//     }    
// }

// for (let i = 10 ; i >= 1 ; i=i-2) {
//     console.log(i);
// }

let array = [1,2,"Shaurav",true];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

for (let i = 1; i <=5; i++) {
    if (i===3) {
        break; //It's used to terminate/stop a loop !!
    }
    // console.log(i)
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; //It's used to skip a iteration in loop !!
  }
//   console.log(i)
}

for(let i = 1 ; i<=100 ; i++){
    if(i%2!=0){
        continue;
    }
    // console.log(i)
}


/************************ WHILE LOOP *************************/

let i = 1;
while (i<=10) {
    // console.log(i);
    i=i+3;
}

let j = 10;
while (j >= 1) {
//   console.log(j);
  j = j - 2;
}

let index = 0;
while (index<array.length) {
    // console.log(array[index]);
    index++;
}

/************************ DO-WHILE LOOP *************************/

let k = 1 ;
do {
    console.log(k);
    k++;
} while (k<=0);