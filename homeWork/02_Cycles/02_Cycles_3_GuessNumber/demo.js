// Угадать случайное число
// В программе генерируется случайное целое число от 0 до 100. Пользователь должен его отгадать не более чем за 10 попыток.
// После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано.
// Если за 10 попыток число не отгадано, то вывести загаданное число.
// +

let guessNumber = rundomGenerator();

(function run() {
    for (let i = 0; i < 10; ++i) {
        let userNum = getNumberFromUser(i);
        if (isGuessNumberFun(userNum)) {
            alert('Ты угадал!!!');
            break;
        } else if (i === 9 ) {
            alert(
                'Конец игры' + '\n' +
                'Число = ' + guessNumber);
        }
    }
})();


function isGuessNumberFun(paramNumber) {
    let bool = false;
    if (paramNumber < guessNumber) {
        alert("Больше");
        return bool;
    } else if (paramNumber > guessNumber) {
        alert("Меньше");
        return bool;
    } else {
        bool = true;
        return bool;
    }
}

function rundomGenerator() {
    return (Math.random() * 100).toFixed();
}

function getNumberFromUser(tryNumber) {
    return Number(prompt(
        'Угадай число от 1 до 100' + '\n' +
        'Попытка: '+ (tryNumber + 1) + ' из 10' +  '\n' +
        'Введи цифру : ').trim());
}