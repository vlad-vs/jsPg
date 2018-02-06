// ### 3. Буква или иной символ?
//     Вводится целое число, обозначающее код символа по таблице ASCII. Определить, это код
// английской буквы или какой-либо иной символ.


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
