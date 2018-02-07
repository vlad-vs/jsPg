// Количество слов в строке
// Вводится строка, состоящая из слов, разделенных пробелами. Требуется посчитать количество слов в ней.
//+

(function run() {
    let strFromUser = getStringFromUser();
    let arrWords = strFromUser.split(' ');
    document.body.innerHTML = 'Количество слов ' + arrWords.length;
})();


function getStringFromUser() {
    return prompt('Введи строку').trim();
}