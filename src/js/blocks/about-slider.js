// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle


const aboutSliders = document.querySelectorAll('.about-slider');

aboutSliders.forEach(aboutSlider => {
    const windowWidth = window.innerWidth;
    if(windowWidth >= 1200) {
        const swiper = new Swiper('.about-slider', {
            speed: 400,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });
    }
    const slides = aboutSlider.querySelectorAll('.about-slider__slide');
    slides.forEach(slide => {
        const imgContainer = slide.querySelector('.about-slider__slide-right');
        const imgs = imgContainer.querySelectorAll('img');
        if(imgs.length === 2) {
            windowWidth >= 1200 ? imgContainer.style = 'display: flex; flex-direction:column' : imgContainer.style = 'display: flex; flex-direction:column; gap: 0.75rem;'; 
            if(windowWidth < 1200) {
                imgs.forEach(img => {
                    img.style.height = img.clientWidth * 0.75 + 'px';
                })
            }
        }
        if(imgs.length > 2) {
            windowWidth >= 1200 ? imgContainer.style = 'display: flex;' : imgContainer.style = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem 0;` ; 
            if(windowWidth < 1200) {
                imgs.forEach(img => {
                    img.style.height = img.clientWidth * 1.5 + 'px';
                    img.style.objectPosition = "top";
                })
            }
        }
    })
})



  // init Swiper:
  