document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  // Fonction pour créer un nouvel élément de tâche
  function createTaskElement(taskText) {
    const taskItem = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const inputValue = taskInput.tirm();
    taskCheckbox.addEventListener("change", function () {
      if (taskCheckbox.checked) {
        taskSpan.style.textDecoration = "line-through";
      } else {
        taskSpan.style.textDecoration = "none";
      }
    });

    // Bouton pour supprimer la tâche
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    // Bouton pour modifier la tâche
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
      const newText = prompt("Enter new task text:");
      if (newText !== null) {
        taskSpan.textContent = newText;
      }
    });
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(editBtn);
    return taskItem;
  }

  // Ajouter une tâche à la liste
  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskElement(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = "";
    } else alert("You have to write something.");
  });
});
