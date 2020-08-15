const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList"),
    finiList = document.querySelector(".js-finishList");

const TODOS_LS = "PENDING";
const FINISH_LS = "FINISHED";
let toDos = [];
let fiNish = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveFinish() {
    localStorage.setItem(FINISH_LS, JSON.stringify(fiNish));
}

function deleteToDo(event) {
    const li = event.target.parentNode;
    todoList.removeChild(li);
    toDos = toDos.filter(function (toDo) {
        return toDo.id !== Number(li.id);
    });
    saveToDos();
}

function deleteFinish(event) {
    const li = event.target.parentNode;
    finiList.removeChild(li);
    fiNish = fiNish.filter(function (toDo) {
        return toDo.id !== Number(li.id);
    });
    saveFinish();
}

function moveTodo(event) {
    deleteToDo(event);
    const li = event.target.parentNode;
    const text = li.querySelector("span").innerText;
    finishToDo(text);
}

function movefinish(event) {
    deleteFinish(event);
    const li = event.target.parentNode;
    const text = li.querySelector("span").innerText;
    paintToDo(text);
}

// 할일 목록 ele먼트와 객체를 생성하고 배열에 추가
// JSON데이터로 변환해 로컬스토리지에 저장
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = Math.floor(Math.random() * 1000000000) + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    checkBtn.innerText = "✅";
    checkBtn.addEventListener("click", moveTodo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    todoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: text
    };
    toDos.push(toDoObj);
    saveToDos();
}

// 완료 목록 ele먼트와 객체를 생성하고 배열에 추가
// JSON데이터로 변환해 로컬스토리지에 저장
function finishToDo(text) {
    const fli = document.createElement("li");
    const fdelBtn = document.createElement("button");
    const fcheckBtn = document.createElement("button");
    const fspan = document.createElement("span");
    const newId = Math.floor(Math.random() * 1000000000) + 1;
    fdelBtn.innerText = "❌";
    fdelBtn.addEventListener("click", deleteFinish);
    fcheckBtn.innerText = "🔙";
    fcheckBtn.addEventListener("click", movefinish);
    fspan.innerText = text;
    fli.id = newId;
    fli.appendChild(fspan);
    fli.appendChild(fdelBtn);
    fli.appendChild(fcheckBtn);
    finiList.appendChild(fli);
    const finiObj = {
        id: newId,
        text: text
    };
    fiNish.push(finiObj);
    saveFinish()
}

// 인풋 이벤트 발생시 이전 이벤트는 지우고
// 할일 목록에 추가, 인풋은 삭제
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

// 로컬스토리지에 완료 목록이 있다면 js테이터로 변환 및 html 추가
function loadFinish() {
    const loadedFinished = localStorage.getItem(FINISH_LS);
    if (loadedFinished) {
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function (ele) {
            finishToDo(ele.text);
        });
    }
}

// 로컬스토리지에 할일 목록이 있다면 js테이터로 변환 및 html 추가
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (ele) {
            paintToDo(ele.text);
        });
    }
}

function init() {
    loadToDos();
    loadFinish();
    todoForm.addEventListener("submit", handleSubmit);
}

init();