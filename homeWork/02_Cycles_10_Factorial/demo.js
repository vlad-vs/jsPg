// Вычислить факториал числа
// Вычислить факториал введенного числа.
// +
var numberFromUser = Number(prompt("Введи чисело для расчета факториала: ").trim());
var factorial = 1;

for (var i = 1; i <= numberFromUser; ++i) {
	factorial = factorial * i;
}

alert('Factorial ' + numberFromUser + ' = ' +  factorial);