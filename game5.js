function game5() {
   let choiceUser = 0;
   let err = 0;
   while (err === 0) {
   choiceUser = prompt("Давайте сыграем в игру: выберите камень, ножницы или  бумага и введите свой выбор");
   if (choiceUser === null) {return};
   choiceUser = choiceUser.toLowerCase();

   if (choiceUser === "камень"||choiceUser === "ножницы"||choiceUser === "бумага"){
      err = 1;
   }
   else{
      alert("Некорректный ответ. Введите заново")
   }
  
   }
   
   
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
     
   }
   alert(" Выбор пользователя " + choiceUser + " Выбор компьютера " + choicePC + " Результат игры " + comparison(choiceUser, choicePC));
}

