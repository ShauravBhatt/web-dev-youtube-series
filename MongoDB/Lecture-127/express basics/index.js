import express from "express";

const app = express();
const port = 3001;

app.get("/" , (req,res) => {
    res.send("Welcome to the index page !!")
})

app.get("/about", (req, res) => {
  res.send("Welcome to the about page !!");
});

app.listen(port,()=>{
    console.log(`Server is running and listening at port ${port} ...`);
})