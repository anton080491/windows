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