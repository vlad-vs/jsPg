// Вывод таблицы символов ASCII на экранначиная с 32 и заканчивая 127-м элементом включительно\
//    this.start = 32;
//     this.end = 128;


function TableAscii(start, end) {
    this.start = start;
    this.end = end;

    this.render = function () {
        let count = 0;
        let str = '';
        let toHtml = '';
        let print = '';

        for (let i = start; i <= end; ++i) {
            ++count;
            str = str + '<td>' + i + ' - ' + String.fromCharCode(i) + '</td>';
            if ((count % 10) === 0 || i === end) {
                toHtml = toHtml + '<tr>' + str + '</tr>';
                str = '';
            }
        }

        print += '<table>' + toHtml + '</table>' + '<br>';

        document.body.innerHTML += print;
    }
}

// TableAscii.prototype.render = function () {
//     let count = 0;
//     let str = '';
//     let toHtml = '';
//     let print = '';
//
//     for (let i = this.start; i <= this.end; ++i) {
//         ++count;
//         str = str + '<td>' + i + ' - ' + String.fromCharCode(i) + '</td>';
//         if ((count % 10) === 0 || i === this.end) {
//             toHtml = toHtml + '<tr>' + str + '</tr>';
//             str = '';
//         }
//     }
//     print += '<table>' + toHtml + '</table>' + '<br>';
//
//     document.body.innerHTML += print;
// };


let table1 = new TableAscii(32, 127);
let table2 = new TableAscii(32, 111);

table1.render();
table2.render();
