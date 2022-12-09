// Створити довільний елемент з id = text.  Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let h2=document.querySelector('#text')
//
// console.log(h2);
//
// let but=document.createElement('button')
// but.innerText='but'
// document.body.append(but)
// but.onclick=function () {
//     h2.innerHTML=''
//
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує
// дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

// let input=document.createElement('input')
// input.setAttribute('type','number')
// input.setAttribute('name','age')
// document.body.append(input)
//
// let but=document.createElement('button')
// but.innerText='but'
// document.body.append(but)
//
// console.log(input)
// but.onclick=function () {
//     input.oninput;
//         if (input.value<18){
//             alert('is error')
//             // console.log('small')
//     }else if (input.value>=18){
//             alert('ok')
//     }
// }










//Створити 3 инпута та кнопку. Один визначає кількість рядків, другий
// - кількість ячеєк, третій вмиіст ячеєк.

let input1=document.createElement('input')
//input1.getAttribute('type','text')

let input2=document.createElement('input')
//input1.getAttribute('type','text')

let input3=document.createElement('input')
//input1.getAttribute('type','text')

let but=document.createElement('button')
but.innerText='click'

document.body.append(input1,input2,input3,but)

let caption=document.createElement('caption')
caption.innerText='table'
document.body.append(caption)
but.onclick= ()=> {
    let imp1=input1.value
    let imp2=input2.value
    let imp3=input3.value

    let res=(width,height,word)=> {
        let tab=document.createElement('table')
        tab.style.border='2px solid yellow'
        caption.append(tab)

        for (let i = 0; i < width; i++) {
let wit=document.createElement('tr')
 tab.append(wit)

            for (let j = 0; j < height; j++) {

                let he=document.createElement('td')
                he.innerText=`${word}`
                he.style.border=`2px solid yellow`
                wit.append(he)

            }
            
        }

    }
    res(imp1,imp2,imp3)
}




// При натисканні кнопки, вся ця інформація зчитується і формується
// табличка, з відповідним вмістом.
// (Додатковачастина для завдання)






