
function Table(width, height) {
    var str ='';
    for (var y = 0; y < height; y++) {
        var td = '';
        for (var x = 0; x < width; x++) {
            td = td +  '<td>' + x + '</td>';
        }
        str = str + '<tr>'+ td + '</tr>';
    }

    this.render = function() {
        document.body.innerHTML = '<table>' +  str +  '</table>';
        // document.querySelector('#hello').innerHTML = '<table>' +  str +  '</table>';
    }
}

Table.prototype.ren = function () {
    document.querySelector('#hello').innerHTML = '<table>' +  this.str +  '</table>';
};

var table = new Table(10,5);

table.ren();


