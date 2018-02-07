// Найти наибольшую цифру натурального числа
// С клавиатуры вводится число. Найти его наибольшую цифру. Например, введено число 764580. Наибольшая цифра в нем 8.

(function run() {
    let strFromUser = getStringFromUser('Введи число: ');
    let max = 0;

    for (let i = 0; i < strFromUser.length; ++i) {
        if (Number(strFromUser[i]) > max) {
            max = Number(strFromUser[i]);
        }
    }
    document.body.innerHTML = 'Наибольшая цифра: ' + max;
})();

function getStringFromUser(text) {
    return prompt(text).trim();
}