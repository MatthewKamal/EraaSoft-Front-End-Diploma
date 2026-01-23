let input = document.querySelector(".writingTask");
let creating_Task = document.querySelector(".addingTask");
let All_title = document.querySelector(".allButton");
let toDo_title = document.querySelector(".toDoButton");
let Completed_title = document.querySelector(".completedTaskButton");
let Tasks = document.querySelector(".childContainer_3");
let tasks = [];
let counter = 1;
let currentFilter = "all";

function highlightActive(button) {
  [All_title, toDo_title, Completed_title].forEach((btn) => {
    btn.classList.remove("active-filter");
  });
  button.classList.add("active-filter");
}

creating_Task.addEventListener("click", () => {
  const taskText = input.value.trim();
  let data_Task = new Date();
  if (!taskText) return;

  const newTask = {
    id: counter,
    title: taskText,
    completed: false,
    createdAt: data_Task.toLocaleString(),
  };

  tasks.push(newTask);
  counter++;
  renderTasks();
  input.value = "";
});

function renderTasks() {
  Tasks.innerHTML = "";
  tasks.forEach((task) => {
    if (currentFilter === "todo" && task.completed) return;
    if (currentFilter === "completed" && !task.completed) return;
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task", "d-flex", "flex-column", "w-100");
    taskDiv.classList.add(task.completed ? "completed" : "in-progress");

    taskDiv.innerHTML = `
      <h4>${task.title}</h4>
      <span class="task1">Task No:${task.id}</span>
      <div class="d-flex justify-content-between">
        <p class="text-muted">${task.createdAt}</p>
        <button class="inProgress btn ${
          task.completed ? "btn-success" : "btn-danger"
        }">
          ${task.completed ? "Completed" : "Progress"}
        </button>
      </div>
    `;

    const button = taskDiv.querySelector(".inProgress");
    button.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    Tasks.appendChild(taskDiv);
  });
}

All_title.addEventListener("click", () => {
  currentFilter = "all";
  highlightActive(All_title);
  renderTasks();
});

toDo_title.addEventListener("click", () => {
  currentFilter = "todo";
  highlightActive(toDo_title);
  renderTasks();
});

Completed_title.addEventListener("click", () => {
  currentFilter = "completed";
  highlightActive(Completed_title);
  renderTasks();
});

highlightActive(All_title);
