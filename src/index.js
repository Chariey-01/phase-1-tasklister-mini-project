const form = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const task = event.target["new-task-description"].value;

  buildToDo(task);

  // clear form
  form.reset();
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
}

