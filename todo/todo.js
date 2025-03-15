"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function showMenu() {
    console.log("\n Choose an option");
    console.log("1. List tasks");
    console.log("2. Add Task");
    console.log("3. Mark Task as Completed");
    console.log("4. Exit");
}
// Create an Array
var tasks = [];
function addTask(title) {
    var task = { id: tasks.length, title: title, completed: false };
    tasks.push(task);
    console.log("Task Added Sucessfully");
}
function listTasks() {
    console.log("\n Todo List ");
    tasks.forEach(function (task) {
        console.log("".concat(task.id, ". [").concat(task.completed ? "✔" : " ", "] ").concat(task.title));
    });
}
function markAsCompleted(id) {
    var task = tasks.find(function (p) { return p.id === id; });
    if (task) {
        task.completed = true;
        console.log("".concat(task.title, " completed"));
    }
    else {
        console.log("Task Id not found");
    }
}
function main() {
    showMenu();
    rl.question("\n Enter your choice below", function (choice) {
        if (choice === "1") {
            listTasks();
            main();
        }
        else if (choice === "2") {
            rl.question("Enter Task Title", function (title) {
                addTask(title);
                main();
            });
        }
        else if (choice === "3") {
            rl.question("Enter Task id", function (id) {
                markAsCompleted(Number(id));
                main();
            });
        }
        else if (choice === "4") {
            console.log("Exitting......");
            rl.close();
        }
        else {
            console.log("Invalid option. Try Again");
            main();
        }
    });
}
main();
