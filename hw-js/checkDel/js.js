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
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
const headDiv=document.createElement("div")
document.body.append(headDiv)

    const  res1=document.createElement('div')
    res1.classList.add('filOne')
    headDiv.append(res1)
        const inpOne=document.createElement('input')
        inpOne.type='checkbox'
            const inpTw=document.createElement('input')
            inpTw.type='checkbox'
                const inpTh=document.createElement('input')
                inpTh.type='checkbox'
                    headDiv.append(inpOne,inpTw,inpTh)



// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// for (const usersWithAddress1 of usersWithAddress) {
//     const filOne=document.createElement('div')
//     filOne.innerText=`id-${usersWithAddress1.id}, name-${usersWithAddress1.name} age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}  `
//     res1.append(filOne)
//
// inpOne.addEventListener('click',function () {
//     if (inpOne.checked===true){
//         if (usersWithAddress1.status===true){
//             filOne.innerText=''}
// }else if (inpTw.checked===true){
//         if (usersWithAddress1.age<29)
//         {filOne.innerText=''}
//     } else if (inpOne.checked!==true) { filOne.innerText=`id-${usersWithAddress1.id}, name-${usersWithAddress1.name} age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}  `}
// })
//
//
//     inpTw.addEventListener('click',function (){
//         if (inpTw.checked===true){
//             if (usersWithAddress1.age<29){
//                 filOne.innerText=''
//             }else if (usersWithAddress1.age>29){
//                 console.log('dont have');}
//         }else if (inpOne.checked===true){
//             if (usersWithAddress1.status===false)
//             {filOne.innerText=''}
//         }
//
//         else if (inpTw.checked!==true) { filOne.innerText=`id-${usersWithAddress1.id}, name-${usersWithAddress1.name} age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}  `}
//     })
//
// inpTh.addEventListener('click',function () {
//     if (inpTh.checked===true){
//         if (usersWithAddress1.address.city!='Kyiv'){
//             filOne.innerText=''
//         }else if (usersWithAddress1.address.city='Kyiv'){console.log('dont have')}
//     }else if (inpTw.checked===true) {
//         if (usersWithAddress1.age < 29) {
//             filOne.innerText = ''
//         }
//     }else if (inpOne.checked === true) {
//         if (usersWithAddress1.status === true) {
//             filOne.innerText = ''
//         }
//     }else if (inpTh.checked!==true) {filOne.innerText=`id-${usersWithAddress1.id}, name-${usersWithAddress1.name} age-${usersWithAddress1.age}, status-${usersWithAddress1.status}, city-${usersWithAddress1.address.city}`}
//
// })
//     }

for (const user of usersWithAddress) {
    const box = document.createElement('div')
    box.innerText = `id-${user.id}, name-${user.name} age-${user.age}, status-${user.status}, city-${user.address.city}  `
    headDiv.append(box)




     inpOne.addEventListener('click',function () {
         if (inpOne.checked===true ){
             if (user.status===true ){
                 box.innerText=''
             }
             }
         
     })


   //  inpTw.addEventListener('click',function (){
   //     if (inpTw.checked===true){
   //         if (user.age<29){box.innerText=''}
   //     }
   // })
}


// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ