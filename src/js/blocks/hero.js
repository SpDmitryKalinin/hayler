const hero = document.querySelector('.hero');

if(hero) {
    const header = document.querySelector('.header');
    const heroVideo = hero.querySelector('.hero__video');
    heroVideo.addEventListener('loadeddata', (e) => {
        hero.classList.add('hero--active');
        header.classList.remove('header--inactive');
    })
}
