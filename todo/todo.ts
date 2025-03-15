import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function showMenu(){
    console.log("\n Choose an option");
    console.log("1. List tasks");
    console.log("2. Add Task");
    console.log("3. Mark Task as Completed");
    console.log("4. Exit");

}
interface Task{
    id: number;
    title: string;
    completed: boolean;
}

// Create an Array

let tasks: Task[] = [];
function addTask(title: string): void{
    const task: Task={id: tasks.length, title, completed: false };
    tasks.push(task);
    console.log("Task Added Sucessfully");

}

function listTasks(): void{
    console.log("\n Todo List ");
    tasks.forEach((task)=>{
        console.log(`${task.id}. [${task.completed ?"✔":" "}] ${task.title}`);
    });
}

function markAsCompleted(id: number): void{
    const task = tasks.find((p)=>p.id === id);
    if(task){
        task.completed = true;
        console.log(`${task.title} completed`);
    }else{
        console.log("Task Id not found");
    }

}

function main(){
    showMenu();
    rl.question("\n Enter your choice below",(choice)=>{
        if(choice === "1"){
            listTasks();
            main();
        }else if(choice === "2"){
            rl.question("Enter Task Title", (title)=>{
                addTask(title);
                main();
            })
        } else if(choice === "3"){
            rl.question("Enter Task id", (id)=>{
                markAsCompleted(Number(id));
                main();
            })
        } else if(choice === "4"){
            console.log("Exitting......");
            rl.close();
        } else{
            console.log("Invalid option. Try Again");
            main();
        }
    });
}

main();