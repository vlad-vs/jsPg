// Замена подстроки
// Найти в строке указанную подстроку и заменить ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь.

// +

var strFromUser = prompt("Введи строку: ").trim();

var wordToRaplace = prompt("Введи подстроку: ").trim();

var newWord = prompt("Введи новую подстроку: ").trim();

var firstIndex = strFromUser.indexOf(wordToRaplace);

var numberLetters = wordToRaplace.length;

var str1 = strFromUser.substring(0,(firstIndex)).trim();

var str3 = strFromUser.substring(firstIndex + numberLetters).trim();

var newString = (str1 +" "+ newWord +" "+ str3).trim();

alert(newString);
