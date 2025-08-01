let res = 1;
let resUser = 1;
let task = (Math.random() * 3) + 1;
task = Math.round(task);
switch (task) {
      case 1:
            let x1 = (Math.random() * 100) + 1;
            x1 = Math.round(x1);
            let x2 = (Math.random() * 100) + 1;
            x2 = Math.round(x2);
            res = x1 + x2;
            resUser = Number(prompt(`Введите ответ ${x1} + ${x2}`));
            break;
      case 2:
            let x3 = (Math.random() * 100) + 1;
            x3 = Math.round(x3);
            let x4 = (Math.random() * 100) + 1;
            x4 = Math.round(x4);
            if (x3 < x4) {
                x3 = x3 + x4;
                x4 = x3 - x4;
                x3 = x3 - x4;  
            }
            res = x3 - x4;
            resUser = Number(prompt(`Введите ответ ${x3} - ${x4}`));
            break;
      case 3:
            let x5 = (Math.random() * 10) + 1;
            x5 = Math.round(x5);
            let x6 = (Math.random() * 10) + 1;
            x6 = Math.round(x6);
            res = x5 * x6;
            resUser = Number(prompt(`Введите ответ ${x5} * ${x6}`));
            break;
      case 4:
            let x7 = (Math.random() * 10) + 1;
            x7 = Math.round(x7);
            let x8 = (Math.random() * 10) + 1;
            x8 = Math.round(x8);
            res = x7;
            resUser = Number(prompt(`Введите ответ ${x7 * x8} / ${x8}`));
            break;
      default:
            break;
}
if (res === resUser) {
                  alert('ответ верный');
            } 
            else {
                  alert(`ответ неверный, правильный ответ ${res}`);
            }


