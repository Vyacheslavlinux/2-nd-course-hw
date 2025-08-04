function game3() {
let y = prompt('Введи текст, который будет перевернут');
let arr = [];
function revolt(y) {
      y = y.split('').reverse().join('');
      return y;
}
alert(revolt(y));
}

