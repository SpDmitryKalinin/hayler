const hero = document.querySelector('.hero');

const windowWidth = window.innerWidth;
if(hero && windowWidth > 1200) {
    const heroVideo = hero.querySelector('.hero__video');
    heroVideo.pause();
    heroVideo.addEventListener('loadeddata', (e) => {
        hero.classList.add('hero--active');
        heroVideo.play();
    })
}
