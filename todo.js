const timer = () => {
    const clock = document.querySelector('.clock');
    const time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();

    var clockDate = time.getDate();

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







function addItem() {
    let item = document.querySelector(".addToDoInfo");
    if (item != null) {
        itemList.push(item);
        document.querySelector(".addToDoInfo").value = "";
        document.querySelector(".addToDoInfo").focus();
    }
    
}


let i = j = 0;


function addActiveList() {
    let todovalue = document.querySelector(".addToDoInfo").value;
    let li = document.createElement("li");
    let button = document.createElement("button");

    let inputButton = document.querySelector(".okay");
    inputButton.addEventListener("click", addItem);


    button.className = "doneBtn" + i;
    li.innerHTML = todovalue;
    button.innerHTML = "✔";
    li.appendChild(button);
    document.querySelector(".listActive").appendChild(li);
    document.querySelector(".doneBtn"+i).addEventListener('click', doneActive);
    document.querySelector(".addToDoInfo").value = '';
    i++;


    return false;
}

function doDelete() {

    let li = document.createElement("li");

    button.className = "deleteBtn" + i;
    li.innerHTML = "❌";
    li.appendChild(button);
    document.querySelector(".listActive").appendChild(li);
    document.querySelector(".deleteBtn"+i).addEventListener('click', deleteDo);
    document.querySelector(".addToDoInfo").value = '';
    i++;


}

function deleteDo() {
    li.parentNode.parentNode.removeChild(li.parentNode);
};





function doneActive() {
    let content = this.parentNode;
    this.innerHTML = "❌";
    this.className = "deleteBtn" + j;
    document.querySelector(".deleteBtn"+j).addEventListener('click', deleteDone);
    j++;
    document.querySelector(".listDone").appendChild(content);
}

function deleteDone() {
    this.parentNode.parentNode.removeChild(this.parentNode);
};






//-------------------------------------------------------------------


"use strict";

window.onload = () => {
    //이벤트를 적용할 엘리먼트 선택
    const checkInput = document.querySelector('#addToDoInfo');
    const inputSumbitBtn = document.querySelector('#okay');
    const todos = document.querySelector('#listActive');

    // todo관련 데이터 저장 변수 설정
    let inputValue;
    let todoListData = [];
    // let todo = [];

    // 이벤트 바인딩

    // 인풋값 받아오기
    checkInput.addEventListener("keyup", function(event) {
        if (event.code == "Enter") {
            inputSumbitBtn.onclick();
        } else {
            inputValue = this.value;
        }
    });

    //인풋값 데이터에 등록하기
    inputSumbitBtn.onclick = function() {
        if (inputValue == undefined || inputValue == "") {
            alert("데이터를 입력해 주세요!");
        } else {
            todoListData.push(inputValue);
            checkInput.value = "";
            inputValue = undefined;
            makeList(todos, todoListData);
            let todo = document.querySelectorAll('.addToDoInfo');
            todoClickEvent(todo, todoListData);
        }
    }

};

//todo 리스트 템플릿을 생성하는 함수
function makeList(target, data) {
    let targetChild = document.querySelectorAll('.');
    for (let child of targetChild) {
        target.removeChild(child);
    }
    for (let i = 0; i < data.length; i++) {
        let template = `<li class="todo list-group-item col-xs-12">
        <input type="checkbox" class="checkbox-inline" style="margin:0;">
        <b>${data[i]}</b>
        <span class="delete glyphicon glyphicon-trash" style="cursor:pointer;";></span>
        <span class="edit glyphicon glyphicon-pencil" style="cursor:pointer;";></span>
        </li>`;
        target.innerHTML += template;
    }
}

//check박스를 클릭 할때 마다 스타일 변화 및 삭제기능 추가
function todoClickEvent(target, data) {
    //this 지정

    for (let i = 0; i < target.length; i++) {
        // console.log(target[i].childNodes)
        //스타일 변화
        target[i].childNodes[1].addEventListener('click', function() {
            if (this.parentNode.classList.value.indexOf("checked") >= 0) {
                this.parentNode.classList.remove("checked");
                this.parentNode.style.color = "#000";
            } else {
                this.parentNode.classList.add("checked");
                this.parentNode.style.color = "red";
            }
        });
        //삭제
        target[i].childNodes[5].addEventListener('click', function() {
            if (this.parentNode.classList.value.indexOf("checked") >= 0) {
                this.parentNode.remove();
                data.splice(i, 1);
                target = document.querySelectorAll('.todo');
            }
        });
        // 수정
        target[i].childNodes[7].addEventListener('click', function() {
            var prompt = window.prompt("수정할 내용을 입력해주세요");
            if (prompt.length > 0) {
                this.parentNode.childNodes[3].innerHTML = prompt;
                data[i] = prompt;
            }
        });
    }
};