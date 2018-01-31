// Вводится ненормированная строка, у которой могут быть пробелы в начале, в конце и между словами более одного пробела.
// Привести ее к нормированному виду, т.е. удалить все пробелы в начале и конце, а между словами оставить только один пробел.

var strFromUser = "    hello  word from      user".trim();
var arrWords = strFromUser.split(' ');

var strWithOutSpases = arrWords[0];

for (var i = 1; i < arrWords.length; ++i) {
	if (arrWords[i] !== "") {
		strWithOutSpases = strWithOutSpases + ' ' + arrWords[i];
	}
}
alert(strWithOutSpases);