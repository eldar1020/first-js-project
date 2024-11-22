// 1
let firstName = "Султан";
let lastName = "Амангельдиев";
let age = 30;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

// 2
let city = "Алматы";
console.log("Я родом из города " + city);

// 3
let password = "Password123";
let hasAccess = password !== "";
console.log("Password:", password);
console.log("Has Access:", hasAccess);

// 4
let isMember = false;
let isMemberString = isMember.toString();
console.log("Value:", isMemberString, "| Type:", typeof isMemberString);

// 5
let cartItems = 0;
let isCartEmpty = Boolean(cartItems);
console.log("Is Cart Empty:", isCartEmpty);


// 6
let averageScore = 89.75695;
averageScore = Number(averageScore.toFixed(1));
console.log("Average Score:", averageScore);

// 7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
let trimmedMessage = greetingMessage.trim();
let upperMessage = trimmedMessage.toUpperCase();
let containsProgramming = trimmedMessage.includes("программирования");

console.log("Удаление пробелов:", trimmedMessage);
console.log("Преобразование строку в верхний регистр:", upperMessage);
console.log("Проверка на содержение 'программирования':", containsProgramming);
