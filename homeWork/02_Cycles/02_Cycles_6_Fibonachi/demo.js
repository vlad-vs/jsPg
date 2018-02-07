// Ряд Фибоначчи ====================================
// +

(function run() {
    let fromUser = prompt("Введи число длинны последовательности Фибоначи: ").trim();

    let first = 1;
    let second = 1;
    let sum = 0;
    let str = '';
    for (let i = 3; i <= fromUser; ++i) {
        sum = first + second;
        first = second;
        second = sum;
        str = str + String(sum);
    }
    document.body.innerHTML = '1' + '1' + String(str)
})();

