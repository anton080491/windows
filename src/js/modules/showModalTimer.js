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


function openByScroll(selector) {
    let target = document.querySelector(selector);
    window.addEventListener('.scroll', function () {
        if (!btnPress && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight))
         {
            target.click();
        }
    });
}
openByScroll('.popup-gift');
