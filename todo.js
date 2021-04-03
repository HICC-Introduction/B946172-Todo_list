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





