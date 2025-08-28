function game5() {
   let choiceUser = prompt("Давайте сыграем в игру: выберите камень, ножницы или  бумага и введите свой выбор");
   choiceUser = choiceUser.toLowerCase();
   Arr = ["камень", "ножницы", "бумага"]
   let indexPC = Math.floor(Math.random()*3);
   let choicePC = Arr[indexPC];
   
   function comparison(choiceUser, choicePC) {
   let rezult = "fvdvfvd";
   if (choiceUser === choicePC){
      rezult = "ничья";   
      return (rezult);
   } 
   if (choiceUser === "камень") {
      if (choicePC === "ножницы")
      {rezult = "победа";
      return (rezult);}
      if (choicePC === "бумага")
      {rezult = "поражение";
      return (rezult);}
   }
   if (choiceUser === "ножницы") {
      if (choicePC === "бумага")
      {rezult = "победа";
      return (rezult);}
      if (choicePC === "камень")
      {rezult = "поражение";
      return (rezult);}
   }
   if (choiceUser === "бумага") {
      if (choicePC === "камень")
      {rezult = "победа";
      return (rezult);}
      if (choicePC === "ножницы")
      {rezult = "поражение";
      return (rezult);}
   }
   return ("Вы ввели некорректный ответ");
   }
   alert(" Выбор пользователя " + choiceUser + " Выбор компьютера " + choicePC + " Результат игры " + comparison(choiceUser, choicePC));
}

