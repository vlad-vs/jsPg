//  Посчитать четные и нечетные цифры числа ========================
// +
var info = '3453456260';
var evenNumber = '';
var notEvenNumber = '';

for (var i = 0; i < info.length; ++i) {
	if ((info[i] % 2) === 0) {
			evenNumber = evenNumber + info[i];
	} else {
		notEvenNumber = notEvenNumber + info[i]
	}
}
alert('Четные= ' + evenNumber + "\n" +
    'неЧетные= ' + notEvenNumber);
