//ToDo как наследовать только часть обьекта, его функций

function Person(name) {

    Animal.call(this); // отнаследовать

    this.name = name;
    this.getName = function () {
        return name;
    };
}

// var Animal = {
//     tdog:'собака'
// };
function Animal() {
    this.calld = 'Cat';

    this.getCalld = function () {
        return console.log('calld');
    };

   this.sayHello = function () {
     console.log('Hello from animal')
     };
}

// глобальная функция в случае наследования 1 и 2
// Animal.prototype.sayHello = function () {
//     console.dir('Hello from animal')
// };


// наследование 1
// Person.prototype = Animal;

// наследование 2
// Person.prototype = Object.create(Animal.prototype);
// Person.prototype.constructor = Person;


let men = new Person('Tom');
let an = new Animal();

console.dir(men);
// men.__proto__.prototype.sayHello();

men.sayHello();
// an.sayHello();



// console.log(men.dog);

// console.log(men);

// console.log(men.prototype.constructor);