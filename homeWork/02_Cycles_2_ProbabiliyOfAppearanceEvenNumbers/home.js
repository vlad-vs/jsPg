// Вероятность четных случайных чисел
// Проверить корректность работы генератора псевдослучайных чисел языка программирования с помощью оценки
// вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел.
// +
var tempNumber;
var counter = 0;
var result;

function getRamdomNumber() {
	return (Math.random()*100).toFixed();
}

for (var i = 0; i <= 1000; ++i) {
	tempNumber = getRamdomNumber();
	if (tempNumber % 2 ===0) {
		++counter;
	}
}

result = counter / 1000;

alert("Вероятность появления четного числа на выборке 1000 случайных чисел = " + result);