// {
//     tHead
// }

function Table(props) {
    // var tableRoot = '<table>' + '</table>';
    // var tableHeader = '';
    // var tableBody = '';

    var sourse = Object.assign(props.data);


    var createHead = function (arr) {
        var content = arr.map(function (item) {
            return '<th>' + item + '</th>'
        });
        var tHead = '<thead>' + content.join('') + '</thead>';
        return tHead;
    };

    var createRaw = function (data, indexes) {
        var content = indexes.map(function (index) {
            return '<td>' + data[index] + '</td>'
        });
        return content.join('');
    };

    var createBody = function (data, indexes) {
        var content = data.map(function (item) {
            return '<tr>' + createRaw(item, indexes) + '</tr>'
        });
        return content.join('');
    };

    var createTable = function () {
        return ['<table>',
            createHead(props.colNames),
            createBody(sourse, props.colModel),
            '</table>'].join('')
    };

    this.sortColByIndex = function (indexName, isAsc) {
        var fnSort;
        var type = 'string';

        if (props.colType && props.colType[indexName]) {
            type = props.colType[indexName]
        }
        if (type === 'number') {
            if (isAsc) {
                fnSort = function (itemA, itemB) {
                    return itemA[indexName] - itemB[indexName];
                }
            } else {
                fnSort = function (itemA, itemB) {
                    return itemB[indexName] - itemA[indexName];
                }
            }
        } else if (type === 'string') {
            //todo сортировка работает не правильно!!
            if (isAsc) {
                fnSort = function (itemA, itemB) {
                    return itemA[indexName] > itemB[indexName];
                }
            } else {
                fnSort = function (itemA, itemB) {
                    return itemB[indexName] < itemA[indexName];
                }
            }
        }
        if (fnSort) {
            sourse.sort(fnSort);
        }
        return this

    };

    // alert(props.colNames)
    this.render = function (node) {
        document.querySelector(node).innerHTML = createTable();
    }


}