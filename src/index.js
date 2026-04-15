// Wait for DOM to fully load (important)
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input
    const taskInput = document.getElementById('new-task-description');
    const taskValue = taskInput.value;

    // Prevent empty tasks
    if (taskValue.trim() === "") return;

    // Create task
    buildToDo(taskValue);

    // Clear input
    taskInput.value = "";
  });

  function buildToDo(task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    // Mark complete
    li.addEventListener('click', () => {
      li.style.textDecoration =
        li.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

});
