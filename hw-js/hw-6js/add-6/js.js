



//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// function cutString(str, n) {
//     res=[]
//     for (let i = 0; i < str.length; i+=n) {
//         const strElement = str[i];
// res.push(str.substr(i,n))
//     }return res
// }
//
// let qww=cutString('наслаждение',2)
// console.log(qww);



//- создать массив с 20 числами.
let arrray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// -- при помощи метода sort и колбека  отсортировать массив.
// arrray.sort((a, b) => {
//     return a-b
// })
// let  res=arrray
// console.log(res)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arrray.sort((a, b) => {
//     return b-a
// })
// console.log(arrray)
// -- при помощи filter получить числа кратные 3
// let fi=arrray.filter(value => value % 3===0)
// console.log(fi);
//
// function name(ar) {
//     res1=[]
//     for (const arElement of ar) {
//        if (arElement % 3===0) {
//            res1.push(arElement)
//        }
//     }return res1
// }
//
// let qwe=name(arrray)
// console.log(qwe)

// -- при помощи filter получить числа кратные 10
// let res=arrray.filter(value => value%10===0)
// console.log(res);

// -- перебрать (проитерировать) массив при помощи foreach()
//arrray.forEach(value => console.log(value))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newA =arrray.map(value => {
//     return value *3
// })
// console.log(newA )

// - создать массив со словами на 15-20 элементов.
// let words = ['мідь', 'гедзь', 'палець', 'кільце', 'зайчисько',  'донецький', 'криворізький',
//     'тьмяний', 'різьбяр', 'няньчити', 'бриньчати', 'дуель', 'модель', 'пральня', 'діафільм']
// -- отсортировать его по алфавиту в восходящем порядке.


// let sort=words.sort((a, b) =>{
//     if (a>b){
//         return 1
//     }else if (a===b) {
//         return 0
//     } else if (a<b) {
//     return -1
// }
// })
// console.log(sort)
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort=words.sort((a, b) =>{
//     if (a>b){
//         return -1
//     }else if (a===b) {
//         return 0
//     } else if (a<b) {
//         return 1
//     }
// })
// console.log(sort)

// -- отфильтровать слова длиной менее 5х символов
// let res=words.filter(value => value.length<=5)
// console.log(res)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let res=words.map(value => value+='!')
// console.log(res)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//         let users = [
//             {name: 'vasya', age: 31, status: false},
//             {name: 'petya', age: 30, status: true},
//             {name: 'kolya', age: 29, status: true},
//             {name: 'olya', age: 28, status: false},
//             {name: 'max', age: 30, status: true},
//             {name: 'anya', age: 31, status: false},
//             {name: 'oleg', age: 28, status: false},
//             {name: 'andrey', age: 29, status: true},
//             {name: 'masha', age: 30, status: true},
//             {name: 'olya', age: 31, status: false},
//             {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let res=users.sort((a, b) => a.age-b.age)
// console.log(res)
// let res=users.sort((a, b) =>b.age- a.age)
// console.log(res)

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let res=users.sort((a, b) => {
//     if (a.name.length>b.name.length){
//         return -1
//     }else  if (a.name.length===b.name.length){
//         return 0
//     }else if (a.name.length<b.name.length){
//         return 1
//     }
//
// })
// console.log(res);
// let res=users.sort((a, b) => {
//     if (a.name.length<b.name.length){
//         return -1
//     }else  if (a.name.length===b.name.length){
//         return 0
//     }else if (a.name.length>b.name.length){
//         return 1
//     }
//
// })
// console.log(res);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let res=users.map((value, index) => {
//     let newUs={
//         name:value.name,
//         age:value.age,
//         status:value.status,
//         id:index+1}
//     return newUs
// })
// console.log(res);
// console.log(users)

// - відсортувати його за індентифікатором
// let res=users.map((value, index) => {
//     let newUs={
//
//         id:index+1}
//     return newUs
// })
// console.log(res);
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calck(a,b,callback) {
// if (callback==='+'){
//     return a+b
// }else if (callback==='-'){
//     return a-b
// }else if (callback==='*'){
//     return a*b
// }else if (callback==='/'){
//     return b/a
// }
//
// }
// let res=calck(10,20,'/')
// console.log(res)
// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calck(a,b,c,callback) {
// if (callback==='+'){
//     return a+b+c
// }else if (callback==='-'){
//     return a-b-c
// }else if (callback==='*'){
//     return a*b
// }else if (callback==='/'){
//     return b/a/c
// }
//
// }
// let res=calck(10,20,50,'+')
// console.log(res)





// let cars = [
// {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let res=cars.filter(value => value.volume>3)
// console.log(res)
// - двигун = 2л
// let res=cars.filter(value => value.volume===2)
// console.log(res)
// - виробник мерс
// let res=cars.filter( value => value.producer==="mercedes")
// console.log(res);
// - двигун більше 3х літрів + виробник мерседес
// let res=cars.filter(value => value.volume>=3 && value.producer==="mercedes")
// console.log(res)

// - двигун більше 3х літрів + виробник субару
// let res=cars.filter(value => value.volume>=3 && value.producer==="subaru")
// console.log(res)

// - сили більше ніж 300
// let res=cars.filter(value => value.power>300)
// console.log(res);

// - сили більше ніж 300 + виробник субару
// let res=cars.filter(value => value.power>300 && value.producer==='subaru')
// console.log(res);

// - мотор серіі ej
// let res=cars.filter(value => value.engine.startsWith('ej'))
// console.log(res);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let res=cars.filter(value => value.power>300 && value.producer==='subaru'&& value.engine.startsWith('ej') )
// console.log(res);

// - двигун меньше 3х літрів + виробник мерседес
// let res=cars.filter(value => value.volume<3 && value.producer==='mercedes')
// console.log(res)
// - двигун більше 2л + сили більше 250
// let res=cars.filter(value => value.volume>2 && value.power>250)
// console.log(res)
// - сили більше 250  + виробник бмв
// let res=cars.filter(value => value.producer==="bmw" && value.power>250)
// console.log(res)





// взять слдующий массив
let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// let res=users.sort((a, b) => {
//     if (a.id<b.id){
//         return -1
//     }else if (a.id>b.id){
//         return 1
//     }else if (a.id=b.id){
//         return 0
//     }
// })
// console.log(res);

// -- отсортировать его по id пользователей в обратном опрядке
// let res=users.sort((a, b) => {
//     if (a.id<b.id){
//         return 1
//     }else if (a.id>b.id){
//         return -1
//     }else if (a.id=b.id){
//         return 0
//     }
// })
// console.log(res);

// -- отсортировать его по возрасту пользователей
// let res=users.sort((a, b) => {
//     if (a.age>b.age){
//         return 1
//     }else if (a.age<b.age){
//         return -1
//     }else if (a.age=b.age){
//         return 0}
// })
//     console.log(res);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let res=users.sort((a, b) => {
//     if (a.age>b.age){
//         return -1
//     }else if (a.age<b.age){
//         return 1
//     }else if (a.age=b.age){
//         return 0}
// })
// console.log(res);

// -- отсортировать его по имени пользователей
// let res=users.sort((a, b) => {
//     if (a.name>b.name){
//         return 1
//     }else if (a.name<b.name){
//         return -1
//     }  else if (a.name===b.name){
//        return 0
// }
// })
// console.log(res);
// -- отсортировать его по имени пользователей в обратном порядке
// let res=users.sort((a, b) => {
//     if (a.name<b.name){
//         return 1
//     }else if (a.name>b.name){
//         return -1
//     }  else if (a.name===b.name){
//         return 0
//     }
// })
// console.log(res);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let res=users.sort((a, b) => {
//     if (a.address.street>b.address.street){
//         return -1
//     }else if (a.address.street<b.address.street){
//         return 1
//     }  else if (a.address.street===b.address.street){
//        return 0
// }
// })
// console.log(res);
// -- отсортировать его по номеру дома по возрастанию
// let res=users.sort((a, b) => {
//     if (a.address.number>b.address.number){
//         return 1
//     }else if (a.address.number<b.address.number){
//         return -1
//     }  else if (a.address.number===b.address.number){
//         return 0
//     }
// })
// console.log(res);

// -- отфильтровать (оставить) тех кто младше 30
// let res=users.filter(value => value.age<30)
// console.log(res);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let res=users.filter(value => value.status==false)
// console.log(res);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let res=users.filter(value => value.status==false && value.age<30)
// console.log(res);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let res=users.filter(value => value.address.number%2===0)
// console.log(res);