// Вероятность четных случайных чисел
// Проверить корректность работы генератора псевдослучайных чисел языка программирования с помощью оценки
// вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел

(function run() {
    let tempNumber;
    let counter = 0;
    let result;

    for (let i = 0; i <= 1000; ++i) {
        tempNumber = getRamdomNumber();
        if (tempNumber % 2 === 0) {
            ++counter;
        }
    }
    result = counter / 1000;
    document.body.innerHTML = 'Вероятность появления четного числа на выборке 1000 случайных чисел = ' + result;
})();

function getRamdomNumber() {
    return (Math.random() * 100).toFixed();
}

