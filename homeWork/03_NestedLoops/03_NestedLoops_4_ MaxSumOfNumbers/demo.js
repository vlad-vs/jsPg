// ### 4. Найти число с максимальной суммой цифр
// Среди натуральных чисел, которые были введены, найти наибольшее по сумме цифр.
// Вывести на экран это число и сумму его цифр.

function maxNumber() {
    let max = 0;
    for (let i = 0; i < 5; i++) {
        let numStr = prompt('Введи число (' + (i + 1) + ' из 5)').trim();
        if (sumOfNumbers(max) < sumOfNumbers(numStr)) {
            max = Number(numStr);
        }
    }
    return max;
}

function sumOfNumbers(numStr) {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum = sum + numStr[i];
    }
    return sum;
}

alert('Max ' + maxNumber());