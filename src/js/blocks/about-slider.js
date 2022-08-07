// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle


const aboutSliders = document.querySelectorAll('.about-slider');

aboutSliders.forEach(aboutSlider => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth >= 1200) {
        const swiper = new Swiper('.about-slider', {
            speed: 400,
            direction: 'vertical',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });
    }
    
})



  // init Swiper:
  