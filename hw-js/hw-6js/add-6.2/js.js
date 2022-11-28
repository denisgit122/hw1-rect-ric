//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
// всі символи рядка необхідно перевести у верхній регістр.
// let insert_dash=(str)=> str.split(' ').join('-').toUpperCase()
//
//  let res=  insert_dash("HTML JavaScript PHP");
// console.log(res)
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let insert_dash=(str)=>str.slice(0,1).toUpperCase() + str.slice(1,str.length)
//
// let res=insert_dash('javaScript')
// console.log(res);

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let insert= str=> {
//     arr=[]
//     if (str.includes( '-')){
//        arr.push(str.replace('-','').replace('-','').replace('-',' '))
//     }else if (str.includes( '.')){
//         arr.push(str.replace('.','').replace('.',' '))
//     }else if (str.replace('_')){
//         arr.push(str.replace('_','').replace('_',' ') )
//     }
//     return arr
// }
// console.log(insert('Ron---Whisley'));
// console.log(insert('Harry..Potter'));
// console.log(insert('Hermione__Granger'));


// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'



// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function getRandomInt(max) {
//     arr=[]
//     for (let i = 0; i < 30; i++) {
//         arr[i]=Math.ceil( Math.random()*(100-0)+0)
//
//     }
//     return arr
// }
// console.log(getRandomInt())
// let arr={}
// for (let i = 0; i < 100; i++) {
//     const arrElement = arr[i];
//     arr[i]=Math.ceil( Math.random()*(100-0)+0)
// }


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort
// function getRandomInt(max) {
//     arr=[]
//     for (let i = 0; i < 30; i++) {
//         arr[i]=Math.ceil( Math.random()*(100-0)+0)
//
//     }
//     return arr.sort( (a, b) => a-b)
// }
// console.log(getRandomInt())

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа (без 0!)
// function getRandomInt(max) {
//     arr=[]
//     for (let i = 0; i < 30; i++) {
//         arr[i]=Math.ceil( Math.random()*(100-0)+0)
//
//     }
//     return arr.filter(value => value%2===0 && value!=0)
// }
// console.log(getRandomInt())
// //

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize=(str)=> str.split(' ').map(value => value[0].toUpperCase()+value.slice(1,value.lenght))
//
// console.log(capitalize('hello okten true'));

////////////////////////////////////////////////////////////////////////////////////////////
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@)
// , наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com







//- є масивlet
// let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let res=coursesArray.sort((a, b) => {
//     if (a.modules.length > b.modules.length) {
//         return -1
//     } else if (a.modules.length < b.modules.length) {
//         return 1
//     } else if (a.modules.length = b.modules.length) {
//         return 0
//     }
// })
// console.log(res);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//; let symb = "о", str = "Астрономия это наука о небесных объектах"
// document.writeln(count(str, symb)) // 5
// let symb = "о"
// let str = "Астрономия это наука о небесных объектах"
// function  count(str, stringsearch) {
//    let inc=str.split(' ')
//     let res=0
//     for (const incElement of inc) {
//         if (incElement.includes(stringsearch)){
//             res+=1
//         }
//     }return res
//
// }
//
// let foo=count(str, symb)
// console.log(foo);

///////////////////////////////////////////////////////////////////////////////
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'



//-стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let boock=[
//     {
//         name: "Гарри Поттер и узник Азкабана",
//         page: 400,
//         author: ['Джоан Роулинг Махаон'],
//         genre:['Зарубежное фэнтези', 'Книги про волшебников', 'Книги для подростков']
//     },
//
//     {
//         name: "Унесенные ветром",
//         page: 450,
//         author: ['Маргарет Митчелл'],
//         genre: ['Зарубежная классика','Исторический роман,реализм']
//     },
//     {
//         name: "Шерлок Холмс, Все повести и рассказы о сыщике",
//         page: 300,
//          author: ['Артур Конан Дойл' ,'Артур Конан Дойл'],
//         genre:['Зарубежные детективы']
//     }
// ]
// -знайти наібльшу книжку.
//console.log(boock.sort((a, b) => a.page - b.page));
// let count=boock[0]
// for (const countElement of boock) {
//
//     if (countElement.page > count.page) {
//         count = countElement
//
//     }
// }   console.log(count)


// - знайти книжку/ки з найбільшою кількістю жанрів
// console.log(boock.sort(
//    (a, b) => a.genre.length<b.genre.length
// ));

// let count=boock[0]
// for (const countElement of boock) {
//
//     if (countElement.genre.length > count.genre.length) {
//         count = countElement
//
//     }
// }   console.log(count)

// - знайти книжку/ки з найдовшою назвою
//     console.log(boock.sort((a, b) => a.name.length < b.name.length));

// let res=boock[0]
// for (const re of boock) {
//     if (re.name.length>res){
//         re=res
//     }
// }
// console.log(res);

// - знайти книжку/ки які писали 2 автори
// console.log(boock.filter(value => value.author.length === 2));
//
// let count=boock[0]
// for (const countElement of boock) {
//     if (countElement.author.length === 2 ) {
//         count = countElement
//     }
// }   console.log(count)
// - знайти книжку/ки які писав 1 автор
// console.log(boock.filter(value => value.author.length === 1));
// let count=boock[0]
// for (const countElement of boock) {
//     if (countElement.author.length === 1) {
//         count = countElement
//     }
// }   console.log(count)
// - вісортувати книжки по кількості сторінок по зростанню
//console.log(boock.sort((a, b) => a.page - b.page));