const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  // input의 현재 value를 새로운 변수에 복사하는 것
  const newTodo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
