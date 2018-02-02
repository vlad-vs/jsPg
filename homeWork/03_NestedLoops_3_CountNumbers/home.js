// Посчитать общее количество определенных цифр в числах
// Посчитать, сколько раз встречается определенная цифра в введенной последовательности чисел.
// Количество вводимых чисел и цифра, которую необходимо посчитать, задаются вводом с клавиатуры
// +
var strNumbers = prompt("Введи число:").trim();
// var strNumbers = '1222345677278';
var numToCount = Number(prompt("Введи цифру : ").trim());
// var numToCount = 2;
var countNumbers = 0;


for (var i = 1; i < strNumbers.length; ++i) {
    if (Number(strNumbers[i]) === numToCount){
        ++ countNumbers;
    }
}
alert('Цифра ' + numToCount + '\n' +
    'Число' + strNumbers + '\n' +
    'Количество повторений = ' + countNumbers);