/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/dataFromForms.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dataFromForms.js ***!
  \*****************************************/
/***/ ((module) => {

function dataFromForms(state) {

    let windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');



    windowForm.forEach(function (item, i) {
        item.addEventListener('click', function () {
            state.form = i + 1;
            console.log(state);
        });
    });

    windowWidth.forEach(function (item, i) {
        item.addEventListener('input', function () {
            state.width = item.value;
            console.log(state);
        });
    });

    windowHeight.forEach(function (item, i) {
        item.addEventListener('input', function () {
            state.height = item.value;
            console.log(state);
        });
    });

    windowType.forEach(function (item, i) {
        item.addEventListener('change', function () {
            state.type = item.value;
            console.log(state);
        });
    });

    windowProfile.forEach(function (item, i) {
        item.addEventListener('change', function () {
            if (i === 0) {
                state.profile = 'Холодный';
            } else {
                state.profile = 'Теплый';
            }
            windowProfile.forEach(function (box, j) {
                box.checked = false;
                if (i == j) {
                    box.checked = true;
                }
            });
            console.log(state);
        });  
    });

    


    // if (item.getAttribute('type') === 'checkbox') {
    //     i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
    //     elem.forEach((box, j) => {
    //         box.checked = false;
    //         if (i == j) {
    //             box.checked = true;
    //         }
    //     });
    // } else {
    //     state[prop] = item.value;
    // }
    // break;








}

module.exports = (dataFromForms);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/image.js":
/*!*********************************!*\
  !*** ./src/js/modules/image.js ***!
  \*********************************/
/***/ ((module) => {

function image() {
    let workSection = document.querySelector('.works'),
        imgPopup = document.createElement('div'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);



    workSection.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            let path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if (e.target && e.target.matches('div.popap')) {
            imgPopup.style.display = 'none';
        }
    });
}

module.exports = (image);

/***/ }),

/***/ "./src/js/modules/inputClear.js":
/*!**************************************!*\
  !*** ./src/js/modules/inputClear.js ***!
  \**************************************/
/***/ ((module) => {

function inputClear (inputSelector){
    let inputClear = document.querySelectorAll(inputSelector);
    inputClear.forEach(function (item) {
        item.addEventListener('input', function () {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

module.exports = (inputClear);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/showModalTimer.js":
/*!******************************************!*\
  !*** ./src/js/modules/showModalTimer.js ***!
  \******************************************/
/***/ ((module) => {

function showModalTimer(){
    setInterval(function () {
        document.getElementById('popup').style.display = 'block';
        document.querySelector('.popup_close').addEventListener('click', function () {
            document.getElementById('popup').style.display = 'none';
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });
    },60000);
}

module.exports = (showModalTimer);


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

function timer(endTime) {



    function addZero(num) {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }


    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date());
        seconds = Math.floor((t / 1000) % 60);
        minutes = Math.floor(((t / 1000) / 60) % 60);
        hours = Math.floor((((t / 1000) / 60) / 60) % 24);
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }

    function setClock(endTime) {
        let seconds = document.querySelector('#seconds'),
            minutes = document.querySelector('#minutes'),
            hours = document.querySelector('#hours'),
            days = document.querySelector('#days'),
            setTime = setInterval(apdateClock, 1000);


        function apdateClock() {
            let t = getTimeRemaining(endTime);
            seconds.textContent = addZero(t.seconds);
            minutes.textContent = addZero(t.minutes);
            hours.textContent = addZero(t.hours);
            days.textContent = addZero(t.days);

            if (t.total <= 0) {
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                days.textContent = '00';
                clearInterval(setTime);
            }
        }
        apdateClock();

    }

    setClock(endTime);







}

module.exports = (timer);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((module) => {

function slick (){
        $('.glazing_slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }]
        });
        $('.decoration_slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>',
                    slidesToScroll: 1
                }
            }]
        });
 
}

module.exports = (slick);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
window.addEventListener('DOMContentLoaded', function () {

'use strict';



let modals = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js"),
    slick = __webpack_require__(/*! ./slider */ "./src/js/slider.js"),
    tabs = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js"),
    forms = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js"),
    inputSelector = __webpack_require__(/*! ./modules/inputClear */ "./src/js/modules/inputClear.js"),
    dataFromForms = __webpack_require__(/*! ./modules/dataFromForms */ "./src/js/modules/dataFromForms.js"),
    timer = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js"),
    image = __webpack_require__(/*! ./modules/image */ "./src/js/modules/image.js"),
    showModalTimer = __webpack_require__(/*! ./modules/showModalTimer */ "./src/js/modules/showModalTimer.js");

let modalState = {};
let endTime = '2021-05-08';
dataFromForms(modalState);


image();


inputSelector('input[name="user_phone"]');
inputSelector('#width');
inputSelector('#height');




slick();
showModalTimer();
modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
modals('.phone_link', '.popup', '.popup .popup_close');
modals('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);




tabs('.glazing_slider', '.glazing_block', '.glazing_content', '.active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', '.after_click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', '.do_image_more', 'inline-block');


forms(modalState);






});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map