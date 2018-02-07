// Вводится ненормированная строка, у которой могут быть пробелы в начале, в конце и между словами более одного пробела.
// Привести ее к нормированному виду, т.е. удалить все пробелы в начале и конце, а между словами оставить только один пробел.
// +

(function run() {
    let strFromUser = getStringFromUser();
    // let strFromUser = "    hello  word from      user  ";
    let arrWords = strFromUser.split(' ');
    let strWithOutSpases = arrWords[0];

    for (let i = 1; i < arrWords.length; ++i) {
        if (arrWords[i] !== "") {
            strWithOutSpases = strWithOutSpases + ' ' + arrWords[i];
        }
    }
    document.body.innerHTML = 'Строка без лишних пробелов: ' + strWithOutSpases;
})();

function getStringFromUser() {
    return prompt('Введи строку').trim();
}