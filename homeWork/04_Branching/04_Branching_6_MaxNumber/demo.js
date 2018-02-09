// ### 6. Найти максимальное число из трех
// Вводятся три целых числа. Определить какое из них наибольшее.


(function run() {
    document.body.innerHTML = 'Максимальное число = ' + maxOfNumbers(3);
})();

function maxOfNumbers(quantityNumbers) {
    let max = 0;
    let temp;
    let count = 0;
    while (count < quantityNumbers) {
        temp = getNumberFromUser('Введи число номер ' + (count + 1) + ': ');
        if (max < temp) {
            max = temp;
        }
        ++count;
    }
    return max;
}

function getNumberFromUser(text) {
    return Number(prompt(text).trim());
}