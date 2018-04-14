module.exports = function () {
    return {
        render: function(){
            // 'beforebegin'
            // Перед element .
            // 'afterbegin'
            // Внутри element, перед первым дочерним элементом (потомком).
            // 'beforeend'
            // Внутри element, после последнего дочернего элемента.
            // 'afterend'
            // После element.
            let template = `<div class="sell">Sell 33%</div>`;
            document.body.insertAdjacentHTML('afterbegin', template);
        }
    }
};