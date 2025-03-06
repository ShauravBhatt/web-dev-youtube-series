const fs = require("fs");
const filePath = "./todo.json";

const command = process.argv[2];
const argument = process.argv[3];

const loadTask = ()=> {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
} 

const saveTask = (tasks) =>{
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync("./todo.json",dataJSON);
} 

const addTask = (task)=>{
    let tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
}

const listTasks = ()=>{
    const tasks = loadTask();
    tasks.forEach((task,index) => {
        console.log(`Task-${index+1} : ${task.task}`);
    })
}

const removeTask = (id)=>{
    let taskId = id-1;
    let tasks = loadTask();
    tasks = tasks.filter((task,index) => taskId !== index);
    saveTask(tasks);
}

if(command == "Add"){
    addTask(argument);
}else if(command == "List"){
    listTasks();
}else if(command == "Remove"){
    removeTask(parseInt(argument));
}else{
    console.log("Error: Command Not Found !!");
}