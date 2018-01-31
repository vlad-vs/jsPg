// Вывод таблицы символов ASCII на экранначиная с 32 и заканчивая 127-м элементом включительно

var start = 32;
var end = 127;
var count = 0;
var str = '';

for (var i = start; i < end; ++i) {
	++ count;
		str = str + i +'-'+ String.fromCharCode(i) + '\t' + '|' + '\t';
		if ((count % 10) === 0) {
			console.log(str.trim());
			str = '';
		}
}
