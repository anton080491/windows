function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {


    let header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(function (item) {
            item.style.display = 'none';
        });

        tab.forEach(function (item) {
            item.classList.remove(activeClass.replace(/\./, ""));
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass.replace(/\./, ""));
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', function (e) {
        let target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });







}

module.exports = (tabs);