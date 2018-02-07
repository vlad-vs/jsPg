// Вывести на экран таблицу умножения
// +

// ToDo вывести в таблицу

let temp = 0;

for (let i = 1; i < 11; ++i) {
    let str = '';
    for (let j = 1; j < 11; j++) {
        temp = i * j;
        str = str + '\t' + String(temp)+ '\t' + '|' ;
    }
    console.log('|' + str);
}


// for (var i = 1; i < 11; ++i) {
//     for (var j = 1; j < 11; j++) {
//         console.log(i * j);
//     }
//     console.log('\n');
// }