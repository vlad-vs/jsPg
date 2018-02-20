//Constructor
var User = function(name, email) {
    //Pivate variable
    let _userName = name;
    let _userEmail = email;
    //И да я const и у меня меняют свойства но меня не убить ))
    const _comments = {}; //

    //Publick
    this.streat = 'Dnepr';

    //Publick method - для каждого экземпляра свой
    this.getComents = function() {
        return _comments;
    };
    //На каждый Get принято делать Set
    this.setComent = function(date, msg) {
        _comments[date] = msg;
    };

    this.getName = function() {
        return _userName;
    };
    //На каждый Get принято делать Set
    this.setName = function(date, msg) {
        throw 'user name is protected'
    };

    this.getEmail = function() {
        return _userEmail;
    };
    //На каждый Get принято делать Set
    this.setEmail = function(date, msg) {
        throw 'user email is protected'
    };
}


//Publick method - но они общии для всех экземпляров
User.prototype.render = function() {
    var template = '';
    template += '<div><span clas="label">User name:</span> ' + this.getName() + '</div>';
    template += '<div><span clas="label">User email:</span> ' + this.getEmail() + '</div>';
    var comments = this.getComents();
    for (var key in comments) {
        template += '<div><span clas="label">Msg:</span> ' + comments[key] + '</div>';
    }
    template += '<br>';
    document.body.innerHTML += template;
};



//Создаем первого пользователя
var user01 = new User('Andy', 'andy@email.com')
user01.setComent(Date.now(), 'Пишу приватное послание');

//Создаем второго пользователя
var user02 = new User('Max', 'max@email.com')

user01.render();
user02.render();

//Контролируемая запись
user02.setEmail('asd asd')
