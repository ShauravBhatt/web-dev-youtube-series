const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => renderTask(task));

function addTask() {
    const task = todoInput.value.trim();    

    if (task === "") {
        alert("Task can't be empty !!")
        return;
    }

    const newTask = {
        id : Date.now(),
        text : task,
        completed : false
    }

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function renderTask(task){
    const li = document.createElement('li');
    li.setAttribute("data-id",task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button><i class="fa-solid fa-trash-can"></i></button>
    `;
    todoList.appendChild(li);

    if(task.completed) li.classList.add("selected");

    li.addEventListener('click',(e) => {
        e.stopPropagation();
        if(e.target.tagName === "BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTask();
    });

    li.querySelector("button").addEventListener('click',(e)=>{
        e.stopPropagation();
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove();
        saveTask();
    });
}
