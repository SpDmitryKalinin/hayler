const faqBlocks = document.querySelectorAll('.faq');

faqBlocks.forEach(faq => {
    const faqItems = faq.querySelectorAll('.faq__item');
    faqItems.forEach(faqItem => {
        const faqItemHeader = faqItem.querySelector('.faq__item-header');
        const faqItemContent = faqItem.querySelector('.faq__item-content');
        const faqItemInnerContent = faqItem.querySelector('.faq__item-inner-content');

        faqItemHeader.addEventListener('click', () => {
            if(faqItem.classList.contains('faq__item-text--active')) {
                
                faqItem.classList.remove('faq__item-text--active');
                faqItemContent.style.maxHeight = `0px`;
            }
            else{
                removeAllHeight(faqItems);
                faqItem.classList.add('faq__item-text--active')
                faqItemContent.style.maxHeight = `${faqItemInnerContent.offsetHeight}px`;
            }
            
        })
    })
    function removeAllHeight(faqItems) {
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('faq__item-text--active');
            const faqItemInnerContent = faqItem.querySelector('.faq__item-content');
            faqItemInnerContent.style.maxHeight ='0px';
        })
    }
})