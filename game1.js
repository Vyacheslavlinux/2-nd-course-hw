function game1() {
let x = (Math.random() * 100) + 1;
x =Math.round(x);
let y = Number(prompt('Угадайте целое число от 1 до 100'));
do {
      if (y === Number(null)){
        return;
      }  
      if (x > y) {
      alert('Загаданное число больше');  
      y = Number(prompt('Угадайте число')); 
      
      }
      else if (x < y) {
      alert('Загаданное число меньше');  
      y = Number(prompt('Угадайте число')); 
      
      }
      
} while (x != y);

alert("Вы угадали");
}
