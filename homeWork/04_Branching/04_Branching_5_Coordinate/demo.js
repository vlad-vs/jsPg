// ### 5. Какой координатной четверти принадлежит точка?
//     Определить четверть координатной плоскости, которой принадлежит точка. Координаты точки ввести с клавиатуры.

(function run() {
    let y = getNumberFromUser('Координата У');
    let x = getNumberFromUser('Координата Х');
    let str ='';
    if (y > 0 && x > 0) {
        str = 'Первая четверть';
    }

    else if (y < 0 && x > 0) {
        str = 'Четвертая четверть';
    }

    else if (y < 0) {
        str = 'Третья четверть';
    }

    else {
        str = 'Вторая четверть';
    }
    document.body.innerHTML = str;
})();

function getNumberFromUser(text) {
    return Number(prompt(text).trim());
}