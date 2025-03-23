const user_input = document.getElementById("input");
const todo_items = document.getElementsByClassName("todo-items")[0];

function addTask() {
  const user_input_value = user_input.value;

  const task = document.createElement("div");
  task.classList.add("task");
  
  task.innerHTML = `
      <p id="task-name">${user_input_value}</p>
      <div class="actions">
        <input type="checkbox" id="checkbox" onclick="toggleTask(this)" />
        <button id="delete" onclick="deleteTask(this)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

  todo_items.prepend(task);
  user_input.value = "";
}

function deleteTask(button) {
  const task = button.closest(".task");
  task.style.animation = "slideOut 0.25s ease forwards";
  setTimeout(() => {
    task.remove();
  }, 500);
}

function toggleTask(checkbox){
  const p = checkbox.closest(".task").querySelector("#task-name");
  p.style.textDecoration = checkbox.checked ? "line-through" : "none";
  p.style.opacity = checkbox.checked ? 0.5 : 1;
}