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






let itemList = [];
let inputButton = document.querySelector(".okay");
inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".addToDoInfo").value;
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
    let del = document.createElement("button");


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



function doneActive() {;
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