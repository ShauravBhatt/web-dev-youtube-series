import express from "express";

const app = express();
const port = 3001;
app.use(express.json());

let studentData = [];
let currId = 1;

//code to add the student data
app.post("/students" , (req,res) => {
    const {studentName , studentClass} = req.body;
    if(studentName === "" || studentClass === ""){
        return res.send("Insert valid values only").status(404);
    }
    const newStudent = {
        studentId : currId++ ,
        studentName,
        studentClass
    };
    studentData.push(newStudent);
    res.send(newStudent).status(200);
})

//code to show all the data of students
app.get("/students",(req,res)=>{
    res.send(studentData).status(200);
})

//code to show data of particular student
app.get("/students/:id",(req,res)=>{
    let sId = parseInt(req.params.id);
    const student = studentData.find(s => s.studentId === sId);
    res.send(student).status(200);
})

//code to update the data of student
app.put("/students/:id" , (req,res)=>{
    let sId = parseInt(req.params.id);
    const student = studentData.find((s) => s.studentId === sId);
    const {studentName,studentClass} = req.body;
    student.studentName = studentName;
    student.studentClass = studentClass;
    res.send(student).status(200);
})

//code to delete the student data
app.delete("/students/:id",(req,res) => {
    const sId = parseInt(req.params.id);
    const foundStudent = studentData.some(s => s.studentId === sId);
    if(!foundStudent){
        return res.send("Enter correct ID !!");
    }
    studentData = studentData.filter(s => s.studentId !== sId);
    res.send(studentData).status(200);
})

app.listen(port,()=>{
    console.log(`Server is running and listening at port ${port}...`);
})