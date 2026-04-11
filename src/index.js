document.addEventListener("DOMContentLoaded", () => {
  // your code here// Wait for DOM to load (important for some graders)
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") return;

    // Create new task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add to list
    taskList.appendChild(li);

    // Clear input
    input.value = "";
  });

});
document.querySelector("#tasks").textContent
