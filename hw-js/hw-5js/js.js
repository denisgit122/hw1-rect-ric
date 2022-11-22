// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function arrea(a,b) {
//     let res=(a+b)*2
//     return res
// }
// let num=arrea(1111,2222)
// console.log(num)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function arrea(a) {
//     let res= a*a
//     return res
// }
// let num=arrea(12)
// console.log(num)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function arrea(h,r) {
//     let res= 2*r*h
//     return res
// }
// let num=arrea(12,22)
// console.log(num)

// - створити функцію яка приймає масив та виводить кожен його елемент
// let irr= [1,2,3,4]

// function mas(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
//
// mas([1,2,3])

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(tex) {
//   let qwe= document.write(`<p>${tex}</p>`)
//
// }
// p('word')
// p('word2')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(name,age,title) {
//     document.write(`</ul>`)
//     document.write(`<li>name-${name},   Age- ${age}, Title-${title}</li>`)
//
//     document.write(`</ul>`)
// }
// ul('anna', 'eew' )
// ul('anna'  )
// ul('anna'  )

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul ( text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// ul('ana',4)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arr(array) {
    document.write(`<ul>` )
    document.write(`<li>${array[0]}</li>`)
    document.write(`<li>${array[1]}</li>`)
    document.write(`<li>${array[2]}</li>`)
    document.write(`</ul>` )
}
arr([111,'word', false])
arr([111,'word', false])

// function arr(num,str,bool) {
//     document.write(`<ul>` )
//     document.write(`<li>${num}</li>`)
//     document.write(`<li>${str}</li>`)
//     document.write(`<li>${bool}</li>`)
//     document.write(`</ul>` )
// }
// arr(111,'word', false)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arr(array) {
//     document.write(`<div>`)
//     document.write(`<h2>id-${array[0]}</h2>`)
//     document.write(`</div>`)
//     document.write(`<div>`)
//     document.write(`<h2> name-${array[1]}</h2>`)
//     document.write(`</div>`)
//     document.write(`<div>`)
//     document.write(`<h2>Age${array[2]}</h2>`)
//     document.write(`</div>`)
// }
// arr([1,'anna',22])
// arr([2,'wewqw',20])

// function arr(id,name,age) {
//     document.write(`<div>`)
//     document.write(`<h2>id-${id}</h2>`)
//     document.write(`</div>`)
//     document.write(`<div>`)
//     document.write(`<h2> name-${name}</h2>`)
//     document.write(`</div>`)
//     document.write(`<div>`)
//     document.write(`<h2>Age-${age}</h2>`)
//     document.write(`</div>`)
// }
// arr(1,'anna',22)


// - створити функцію яка повертає найменьше число з масиву

// function num(filNum) {
//
//     let little = filNum[0]
//     for (let i = 0; i < filNum.length; i++) {
//         const littleElement = filNum[i];
//         if (littleElement.num < little.num){
//             little= littleElement
//
//         }
//     }return little
// }
// let filNum = [
//     { num: 500},
//     { num: 30},
//     { num: 10},
//     { num: 2},
// ]
// let res=num(filNum)
// console.log(res)


// ..- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let num1=[10,3,6]
// function foo(array) {
//     let num=0
//     for (let i = 0; i < array.length; i++) {
//         num+=array[i]
//
//     }return num
// }let res=foo(num1)
// console.log(res)

