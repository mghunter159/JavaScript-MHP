
let jojo = "Это Jojo";
document.getElementById("one").innerHTML = jojo;
//document.querySelector('two').innerHTML = 'Bla';

let inputIn = document.querySelector('.text1');
let btn = document.querySelector('.btn');
let div = document.querySelector('.out');
btn.onclick = function () {
    console.log('da');
    console.log(inputIn.value);
    let e = inputIn.value;
    console.log(e); 
    div.innerHTML = e;
}
let e = inputIn.value;
console.log(e);

// let myBirthDay = prompt("Сколько тебе лет?");
// console.log(myBirthDay);

// if (myBirthDay == 22) {
//     alert("Да ты молод");
// } else if (myBirthDay == 23) {
//     alert('ты крут');
// } else if (myBirthDay == 33) {
//     alert('Ух');
// }
// else if (myBirthDay == " ") {
//     alert('Пробел?');
// }
// else if (typeof myBirthDay == "string") {
//     alert('Введи число');
// }
// else {
//     alert ("ты ничего не ввел");
// }

let numberPr = prompt("Больше или меньше 100?");

let number = document.querySelector('.number');

if (numberPr >= 100) {
    number.innerHTML = numberPr;
}
else {
    console.log(numberPr);
}