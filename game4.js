function game4() {
const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
let correctAnswerUser = 0;
let x = Number;
let index = 0;
function quizf() {  
for (let index = 0; index < quiz.length; index++) {
      x = Number(prompt(quiz[index]['question'] + " " + quiz[index]['options']));
      if (x === Number(quiz[index]['correctAnswer'])) {
      correctAnswerUser++;   
      } 
      if (x === Number(1) || x === Number(2) || x === Number(3)) {} 
      else {
        alert(" номер введен вне диапазона или некорректно");
        index--;
      }  
    }
let text = "Количество правильных ответов " + correctAnswerUser;
return text;
}
alert(quizf(quiz));
}



