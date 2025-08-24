/* task1*/
let x = "js";
console.log(x.toUpperCase());

/* task2*/
let x1 = "wdkJvb";
let arr = ['Wdkjvbcabj', 'acnklwdkjvb', 'wDkjvbnkcj', 'wdkjVBdjksks', 'cancelIdleCallback', 'njcsdjcdjk'];
function arrnew(arr, x1) {
   x1 = x1.toLowerCase();
   arrnew = arr.filter(el => el.toLowerCase().startsWith(x1));
   return arrnew;
}
console.log(arrnew(arr,x1));

/* task3*/
let x2 = 32.58884;
console.log(Math.floor(x2));
console.log(Math.ceil(x2));
console.log(Math.round(x2));

/* task4*/
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

/* task5*/
let x3 = 0;
let x4 = 0;
function random() {
   x3 = Number(Math.random() *9 + 1);
   return(x3);//Возвращает все числа от 1 до 10;
}
function random1() {
   x3 = Number(Math.random() *9 + 1);
   x4 = Math.round(x3); 
   return(x4);//Возвращает натуральные числа от 1 до 10;
}
console.log(random());
console.log(random1());

/* task6*/
let x5 = prompt("Введите  целое число - максимальное значение элкмента массива и одновремено половина количества элемантов");
let arr2 = [];
function arrinteger(x5) {
   
for (let index = 0; index < Math.floor(x5 / 2); index++) {
   arr2[index] = Math.random() * x5;
   arr2[index] = Math.round(arr2[index]);
}
return arr2;
}
console.log(arrinteger(x5));

/* task7*/
const min = prompt("Введите целое число - начало диапазона");
const max = prompt("Введите целое число - конец диапазон");
let diff = 0;
let total = 0;
function integerrange(min, max) {
   diff = max - min;
   let diffRandom = Math.random() * diff;
   total = Number(min) + Number(diffRandom); 
   return(total); // Возвращает целое случайное число в диапазоне
}
function integerrange1(min, max) {
   diff = max - min;
   let diffRandom = Math.random() * diff;
   diffRandom = Math.round(diffRandom);
   total = Number(min) + Number(diffRandom); 
   return(total); // Возвращает целое целое случайное число в диапазоне
}
console.log(integerrange(min, max));
console.log(integerrange1(min, max));

/* task8*/
let currentDate = new Date();
console.log(currentDate);

/* task9*/
let currentDate1 = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let t = Number(currentDate1) + Number(days73);
let date73daysfuture = new Date(t);
console.log(date73daysfuture);
// то же самое с использованием  setdate и getdate
let currentDate2 = new Date();
date = currentDate2.setDate(currentDate2.getDate() + 73);
console.log(new Date(date));

/* task10*/
let myDate = new Date();

function dateFormat(myDate) {
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let format = "Дата: " + myDate.getDate() + months[myDate.getMonth()] + myDate.getFullYear() + " - это " + days[myDate.getDay()] + ". Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

return(format);
}
console.log(dateFormat(myDate));
// /* task1*/
// let array = [1, 5, 4, 10, 0, 3];
// let index = 0;
// do {
// console.log(array[index]);
// index++;
// }
// while (array[index - 1] !== 10);

// /* task2*/
// let array1 = [1, 5, 4, 10, 0, 3];
// let index1 = 0;
// do {
// index1++;
// }
// while (array[index1 - 1] !== 4);
// console.log(index1 - 1);

// /* task3*/
// let array2 = [1, 5, 4, 10, 0, 3];
// let joinText = array2.join(' ');
// console.log(joinText);

// /* task4*/
// let array3 = [];
// let index3 = 0;
// let index4 = 0;
// for (let index4 = 0; index4 < 3; index4++) {  
//    array3[index4] = [];
// for (let index3 = 0; index3 < 3; index3++) {
//    array3[index4][index3] = 1;
//    console.log(array3[index4][index3]); // Вывод элементов массива по одному
// }  
// }
// console.log(array3); // вывод массива целиком

// /* task5*/
// let array4 = [1, 1, 1];
// array4.push(2, 2, 2);
// console.log(array4);

// /* task6*/
// let array5 = [9, 8, 7, 'a', 6, 5];
// array5.sort;
// let filteredArray5 = array5.filter(letter => letter !== 'a');
// console.log(filteredArray5);

// /* task7*/
// let array6 = [9, 8, 7, 6, 5];
// let x = Number(prompt('Угадай число'));
// const y = array6.includes(x);
// y ? alert('Угадал') : alert('Не угадал');

// /* task8*/
// let x1 = ('abcdef');
// x1 = x1.split("").reverse().join("");
// console.log(x1);

// /* task9*/
// let array8 = [[1, 2, 3],[4, 5, 6]];
// let array9 = [];
// let i = 0;
// for (let index5 = 0; index5 < 2; index5++) {
//    for (let index6 = 0; index6 < 3; index6++) {
//       array9[i] = array8[index5][index6];
//       i++;
//    }   
// }
// console.log(array9);

// /* task10*/
// let array10 = [];
// let z = prompt("Введите количество элементов массива")
// for (let index = 0; index < z; index++) {
//    array10[index] = (Math.random() * 10) + 1;  
//    array10[index] = Math.round(array10[index]);
// }

// for (let index = 0; index < z - 1; index++) {
//    let couple = array10[index] + array10[index + 1];
//    console.log(couple);
// }

// /* task11*/
// let array11 = [];
// let array11Quadro = [];
// let z1 = prompt("Введите количество элементов массива")
// for (let index = 0; index < z1; index++) {
//    array11[index] = (Math.random() * 10) + 1;  
//    array11[index] = Math.round(array11[index]);
// }
// function quadro(array11) {
//    return  array11Quadro = array11.map(quadro => quadro * quadro);
   
// }
// console.log(quadro(array11));

// /* task12*/
// let array12 = ['fqfsdascd', 'csd', 'bhjdhjmlk', 'xnjax', 'mxnkkss', 'njxsklxnjnxdxa', 'njdnjdnjdnjjnnjcadnn', 'njs', 'm', 'njcncdd'];
// let array12Length = [];
// function length(array12) {
//    for (let index = 0; index < array12.length; index++) {
//       array12Length[index] = array12[index].length;
//    }
//    return array12Length;
// }
// console.log(length(array12));

// /* task13*/
// let array13 = [];
// let z2 = prompt("Введите количество элементов массива")
// for (let index = 0; index < z2; index++) {
//    array13[index] = (Math.random() * 20) - 9;  
//    array13[index] = Math.round(array13[index]);
// }
// function negative(array13){
//    return array13Negative = array13.filter(element => element < 0);
// }
// console.log(negative(array13));

// /* task14*/
// let array14 = [];
// for (let index = 0; index < 10; index++) {
//    array14[index] = (Math.random() * 10) + 1;  
//    array14[index] = Math.round(array14[index]);
// }
// function even(array14) {
//    return array14Even = array14.filter(even => even%2 === 0)
// }
// console.log(array14);
// console.log(even(array14));

// /* task15*/
// let array15 = [];
// for (let index = 0; index < 6; index++) {
//    array15[index] = (Math.random() * 10) + 1;  
//    array15[index] = Math.round(array15[index]);
// }
// function middle(array15) {
//    const middle = (array15.reduce((total, number) => total + number,0)) / 6;
//    return middle;
// }
// console.log(middle(array15));
