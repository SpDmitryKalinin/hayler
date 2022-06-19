const header = document.querySelector('.header');

if(header) {
    const burger = header.querySelector('.header__burger');
    const langSwitcher = header.querySelector('.lang-switcher');
    burger.addEventListener('click', () => {
        burger.style.opacity = 0;
        langSwitcher.style.opacity = 0;
        burger.style.transition = '';
        langSwitcher.style.transition = '';
        header.classList.toggle('header--active');
        setTimeout(()=> {
            burger.style.transition = '0.5s ease-in-out';
            langSwitcher.style.transition = '0.5s ease-in-out';
            burger.style.opacity = 1;
            langSwitcher.style.opacity = 1;
        }, 500)
    })
}