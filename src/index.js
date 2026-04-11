const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);

  taskInput.value = "";
});

