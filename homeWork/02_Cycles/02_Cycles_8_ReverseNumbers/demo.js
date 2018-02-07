// Переворот числа
// Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран.
// Например, если введено число 3486, то надо вывести число 6843.
// +

(function run() {
    let strFromUser = getStringFromUser("Введи чисело: ");
    let result = '';
    let i = strFromUser.length - 1;

    for ( i; i >= 0; --i) {
        result = result + strFromUser[i];
    }
    document.body.innerHTML = 'Переворот числа ' + strFromUser + ' = ' + result;
})();

function getStringFromUser(text) {
    return prompt(text).trim();
}