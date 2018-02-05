// Переворот числа
// Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран.
// Например, если введено число 3486, то надо вывести число 6843.
// +
var strFromUser = prompt("Введи чисело: ").trim();
var result = '';
var i = strFromUser.length - 1;

for ( i; i >= 0; --i) {
    result = result + strFromUser[i];
}

alert('Переворот числа ' + strFromUser + ' = ' + result);