// Замена подстроки
// Найти в строке указанную подстроку и заменить ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь.


(function run() {
    let strFromUser = getStringFromUser('Введи строку: ');

    let wordToRaplace = getStringFromUser('Введи подстроку: ');

    let newWord = getStringFromUser('Введи новую подстроку: ');

    let firstIndex = strFromUser.indexOf(wordToRaplace);

    let numberLetters = wordToRaplace.length;

    let firstPartOfString = strFromUser.substring(0,(firstIndex)).trim();

    let secondPartOfString = strFromUser.substring(firstIndex + numberLetters).trim();

    let newString = (firstPartOfString +" "+ newWord +" "+ secondPartOfString).trim();

    document.body.innerHTML = 'Новая строка: ' + newString;
})();


function getStringFromUser(text) {
    return prompt(text).trim();
}