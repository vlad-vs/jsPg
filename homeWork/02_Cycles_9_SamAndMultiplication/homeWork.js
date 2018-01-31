// Сумма и произведение цифр числа
// Найти сумму и произведение цифр, введенного натурального числа. Например, если введено число 325, то
// сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).
// +
var strFromUser = prompt("Введи чисело: ").trim();
var summ = 0;
var mult = 1;

for (var i = 0; i < strFromUser.length; ++i) {
    summ = summ + Number(strFromUser[i]);
    mult = mult * Number(strFromUser[i]);
}
alert('Summ = ' + summ + '\n' +
    'Multiplication = ' + mult);
