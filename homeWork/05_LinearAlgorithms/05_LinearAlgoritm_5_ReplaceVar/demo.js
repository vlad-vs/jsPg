// ### 5. Обмен значений численных переменных
// Пользователь вводит два числа. Одно присваивается одной переменной, а второе - другой.
//     Необходимо поменять значения переменных так, чтобы значение первой оказалось во второй, а второй - в первой.
(function run() {
    let a = getNumberFromUser('Первое число:');
    let b = getNumberFromUser('Второе число:');

// a = a + b;
// b = a - b;
// a = a - b;

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    textHtmlA = '<div> Первое число: ' + a + '</div>';
    textHtmlB = '<div> Второе число: ' + b + '</div>';
    document.body.innerHTML = textHtmlA + textHtmlB;

    function getNumberFromUser(str) {
        return Number(prompt(str).trim());
    }
})();