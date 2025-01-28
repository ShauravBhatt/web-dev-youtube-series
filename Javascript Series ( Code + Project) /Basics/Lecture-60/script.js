let str = "Hello World !!"; //14 is the length
//console.log(str.substring(5,0)) //substring function treat negative values as 0 , if endIndex is smaller than startingIndex it this case substring swap the indices

//console.log(str.slice(3,0)) //slice handles the negative indices , slice function gives "" when endIndex is smaller than startingIndex.

// console.log(str.replace('l','j')) //replace only replaces the first occurance of the value.

//console.log(str.replace(/l/g, "j")); //replaceAll() can also be used to replace all the matching values

let user_name = "                    Shaurav     ";
// console.log(user_name.trim()); //remove whitespace from left and right both
// console.log(user_name.trimStart()); //remove whitespaces from start or left
// console.log(user_name.trimEnd()); //remove whitespaces from right ot end

let list_fruit = "Apple,Banana,Grapes";
// console.log(list_fruit.split(",",3)) // split make the string into array and limiter set the number of element split around the splitter

let statement = " Javascript is Fun !! ";
// console.log(statement.includes(" ")); //it tells that whether the input substring is present in the actual string

let name = "Shaurav"
let greet = "Hello"
let greeting = greet.concat(", ",name," !!") //Concatenate function simply adds up multiple string in one go 
// console.log(greeting)

// console.log(greet.indexOf('lo')); //tells the index of substring on it's first occurance

let names = "Bmit"; //A->65 , a->97
// console.log(names.charCodeAt(0));

// console.log(names.startsWith("B")) //It tells that a string is starts or not with the input substring

// console.log(names.endsWith("Bmit"))  //It tells that a string is ending or not with the input substring

let shout = "Hurray !! "
// console.log(shout.repeat(3)) //repeats the string given number of times

let opinion = "Javascript is a cool language"
// console.log(opinion.search("a"))

let str1 = "shaurav";
// console.log(str1.padStart(10, "~")); //Fills the empty space in given postion with given string
// console.log(str1.padEnd(15, "!!")); //Fills the empty space in given postion with given string

let string1 = "b";
let string2 = "b";
// console.log(string1.localeCompare(string2));