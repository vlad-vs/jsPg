console.log('main_1')

let Banner = require('./banner.js');
window.addEventListener('DOMContentLoaded', function () {
    var banner = Banner();
    banner.render();
});