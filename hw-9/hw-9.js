/* task1*/
const btn = document.querySelector('.buttonOnOff');
const h1 = document.querySelector('.h1html');
btn.addEventListener('click', function() {
h1.classList.toggle('textoff')
});

/* task2*/
const pcolor = document.querySelector('.paragraph');
const btn1 =document.querySelector('.btncolor');
btn1.addEventListener('click', function() {
   pcolor.style.color = 'blue';
});


/* task3*/
const btnchange = document.querySelector('.btnchange');
const h1change = document.querySelector('.h1change');
btnchange.addEventListener('click', function() {
h1change.textContent = 'Привет Мир!'
});

/* task4*/
const allDescriptions = document.querySelectorAll('.description');
console.log(allDescriptions);
allDescriptions.forEach(function(description){
   description.textContent = 'Измененный текст';
});

/* task5*/
const allDescriptions1 = document.querySelectorAll('.description1');
allDescriptions1.forEach(function(description1){
   description1.textContent = 'Новый текст';
});

/* task6*/
const btnnewP = document.querySelector('.btnnewP');
btnnewP.addEventListener('click', function() {
const newP = document.createElement('p');
newP.textContent = 'Новый абзац';
document.body.appendChild(newP);
});

/* task7*/
const Description4 = document.querySelector('.description4');
const btnremove = document.querySelector('.btnremove');
btnremove.addEventListener('click', function() {
Description4.remove();
});