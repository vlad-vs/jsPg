// Посчитать количество простых чисел
// Вводятся десять натуральных чисел больше 2. Посчитать, сколько среди них простых чисел.
// +

var arr = [];
var counter = 0;

var simpleNumber = 0;
var notSimpleNumber = 0;

while (counter < 10) {
    var temp = Number(prompt("Введи чисело №" + (counter + 1)).trim());
    if (temp < 2) {
        alert('Число меньше 2!!!!');
    } else {
        arr.push(temp);
        ++ counter;
    }
}

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