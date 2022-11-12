//-створити масив з:
// - з 5 числових значень
// let mas=[1,2,3,4,5]
// for (const ma of mas) {
//     console.log(ma)
// }
// // - з 5 стічкових значень
// let value = ["st","st","st","st","st"]
// for (const string of value) {
//     console.log(string)
// }
// // - з 5 значень стрічкового, числового та булевого типу
// let all= ["first", 122, true, 12, "second" ]
// for (const allElement of all) {
//     console.log(allElement)
//
// }
// // - та вивести його в консоль
// //Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = []
// empty[0]=1;
// empty[1]=2
// empty[2]=3
// console.log(empty)

//let num = [2,17,13,6,22,31,45,66,100,-18];
//let i=0;
//while (i<num.length) {
   // let mun = num[i]
    // 1. перебрати його циклом while
    //console.log(mun)
    // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
   // if (num[i] % 2 !==0){
       // console.log(num[i])
    //}
    // 5. перебрати циклом while та вивести  числа тільки парні  значення
   // if (num[i]% 2 ===0){
       // console.log(num[i])
   // }
  //  i++
//}
// 2. перебрати його циклом for
//for (let i = 0; i < num.length; i++) {
   // const numElement = num[i];
  //  console.log(numElement)
    //4. перебрати циклом for та вивести  числа тільки з непарним індексом
   // if (num[i] % 2 !==0){
       // console.log( num[i])

    //}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
   // if (num[i] % 2 ===0){
       // console.log( num[i])
      //  }
// 7. замінити кожне число кратне 3 на слово "okten"
//if (num[i] % 3 ===0) {
   // console.log(num[i]= "octen" )
//}
    // 8. вивести масив в зворотньому порядку.
//}
//for (let i = num.length - 1; i >= 0; i--) {
    //console.log(num[i]);
//}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let arr = [ 1, 2,3 ,4 ,5 ,6 ,7 ,8 ,9  ,10 ]
//console.log(arr)
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let arr = [ 'words','words','words','words','words','words','words','words','words','words' ]
//console.log(arr)
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let arr = [123,'first', 'words', 'true', 'false', 222, 'true']
//for (const arrElement of arr) {
  //  console.log(arrElement)
//}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    //let arr =[ 123,'first', 'words', true, false, 222, true]
//for (const arrElement of arr) {
    // if (typeof arrElement === "boolean") {
    //  console.log(arrElement)
    // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//     if (typeof arrElement === "number") {
//     console.log(arrElement)
//      }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// if ( typeof arrElement==='string' ){
//    console.log(arrElement)
// }
// }



// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = []
// arr[0]= 1,
// arr[1]=22,
// arr[2]=false,
// arr[3]=true,
// arr[4]='str'
// arr[5]=33,
// arr[6]=22,
// arr[7]=false,
// arr[8]=true,
// arr[9]='str'
// console.log(arr)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let arr= []
// for (let i = 0; i < 10; i++) {
//     const arrElement = arr[i];
//     console.log(i)
// document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// let arr= []
// for (let i = 0; i < 100; i++) {
//     const arrElement = arr[i];
//     console.log(i)
// document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let arr= []
// for (let i = 0; i < 100; i+=2) {
//     const arrElement = arr[i];
//     console.log(i)
// document.write(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let arr= []
// for (let i = 0; i < 100; i++) {
//     const arrElement = arr[i];
//     if (i  % 2 ===0) {
//         console.log(i)
//
//         document.write(i)
//     }
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let arr= []
// for (let i = 0; i < 100; i++) {
//     const arrElement = arr[i];
//     if (i  % 2 !==0) {
//         console.log(i)
//
//         document.write(i)
//     }
//
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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
//         page: 500,
//          author: ['Артур Конан Дойл' ,'Артур Конан Дойл'],
//         genre:['Зарубежные детективы']
//     }
// ]


// -знайти наібльшу книжку.
// let count=boock[0]
// for (const countElement of boock) {
//
//     if (countElement.page > count.page) {
//         count = countElement
//
//     }
// }   console.log(count)


// - знайти книжку/ки з найбільшою кількістю жанрів
// let count=boock[0]
// for (const countElement of boock) {
//
//     if (countElement.genre.length > count.genre.length) {
//         count = countElement
//
//     }
// }   console.log(count)

// - знайти книжку/ки з найдовшою назвою
// let count=boock[0]
// for (const countElement of boock) {
//
//     if (countElement.name.length >count.name.length ) {
//         count = countElement
//
//     }
// }   console.log(count)

// - знайти книжку/ки які писали 2 автори
// let count=boock[0]
// for (const countElement of boock) {
//     if (countElement.author.length === 2 ) {
//         count = countElement
//     }
// }   console.log(count)

// - знайти книжку/ки які писав 1 автор

// let count=boock[0]
// for (const countElement of boock) {
//     if (countElement.author.length === 1 ) {
//         count = countElement
//     }
// }   console.log(count)


let users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
     },


// document.write(`<div class="head">`)
// for (const usersListElement of users) {
//    document.write(`
// <div class='we'>
// <h2 class="h2">${usersListElement.id} ${usersListElement.name}
//          ${usersListElement.username} </h2>
// <h3 class="h3">${usersListElement.email} <span class="span"> ${usersListElement.phone}</span></h3>
//
// <div class="address">
// <p class="p1"><span class="span1"> Street:</span> ${usersListElement.address.street}, <span class="span1"> City:</span> ${usersListElement.address.city}
// <span class="span1">Suite:</span>${usersListElement.address.suite}
// </p>
// </div>
// <div class=" ad"> <span class="span2">Geo:</span>
// <p class="p3"> <span class="span3">Lat:</span> ${usersListElement.address.geo.lat}, <span class="span3">Lng</span> ${usersListElement.address.geo.lng}</p>
// </div>
// <p class="contact"><span class="span4">phone:</span> ${usersListElement.phone} <span class="span4">Website</span> ${usersListElement.website}</p>
//
// </div>
//
//
// `)
// }
// document.write(`</div>`)

   {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

document.write(`<div class="head">`)
for (const usersListElement of users) {
    document.write(`
<div class='we'> 
<h2 class="h2">${usersListElement.id} ${usersListElement.name}
         ${usersListElement.username} </h2>
<h3 class="h3">${usersListElement.email} <span class="span"> ${usersListElement.phone}</span></h3>

<div class="address"> 
<p class="p1"><span class="span1"> Street:</span> ${usersListElement.address.street}, <span class="span1"> City:</span> ${usersListElement.address.city} 
<span class="span1">Suite:</span>${usersListElement.address.suite}
</p>
</div>
<div class=" ad"> <span class="span2">Geo:</span>
<p class="p3"> <span class="span3">Lat:</span> ${usersListElement.address.geo.lat}, <span class="span3">Lng</span> ${usersListElement.address.geo.lng}</p>
</div>
<p class="contact"><span class="span4">phone:</span> ${usersListElement.phone} <span class="span4">Website</span> ${usersListElement.website}</p>

</div>


`)
}
document.write(`</div>`)
