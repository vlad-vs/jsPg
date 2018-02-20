let strIn = ' ddsa ac   sxx  ';
let strOut = '';

for (let i = 0; i < strIn.length; i++) {
    let char = strIn[i];
    let prevChar = strIn[i - 1];

    if (char === ' ' && i === 0 || char === ' ' && i === strIn.length - 1) {

    }
    else
    if (!(char === ' ' && prevChar === ' ')) {
        strOut += char;
    }
}
// вернет массив
// let nodeOut = document.querySelectorAll('#textOut');

// вернет строкку
let nodeOut = document.querySelector('#textOut');

// вторая запись
// if (nodeOut) {

if (nodeOut !== undefined) {
    nodeOut.value = strOut;
}

