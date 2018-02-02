// Ряд Фибоначчи ====================================
// +
var fromUser = prompt("Введи число длинны последовательности Фибоначи: ").trim();

var first = 1;
var second = 1;
var sum = 0;
var str = '';
for (var i = 3; i <= fromUser; ++i) {
    sum = first + second;
    first = second;
    second = sum;
    str = str + String(sum);
}
alert('1' + '1' + String(str));