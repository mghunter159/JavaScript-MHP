let a = "Значение из переменной А";
let clcbtn = document.querySelector(".func");

function one() {
    let div = document.querySelector('.func_out');
    div.innerHTML = a;
}
clcbtn.onclick = one;


//calc

let inputCalc = document.querySelector('.calcinp');
let btnPlus = document.querySelector('.calcplus');
let btnMin = document.querySelector('.calcmin');
let btnDel = document.querySelector('.calcdel');
let btnUmn = document.querySelector('.calcumn');

btnPlus.onclick = function () {
    
    let inp = Number(inputCalc.value);
    let outp = inp + 3;

    document.getElementById('outp').value = outp;
    console.log(outp);
}

btnMin.onclick = function () {
    
    let inp = Number(inputCalc.value);
    let outp = inp - 5;

    document.getElementById('outp').value = outp;
    console.log(outp);
}

btnDel.onclick = function () {
    
    let inp = Number(inputCalc.value);
    let outp = inp / 10;

    document.getElementById('outp').value = outp;
    console.log(outp);
}

btnUmn.onclick = function () {
    
    let inp = Number(inputCalc.value);
    let outp = inp * 22;

    document.getElementById('outp').value = outp;
    console.log(outp);
}