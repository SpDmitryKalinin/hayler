import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const windowHeight = window.innerHeight;

gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelector('.scroll-trigger-item');

ScrollTrigger.create({
    trigger: sections,
    start: "top bottom-=1",
    end: "bottom top+=1",
});

const header = document.querySelector('.header');
const heroLayout = document.querySelector('.hero__layout');
const heroTitleLight = document.querySelector('.hero__title--light');
const heroTitleBold = document.querySelector('.hero__title--bold');

let tl = gsap.timeline({
    onStart: () => {
        console.log('onStart')
    },  
    scrollTrigger: {
        scrub: true,
        trigger: ".hero",
        pin: true,
        pinType: "fixed",
        onStart: () => {
            header.style.opacity = 0;
        },
        onEnter: () => {
            console.log('onEnter')
        },
        //markers: true,
        start: "top top",
        end: `+=${windowHeight * 1}`,
    } 

    
});

const contentAbout = document.querySelector('.about__content');
const titleAbout = contentAbout.querySelector('.about__title');
const aboutColumn = document.querySelector('.about__column');

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        pin: true,
        pinType: 'fixed',
        anticipatePin: 1,
        onEnter: () => {
            console.log('onEnter')
        },
        //markers: true,
        start: "top top",
        end: `+=${windowHeight * 2}`,
        onStart: () => {
            contentAbout.style.marginLeft = '10em';
        },
        onUpdate: (self) => {
            if(self.progress < 0.8) {
                titleAbout.style.marginLeft = `${10 - 32.625 * self.progress}em`;
            }
            if(self.progress >0.4 && self.progress <0.8) {
                aboutColumn.style.top = `${100 - (self.progress-0.4) * 250}vh`
            }
            else if(self.progress >= 0.8) {
                titleAbout.style.marginLeft = `-16.1em`;
                aboutColumn.style.top = '0'
            }
        } 
    } 
});

function render() {
    
}