/* task1*/
let a = 0;
while (a < 2) {
   console.log("Привет");
   a++;
};

/* task2*/
let b = 1;
while (b < 6) {
   console.log(b);
   b++;
};

/* task3*/
let c = 7;
while (c < 23) {
   console.log(c);
   c++;
};

/* task4*/
const  obj = {Коля: 200, Вася: 300, Петя: 400};
for (let key in obj) {console.log(`${key}: - зарплата ${obj[key]} долларов`)}

/* task5*/
let d = 1000;
let num = 0;
do {
   d = d / 2;
   num++;
} while (d >= 50);
console.log(`В результате получилось число ${d}`);
console.log(`Количество итераций ${num}`);

/* task6*/
let e = Number(prompt("Введите число для пятницы от 1 до 7"));
switch (e) {
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   case 7:   
   for (let index = e; index < 31; index = index + 7) {
      console.log(`Сегодня пятница ${index}-е число. Необходимо подготовить отчет`);
   }   
   break;
   default:
      console.log("Введено неверное число");
      break;
}

/* task1 extra*/
let k = 100;
let iterations = 0;
do {
k = k - 7;
iterations++;
} while(k >= 0);
console.log(`k=${k}`);
console.log(`iterations ${iterations}`);

/* task2 extra*/
const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
for (let index1 = 0; index1 < months.length; index1++) {
   let index2 = index1 + 1;
   console.log(months[index1], `${index2}`);
   
}

/* task3 extra*/
const book = {title: 'Букварь', author: 'Надежда Жукова', years_of_publication: '2022', genre: 'учебная'};
for (let key in book) {console.log(`${key}: ${book[key]}`)}

/* task4 extra*/
let array = [];
for (let index2 = 0; index2 < 10; index2++) {
 array[index2] = Math.random() * 1000;// создал случайные числа от 0 до 1000  и заполнил массив
 console.log(array[index2]);// вывел элементы массива для наглядности
 }
let min = array[0];
for (let index2 = 0; index2 < 10; index2++) {
   if (array[index2] < min) {min = array[index2]} 
}
console.log(min);

