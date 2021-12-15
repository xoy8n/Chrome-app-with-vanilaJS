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
  // foreach는 paintTodo를 기본적으로 실행함, foreach는 각각의 item(object)를 줌
  parsedToDos.forEach(paintToDo);
}

// array에서 item을 삭제하고 싶으면 filter를 이용해서 지우고 싶은 item을 제외하고 새 array를 만든다.
function sexyFilter() {
  // 이 함수는 만약 새 array에도 기존 아이템들을 포함시키고 싶다면 반드시 true를 리턴해야 함
  // 만약 false를 리턴한다면 기존 item들은 새 array에 포함되지 않는다.
  // !== 는 다르면 남아있고, 같으면 array에서 없어진다.
}

/*
const arr =[1234,3535,2465,464,234356,234]
function sexyFilter(number){return number > 1000}

arr.filter(sexyFilter) // [1234, 3535, 2465, 234356]



//////////////////////////////////////////////////////////////////



const todos = [{"text":"hello","id":1639552017017},{"text":"a","id":1639552112384},{"text":"b","id":1639552112986},{"text":"c","id":1639552113541}]
function sexyFilter(todo){return todo.id!== 1639552017017}

todos.filter(sexyFilter) // 같은(1639552017017)id를 제외하고 3개가 array에 남아있음



//////////////////////////////////////////////////////////////////



const todos = [{text:"lalala"}, {text:"lololo"}]
function sexyFilter(todo){return todo.text !=="lololo"}

todos.filter(sexyFilter) // [{text:"lalala"}]
*/
