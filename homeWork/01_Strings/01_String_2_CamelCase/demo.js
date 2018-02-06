// Смена символов на верхний регистр
// Поменять в строке первые символы слов на верхний регистр
// *Смена символов на CamelCase.
//+

(function run() {
    let str = getStringFromUser();
    let arrWords = str.split(' ');
    document.body.innerHTML = getCamelCaseString(arrWords);
})();


function getStringFromUser() {
    return prompt('Введи строку на английском!').trim();
}

function letterToUpCase(sWord) {
	let char = sWord[0];
	let temp;
    let smallLattersStart = 97;
    let smallLattersFin = 122;

	if (sWord[0].charCodeAt() >= smallLattersStart && sWord[0].charCodeAt() <= smallLattersFin) {
		temp = sWord[0].charCodeAt() - 32;
		char = String.fromCharCode(temp);
	}
	return char;
}

function getCamelCaseString(arrWords) {
    let camelCaseString = "";
    let temp1;
    let temp2;
    let wordWithBigFirstLetter = "";
    for (let j = 0; j < arrWords.length; ++j) {
        temp1 = arrWords[j];
        temp2 = temp1.substring(1);
        wordWithBigFirstLetter = letterToUpCase(temp1[0]) +	 temp2;
        camelCaseString = camelCaseString + wordWithBigFirstLetter
    }
	return camelCaseString;
}
