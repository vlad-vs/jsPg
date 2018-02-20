let p1 = {
    name: 'vlad'
};

let p2 = {
    secondName: 'semenov'
};

let p3 = {
    otr: 'valerievich'
};

p1.__proto__ = p2;
p2.__proto__ = p3;

// console.log(p1.name);
// console.log(p1.secondName);
// console.log(p1.__proto__.__proto__.otr);

// for (let key in p1) {
//     console.log(key,p1[key],typeof p1[key]);
//     // if (typeof obj[key] === 'function') {
//     //     obj[key]();
//     // }
// }
let p4 = new Object(
    {
        name: 'tom'
    }
);
// console.log(p4);

// for (let key in p1) {
//     console.log(key,p1[key],'Собственное свойство: ' + p1.hasOwnProperty(key),'Тип: '+typeof p1[key]);
//     // if (typeof obj[key] === 'function') {
//     //     obj[key]();
//     // }
// }

// Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств.
var data = Object.create(null);

// Операции присвоения obj.prop = или удаления delete obj.prop совершаются всегда над самим объектом obj.
// delete p1.name;
// console.log(p1.name);

// Чтение: Object.getPrototypeOf(obj)
// Возвращает obj.__proto__ (кроме IE8-)
// Запись: Object.setPrototypeOf(obj, proto)
// Устанавливает obj.__proto__ = proto (кроме IE10-).
let obg = Object.getPrototypeOf(p1);
console.log(obg);
