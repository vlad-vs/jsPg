
let User = function (name, secondName, adres) {

    let _userName = name;
    let _userSecondName = secondName;

    this.userAdres = adres;

    this.getName = function () {
        return _userName;
    };

    this.setName = function (date, msg__) {
        throw 'user name is protected'
    };

    this.getSecondName = function () {
        return _userSecondName;
    };

    this.setSecondName = function (date, msg) {
        throw 'user email is protected'
    };

    this.sayHelloPublick = function () {
        console.log('Hello public');
    };

};

User.prototype.render = function () {
    var template = '';
    template += '<div><span clas="label">User name:</span> ' + this.getName() + '</div>';
    template += '<div><span clas="label">User email:</span> ' + this.getSecondName() + '</div>';

    template += '<br>';
    document.body.innerHTML  += template;
};


let person1 = new User('Vlad', 'Semenov', 'Pravda');
let person2 = new User('Tom', 'Jones', 'Center');

person1.render();
person2.render();

console.log(person1.userAdres);




var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

console.log( user.name ); // 1

var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

var event = JSON.parse(str);

console.log(  event.date ); // ошибка!