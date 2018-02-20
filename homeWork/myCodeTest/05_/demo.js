function Table(height, width, id) {

    this.height = height;
    this.width = width;

    this.id = id;

    this.render = function () {
        this.renderTable();
        this.renderSummByRows();
        this.renderSummByColum();
    };

    this.renderTable = function () {
        let printHtml = '';
        let str = '';
        for (let i = 1; i <= this.height; i++) {
            let row = '';
            for (let j = 1; j <= this.width; j++) {
                row += '<td id="cell_' + i + '_' + j + '">' + (i * j) + '</td>';
            }

            str += '<tr id="' + 'row_' + i + '">' + row + '</tr>';
        }
        printHtml += '<table id="' + id + '">' + str + '</table>';

        document.body.innerHTML += printHtml;
    };

    this.renderSummByRows = function () {
        for (let i = 1; i <= this.height; i++) {
            let row = document.getElementById('row_' + i);
            let strRow = document.createElement('td');
            strRow.innerHTML = this.summByRow(i);
            row.appendChild(strRow);
        }
    };

    this.renderSummByColum = function () {
        let elem = document.getElementById(this.id);
        let strRow = document.createElement('tr');

        for (let i = 1; i <= this.width; i++) {
            let td = document.createElement('td');
            td.id = 'col_' + i;
            td.innerHTML = this.summByColum(i);
            strRow.appendChild(td);
        }
        elem.append(strRow);
        // elem.innerHTML = strRow
    };

    this.summByRow = function (rowNumber) {
        let summ = 0;
        for (let i = 1; i <= this.width; i++) {
            let elem = document.getElementById('cell_' + rowNumber + '_' + i).innerText;
            summ += Number(elem);
        }
        return summ
    };

    this.summByColum = function (columnNumber) {
        let summ = 0;
        for (let i = 1; i <= this.height; i++) {
            let elem = document.getElementById('cell_' + i + '_' + columnNumber).innerText;
            summ += Number(elem);
        }
        return summ
    }

}

let table = new Table(3, 3, 'tab_1');
table.render();
