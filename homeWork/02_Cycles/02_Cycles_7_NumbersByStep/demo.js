// Вывести ряд чисел в диапазоне с шагом
// Вывести на экран ряд натуральных чисел от минимума до максимума с шагом. Например, если минимум 10,
// максимум 35, шаг 5, то вывод должен быть таким: 10 15 20 25 30 35. Минимум, максимум и шаг указываются
// пользователем (считываются с клавиатуры).
// +

(function run() {
    let min = getStringFromUser('Введи число (начало диапазона):')
    let max = getStringFromUser('Введи число (конец диапазона):')
    let step = getStringFromUser('Введи шаг:')

    let result = '';

    for (min; min <= max; min = min + step) {
        result = result + " " + min;
    }
    document.body.innerHTML = result;
})();

function getStringFromUser(text) {
    return Number(prompt(text).trim());
}

