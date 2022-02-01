const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input[type=text]");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintTodo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
