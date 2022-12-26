                // 1

//let offset=0;
// const add =document.querySelector('.add')
// // const addChild=add.children
//
//
// document.querySelector('.slider-next').addEventListener('click',function () {
//     offset=offset+300
//     if (offset>600){
//         offset=0
//     }
//     add.style.left=-offset+'px'
//
// })
// document.querySelector('.slider-back').addEventListener('click',function () {
//     offset=offset-300
//     if (offset<0){
//         offset=600
//     }
//     add.style.left=-offset+'px'
//
// })

                                      // 2


//  const add =document.querySelector('.add')
// const addChild=Array.from(add.children)
// const next=document.querySelector('.slider-next')
// const back=document.querySelector('.slider-back')
//
//
// addChild.forEach(function (ad,index) {  //перетворюємо псевдо масив в масив
//
//
//     if (index!==0){
//         ad.classList.add('hidden')
//     }
// ad.dataset.index=index // add index
//
//     //добавляємо  дата атрибут для першого в даний момент активгого слайда
//
// addChild[0].setAttribute('data-active','')
//     ad.addEventListener('click',function () {
//
//     ad.classList.add('hidden')     //ховаємо тукущий слайд
// ad.removeAttribute('data-active')
//
//         let nextSlideIndex;
//     if (index+1===addChild.length){
//         nextSlideIndex=0              //щитаємо індекс наступного слайда
//     }else {nextSlideIndex=index+1}
//                                          //показуємо наступний слайд
//     const nexSlide =add.querySelector(`[data-index='${nextSlideIndex}']`)
//         nexSlide.classList.remove('hidden')
//         nexSlide.setAttribute('data-active','')
//     })
// //
// })
//
// next.onclick=function () {
//     console.log('ntxt')
//     //ховаємо тукущий слайд
//   const currentSlide= add.querySelector('[data-active]')
//
//     const currentSlideIndex=+currentSlide.dataset.index;//знайшли ігдекс
//
//     currentSlide.classList.add('hidden')// пише ерор  сховали теперішній слайд
//     currentSlide.removeAttribute('data-active')
//
//     let nextSlideIndex=currentSlideIndex+1===addChild.length?0:currentSlideIndex+1;//щитаємо індекс наступного слайда
//
//     //шукaємо нaступний слaйд
//     const nexrSlide=add.querySelector(`[data-index='${nextSlideIndex}']`)
//     // вiдображаємо наступний слайд
//     nexrSlide.classList.remove('hidden') //delet class hidden
//     nexrSlide.setAttribute('data-active','')
//
// }
//
// back.onclick=function () {
//     console.log('back')
//     //ховаємо тукущий слайд
//     const currentSlide= add.querySelector('[data-active]')
//
//     const currentSlideIndex=+currentSlide.dataset.index;//знайшли ігдекс
//
//     currentSlide.classList.add('hidden')//   сховали теперішній слайд
//     currentSlide.removeAttribute('data-active')
//
//     let backSlideIndex=currentSlideIndex===0 ? addChild.length-1:currentSlideIndex-1;
//     //щитаємо індекс наступного слайда
//
//     //шукaємо нaступний слaйд
//     const backSlide=add.querySelector(`[data-index='${backSlideIndex}']`)
//     // вiдображаємо наступний слайд
//     backSlide.classList.remove('hidden') //delet class hidden
//     backSlide.setAttribute('data-active','')
//
// }


                           // 3
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо
// нажатием на стрелочки.
let add=document.querySelector('.add')
let back=document.querySelector('.slider-back')

// let offset=0;
// back.addEventListener('click',function () {
//     offset=offset-500
//     if (offset<0){
//         offset=1000
//     }
//     add.style.left=-offset+'px'
// })

let offset=0;
               const bac=function () {
                    offset=offset-500
                    if (offset<0){
                        offset=1000
                    }
                    add.style.left=-offset+'px'
                }
                back.addEventListener('click',bac)

let next=document.querySelector('.slider-next')
const nex= function () {

    offset=offset+500
    if (offset>1000){
        offset=0
    }
    add.style.left=-offset+'px'
}
next.addEventListener('click',nex)
                setInterval(()=>{
                    nex()
                },4000)


