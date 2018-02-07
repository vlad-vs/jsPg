//  Посчитать четные и нечетные цифры числа ========================
// +
(function run() {
    let strFromUser = getStringFromUser('Введи число');
    let evenNumber = '';
    let notEvenNumber = '';

    for (let i = 0; i < strFromUser.length; ++i) {
        if ((strFromUser[i] % 2) === 0) {
            evenNumber = evenNumber + strFromUser[i];
        } else {
            notEvenNumber = notEvenNumber + strFromUser[i]
        }
    }

    document.body.innerHTML =
        '<div>' + 'Строка от юзера = ' + strFromUser + ' Число цифр = ' + strFromUser.length + '</div>'
        + '<br>' +
        '<div>' + 'Четные = ' + evenNumber + ' Число цифр = ' + evenNumber.length + '</div>'
        + '<br>' +
        '<div>' + 'Нечетные = ' + notEvenNumber + ' Число цифр = ' + notEvenNumber.length + '</div>';
})();


function getStringFromUser(text) {
    return prompt(text).trim();
}