// ### 2. Среди трех чисел найти среднее
// Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).

(function run() {
    let arr = [];
    let textHtml;
    let averNumberFromArr;
    for (let i = 0; i < 3; i++) {
        let numberFromUser = getNumberFromUser();
        arr.push(numberFromUser);
    }
    averNumberFromArr = getAverageNumber(arr);

    textHtml = '<div> Среднее число: ' + averNumberFromArr + '</div>';

    document.body.innerHTML = textHtml;
})();

function getNumberFromUser() {
    return Number(prompt('Введи по очереди 3 числа').trim());
}

function getAverageNumber(arr) {
    let aver;
    console.log();
        if (arr[0] < arr[1] && arr[1] < arr[2] || arr[2] < arr[1] && arr[1] < arr[0]) {
        aver = arr[1];
        console.log('1= '+aver);
    } else
        if (arr[1] < arr[0] && arr[0] < arr[2] || arr[2] < arr[0] && arr[0] < arr[1]) {
        aver = arr[0];
        console.log('2= '+aver);
    } else {
        aver = arr[2];
        console.log('3= '+aver);
    }
    return aver;
}
