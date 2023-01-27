//urok 6
// Punkt 1

// let a = 123;
// let b = prompt("Введи второе значение для сравнения")

// let result = a === b;
// switch (result) {
//     case true:
//         console.log("yes");
//         break;
//     case false:
//         console.log("no");
//         break;
//     default:
//         console.log("не сработало");
//         break;
// }


//Punkt 2

// let a = prompt("Напиши от 1 до 12");

// switch (a) {
//     case "1":
//     case "2":
//     case "3":
//         console.log("Зима");
//         break;

//     case "4":
//     case "5":
//     case "6":
//         console.log("Весна");
//         break;

//     case "7":
//     case "8":
//     case "9":
//         console.log("Лето");
//         break;

//     case "10":
//     case "11":
//     case "12":
//         console.log("Осень");
//         break;
//     default:
//         console.log("Напиши от 1 до 12.. Не меньше и не больше!");
//         break;
// }


//Punkt 3

let a = 123;
let b = "string";
let c = null;

console.log(a ?? b);
console.log(a ?? c);
console.log(b ?? c);

console.log('')

console.log(c ?? b);
console.log(c ?? a);
console.log(b ?? a);