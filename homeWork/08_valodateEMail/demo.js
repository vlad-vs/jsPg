
let eMail = 'vlad-vs@yandex.ru';

// function validateEmail(strEmailFromUser) {
//     let regular1 = /^([^.][0-9a-zA-Z! #$%&'*+\-/=?^_`{|}~.]{1,64}[^.$])@([^-0-9][-0-9a-zA-Z]{1,63})\.([a-z]{2,3})$/i;
//     let regular2 = /\.{2,}/i;
//
//     let resReg1 = regular1.exec(strEmailFromUser);
//     let resReg2 = regular2.exec(strEmailFromUser);
//
//     let result = '';
//
//     // основная проверка (все кроме 2 точки подряд)
//     if (resReg1 === null) {
//         result = 'Ошибка, валидация не пройдена!!!!';
//         // проверка на 2 точки подряд
//     } else if (resReg2) {
//         result = 'Ошибка, валидация не пройдена!!!!';
//     } else {
//         result = 'Валидация пройдена'
//     }
//     document.body.innerHTML = result;
// }


function validateEmail(strEmailFromUser) {
    let regular1 = /^([^.][0-9a-zA-Z! #$%&'*+\-/=?^_`{|}~.]{1,64}[^.$])@([^-0-9][-0-9a-zA-Z]{1,63})\.([a-z]{2,3})$/i;
    let regular2 = /\.{2,}/i;

    // основная проверка (все кроме 2 точки подряд)
    let resReg1 = regular1.exec(strEmailFromUser);
    // проверка на 2 точки подряд
    let resReg2 = regular2.exec(strEmailFromUser);

    let result = false;

    if ((resReg1 !== null && resReg2 === null)) {
        result = true
    }
    return result;
}

console.log(validateEmail(eMail));

// function validator(regularExp, str) {
//     return regularExp.exec(str) !== null;
// }

