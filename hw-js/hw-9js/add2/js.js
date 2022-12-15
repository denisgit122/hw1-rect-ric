// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//let badWords=['asd','qwe','rty','uio','pas']

// let input=document.createElement('input')
// input.setAttribute('type','text')
// document.body.append(input)
//
// let but=document.createElement('button')
// but.innerText='click'
// document.body.append(but)
//
// but.onclick=function () {
//     input.oninput
//
//     for (const badWord of badWords) {
//     if (input.value==badWord){
//         alert('lox')
//     }else {alert('ok')}
// }
// }

// Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// let input=document.createElement('input')
// input.setAttribute('type','text')
//
// let but=document.createElement('button')
// but.innerText='click'
// document.body.append(input,but)
//
// but.onclick=function () {
//     input.oninput
//     let arr=[]
//     let val = input.value
//     for (const badWord of badWords) {
//
//         if (val.includes(badWord)) {
//             arr.push(badWord) && alert('error')
//         } else {
//             alert('ok')
//         }
//     }
//     console.log(arr)
// }

// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


//                2
// Создайте меню, которое раскрывается/сворачивается при клике
//
// let but=document.createElement('button')
// but.classList.add('but')
// but.innerText='click'
// document.body.append(but)
// let span=document.createElement('span')
// but.append(span)
//
// let div2=document.createElement('div')
// div2.classList.add('div2')
// document.body.append(div2)
//
// let div=document.createElement('div')
// div.classList.add('div')
// div2.append(div)
//
// let ul= document.createElement('ul')
// ul.classList.add('ul')
// div.append(ul)
//
// let li1=document.createElement('li')
// li1.innerText='li1'
//
//
//
// let li2=document.createElement('li')
// li2.innerText=`${1}`
// let li3=document.createElement('li')
// li3.innerText=`${1}`
//
//
// div.append(li1,li2,li3)
//
//      but.onclick=function () {
//     document.querySelector('.div2').classList.toggle('active')
// }



              //3
//Создать список комментариев , пример объекта коментария - 
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//     let comen=[ {title : 'lorem1', body:'lorem ipsum dolo sit ameti'}];
//     let comen2= [{title2 : 'lorem2', body2:'lorem ipsum dolo sit ameti'}];
//     let comen3=  [{title : 'lorem3', body:'lorem ipsum dolo sit ameti'}];
//
// let headDiv=document.createElement('div')
// headDiv.classList.add('headDiv')
// document.body.append(headDiv)
//
//     let div=document.createElement('div')
//     div.classList.add('div')
// headDiv.append(div)
//
//     let but=document.createElement('button')
//     but.innerText='watch the first comen'
//     but.classList.add('but')
//     div.append(but)
//
//
//     let div1=document.createElement('div')
//     div1.classList.add('div1')
//     div.append(div1)
//
//     let ul=document.createElement('ul')
//     div1.append(ul)
//     let li=document.createElement('li')
//     li.innerText=comen[0].title
//     li.classList.add('li1')
//     ul.append(li)
//
//
//     let p=document.createElement('p')
//     p.innerText=comen[0].body
//     p.classList.add('p')
//     div1.append(p)
//
// but.addEventListener('click',function () {
//     document.querySelector('.div1').classList.toggle('active')
// });
//
//
//
//
// let divcom2=document.createElement('div')
// divcom2.classList.add('divcom2','div')
// headDiv.append(divcom2)
//
// let but2=document.createElement('button')
// but2.innerText='watch the second comen'
// but2.classList.add('but2','but')
// divcom2.append(but2)
//
//
// let divcom=document.createElement('div')
// divcom.classList.add('divcom','div1')
// divcom2.append(divcom)
//
// let ul2=document.createElement('ul')
// divcom.append(ul2)
// let li2=document.createElement('li')
// li2.innerText=comen2[0].title2
// ul2.append(li2)
//
// let p2=document.createElement('p')
// p2.innerText=comen2[0].body2
// p2.classList.add('p2')
// divcom.append(p2)
//
// but2.addEventListener('click',function () {
//     document.querySelector('.divcom2').classList.toggle('active2')
// })
//
//
//
//
//
//
// let divcom3=document.createElement('div')
// divcom3.classList.add('divcom3','div')
// headDiv.append(divcom3)
//
// let but3=document.createElement('button')
// but3.innerText='watch the third comen'
// but3.classList.add('but3','but')
// divcom3.append(but3)
//
//
// let divco=document.createElement('div')
// divco.classList.add('divco','div1')
// divcom3.append(divco)
//
// let ul3=document.createElement('ul')
// divco.append(ul3)
// let li3=document.createElement('li')
// li3.innerText=comen3[0].title
// ul3.append(li3)
//
// let p3=document.createElement('p')
// p3.innerText=comen3[0].body
// p3.classList.add('p3')
// divco.append(p3)
//
// but3.addEventListener('click',function () {
//     document.querySelector('.divcom3').classList.toggle('active3')
// })



                                 //4
//Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let div=document.createElement('div')
// div.classList.add('div')
// document.body.append(div)
// let but=document.createElement('button')
// but.classList.add('but')
// but.innerText='click'
// div.append(but)
// but.onclick=function () {
//     document.querySelector('.div').classList.toggle('active')
// }

///////////////////////////5
//- взять массив пользователей
let usersWithAddress = [
{id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
{id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
{id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
{id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
{id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
{id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// // Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)




for (const usersWithAddress2 of usersWithAddress) {
let val=`id-${usersWithAddress2.id},  name-${usersWithAddress2.name}, age-${usersWithAddress2.age}, status-${usersWithAddress2.status}, city-${usersWithAddress2.address.city}, street-${usersWithAddress2.address.street}, number-${usersWithAddress2.address.number}`
    let doc=document.createElement('p')
    doc.classList.add('doc')

    doc.innerText=val
//doc.innerText=`id-${usersWithAddress2.id},  name-${usersWithAddress2.name}, age-${usersWithAddress2.age}, status-${usersWithAddress2.status}, city-${usersWithAddress2.address.city}, street-${usersWithAddress2.address.street}, number-${usersWithAddress2.address.number}`
document.body.append(doc)

 console.log(usersWithAddress2)

let check1=document.querySelector('.check')

check1.onclick=function () {
    console.log('res');
d

for (let i = 0; i < usersWithAddress.length; i++) {
    const usersWithAddress1 = usersWithAddress[i];

 if (usersWithAddress1.status===false){

   let p = document.createElement('div')
       p.classList.add('div')
       document.body.append(p)

    let ul = document.createElement('ul')
         p.append(ul)
            let li = document.createElement('li')

    li.innerText =`id-${usersWithAddress1.id},  name-${usersWithAddress1.name}, age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}, street-${usersWithAddress1.address.street}, number-${usersWithAddress1.address.number}`
            ul.append(li)
  }
}
}}

// let div=document.createElement('div')
// div.classList.add('div')
// document.body.append(div)
//
// //let fil=usersWithAddress.filter(value => value.status===false)
//
// let box=document.createElement('div')
// box.classList.add('box')
// let h2=document.createElement('h2')
// h2.innerText='пользователи со статусом false'
// h2.classList.add('h2')
// div.append(box)
// box.append(h2)
//
// for (const usersWithAddress1 of usersWithAddress) {
//
// if (usersWithAddress1.status===false){
//     console.log( usersWithAddress1)
// let ul=document.createElement('ul')
//     box.append(ul)
//     let li=document.createElement('li')
//     li.innerText=`id-${usersWithAddress1.id},  name-${usersWithAddress1.name}, age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}, street-${usersWithAddress1.address.street}, number-${usersWithAddress1.address.number}`
//     ul.append(li)
// }
// }
//
//
// // 2й - оставляет старше 29 лет включительно
// let box2=document.createElement('div')
// box2.classList.add('box2','box')
// let h2fil2=document.createElement('h2')
// h2fil2.innerText='пользователи старше 29 лет включительно'
// h2fil2.classList.add('h2fil2','h2')
// div.append(box2)
// box2.append(h2fil2)
//
// for (const usersWithAddress1 of usersWithAddress) {
//
//     if (usersWithAddress1.age>=29){
//         console.log( usersWithAddress1)
//         let ul2=document.createElement('ul')
//         box2.append(ul2)
//         let li2=document.createElement('li')
//         li2.innerText=`id-${usersWithAddress1.id},  name-${usersWithAddress1.name}, age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}, street-${usersWithAddress1.address.street}, number-${usersWithAddress1.address.number}`
//         ul2.append(li2)
//     }
// }
// // 3й - оставляет тех у кого город киев
//
//
// let box3=document.createElement('div')
// box3.classList.add('box3','box')
// let h3fil3=document.createElement('h2')
// h3fil3.innerText='пользователи у кого город киев'
// h3fil3.classList.add('h3fil3','h2')
// div.append(box3)
// box3.append(h3fil3)
//
// for (const usersWithAddress1 of usersWithAddress) {
//
//     if (usersWithAddress1.address.city=='Kyiv'){
//         console.log( usersWithAddress1)
//         let ul3=document.createElement('ul')
//         box3.append(ul3)
//         let li3=document.createElement('li')
//         li3.innerText=`id-${usersWithAddress1.id},  name-${usersWithAddress1.name}, age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}, street-${usersWithAddress1.address.street}, number-${usersWithAddress1.address.number}`
//         ul3.append(li3)
//     }
// }
// Данные выводить в документ



//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо
// нажатием на стрелочки.
// результат в папці slide

// При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let p=document.querySelector('.inp')
// function me() {
//
//     p.classList.add('p')
// }
