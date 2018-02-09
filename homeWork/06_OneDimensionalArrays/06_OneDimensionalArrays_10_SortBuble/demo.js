// Сортировка пузырьком

let arrNumbersToSort = [1,3,2,5,9,6,7,4,8];

(function run() {
    document.body.innerHTML = sortBuble(arrNumbersToSort);
})();

function sortBuble(arrNumbers) {
    let n = 0;
    let flag = true;
    while (flag) {
        let countNumbers = 0;
        for (let i = 0; i < arrNumbers.length  - n; ++i) {
            if (Number(arrNumbers[i]) > Number(arrNumbers[i + 1])) {
                let temp = Number(arrNumbers[i]);
                arrNumbers[i] = arrNumbers[i + 1];
                arrNumbers[i + 1] = temp;
                ++countNumbers;
            }
        }
        if (countNumbers === 0){
            flag = false;
        }
        ++n;
    }
    return arrNumbers;
}




