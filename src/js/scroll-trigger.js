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
    onStart: () => {
        console.log('onStart')
    },  
    scrollTrigger: {
        trigger: ".about",
        scrub: true,
        pin: true,
        pinType: 'fixed',

        onEnter: () => {
            console.log('onEnter')
        },
        //markers: true,
        start: "top top",
        end: `+=${windowHeight * 3}`,
        onStart: () => {
            contentAbout.style.marginLeft = '10em';
        },
        onUpdate: (self) => {
            if(self.progress < 0.6) {
                if(10 - self.progress * 50 < -15.9){
    
                    contentAbout.style.marginLeft = "-15.9em"
                }
                else {
                    contentAbout.style.marginLeft = `${10 - self.progress * 50}em`
                }
            }
            if(self.progress > 0.65 && self.progress < 0.85){
                aboutColumn.style.top = `${100 - ((self.progress - 0.65) * 500)}%`
                if(100 - ((self.progress - 0.65) * 500) < 0){
                    aboutColumn.style.top = '0%';
                }
                aboutColumn.style.opacity = `${(self.progress - 0.65) * 500}`
            }
        } 
    } 
    
});

