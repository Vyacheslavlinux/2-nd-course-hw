/* task1*/
function callbackarr(a, b) {

if (a.age > b.age) {return 1;}  
if (a.age < b.age) {return -1;}  
}
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort(callbackarr));


/* task2*/
function isPositive(el) {
if (el >= 0) {
   return(el);
}  

}
function isMale(arr) {

if (arr.gender === "male"){
return arr;
}
}
function filter(people1, callbackFunction) {
let people2 = [];
for (let index = 0; index < people1.length; index++) {
   if (callbackFunction(people1[index]) !== undefined)
   people2.push(callbackFunction(people1[index]));
}  
return (people2); 
}

console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'},
];
console.log(filter(people1, isMale));

// /* task3*/

   let timerId = setInterval(function(){
   console.log(`Дата: `, new Date());
   }, 3000);

   setTimeout(function(){
      console.log("30 секунд прошло");
      clearInterval(timerId);
   }, 30000);


/* task4*/
   

   function delayForSecond1(callback) {
   setTimeout(function(){
   callback();
   }, 1000);
}

delayForSecond1(function () {
   console.log('Привет, Глеб!');
})

/* task5*/

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(cb);
function cb() {};
setTimeout(() =>{
   sayHi('Глеб');
}, 2000)


