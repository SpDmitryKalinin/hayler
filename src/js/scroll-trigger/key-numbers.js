import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const keyNumber = document.querySelector('.key-numbers');
const about = document.querySelector('.about');
if(keyNumber) {
    const aboutColumn = about.querySelector('.about__column');
    const numbers = keyNumber.querySelectorAll('[data-key-number]');
    const duration = keyNumber.dataset.duration;
    const windowWidth = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);
    if(windowWidth >= 1200) {
        let t22 = gsap.timeline({
            scrollTrigger: {
                trigger: ".key-numbers[data-scroll-trigger]",
                scrub: 0.5,
                anticipatePin: 1,
                onEnter: () => {
                    
                },
                //markers: true,
                start: `top bottom`,
                end: `bottom bottom`,
                onUpdate: (self) => {
                    if(self.progress <= 0.5) {
                        let interValue = interpolation(self.progress, 0, 0.5, 0, 1);
                        let red = Math.round(255 - (interValue) * 220);
                        let green = Math.round(255 -  (interValue) * 215);
                        let blue = Math.round(255 - (interValue) * 213);
                        
                        keyNumber.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                        let redAbout = Math.round(255 - (interValue) * 220);
                        let greenAbout = Math.round(255 -  (interValue) * 215);
                        let blueAbout = Math.round(255 - (interValue) * 213);
                        about.style.backgroundColor = `rgb(${redAbout}, ${greenAbout}, ${blueAbout})`;
                    }
                    if(self.progress > 0.5) {
                        about.style.backgroundColor = 'rgb(35, 40, 42)';
                        keyNumber.style.backgroundColor = 'rgb(35, 40, 42)';
                    }
                }
            } 
        })
    }
    
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".key-numbers[data-scroll-trigger]",
            pinType: 'fixed',
            scrub: 0.5,
            anticipatePin: 1,
            onEnter: () => {
                numbers.forEach(number => {
                    let newValue;
                    let numberValue = number.textContent;
                    if(numberValue.includes(',')){        
                        newValue = (parseFloat(numberValue.replace(',', '.')));
                        newValue = Number(newValue.toFixed(1));
                    }
                    else {
                        newValue = Number(numberValue);
                    }
                    let delay = duration / ((number.dataset.max - newValue) / number.dataset.step);
                    increment(number, 
                        Number(number.dataset.step), 
                        Number(number.dataset.max), 
                        delay);
                })
            },
            //markers: true,
            start:() => `${-window.innerHeight/4}` + ` top`,
            end: `bottom bottom`,
        } 
    });
}

function increment(numberElement, step, max, delay) {
    let numberString = numberElement.textContent;
    let newValue = 0;
    if(numberString.includes(',')){        
        newValue = (parseFloat(numberString.replace(',', '.')));
        newValue = Number(newValue.toFixed(1));
    }
    else {
        newValue = Number(numberString);
    }

    let interval = setInterval(() => {
        if(newValue.toFixed(1) >= max) {
            clearInterval(interval);
        }
        else {
            newValue+=step;
            if(newValue%1 === 0) {
                numberElement.textContent = newValue;
            }
            else {
                numberElement.textContent = String(newValue.toFixed(1)).replace('.', ',');
            }
        }
    }, delay);
}

function interpolation (value, min, max, newMin, newMax){
    let newValue = ( (value-min) / (max-min) ) * (newMax-newMin) + newMin;
    return newValue;
}