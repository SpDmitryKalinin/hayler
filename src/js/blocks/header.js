const header = document.querySelector('.header');

if(header) {
    const burger = header.querySelector('.header__burger');
    const langSwitcher = header.querySelector('.lang-switcher');
    const sections = document.querySelectorAll('section');
    let prevScroll = 0;
    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        if ( scrolled > 100 && scrolled > prevScroll && window.innerWidth > 1200) {
            header.classList.remove('header--show');
        } else {
            header.classList.add('header--show');
        }
        prevScroll = scrolled;
    })
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

    if(!document.querySelector('.pin-spacer')) {
        toggleHeader();
        function toggleHeader() {
            setTimeout(() => {
                sections.forEach(section => {
                    //TODO
                    if(section.offsetTop <= window.scrollY && window.screenY <=  section.offsetTop + section.offsetHeight){
                        //console.log(section.offsetTop, section.offsetTop + section.offsetHeight, window.scrollY, section);
                    }
                })
                window.requestAnimationFrame(toggleHeader)
            }, 1000 / 15);
        }
    }
    
}

