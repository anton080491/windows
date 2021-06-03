function forms(state) {
    let form = document.querySelectorAll('.form'),
        input = document.querySelectorAll('input');

    let messages = { // пишем все сообщения в объект
        loading: 'Загрузка',
        seccuss: 'Спасибо!',
        failer: 'Произошла ошибка'
    };

    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');


    form.forEach(function (item) {
        item.addEventListener('submit', function (event) {
            event.preventDefault();
            item.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', '/src/assets/server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key,state[key]);
                }
            }
                request.send(formData);


            request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
                if (request.readyState < 4) {
                    statusMessage.innerHTML = messages.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = messages.seccuss;
                } else {
                    statusMessage.innerHTML = messages.failer;
                }
                setTimeout(function () {
                    statusMessage.innerHTML = '';
                }, 3000);
            });

            for (let i = 0; i < input.length; i++) { // обнуляем инпуты
                input[i].value = '';
            }
        });
    });
}

module.exports = (forms);