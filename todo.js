




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



//------시계 마무리.



const addButton = document.querySelector(".okay");
var input = document.querySelector(".addToDoInfo");
const container = document.querySelector(".container");
const doneContainer = document.querySelector(".doneContainer");
var clone = document.getElementById(container);

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";


        let itemBox = document.createElement('li');
        itemBox.classList.add('item');













        let editButton = document.createElement('button');
        editButton.innerHTML ="🛠";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "❌";
        removeButton.classList.add('removeButton');

        let doneButton = document.createElement('button');
        doneButton.innerHTML = "✔";
        doneButton.classList.add('doneButton');




        container.appendChild(itemBox);


        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        itemBox.appendChild(doneButton);


        editButton.addEventListener("click", () => this.edit(input) );
        removeButton.addEventListener("click", () => this.remove(itemBox));
            
    }


    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }





    }









function check(){
    if(input.value != ""){
        new item(input.value);
        input.value="";
    }
}


addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})




