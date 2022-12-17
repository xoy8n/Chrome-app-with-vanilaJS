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
  li.remove();
  // 클릭한 li.id와 다른 toDo는 남기고 싶음(toDo.id!==li.id)
  // li.id는 string타입이고, toDo.id는 number이다.
  // 따라서 parseInt를 사용해서 li.id를 문자열을 number로 바꿔주어야한다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.style.fontSize = "30px";
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
  // foreach는 paintTodo를 기본적으로 실행함, foreach는 각각의 item(object)를 줌
  parsedToDos.forEach(paintToDo);
}
