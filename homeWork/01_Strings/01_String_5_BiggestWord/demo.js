// Самое длинное слово в строке
// Вводится строка слов, разделенных пробелами. Найти самое длинное слово и вывести его на экран.
// Случай, когда самых длинных слов может быть несколько, не обрабатывать.
//+


(function run() {
    let biggestWord = '';
    let strFromUser = getStringFromUser();
// let strFromUser = 'one two three four';
    let arrWords = strFromUser.split(' ');

    let tempNumber = 0;

    for (let i = arrWords.length - 1; i >= 0; --i) {
        if (tempNumber <= arrWords[i].length) {
            tempNumber = arrWords[i].length;
            biggestWord = arrWords[i];
        }
    }
    document.body.innerHTML = 'Слово: "' + biggestWord + '" Количество букв: ' + biggestWord.length;
})();

function getStringFromUser() {
    return prompt('Введи строку').trim();
}