const forms = document.querySelectorAll('.offer-form');

forms.forEach(form => {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if(input.value != '') {
                input.style.borderColor= "#FF4D00";
            }
            if(input.value === '') {
                input.style.borderColor= "";
            }
        })
    })
})