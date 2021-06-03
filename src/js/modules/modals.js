function modals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    let trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        window = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

    trigger.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (e.target) {
                e.preventDefault();
            }
            window.forEach(function (item) {
                item.style.display = 'none';
            });
            modal.style.display = 'block';
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    close.addEventListener('click', function () {
        window.forEach(function (item) {
            item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal && closeClickOverlay) {
            window.forEach(function (item) {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });

    function calcScroll(){
        let div = document.createElement('div');
        div.style.height = '50px';
        div.style.width = '50px';
        div.style.overflowY = "scroll";
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    }

   






}

module.exports = (modals);