import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

const gallery = document.querySelector('.gallery');
const windowWidth = window.innerWidth;
if(gallery && windowWidth >= 1200) {
    const windowHeight = window.innerHeight;
    const galleryWrapper = gallery.querySelector('.gallery__wrapper');
    const galleryPaddingTop =parseInt(window.getComputedStyle(gallery,null).getPropertyValue("padding-top"));
    const galleryCenterColumn = gallery.querySelector('.gallery__column--center');
    gsap.registerPlugin(ScrollTrigger);
    let heightGallery = 0;
    let t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".gallery[data-scroll-trigger]",
            pin: true,
            pinType: 'fixed',
            scrub: 0.5,
            anticipatePin: 1,
            onEnter: () => {
                console.log('onEnter')
                
            },
            onLeave: () => {
                let anchor = document.querySelector('.gallery-anchor');
                let bottomPosition = parseInt(window.getComputedStyle(anchor, null).getPropertyValue('bottom'));
                console.log(bottomPosition);
                heightGallery = gallery.offsetHeight;
                let t4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".gallery-anchor",
                        scrub: 0.5,
                        anticipatePin: 1,
                        start: `bottom bottom`,
                        end: `+=${bottomPosition}`,
                        onUpdate: (self) => {
                            galleryCenterColumn.style.transform = `translateY(${-self.progress * 48}rem)`;
                        } 
                    } 
                });
            },
            //markers: true,
            start: `top -=${galleryPaddingTop}`,
            end: `+=${windowHeight * 2}`,
            onUpdate: (self) => {
                galleryWrapper.style.transform = `translateY(${122 - self.progress * 120}%) scale(${3.5 - self.progress * 2.5}) `; 
                
            } 
        } 
    });
    
    
}

function interpolation (value, min, max, newMin, newMax){
    let newValue = ( (value-min) / (max-min) ) * (newMax-newMin) + newMin;
    return newValue;
}