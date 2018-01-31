// Посчитать количество простых чисел
// Вводятся десять натуральных чисел больше 2. Посчитать, сколько среди них простых чисел.


var arr = [1, 9, 7, 2, 3, 806, 5];
var simpleNumber = 0;
var notSimpleNumber = 0;

for (var i = 0; i < arr.length; ++i) {
    if (simpleNumberFun(Number(arr[i]))) {
        ++simpleNumber;
    } else {
        ++notSimpleNumber
    }
}
alert('Simple numbers = ' + simpleNumber + '\n'
    + "Not simple numbers= " + notSimpleNumber);

// param: number
// return: true/false
function simpleNumberFun(paramNumber) {
    var simple = true;
    var count = 10;

    if (paramNumber < 10) {
        count = paramNumber;
    }

    for (var i = 2; i < count; ++i) {
        if ((paramNumber % i) === 0) {
            simple = false;
            break;
        }
    }
    return simple;
}