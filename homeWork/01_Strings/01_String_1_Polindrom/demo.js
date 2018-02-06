// Удалить из строки пробелы и определить, является ли она перевертышем
// Вводится строка. Удалить из нее все пробелы. После этого определить,
// является ли она палиндромом (перевертышем), т.е. одинаково пишется как с начала, так и с конца.
// Примеры палинромов
//
// доход, кабак, заказ, мадам, шалаш, комок, кашак
// +

(function run() {
    let strFromUser = prompt("Введи текст (полиндром): ").trim();
    let str = getStringWithoutSpacesFun(strFromUser);
    let polindrom;
    let textHtml;

    polindrom = (isPolindromFun(str)) ? 'полиндром!' : 'не полиндром!';

    textHtml = '<div> Это ' + polindrom + '</div>';

    document.body.innerHTML = textHtml
})();

// param: string
// return: boolean
function isPolindromFun(paramStr) {
    let bool = true;
    let counter = 0;
    let count = paramStr.length / 2;

    for (let j = 0; j < paramStr.length; ++j) {
        if (paramStr[j] === paramStr[paramStr.length - j - 1]) {
            counter = counter + 1;
            if (counter === count) {
                break;
            }
        }
        else bool = false;
    }
    return bool;
}

// param: string
// return: string without spaces
function getStringWithoutSpacesFun(stringWithSpaces) {
    let strWithoutSpases = "";
    for (let i = 0; i < stringWithSpaces.length; ++i) {
        if (stringWithSpaces[i] !== " ") {
            strWithoutSpases = strWithoutSpases + stringWithSpaces[i];
        }
    }
    return strWithoutSpases;
}