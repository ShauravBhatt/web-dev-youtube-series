const fs = require("fs");

// fs.writeFileSync("text.txt","Shaurav is here and i hope you all are getting good information about the nodejs which is a runtime environment of js"); //synchronous way to create file

// const data = fs.readFileSync("./text.txt","utf-8") //It returns us binary data
// console.log(data.toString()); //Synchronous way me file read

// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log("File content: ",data);
// }) //Asynchronous way me file read

// const buffer = Buffer.from("Hello");
// console.log(buffer); //Creating buffer

// fs.watch("./text1.txt", (event, filename) => {
//     console.log(`${filename} file changed !! Event: ${event}`);
// });