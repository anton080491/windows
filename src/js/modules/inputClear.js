function inputClear (inputSelector){
    let inputClear = document.querySelectorAll(inputSelector);
    inputClear.forEach(function (item) {
        item.addEventListener('input', function () {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

module.exports = (inputClear);