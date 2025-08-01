let x = (Math.random() * 100) + 1;
x =Math.round(x);
let y = prompt('Угадайте целое число от 1 до 100');
do {
      if (x > y) {
      alert('Загаданное число больше');  
      y = prompt('Угадайте число'); 
      }
      else if (x < y) {
      alert('Загаданное число меньше');  
      y = prompt('Угадайте число');  
      }
} while (x != y);
alert("Вы угадали");

