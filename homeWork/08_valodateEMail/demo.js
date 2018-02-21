let str = 'vlad-vs@yandex.ru';


function validateEmail(strFromUser) {
    let reg1 = /^([^.][0-9a-zA-Z! #$%&'*+\-/=?^_`{|}~.]{1,64}[^.$])@([^-0-9][-0-9a-zA-Z]{1,63})\.([a-z]{2,3})$/i;
    let reg2 = /\.{2,}/i;

    // основная проверка (кроме 2 точки подряд)
    if (reg1.exec(strFromUser) === null) {
        document.body.innerHTML = 'Ошибка, валидация не пройдена!!!!';
    // проверка на 2 точки подряд
    } else if (reg2.exec(a[0])) {
        document.body.innerHTML = 'Ошибка, валидация не пройдена!!!!';
    } else {
        document.body.innerHTML = 'Валидация пройдена'
    }
}

function validator(regularExp, str) {
    return regularExp.exec(str) !== null;
}

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);