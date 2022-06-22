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

const about = document.querySelector('.about');
const contentAbout = about.querySelector('.about__content');
const titleAbout = about.querySelector('.about__title');
const aboutColumn = about.querySelector('.about__column');
const aboutTitleStroke = about.querySelector('.about__title--stroke');

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        pin: true,
        pinType: 'fixed',
        scrub: 0.5,
        anticipatePin: 1,
        onEnter: () => {
            console.log('onEnter')
        },
        //markers: true,
        start: "top top",
        end: `+=${windowHeight * 1.5}`,
        onUpdate: (self) => {
            if(self.progress < 0.8) {
                titleAbout.style.marginLeft = `${10 - (32.625 * (self.progress))}em`;
                aboutColumn.style.top = `${150 - (self.progress * 180) * (self.progress / 0.8)}rem`
                
            }
            if(self.progress > 0.4 && self.progress < 0.8) {
                about.style.backgroundColor = `rgb(${35 + (self.progress -0.4) * 552.5},${40 + (self.progress -0.4) * 537.5},${40 + (self.progress -0.4) * 532.5})`
                aboutTitleStroke.style.color = `rgb(${35 + (self.progress -0.4) * 552.5},${40 + (self.progress -0.4) * 537.5},${40 + (self.progress -0.4) * 532.5})`
            }
            if(self.progress >= 0.8) {
                about.style.backgroundColor = 'rgb(255, 255, 255)';
                aboutTitleStroke.style.color = 'rgb(255, 255, 255)';
                titleAbout.style.marginLeft = `-16.1em`;
                aboutColumn.style.top = "4rem";
            }
        } 
    } 
});

function render() {
    
}