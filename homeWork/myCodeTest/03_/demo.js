function Person(name) {
    this.name = name
}

var animal = {
    dog:'собака'
};

Person.prototype = animal;

var men = new Person('Tom');
console.log(men.dog);

console.log(men);