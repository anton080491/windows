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