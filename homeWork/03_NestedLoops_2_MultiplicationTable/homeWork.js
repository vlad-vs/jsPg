// Вывести на экран таблицу умножения

var temp = 0;

for (var i = 1; i < 11; ++i) {
    var str = '';
    for (var j = 1; j < 11; j++) {
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