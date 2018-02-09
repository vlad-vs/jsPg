// 1. Сумма четных положительных элементов массива
// В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.

(function run() {
    let arr = [-2,3,4,-5,1];
    document.body.innerHTML = 'Сумма положительных элемемнтов массива = '+ summPositiv(arr);
})();

function summPositiv(arayFromUser) {
    let summ = 0;
    arayFromUser.forEach(function(item, i, arr) {
        if (item>0) {
            summ = summ + item;
        }
    });
    return summ;
}




