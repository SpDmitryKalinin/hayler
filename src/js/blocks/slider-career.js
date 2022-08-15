import Swiper from 'swiper/bundle';

const slidersCareer = document.querySelectorAll('.slider-career');

slidersCareer.forEach(sliderCareer => {
    const swiper = new Swiper('.slider-career__slider', {
        speed: 400,
        
        loop: true,
        navigation: {
            nextEl: '.slider-career__next',
            prevEl: '.slider-career__prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.6,
                spaceBetween: 26,
            },
            768: {
                slidesPerView: 2.8,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 2.8,
                spaceBetween: 50,
            }
        }
    });
})