const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  // const의 이름은 li(태그이름)으로 할 필요X
  // li 만들기
  const li = document.createElement("li");
  // span 만들기
  const span = document.createElement("span");
  // span을 li 안에 넣기
  li.appendChild(span);
  // span 안에 text 넣기
  span.innerText = newTodo;
  // li에 todolist 변수를 넣기
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // input의 현재 value를 새로운 변수에 복사하는 것
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
