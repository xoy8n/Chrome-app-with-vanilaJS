const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// todo의 array내용을 localStorage에 넣는 것
function saveToDos() {
  //JSON.stringify는 그 요소가 어떤것이든 string형으로 만들어줌
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string형이 array로 변함
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/* 
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
    이렇게 쓰거나 밑처럼 쓰거나 똑같음
    function sayHello(item) {
    console.log("this is the turn of", item);
    }
 
 */
