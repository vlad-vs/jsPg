// ### 4. Проверка делимости одного числа на другое
// Вводятся два целых числа. Проверить делится ли первое на второе.
//     Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае).



(function run() {
    let textHtml;
    let numberFromUser = getNumberFromUser();
    let answer = isEnglishSymbol(numberFromUser) ? 'Это английский символ' : 'Это другой символ';

    textHtml = '<div> Ответ: ' + answer + '</div>';
    document.body.innerHTML = textHtml;
})();

function getNumberFromUser() {
    return Number(prompt('Введи число:').trim());
}

function isEnglishSymbol(num) {
    let bool = false;
    if (num > 64 && num < 91 || num > 96 && num < 123) {
        bool = true;
    }
    return bool;
}
