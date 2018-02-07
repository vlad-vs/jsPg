// Вычислить факториал числа
// Вычислить факториал введенного числа.
// +

(function run() {
    let numberFromUser = getStringFromUser('Введи чисело для расчета факториала: ');
    let factorial = 1;

    for (let i = 1; i <= numberFromUser; ++i) {
        factorial = factorial * i;
    }

    document.body.innerHTML = 'Факториал ' + numberFromUser + ' = ' +  factorial;
})();

function getStringFromUser(text) {
    return Number(prompt(text).trim());
}
