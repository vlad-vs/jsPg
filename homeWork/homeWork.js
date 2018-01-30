// =========2 Смена символов на верхний регистр CamelCase ==================================

// var str = "hello word";
// var wordWithBigFirstLetter = "";
// var camelCaseString = "";
// var temp1;
// var temp2;

// var smallLattersStart = 97;
// var smallLattersFin = 122;

// var arrWords = str.split(' ');


// function letterToUpCase(sWord) {
// 	let char = sWord[0];
// 	let temp;

// 	if (sWord[0].charCodeAt() >= smallLattersStart && sWord[0].charCodeAt() <= smallLattersFin) {
// 		temp = sWord[0].charCodeAt() - 32;
// 		char = String.fromCharCode(temp);
// 	}
// 	return char;
// }

// for (var j = 0; j < arrWords.length; ++j) {
// 	temp1 = arrWords[j];
// 	temp2 = temp1.substring(1);
// 	wordWithBigFirstLetter = letterToUpCase(temp1[0]) +	 temp2;
// 	camelCaseString = camelCaseString + wordWithBigFirstLetter
// }
// console.log(camelCaseString)

// === 3 Отфильтровать из строки числах =========================================================================

// console.clear()
// var str = '23Gjf4uf21';
// var strNumbers = '';
// for (var i = 0; i < str.length; ++i) {
// 	let bool = isNaN(str[i]);
// 	if(!bool) {
// 		strNumbers = strNumbers + str[i]
// 	}
// }
// console.log(strNumbers);


// Количество слов в строке (если у слов только 1 пробел)
// var str = 'hello world';
// var arrWords = str.split(' ');
// console.log(arrWords.length);

//  5 Самое длинное слово в строке============================================

// var smallest = '';
// var str = 'scs dcwdf cwc cscw dc';
// var arrWords = str.split(' ');

// var tempNumber = 0;

// for (var i = arrWords.length - 1; i >= 0 ; --i) {
// 	if (tempNumber <= arrWords[i].length) {
// 			tempNumber = arrWords[i].length;
// 			smallest = arrWords[i];
// 	}
// }
// console.log('word: ' + smallest + " wordLettrs: " + smallest.length);

// 6 Удаление лишних пробелов  ============================================

// var str = "    hello  word from      Dnipro".trim();
// var arrWords = str.split(' ');

// var strWithOutSpases = arrWords[0];

// for (var i = 1; i < arrWords.length; i++) {
// 	if (arrWords[i] !== "") {
// 		strWithOutSpases = strWithOutSpases + ' ' + arrWords[i];
// 	}
// }
// console.log(strWithOutSpases);

// 7 Замена подстроки =========================================================

// var strFromUser = "hello word from Dnipro".trim();

// var srtToRaplace = 'word';

// var newReplaceWord = 'people';

// var firstIndex = strFromUser.indexOf(srtToRaplace);

// var numberLetters = srtToRaplace.length;

// var str1 = strFromUser.substring(0,(firstIndex)).trim();

// var str3 = strFromUser.substring(firstIndex + numberLetters).trim();

// var newString = (str1 +" "+ newReplaceWord +" "+ str3).trim();

// console.log(newString);


// 1 Найти наибольшую цифру натурального числа =============================

// var str = '764580';

// var max = 0;

// for (var i = 0; i < str.length; ++i) {
// 	if (str[i] > max) {
// 		max = str[i];
// 	}
// }
// console.log(max);


// Вероятность четных случайных чисел

// var tempNumber;
// var counter = 0;
// var result = 0;

// function getRumdomNumber() {
// 	return (Math.random()*100).toFixed();
// }

// for (var i = 0; i <= 1000; ++i) {
// 	tempNumber = getRumdomNumber();
// 	if (tempNumber % 2 ===0) {
// 		++counter;
// 	}
// }

// result = counter / 1000;

// console.log("Вероятность появления четного числа на выборке 1000 = " + result);


// Вывод таблицы символов ASCII на экран	начиная с 32 и заканчивая 127-м включительно

// var start = 32;
// var end = 127;
// var count = 0;
// var str = '';

// for (var i = start; i < end; ++i) {
// 	++ count;
// 		str = str + i +'-'+ String.fromCharCode(i) + '\t' + '|' + '\t';
// 		if ((count % 10) === 0) {
// 			console.log(str.trim());
// 			str = '';
// 		}
// }	

//  Посчитать четные и нечетные цифры числа ========================

// var info = '3453456260';
// var evenNumber = '';
// var notEvenNumber = '';

// for (var i = 0; i < info.length; ++i) {
// 	if ((info[i] % 2) === 0) {
// 			evenNumber = evenNumber + info[i];
// 	} else {
// 		notEvenNumber = notEvenNumber + info[i]
// 	}
// }
// console.log('evenNumber= ' + evenNumber)
// console.log('notEvenNumber= ' + notEvenNumber)

// Ряд Фибоначчи ====================================

var countFibonachiNumbers = 6;
var arr = [];
var fibNum = 0;
arr.push(1);
for (var i = 1; i < countFibonachiNumbers; ++i) {
	fibNum = arr[i-1] + arr[i];
	arr.push(fibNum);
	console.log(arr);
}
