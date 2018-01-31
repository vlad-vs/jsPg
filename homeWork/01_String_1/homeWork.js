// Удалить из строки пробелы и определить, является ли она перевертышем
// Вводится строка. Удалить из нее все пробелы. После этого определить, является ли она палиндромом (перевертышем), т.е. одинаково пишется как с начала, так и с конца.
// Примеры палинромов
//
// доход, кабак, заказ, мадам, шалаш, комок, кашак

var strFromUser = "ot a t   o";
var str = strWithoutSpacesFun(strFromUser);

alert(str);

if (polindromFun(str)) {
    alert('Yes');
} else {
    alert('no');
}

// param: string
// return: boolean
function polindromFun(paramStr) {
    var polindrom = true;
    var counter = 0;
    var count = paramStr.length / 2;

    for (var j = 0; j < str.length; ++j) {
        if (paramStr[j] === paramStr[paramStr.length - j - 1]) {
            counter = counter + 1;
            if (counter === count) {
                break;
            }
        }
        else polindrom = false;
    }
    return polindrom;
}

// param: string
// return: string without spaces
function strWithoutSpacesFun(stringWithSpaces) {
    var strWithoutSpases = "";
    for (var i = 0; i < stringWithSpaces.length; ++i) {
        if (stringWithSpaces[i] !== " ") {
            strWithoutSpases = strWithoutSpases + stringWithSpaces[i];
        }
    }
    return strWithoutSpases;
}