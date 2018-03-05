// пример сложного наследования

function Task(nodeId) {
    var html = '<div id="' + nodeId + '">' +
        '<label></label><br>' +
        '<input type="text"></div>';
    document.body.innerHTML += html;
    this.node = document.querySelector('#' + nodeId);
}

Task.prototype.compute = function () {
};

Task.prototype.setLabel = function (str) {
    this.node.querySelector('label').innerHTML = str;
};

Task.prototype.render = function () {
    this.node.querySelector('input').value = this.compute();
};

//Childs
function RemoveSpace(str, id) {
    //Наследуемся от
    Task.call(this, id);
    //Переписываем метод родителя
    this.compute = function () {
        return str.replace(/\s+/g, '');
    };
}

RemoveSpace.prototype = Object.create(Task.prototype);


var removeSpace = new RemoveSpace('Hi Andy Cooker', 'task01');
removeSpace.setLabel('Удалить все пробелы');
removeSpace.render();

/*
var strToUpperCase = new strToUpperCase('Hi Andy Cooker', 'task02');
*/
