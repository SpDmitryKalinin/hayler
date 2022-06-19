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

// let tl = gsap.timeline({
//     onStart: () => {
//         console.log('onStart')
//     },  
//     scrollTrigger: {
//         scrub: true,
//         trigger: ".hero",
//         pin: true,
//         pinType: "fixed",
//         onStart: () => {
//             header.style.opacity = 0;
//         },
//         onEnter: () => {
//             console.log('onEnter')
//         },
//         //markers: true,
//         start: "top top",
//         end: `+=${windowHeight * 1.5}`,
//         onUpdate: (self) => {
//             if(self.progress < 0.6) {
//                 heroTitleLight.style.marginLeft = `${-150 + 234.6958333333333 * self.progress}rem`;
//                 heroTitleBold.style.marginLeft = `${150 - 231.3541666666667 * self.progress}rem`
//                 heroLayout.style.borderRadius = `${100 - (self.progress * 190)}%`
//                 heroLayout.style.minHeight = `${self.progress * 190}vh`;
//                 heroLayout.style.minWidth = `${self.progress * 190}vw`;
//                 header.style.opacity = `${self.progress * 1.666666666666667}`
//             }
//             if(self.progress >= 0.6) {
//                 heroTitleLight.style.marginLeft = `9.8125rem`;
//                 heroTitleBold.style.marginLeft = `11.1875rem`;
//                 header.style.opacity = '1';
//             }
//         } 
//     } 

    
// });

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
        end: `+=${windowHeight * 2}`,
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

