const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let value = arr.forEach( (element) => console.log(element) );

// let value = arr.forEach( (element) => {
//     console.log(element);
//     return element;
// })

// console.log(value) //forEach function never returns any value in any case

/******* filter method *******/

// let return_value = arr.filter((item) => item >= 5);

// let return_value = arr.filter((item) => {
//     return item >= 5
// });

// console.log(return_value)

// const newArray = [];

// arr.forEach((item) => {
//   if (item >= 5) {
//     newArray.push(item);
//   }
// });

// console.log(newArray)

//Raw Data to Practice filter Method
const movies = [
  {
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance",
    director: "Aditya Chopra",
    rating: 8.1
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    year: 2001,
    genre: "Drama",
    director: "Karan Johar",
    rating: 7.4
  },
  {
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy",
    director: "Rajkumar Hirani",
    rating: 8.4
  },
  {
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: "Adventure",
    director: "Zoya Akhtar",
    rating: 8.2
  },
  {
    title: "PK",
    year: 2014,
    genre: "Comedy",
    director: "Rajkumar Hirani",
    rating: 8.1
  },
  {
    title: "Bajrangi Bhaijaan",
    year: 2015,
    genre: "Drama",
    director: "Kabir Khan",
    rating: 8.0
  },
  {
    title: "Gully Boy",
    year: 2019,
    genre: "Musical",
    director: "Zoya Akhtar",
    rating: 8.2
  },
  {
    title: "Andhadhun",
    year: 2018,
    genre: "Thriller",
    director: "Sriram Raghavan",
    rating: 8.2
  },
  {
    title: "Chhichhore",
    year: 2019,
    genre: "Drama",
    director: "Nitesh Tiwari",
    rating: 8.1
  },
  {
    title: "Tumbbad",
    year: 2018,
    genre: "Horror",
    director: "Rahi Anil Barve",
    rating: 8.2
  }
];

// let userChoice = movies.filter( (movie) => movie.rating>=8.4);

// let userChoice = movies.filter( (movie) => movie.genre === "Comedy" && movie.year>=2000);

// console.log(userChoice)

// console.log(arr);

const newArray1 = arr.map((item) => item + 10);
const newArray2 = newArray1.map( (item) => item/2);
// console.log(newArray1)
// console.log(newArray2)

// console.log(arr)


console.log(arr);
const newArray3 = arr.map( (item) => item*100 ).map( (item) => item-100 ).filter( (item) => item>=200 && item<=699); //way to perform chaining...
// console.log(newArray3)

let  shoppingCart = [1,2,3,4,5];

// const total = shoppingCart.reduce( function(accumulator,currentValue){
//     console.log(`${accumulator} and ${currentValue}`)
//     return accumulator+currentValue;
// });

// const total = shoppingCart.reduce( (acc,currVal) => {return acc+currVal},0)

console.log(total)