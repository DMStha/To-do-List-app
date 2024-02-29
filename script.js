let tasks = [];

// Function to render tasks
function renderTasks() {
  const listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.setAttribute("data-index", index);

    // Add a click event to toggle the 'checked' class
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("checked");
    });

    // Add a span with a delete button
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });

    listItem.appendChild(deleteButton);
    listContainer.appendChild(listItem);
  });
}

// Function to add a new task
function addTask() {
  const inputBox = document.getElementById("inputBox");
  const newTask = inputBox.value.trim();

  if (newTask !== "") {
    tasks.push(newTask);
    renderTasks();
    inputBox.value = ""; // Clear the input box
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering
renderTasks();
