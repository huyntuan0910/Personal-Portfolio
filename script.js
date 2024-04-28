function scrollToElement(elementSelector, instance =0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const linkFeature = document.getElementById("linkFeature");
const linkPricing = document.getElementById("linkPricing");
const linkAbout = document.getElementById("linkAbout");

linkFeature.addEventListener('click', ()=>{
    scrollToElement('.header');
})

linkPricing.addEventListener('click', ()=>{
    scrollToElement('.header', 1);
})

linkAbout.addEventListener('click', ()=>{
    scrollToElement('.column');
})
