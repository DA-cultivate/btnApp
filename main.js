var display = document.getElementById('display');

function btn1(){
    if(display.textContent === '４桁の数字当てよう' || display.textContent === '不正解'){
        display.textContent = '';
        display.textContent = display.textContent + 1;
        sound3();
    } else {
        display.textContent = display.textContent + 1;
        sound3();
    }
}

function btn2(){
    if(display.textContent === '４桁の数字当てよう'　|| display.textContent === '不正解'){
        display.textContent = '';
        display.textContent = display.textContent + 2;
        sound3();
    } else {
        display.textContent = display.textContent + 2;
        sound3();
    }
}

function btn3(){
    if(display.textContent === '４桁の数字当てよう'　|| display.textContent === '不正解'){
        display.textContent = '';
        display.textContent = display.textContent + 3;
        sound3();
    } else {
        display.textContent = display.textContent + 3;
        sound3();
    }
}

function btn4(){
    if(display.textContent === '４桁の数字当てよう'　|| display.textContent === '不正解'){
        display.textContent = '';
        display.textContent = display.textContent + 4;
        sound3();
    } else {
        display.textContent = display.textContent + 4;
        sound3();
    }
}

function riset(){
    display.textContent = '';
}

function sound() {
    document.getElementById('sound').play();
}

function sound2() {
    document.getElementById('sound2').play();
}

function sound3() {
    document.getElementById('sound3').play();
}

function ok() {
    if (display.textContent === '1342'){
        display.textContent = '大正解！！！！';
        sound();
    } else if (display.textContent === '222'){
        display.textContent = 'なぜこれに行き着いた？';
    }else {
        display.textContent = '不正解';
        sound2();
    }
}