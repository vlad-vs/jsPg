// Вывод таблицы символов ASCII на экранначиная с 32 и заканчивая 127-м элементом включительно\
// toDo вписать в таблицу HTML
(function run() {
    let start = 32;
    let end = 127;
    let count = 0;
    let str = '';
    let printHtml='';

    for (let i = start; i < end; ++i) {
        ++ count;
        str = str + i +'-'+ String.fromCharCode(i) + '\t' + '|' + '\t';
        if ((count % 10) === 0) {
            // console.log(str.trim());
            printHtml = printHtml + str + '<br>';
            str = '';
        }
    }
    document.body.innerHTML = printHtml;
})();

