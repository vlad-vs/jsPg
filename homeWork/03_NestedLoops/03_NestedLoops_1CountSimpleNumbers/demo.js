// Посчитать количество простых чисел
// Вводятся десять натуральных чисел больше 2. Посчитать, сколько среди них простых чисел.
// +

(function run() {
    let counter = 0;

    let simpleNumber = 0;
    let notSimpleNumber = 0;

    let allNumbers='';

    while (counter < 10) {
        let temp = Number(prompt("Введи чисело (" + (counter + 1) + ' из 10)').trim());
        if (temp < 2) {
            alert('Число меньше 2!!!!');
        } else {
            allNumbers = allNumbers + temp + ',';
            if (isSimpleNumberFun(temp)) {
                ++simpleNumber;
            } else {
                ++notSimpleNumber
            }
            ++ counter;
        }
    }
    document.body.innerHTML =
        '<div>' + 'Все числа = ' + allNumbers +'</div>' +
        '<div>' + 'Из них:' + '</div>' +
        '<div>' + 'Простыех чисел = ' + simpleNumber +'</div>' +
        '<div>' + "Непростых чисел= " + notSimpleNumber +'</div>'
})();

// param: number
// return: true/false
function isSimpleNumberFun(paramNumber) {
    let simple = true;
    let count = 10;

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