//localStorage.setItem('data', 5);
//console.log(localStorage.getItem('data'));

let a = [1,2,3];
console.log(typeof a);
localStorage.setItem('data', JSON.stringify(a));

let b = localStorage.getItem('data');
b = JSON.parse(b);
console.log(b[1]);

console.log(typeof b);
// для очистки - clear, для удаления - remove


let xhttp = new XMLHttpRequest()

//создали новый объект

xhttp.onreadystatechange = function() {

    //когда будет меняться состояние объекта мы будет вызывать функцию
    if(this.readyState == 4 && this.status == 200) {
        myfunc(this.responseText);
    }
}

xhttp.open('GET', 'https://equeim.ru/', true)
xhttp.send();
function myfunc(data) {
    console.log(data);
}