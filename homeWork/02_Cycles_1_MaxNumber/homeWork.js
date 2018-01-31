// Найти наибольшую цифру натурального числа
// С клавиатуры вводится число. Найти его наибольшую цифру. Например, введено число 764580. Наибольшая цифра в нем 8.
// +
var strFromUser = prompt("Введи число: ").trim();
var max = 0;

for (var i = 0; i < strFromUser.length; ++i) {
	if (Number(strFromUser[i]) > max) {
		max = Number(strFromUser[i]);
	}
}
alert('Наибольшая цифра: ' + max);
