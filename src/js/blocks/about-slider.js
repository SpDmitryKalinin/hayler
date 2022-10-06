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
            //     mousewheel: {
            //     releaseOnEdges: true,
            //   },
        });
        const observer = new IntersectionObserver((entries, observer) => {
            var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    
                    console.log(entry);
                    window.addEventListener('scroll', function(e) {
                        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
                        console.log(currentPosition);
                        console.log(previousPosition);
                        if (previousPosition > currentPosition) {
                            swiper.slidePrev(currentPosition);
                        } else {
                                if((currentPosition - previousPosition) > 30) {
                                    swiper.slideNext(currentPosition);
                                }
                                
                        
                        }
                      
                        previousPosition = currentPosition;
                        
                      });
                } else {}
            })
        }, { threshold: 1 })
    aboutSliders.forEach(aboutslider => observer.observe(aboutslider));
    }
     
    const slides = aboutSlider.querySelectorAll('.about-slider__slide');
    slides.forEach(slide => {
        const imgContainer = slide.querySelector('.about-slider__slide-right');
        const imgs = imgContainer.querySelectorAll('img');
        if(imgs.length === 2) {
            windowWidth >= 1200 ? imgContainer.style = 'display: flex; flex-direction:column' : imgContainer.style = 'display: flex; flex-direction:column; gap: 0.75rem;'; 
            imgs.forEach(img => {
                img.style.height = 50 + '%';
            })
            if(windowWidth < 1200) {
                imgs.forEach(img => {
                    img.style.height = 50 + '%';
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



  