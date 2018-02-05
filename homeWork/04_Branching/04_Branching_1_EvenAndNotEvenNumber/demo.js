// ### 1. Определить нечетное число
// Из двух случайных чисел, одно из которых четное, а другое нечетное, определить и вывести на экран нечетное число.

(function run() {
    let num;
    let textHtml;
    for (let i = 0; i < 2; i++) {
        let numberFromUser = getNumberFromUser();
        if (!isEaven(numberFromUser)) {
            num = numberFromUser;
        }
    }

    textHtml = '<div> Не четное число: ' + num + '</div>';

    document.body.innerHTML = textHtml;
})();

function getNumberFromUser() {
    return Number(prompt('Введи число').trim());
}

function isEaven(num) {
    let even = true;
    if (num % 2 > 0) {
        even = false;
    }
    return even;
}

