// Сумма и произведение цифр числа
// Найти сумму и произведение цифр, введенного натурального числа. Например, если введено число 325, то
// сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).
// +

(function run() {
    let strFromUser = getStringFromUser("Введи чисело: ");
    let summ = 0;
    let mult = 1;

    for (let i = 0; i < strFromUser.length; ++i) {
        summ = summ + Number(strFromUser[i]);
        mult = mult * Number(strFromUser[i]);
    }

    document.body.innerHTML =
        '<div>' + 'Сумма = ' + summ + '\n' + '</div>' +
        '<div>' + 'Произведение = ' + mult + '</div>'
})();

function getStringFromUser(text) {
    return prompt(text).trim();
}