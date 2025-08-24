function game3() {
let y = prompt('Введи текст, который будет перевернут');
let arr = [];
function revolt(y) {
      if (y === null) {
      return ("Игра отменена")
      };
      y = y.split('').reverse().join('');
      return y;
     

}
alert(revolt(y));
}

