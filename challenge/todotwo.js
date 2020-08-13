// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
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
    toDoList.removeChild(li);
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
    toDoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: text
    };
    toDos.push(toDoObj);
    saveToDos();
}

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
    saveFinish();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadFinish() {
    const loadedFinished = localStorage.getItem(FINISH_LS);
    if (loadedFinished) {
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function (ele) {
            finishToDo(ele.text);
        });
    }
}

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
    toDoForm.addEventListener("submit", handleSubmit);
}

init();