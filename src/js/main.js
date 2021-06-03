window.addEventListener('DOMContentLoaded', function () {

'use strict';



let modals = require('./modules/modals'),
    slick = require('./slider'),
    tabs = require('./modules/tabs'),
    forms = require('./modules/forms'),
    inputSelector = require('./modules/inputClear'),
    dataFromForms = require('./modules/dataFromForms'),
    timer = require('./modules/timer'),
    image = require('./modules/image'),
    showModalTimer = require('./modules/showModalTimer');

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