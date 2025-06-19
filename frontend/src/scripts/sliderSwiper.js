new Swiper(
    ".swiper",
    {
        centeredSlides: true,
        grabCursor: true,
        freeMode: false,
        loop: true,
        mousewheel: false,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    }
);