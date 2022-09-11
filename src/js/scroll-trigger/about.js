import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


const about = document.querySelector('.about');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


gsap.registerPlugin(ScrollTrigger);
if(about && windowWidth >= 1200) {
    const titleAbout = about.querySelector('.about__title');
    const aboutColumn = about.querySelector('.about__column');
    const aboutTitleStroke = about.querySelector('.about__title--stroke');
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about[data-scroll-trigger]",
            pin: true,
            pinType: 'fixed',
            scrub: 1,
            anticipatePin: 1,
            onEnter: () => {
            },
            //markers: true,
            start: "top top",
            end: `+=${windowHeight * 1.5}`,
            onUpdate: (self) => {
                const interValue = interpolation(self.progress, 0, 0.9, 0, 1);
                if(interValue <= 0.6) {
                    let interpolationStagefirst = interpolation(interValue, 0, 0.6, 0, 1);
                    titleAbout.style.marginLeft = `${10 - (23.2* (interpolationStagefirst))}em`;
                    aboutColumn.style.top = `${(150 - interpolationStagefirst * 110)}rem`;
                }

                if(interValue > 0.6) {
                    let interpolationStagefirst = interpolation(interValue, 0.6, 1, 0, 1);
                    titleAbout.style.marginLeft = `${-13.2 - (2.9 * (interpolationStagefirst))}em`;
                    aboutColumn.style.top = `${(40 - interpolationStagefirst * 36)}rem`;
                }
                
                if(interValue < 0.5) {
                    about.style.backgroundColor = 'rgb(35, 40, 42)';
                    aboutTitleStroke.style.color = 'rgb(35, 40, 42)'
                }
                if(interValue > 0.5 && interValue < 1) {
                    let red = Math.round(35 + (interValue - 0.5) * 440);
                    let green = Math.round(40 + (interValue - 0.5) * 430);
                    let blue = Math.round(40 + (interValue -0.5) * 426);

                    about.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                    aboutTitleStroke.style.color = `rgb(${red}, ${green}, ${blue})`;
                }
                if(interValue > 1) {
                    about.style.backgroundColor = 'rgb(255, 255, 255)';
                    aboutTitleStroke.style.color = 'rgb(255, 255, 255)';
                    titleAbout.style.marginLeft = `-16.1em`;
                    aboutColumn.style.top = "4rem";
                }
            } 
        } 
    });

    function interpolation (value, min, max, newMin, newMax){
        let newValue = ( (value-min) / (max-min) ) * (newMax-newMin) + newMin;
        return newValue;
    }

    function bez (t){
        const   p0 = 0,
                p1 = 0.7,
                p2 = 0.2,
                p3 = 1;
        var cX = 3 * (p1 - p0),
            bX = 3 * (p2 - p1) - cX,
            aX = p3 - p0 - cX - bX;
        var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0;
        return x;
    }
}
else if(about && windowWidth < 1200) {
    const titleAbout = about.querySelector('.about__title');
    const aboutColumn = about.querySelector('.about__column');
    const aboutTitleStroke = about.querySelector('.about__title--stroke');
    let diff = titleAbout.scrollWidth / about.clientWidth + 0.5;
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about[data-scroll-trigger]",
            scrub: 0.5,
            anticipatePin: 1,
            onEnter: () => {
            },
            //markers: true,
            start: "top bottom",
            end: `top top`,
            onUpdate: (self) => {
                titleAbout.style.left = `calc(${100 - self.progress * 100 * diff}% - 1.6em)`
            } 
        } 
    });
}
