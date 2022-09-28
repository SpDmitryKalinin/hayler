const header = document.querySelector('.header');

if(header) {
    const burgers = document.querySelectorAll('.header__burger');
    const langSwitcher = header.querySelector('.lang-switcher');
    const sections = document.querySelectorAll('section');
    let currentSection
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

    burgers.forEach(burger => {
        burger.addEventListener('click', () => {
            header.classList.toggle('header--active');
            burgers.forEach(burger => {
                burger.style.opacity = 0;
                langSwitcher.style.opacity = 0;
                burger.style.transition = '';
                langSwitcher.style.transition = '';
                
                
                setTimeout(()=> {
                    burger.style.transition = '0.5s ease-in-out';
                    langSwitcher.style.transition = '0.5s ease-in-out';
                    burger.style.opacity = 1;
                    langSwitcher.style.opacity = 1;
                }, 500)
            })
        })
    })

    toggleHeader();

    function savePositionsSections(sections) {
        let positionArray = [];
        sections.forEach(section => {
            let position = {
                section: section,
                top: window.pageYOffset + section.getBoundingClientRect().top,
                left: window.pageXOffset + section.getBoundingClientRect().left,
                right: window.pageXOffset + section.getBoundingClientRect().right,
                bottom: window.pageYOffset + section.getBoundingClientRect().bottom
            }
            positionArray.push(position);
        })
        return positionArray;
    }

    window.addEventListener('scroll', () => toggleHeader())

    function toggleHeader() {
        const sectionsPosition = savePositionsSections(sections);
        let windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };   
        let tempSection = Array.from(sectionsPosition).reverse().find(sectionPosition => sectionPosition.top <= windowPosition.top + 20) || null;
        if(tempSection === null) {
            currentSection = null;
            const windowWidth = window.innerWidth;
            if(windowWidth >=1200) {
                changeColorHeader('black')
            }
            else {
                changeColorHeader('black')
            }
        }

        else if(currentSection !== tempSection.section) {
            currentSection = tempSection.section;
            const windowWidth = window.innerWidth;
            const color = currentSection.dataset.header || 'black';
            if(windowWidth >=1200) {
                changeColorHeader(color)
            }
            else {
                changeColorHeader(color)
            }
        }
    }

    function changeColorHeader(color) {
        if(color === 'white') {
            header.classList.remove('header--black');
            header.classList.remove('header--dark');
        }
        else if(color === 'black'){
            header.classList.add('header--black');
        } else if(color === 'dark'){
            header.classList.add('header--dark');
        }
    }
}

