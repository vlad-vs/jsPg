// Смена символов на верхний регистр
// Поменять в строке первые символы слов на верхний регистр
// *Смена символов на CamelCase.

var str = "hello word";
var wordWithBigFirstLetter = "";
var camelCaseString = "";
var temp1;
var temp2;

var smallLattersStart = 97;
var smallLattersFin = 122;

var arrWords = str.split(' ');


function letterToUpCase(sWord) {
	let char = sWord[0];
	let temp;

	if (sWord[0].charCodeAt() >= smallLattersStart && sWord[0].charCodeAt() <= smallLattersFin) {
		temp = sWord[0].charCodeAt() - 32;
		char = String.fromCharCode(temp);
	}
	return char;
}

for (var j = 0; j < arrWords.length; ++j) {
	temp1 = arrWords[j];
	temp2 = temp1.substring(1);
	wordWithBigFirstLetter = letterToUpCase(temp1[0]) +	 temp2;
	camelCaseString = camelCaseString + wordWithBigFirstLetter
}
alert(camelCaseString);
