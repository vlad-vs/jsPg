let strOut='Hello world';

function render(str) {
// вернет строкку
    let nodeOut = document.querySelector('#textOut');

// вторая запись
// if (nodeOut) {

    if (nodeOut !== undefined) {
        nodeOut.value = str;
    }
}
render(strOut);


