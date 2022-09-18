import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


const blocksTeam = document.querySelectorAll('.team');
const windowHeight = window.innerHeight;

const windowWidth = window.innerWidth;
blocksTeam.forEach(blockTeam => {
    const blockTeamTitle = blockTeam.querySelector('.team__title');
    const blockTeamVideo = blockTeam.querySelector('.team__aside');
    const blockTeamContent = blockTeam.querySelector('.team__content');
    gsap.registerPlugin(ScrollTrigger);
    if(windowWidth > 1200) {
        let t5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".team[data-scroll-trigger]",
                pin: true,
                pinType: 'fixed',
                scrub: 0.5,
                anticipatePin: 1,
                onEnter: () => {
                    
                },
                onLeave: () => {
                    
                },
                //markers: true,
                start: `top top`,
                end: `+=${windowHeight * 1.5}`,
                onUpdate: (self) => {
                    if(self.progress <= 0.5) {
                        let interProgressTitle = interpolation(self.progress, 0, 0.5, 0, 1);
                        blockTeamTitle.style.left = blockTeam.classList.contains('team--eng') ?`${120 - interProgressTitle * 170}rem` : `${120 - interProgressTitle * 133}rem`;
                    }
                    if(self.progress >=0.8) {
                        blockTeamTitle.style.left =  blockTeam.classList.contains('team--eng') ? `-90rem` : `-53rem`;
                    }
                    if(self.progress < 0.6) {
                        blockTeamContent.style.top = `100%`;
                        blockTeamContent.style.transform = `translateY(0%)`;
                        blockTeamVideo.style.transform = `translate(100%,-50%)`;
                        blockTeamVideo.style.width = `15rem`;
                        blockTeam.style.backgroundColor = 'rgb(35, 40, 42)';
                    }
                    if(self.progress >=0.5 && self.progress <=0.8) {
                        let interTitleStageTwo = interpolation(self.progress, 0.5, 0.8, 0, 1);
                        blockTeamTitle.style.left = blockTeam.classList.contains('team--eng') ? `${-50 - (interTitleStageTwo * 40)}rem` : `${-13 - (interTitleStageTwo * 40)}rem`;
                    }
                    if(self.progress >=0.6 && self.progress <=0.9) {
                        let interProgressOther = interpolation(self.progress, 0.6, 0.9, 0, 1);
                        blockTeamVideo.style.transform = `translate(${100 - interProgressOther * 100}%, -50%)`;
                        blockTeamVideo.style.width = `${15 + interProgressOther*5}rem`;
                        blockTeamContent.style.top = `${100 - (interProgressOther * 50)}%`;
                        blockTeamContent.style.transform = `translateY(${interProgressOther * -50}%)`;
                        changeBackground(blockTeam, interProgressOther);
                    }
                    if(self.progress >=0.9) {
                        blockTeamVideo.style.transform = `translate(0%, -50%)`;
                        blockTeamVideo.style.width = `20rem`;
                        blockTeamContent.style.top = `50%`;
                        blockTeamContent.style.transform = `translateY(-50%)`;
                    }
    
                } 
            } 
        });
    }
    else if(windowWidth < 1200) {
        let diff = blockTeamTitle.scrollWidth / blockTeam.clientWidth + 0.2;
        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".team[data-scroll-trigger]",
                scrub: 0.5,
                anticipatePin: 1,
                onEnter: () => {
                },
                //markers: true,
                start: "top bottom",
                end: `top top`,
                onUpdate: (self) => {
                    blockTeamTitle.style.left = `calc(${100 - self.progress * 100 * diff}% - 1.6em)`
                } 
            } 
        });
    }
    
    
})



function interpolation (value, min, max, newMin, newMax){
    let newValue = ( (value-min) / (max-min) ) * (newMax-newMin) + newMin;
    return newValue;
}

function bez (t){
    const   p0 = 0,
            p1 = 0.3,
            p2 = 0.8,
            p3 = 1;
    var cX = 3 * (p1 - p0),
        bX = 3 * (p2 - p1) - cX,
        aX = p3 - p0 - cX - bX;
    var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0;
    return x;
}

function changeBackground(container, progress) {
    let red = Math.round(35 + progress * 220);
    let green = Math.round(40 + progress * 215);
    let blue = Math.round(40 + progress * 213);
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
