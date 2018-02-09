// ### 4. Проверка делимости одного числа на другое
// Вводятся два целых числа. Проверить делится ли первое на второе.
//     Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае).

(function run() {
    let numFromUser1 = getNumberFromUser('Введи число делимое');
    let numFromUser2 = getNumberFromUser('Введи число делитель');

    let resultOfDivision = getDivision(numFromUser1, numFromUser2);
    let isletFromDivision = getIsletFromDivision(numFromUser1, numFromUser2);
    document.body.innerHTML =
        '<div>' + 'Частное = ' + resultOfDivision + '</div>' +
        '<div>' + isletFromDivision + '</div>';
})();

function getDivision(num1, num2) {
    return (num1 / num2).toFixed(2);
}

function getIsletFromDivision(num1, num2) {
    let str = 'Остатка от деления нет';
    if (num1 % num2 > 0) {
        str = 'Остаток от деления = ' + (num1 % num2) + '/' + num2;
    }
    return str;
}

function getNumberFromUser(text) {
    return Number(prompt(text).trim());
}
