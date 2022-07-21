const footer = document.querySelector('.footer');
let timeOut
if(footer) {
    const buttonTop = footer.querySelector('.footer__button-top');
    buttonTop.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
}