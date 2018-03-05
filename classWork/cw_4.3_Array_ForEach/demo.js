var users = ['tom','andy','jon'];
var num = [34,21,1,3,2,4];

var newU = Array.apply(Array,users);

users.push('11');

console.log(newU);


for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

let us2 = users.slice();

users.push('aa');

users.forEach(function (item,i,sors) {
    if (item === 'andy') {
        return '';
    }
    console.log(item)
});


// num.some(function (a,b) {
//     return a>b
// });
//
// num.sort(function (a,b) {
//     return a>b
// });
//
// console.log(num);
//
// // console.log(users);
// // console.log(us2);
// // for(let i in users) {
// //     console.log(i)
// // }
