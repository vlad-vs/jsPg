// Угадать случайное число
// В программе генерируется случайное целое число от 0 до 100. Пользователь должен его отгадать не более чем за 10 попыток.
// После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано.
// Если за 10 попыток число не отгадано, то вывести загаданное число.
// +
var guessNumber = (Math.random() * 100).toFixed();

for (var i = 0; i < 10; ++i) {
    var numberFromUser = Number(prompt(
        'Угадай число от 1 до 100' + '\n' +
        'Попытка: '+ (i + 1) + ' из 10' +  '\n' +
        'Введи цифру : ').trim());
    if (guessNumFun(numberFromUser)) {
        alert('Ты угадал!!!');
        break;
    } else if (i === 9 ) {
        alert(
            'Конец игры' + '\n' +
            'Число = ' + guessNumber);
    }
}

function guessNumFun(paramNumber) {
    var bool = false;
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