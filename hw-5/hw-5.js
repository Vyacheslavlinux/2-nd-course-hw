/* task1*/
let a = prompt('Введите первое число');
let b = prompt('Введите второе число')
function func(a, b) {
   if (a < b) {
      return a;
   }
   else {
      return b;
   }
}
alert(func(a, b)); /* Вывод значения функции*/

/* task2*/
let c = prompt('Введите число');
function func2(c) {
   if (c % 2 === 0) {
      return ("Число четное");
   } else {
      return ("Число нечетное");
   }
}
alert(func2(c));

/* task3*/
let d = 1;
function func3(d) {
   d = prompt('Введите число');
   console.log(d*d);
   return (d*d);
}
alert(func3(d));

/* task4*/
let e = 1;
function func4(e) {
e = prompt('Введите возраст');  
if (e < 0) {
  return('Вы ввели неправильное значение');
} else if (e > 0 && e < 13) {
  return('Привет, друг'); 
} else {
   return('Добро пожаловать!')
}
}
let result = func4(e);
alert(result);

/* task5*/
let f = 1;
let g = 1;
function func5(f, g) {
   f = Number(prompt('Введите первое число'));
   g = Number(prompt('Введите второе число'));
   if (Number.isNaN(f) === false && Number.isNaN(g) === false) {
      return (f*g);
   } else {
      return('Одно или оба значения не являются числом');
   }
}
alert(func5(f, g));


/* task6*/
let k = 1;
function func6(k) {
  k = Number(prompt('Введите число')); 
  if (Number.isNaN(k) === false) {
      let n = k ** 3
      return(`${k} в кубе равняется ${n}`);
   } else {
      return('Переданный параметр не является числом');
   }
}
alert(func6(k))

/* task7*/
let circle1 = Number(prompt('Введите радиус 1')); 
let circle2 = Number(prompt('Введите радиус 2')); 

function getArea(l) {
   S = 3.14 * l ** 2;
   return S;
}

function getPerimetr(m) {
   P = 2 * 3.14 * m;
   return P;
}

alert(getArea(circle1));
alert(getPerimetr(circle1));
alert(getArea(circle2));
alert(getPerimetr(circle2));

