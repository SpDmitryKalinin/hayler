import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const keyNumber = document.querySelector('.key-numbers');

if(keyNumber) {
    const numbers = keyNumber.querySelectorAll('[data-key-number]');
    const duration = keyNumber.dataset.duration;
    gsap.registerPlugin(ScrollTrigger);
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
            start: `top top`,
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