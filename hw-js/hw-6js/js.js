//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world'
// for (let i = 0; i < str1.length; i++) {
//     console.log(i)
//     console.log(str1[i])
// }
// let str2='lorem ipsum'
// for (let i = 0; i < str2.length; i++) {
//     console.log(i)
//     console.log(str2[i])
// }
// let str3='javascript is cool'
// for (let i = 0; i < str3.length; i++) {
//     console.log(i)
//     console.log(str3[i])
// }

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world'
// console.log(str1.toUpperCase());
// let str2='lorem ipsum'
// console.log(str2.toUpperCase());
// let str3='javascript is cool'
// console.log(str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1='HELLO WORLD'
// console.log(str1.toLowerCase());
// let str2='LOREM IPSUM'
// console.log(str2.toLowerCase());
// let str3='JAVASCRIPT IS COOL'
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let res=str.replace(' ','')
console.log(str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let sortNums=[10,8,-7,55,987,-1011,0,1050,0]
// sortNums.sort((a, b) => {
//     return a-b
// })
// console.log(sortNums);
// let sortNums=[10,8,-7,55,987,-1011,0,1050,0]
// sortNums.sort((a, b) => {
//     return b-a
// })
// console.log(sortNums);


// - є масив
// let cours = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//  ];
//  -- відсортувати його за спаданням за monthDuration
// cours.sort((a, b) => {
//     return b.monthDuration-a.monthDuration
// })
// console.log(cours);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let fil=cours.filter(value => {
//     return value.monthDuration>5
// })
// console.log(fil)

//  описати колоду карт
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];
//  - знайти піковий туз
// let filt=deck.filter(value => {
//    return value.cardSuit=="Spade"&& value.value=='Ace'
// })
// console.log(filt);
//  - всі шістки
// let filt=deck.filter(value => {
//     return  value.value=='6'
// })
// console.log(filt);
//  - всі червоні карти
// let filt=deck.filter(value => {
//     return  value.color==="Red"
// })
// console.log(filt);
//  - всі буби
// let filt=deck.filter(value => {
//     return  value.cardSuit==="Diamonds"
// })
// console.log(filt);
//  - всі трефи від 9 та більше
// let filt=deck.filter(value => {
//     return  value.value.length>2 || value.value>9
// })

//Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// deck.reduce((arr, cards) =>{
//     if (cards.cardSuit=="Spade"){
//         arr.spades.push(cards)
//     }
// },{  spades:[],
//     } )

// console.log(deck.reduce((arr, cards) => {
//     if (cards.cardSuit === "Spade") {
//         arr.spades.push(cards)
//     }else  if (cards.cardSuit==="Diamonds"){
//         arr.diamonds.push(cards)
//     }else  if (cards.cardSuit==="Hearts"){
//         arr.hearts.push(cards)
//     }else  if (cards.cardSuit==="Clubs"){
//         arr.clubs.push(cards)
//     }
//     return arr
// }, {
//     spades: [],
//     diamonds: [],
//     hearts:[],
//     clubs:[]
// }));

