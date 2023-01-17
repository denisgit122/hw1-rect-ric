

function slidePlugin(activeSlide=0) {
    const slides=document.querySelectorAll('.slide')


    slides[activeSlide].classList.add('active')


    for (const slide of slides) {
        slide.addEventListener('click',function () {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }
    function clearActiveClasses() {
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}
slidePlugin(2)