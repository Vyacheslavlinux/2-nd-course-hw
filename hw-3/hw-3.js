/* task1*/
let password = String('пароль');
let password1 = String(prompt('Введите пароль'));
password === password1 ? alert('Пароль введен верно') : alert('пароль введен неправильно');

/* task2*/
let c1 = 0;
if (c1 > 0 && c1 < 10) {alert('Верно')} else {alert('Неверно')};
let c2 = 10;
if (c2 > 0 && c2 < 10) {alert('Верно')} else {alert('Неверно')};
let c3 = -3;
if (c3 > 0 && c3 < 10) {alert('Верно')} else {alert('Неверно')};
let c4 = 2;
if (c4 > 0 && c4 < 10) {alert('Верно')} else {alert('Неверно')};

/* task3*/
let d = Number(prompt('Введите d'));
let e = Number(prompt('Введите e'));
e > 100 || d > 100 ? alert ('Верно') : alert ('Неверно');

/* task4*/
let a = '2';
let b = '3';
let a1 = parseInt(a);
let b1 = parseInt(b);
alert (a1 + b1);

/* task5*/
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
   case 1:
   case 2:
   case 12:
      alert('Зима');
      break;
   case 3:
   case 4:
   case 5:
      alert('Весна');
      break;
   case 6:
   case 7:
   case 8:
      alert('Лето');
      break;
   case 9:
   case 10:
   case 11:
      alert('Осень');
      break;
   default:
      alert ('Error');
      break;
}

/* taskextra1*/
let x = String(prompt('Пожалуйста, введите любое число'));
let x1 = Number(x);
if (window.isNaN(x) == true) {alert('Некорректное значение')}
else {alert ('Корректное значение'); x1%2 ? alert('Число нечетное') : alert('Число четное');}

/* taskextra2,3*/
let clientOS = true;
if (navigator.platform.indexOf("Mac") !== -1) {clientOS = 0; console.log("Установите версию приложения для iOS по ссылке")}
else if (navigator.platform.indexOf("Lin") !== -1) {clientOS = 1; console.log("Установите версию приложения для Android по ссылке")}
else if (navigator.platform.indexOf("Win") !== -1) {clientOS = 2; console.log("Установите версию приложения для Windows по ссылке")}
else {console.log("Версия ОС не определена")}
let clientDeviceYear = new Date().getFullYear()
 switch (clientOS) {
   case 0:
      if (clientDeviceYear < 2015) {console.log("Установите облегченную версию приложения для iOS по ссылке")};
      break;
   case 1:
      if (clientDeviceYear < 2015) {console.log("Установите облегченную версию приложения для Android по ссылке")};
      break;
   case 2:
      if (clientDeviceYear < 2015) {console.log("Установите облегченную версию приложения для Windows по ссылке")};
   default:
      break;
 }



