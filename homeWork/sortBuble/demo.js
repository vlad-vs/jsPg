// Сортировка

//
// var strNumbers = prompt("Введи число:").trim();
var strNumbers = [1,3,2,5,9,6,7,4,8];
var n = 0;
var flag = true;
while (flag) {
    var countNumbers = 0;
    for (var i = 0; i < strNumbers.length  - n; ++i) {
        if (Number(strNumbers[i]) > Number(strNumbers[i + 1])) {
            var temp = Number(strNumbers[i]);
            strNumbers[i] = strNumbers[i + 1];
            strNumbers[i + 1] = temp;
            ++countNumbers;
        }
    }
    if (countNumbers === 0){
        flag = false;
    }
    ++n;
}
alert(strNumbers);


