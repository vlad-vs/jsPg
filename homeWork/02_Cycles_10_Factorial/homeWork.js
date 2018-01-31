// Вычислить факториал числа
// Вычислить факториал введенного числа.

var numberFromUser = 3;
var factorial = 1;

for (var i = 1; i <= numberFromUser; ++i) {
	factorial = factorial * i;
}
alert(factorial);