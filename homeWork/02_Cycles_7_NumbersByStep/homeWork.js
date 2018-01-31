// Вывести ряд чисел в диапазоне с шагом
// Вывести на экран ряд натуральных чисел от минимума до максимума с шагом. Например, если минимум 10,
// максимум 35, шаг 5, то вывод должен быть таким: 10 15 20 25 30 35. Минимум, максимум и шаг указываются
// пользователем (считываются с клавиатуры).

var min = 5;
var max = 35;

var step = 5;

var result = '';

for (min; min <= max; min = min + step) {
    result = result + " " + min;
}

alert(result);