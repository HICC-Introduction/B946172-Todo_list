//날짜 기록

//시간 기록
const timer = () => {
    const clock = document.querySelector('.clock');
    const time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    // 달을 받아옵니다 
    var clockDate = time.getDate();
    // 몇일인지 받아옵니다 
    let h = time.getHours();
    if (h == 0) {
        h = 12;
    }
    clock.innerHTML = 
				`${year}년 ${month+1}월 ${clockDate}일 <br/>
        ${addZero(h)}시 ${addZero(time.getMinutes())}분`;
        
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