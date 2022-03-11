document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".swiper", {
        lazy: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoHeigt: true,
        setWrapperSize: true,
        grabCursor: true,
        preventClicks: true,
        watchOverflow: true,
        passiveListeners: true,


    });
})