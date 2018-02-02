// Отфильтровать из строки числа
// Вводится строка произвольного содержания (буквы, числа, символы). Найти все числа в строке. Результат число.
// Например, если дана строка 23Gjf4uf21, результат 23421
// *Найти последовательность чисел.
// Результат массив. Например, если дана строка 23Gjf4uf21, результат 23, 4, 21
//+

var strFromUser = '23Gjf4uf21';
var strNumbers = '';
for (var i = 0; i < strFromUser.length; ++i) {
	let bool = isNaN(strFromUser[i]);
	if(!bool) {
		strNumbers = strNumbers + strFromUser[i]
	}
}
alert(strNumbers);


