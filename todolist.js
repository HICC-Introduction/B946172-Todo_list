const timer = () => {
    const clock = document.querySelector('.clock');
    const today = new Date();
    let h = today.getHours();
    if (h == 0) {
        h = 12;
    }
    clock.innerHTML = 
        `${addZero(h)} : ${addZero(today.getMinutes())}`;
}

const addZero = (num) => {
    (num < 10) ? num = '0' + num : num;
    return num;
}

const start = () => {
  timer();
  setInterval(timer, 1000);
}

window.onload = start();

//시간 끝

const form = document.querySelector(".js-toDoForm"),
    input = form.querySelector("input"),
    list = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';

function paintToDo(text) {
    console.log(text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const toDos = localStorage.getItem()
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();