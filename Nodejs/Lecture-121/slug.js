var slugify = require("slugify");

let a = slugify("some string"); // some-string

// if you prefer something other than '-' as separator
let b = slugify("some string by shaurav in vs code", "%"); // some_string

console.log(b)