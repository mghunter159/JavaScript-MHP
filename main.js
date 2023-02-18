let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.onclick = function () {
    let div_btn1 = document.querySelector(".div_button1");
    div_btn1.style.height = "200px";
    div_btn1.style.width = "200px";
}

button2.onclick = function () {
    let div_btn2 = document.querySelector(".div_button1");
    div_btn2.style.fontFamily = "sans-serif";
    div_btn2.style.color = "red";
    div_btn2.style.fontSize = "8px";
}

button3.onclick = function () {
    let div_btn3 = document.querySelector(".div_button1");
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    switch(num) {
    case(0):
        div_btn3.style.removeProperty("fontFamily");
    case(1):
        div_btn3.style.removeProperty("color");
    case(2):
        div_btn3.style.removeProperty("font-Size");
    }
}