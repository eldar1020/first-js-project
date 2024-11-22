// 1
let time = prompt("Введите время суток (утро, день, вечер):");

if (typeof time === "string" && time.trim() !== "") {
  time = time.trim().toLowerCase();
  if (time === "утро") {
    alert("Вам подойдет кофе!");
  } else if (time === "день") {
    alert("Вам подойдет чай!");
  } else if (time === "вечер") {
    alert("Вам подойдет горячий шоколад!");
  } else {
    alert("Ошибка! введите утро, день или вечер.");
  } 
} else {
    alert("Ошибка! Введите корректные данные")
  }


//2 
let user = {
    name: prompt("Введите ваше имя:"),
    age: Number(prompt("Введите ваш возраст:")),
    subject: prompt("Введите любимый предмет:"),
    grade: prompt("Введите вашу оценку:")
  };
  
  console.log("Изначальные данные:", user);
  
  user.age = user.age + 5; 
  console.log("Возраст через 5 лет:", user.age);
  console.log("Остальные данные:", user.subject, user.grade);
  
// 3 
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
  ];
  
  console.log("Режиссер второго фильма:", movies[1].director);
  
  console.log("Жанр четвертого фильма:", movies[3].genre);
  
  

  // 4

  let shopping = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

  shopping.unshift("клубника");
  console.log("После добавления в начало:", shopping);
  
  shopping.pop();
  console.log("После удаления последнего элемента:", shopping);
  
  shopping.splice(2, 1, "сэндвич", "йогурт");
  console.log("После замены третьего элемента:", shopping);
  
