'use strict';

// var obj = {
//     name: 'vlad',
//     lastNmae: 'semenov',
//     age: 30,
//     sayName: function () {
//         alert(this.name)
//     }
// };
//
// console.log(obj);
//
// obj.mail = 'mail@mail';
//
// console.log(obj);
//
// // obj.sayName();
//
// for (var key in obj) {
//     // console.log(key,obj[key],typeof obj[key]);
//     if (typeof obj[key] === 'function') {
//         obj[key]();
//     }
// }

// вар всегда глобален !!
//================================================
// var y = 1 ;
// {
//     var y = 2;
// }
// console.log(y);

// led - локален {} - кавычки для него scope
//================================================
// let x = 1 ;
// {
//     let x = 2;
// }
// console.log(x);
//================================================
// (function () {
//     alert('helo')
// })();
//
// ~function () {
//     alert('helo')
// }();
// //================================================
//
// // var protoUser = {
// //     isBlack: true,
// //     seyEmail: function() {
// //         alert(this.email);
// //     }
// // };
//
var protoUser = {

    setName: function (name) {
        this.name = name;
    },

    getName: function () {
        return this.name;
    },

    setEmail: function (email) {
        this.email = email;
    },

    getEmail: function () {
        return this.email;
    },
};
// //================================================
// var user = (function () {
//
//     var user = {
//         name: '',
//         email: '',
//         render: function () {
//             var strDivName = '<div><span class="user-data">' + 'User name: </span>' + user.getName() + '</div>';
//             var email = '<div><span class="user-data">' + 'Email: </span>' + user.getEmail() + '</div>';
//
//             document.body.innerHTML = strDivName + email;
//         },
//         __proto__: protoUser
//     };
//     return {
//         getEmail: user.getEmail.bind(user),
//         setEmail: user.setEmail.bind(user),
//         getName: user.getName.bind(user),
//         setName: user.setName.bind(user),
//         render: user.render.bind(user)
//     };
// })();
//
// user.setName('Tom');
// user.setEmail('Tom@Tom');
// user.render();
//================================================

var User = function (name, mail) {

    var user = {
        name: name,
        email: mail,
        render: function () {
            var strDivName = '<div><span class="user-data">' + 'User name: </span>' + user.getName() + '</div>';
            var email = '<div><span class="user-data">' + 'Email: </span>' + user.getEmail() + '</div>';

            document.body.innerHTML = strDivName + email;
        },
        __proto__: protoUser
    };
    return {
        getEmail: user.getEmail.bind(user),
        setEmail: user.setEmail.bind(user),
        getName: user.getName.bind(user),
        setName: user.setName.bind(user),
        render: user.render.bind(user)
    };
};

var user1 = User('Vlad','vlad@vlad');
var user2 = User('Tom','Tom@Tom');

console.log(user1.getName());
console.log(user1.getEmail());
user1.setName('Vladyslav');
console.log(user1.getName());
console.log(user2.getName());
console.log(user2.getEmail());
user2.render();

// console.log(user.name);

//================================================
