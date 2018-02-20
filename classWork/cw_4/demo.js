var User = function (nameV) {
    this.firstName = nameV;

    Object.defineProperty(User, "firstName", {

        get: function () {
            return this.firstName;
        },

        set: function (value) {
            this.firstName = value;
        }
    });
};

let us = new User('Vasya');
let n = us.firstName;

console.log(n);

us.firstName = 'tom';
let n2 = us.firstName;
console.log(n2);
