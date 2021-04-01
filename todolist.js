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






const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];  
function saveToDos () {  
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = text;
    li.appendChild(span);
    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : toDos.length+1
    }

    toDos.push(toDoObj);
    saveToDos(toDos);
}

function handleSubmit(event) {
    event.preventDefault();
    const toDoText = toDoInput.value;
    paintToDo(toDoText);
    toDoInput.value="";
    
    
}

function loadToDolist() {
    const getList = JSON.parse(localStorage.getItem(TODOS_LS));
    if(getList === null){

    }else{
        getList.forEach(function(todo){
            paintToDo(todo.text);
        })
    }
}


// 삭제버튼 구현해보기








function init() {
    loadToDolist();
    toDoForm.addEventListener('submit',handleSubmit);

}

init();