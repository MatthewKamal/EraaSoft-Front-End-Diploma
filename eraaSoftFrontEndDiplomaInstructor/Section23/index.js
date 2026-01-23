import { todoTasks } from "./todo-item.js";

const todo1 = new todoTasks("Learn JavaScript Closures");
const todo2 = new todoTasks("Build Todo App");

console.log(todo1);
console.log(todo2);

todo1.updateContent("OOP Task is done");

todo1.markAsCompleted();

todo2.markAsCompleted();
todo2.markAsTodo();

console.log("After updates:");
console.log(todo1);
console.log(todo2);
