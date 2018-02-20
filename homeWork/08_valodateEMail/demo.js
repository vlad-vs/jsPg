
let strFromUser = 'vlad-vs@yandex.ru';

let r = /(^[^.][0-9a-zA-Z! #$%&'*+\-/=?^_`{|}~.]{1,64})(@)([^-0-9][-0-9a-zA-Z]{1,63})(.)([a-z]{1,})/i;


if (r.test(strFromUser)){
   document.body.innerHTML = 'Валидация пройдена';
} else document.body.innerHTML = 'Ошибка, валидация не пройдена!!!!';
