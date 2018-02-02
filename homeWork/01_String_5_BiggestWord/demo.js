// Самое длинное слово в строке
// Вводится строка слов, разделенных пробелами. Найти самое длинное слово и вывести его на экран.
// Случай, когда самых длинных слов может быть несколько, не обрабатывать.
//+

var biggest = '';
var strFromUser = 'one two three four';
var arrWords = strFromUser.split(' ');

var tempNumber = 0;

for (var i = arrWords.length - 1; i >= 0 ; --i) {
	if (tempNumber <= arrWords[i].length) {
			tempNumber = arrWords[i].length;
       		biggest = arrWords[i];
	}
}
alert('word: ' + biggest + " wordLettrs: " + biggest.length);
