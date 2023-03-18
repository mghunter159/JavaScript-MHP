let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');

let arr = [1,2,3,4,5,6,7,8,9,10,11];

let arrmatrix = [
    ['один', 'два'],
    ['три', 'четыре'],
    ['пять', 'шесть']
];

button1.onclick = function () {
 let outp = arr[5];
 document.getElementById('outp').innerHTML = outp;
}

button2.onclick = function () {
    let arr2 =[];
    for (var i = 0; i < arr.length; i++)
        {
            if ((arr[i] % 2) === 0)
                { 
                    arr2.push(arr[i]);
                    document.getElementById('outp').innerHTML = arr2;     
                }
        }
}

button3.onclick = function () {
    let arr2 =[];
    for (var i = 0; i < arr.length; i++)
        {
            if ((arr[i] % 2) !== 0)
                { 
                    arr2.push(arr[i]);
                    document.getElementById('outp').innerHTML = arr2;     
                }
        }
}

button4.onclick = function () {
    let arr3 = arrmatrix.reverse();
    let outp = ' ';
    for (let i= 0; i < arr3.length; i++)
    {
        for (let j=0; j < arr3[i].length; j++) {
            outp = outp + arr3[i][j]+ ' ';
        }
        outp = outp + '<br>';
    }
    document.getElementById('outp').innerHTML = outp;   
}