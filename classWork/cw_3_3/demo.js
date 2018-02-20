// let lib = {
//     render: function () {
//     }
// };
//
// let user = Object.create(lib);
//
// user.foolName = 'Vlad';
// user.street  =  'Pravda 1';
//
// console.log(user.foolName,user.street,user.render);


function Person(name) {

    // когда идет вызов new Person('Tom') - неявно создаются обьекты =>

    //this = {};
    //{}.__proto__ = prototype;

    var name = name;
    // var adress = 'Pravda';

    this.getName = function () {
        return name;
    };
    this.getAdress = function () {
        return adress;
    };

}

let per1 = new Person('Tom');
let per2 = new Person('Jon');

console.log(per1 instanceof Person);
