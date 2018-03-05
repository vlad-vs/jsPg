// [1,2,3].slice =>` Делает поверхностную копию массива.

// Глубокое копирование (deep сopy)
// Рекомендую пока это `JSON.parse(JSON.stringify(origArray));


// toDo вопрос Олегу, как сделать набор параметров передваемых в 16-ю строку

let arr1 = [1, 2, 3];

let arr2 = arr1.slice();

arr1.push(4);


let arr3 = new Array(JSON.parse(JSON.stringify(arr1)));

arr3.push(7);

console.log(arr1);
console.log(arr2);
console.log(arr3);
