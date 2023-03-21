// 1
let a = new Set();
a.add('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('e')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
console.log(a);

//2
let butadd = document.querySelector('.butadd');
let butcheck = document.querySelector('.butcheck');
let butmas = document.querySelector('.butmas');

butadd.onclick = function () {
    let inpadd = document.getElementById('inpadd').value;
    a.add(inpadd)
    console.log(a);
   }
   

//3
butcheck.onclick = function () {
    let inpcheck = document.getElementById('inpcheck').value;
    if (a.has(inpcheck)) {
        document.getElementById('outp').innerHTML = true;
    } else {
        document.getElementById('outp').innerHTML = false;
    }
   }

//4
let arr = [1,6,3,7,2,8,3,9,4,12,11];
let arr2 = [];

butmas.onclick = function () {
    for (let i of arr)
    {
        if (i > 5) {arr2.push(i);}
    }
    console.log(arr2);
    document.getElementById('outpmas').innerHTML = arr2;
}
