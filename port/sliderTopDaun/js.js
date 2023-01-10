const downBtn=document.querySelector('.down-btn')
const upBtn=document.querySelector('.up-btn')

const container=document.querySelector('.container')

const sidebars=document.querySelector('.sidebar')
const mainSlide=document.querySelector('.main-slide')
const slidesCound =mainSlide.querySelectorAll('div').length //довжина дівів
console.log(slidesCound);

sidebars.style.top=`-${(slidesCound-1)*100}vh`//у нас щоб це все слідер з права і ліва повинні бути вшдзуркаденні
  //  а зфраз ми їх робимо щоб вони були не відзеркаленні slidesCound=4 потім ми -1=3 і 3*на весь екран

let activeSlideIndex=0

upBtn.addEventListener('click',function () {
    changeSlide('up')
})
downBtn.addEventListener('click', function () {
changeSlide('down')
})

function changeSlide(direction) {   //в цю функцію ми будемо задавати направлення куди клікнув
    console.log(direction); //Властивість direction встановлює або повертає напрямок тексту (порядок читання) вмісту елемента.
    if (direction==='up'){
        activeSlideIndex++
        if (activeSlideIndex===slidesCound){
            activeSlideIndex=0
        }

    }else if (direction==='down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex=slidesCound-1
        }
    }
    const height=container.clientHeight //Властивість clientHeightповертає видиму висоту елемента в пікселях,
    // включаючи відступи, але не рамку, смугу прокрутки чи поля
    const heigh=container.clientHeight
mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)` //віднімаємо від трансдуйтУ
//  активний слайд* на висоту улумента в пікселях працює правий слайдур

    sidebars.style.transform=`translateY(${activeSlideIndex*height}px)`
}




////////////////////////////// евент по кліку по клвіатурі

document.addEventListener('keydown',ev =>{// document.addEventListener('keydown) коли ми настискаємо на кдавіфтурі кнопку воно вдображає на яку кнопку тикнули
    console.log(ev);
    if (ev.key==='ArrowUp'){ //якщо тикнули на стрілочку вгору то ми передаємо нащу функцію  changeSlide('up')
        changeSlide('up')
    }else if (ev.key==='ArrowDown'){  //якщо тикнули на стрілочку вниз то ми передаємо нащу функцію  changeSlide('down')
        changeSlide('down')
    }
} )