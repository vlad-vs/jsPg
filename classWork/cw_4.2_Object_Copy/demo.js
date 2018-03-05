let odj = {
    name:'vlad'
};
let a = JSON.stringify(odj);
console.log(a);

let b = JSON.parse(a);

console.log(b);


// создание копиии объекта
let obj2 = Object.assign({},odj);