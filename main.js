/*//localStorage.setItem('data', 5);
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
}*/

//Долгий
/*fetch('http://127.0.0.1:5500/index.html')
.then(data =>{
    console.log(data)
    data.text().then(data2 => {
        console.log(data2)
    })
})*/

//Средний
/*fetch('http://127.0.0.1:5500/index.html')
.then(data =>{
    console.log(data)
    return data.text()
})
.then(data =>{
    console.log(data)
})*/

//Самый вариант
/*fetch('http://127.0.0.1:5500/index.html')
.then(data => data.text())
.then(data => console.log(data))*/


let a = new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5500/index.html')
    .then(data =>{
        resolve(data.text())
    })
})

let b = new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:5500/index.html')
    .then(data =>{
        resolve(data) 
    })
})

/*a.then(data => {
    console.log(data)
})*/

Promise.all([a,b]).then(data => {
    console.log(data)
})



