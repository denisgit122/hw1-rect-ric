//- є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 'age-10',
//         info:'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 'age-40',
//         info:'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 'age-38',
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 'age-9',
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны» ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умоми рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 'age-1',
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) —персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман,в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработанакарикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшейсестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственныйсериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.


// for (const simpson of simpsons) {
//    let simsonInfo=document.createElement('div')
//     simsonInfo.classList.add('div')
//
//     let h2w=document.createElement('h2')
//     h2w.classList.add('h1')
//     h2w.innerText=simpson.name
//     simsonInfo.appendChild(h2w)
//
//     let h2age=document.createElement('h2')
//     h2age.classList.add('h2age')
//     h2age.innerText=simpson.age
//     simsonInfo.appendChild(h2age)
//
//     let h2=document.createElement('h2')
//     h2.classList.add('h2')
//     h2.innerText=simpson.surname
//     simsonInfo.appendChild(h2)
//
//     let p=document.createElement('p')
//     p.innerText=simpson.info
//     p.classList.add('p')
//     simsonInfo.appendChild(p)
//
// let img= document.createElement('img')
//
//     img.src=simpson.photo
//     img.classList.add('img')
//     simsonInfo.appendChild(img)
//
//     document.body.appendChild(simsonInfo)
//
// }



// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту






//Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 'monthDuration-5',
//         hourDuration: 'hourDuration-909',
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 'monthDuration-6',
//         hourDuration: 'hourDuration-909',
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 'monthDuration-6',
//         hourDuration: 'hourDuration-909',
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 'monthDuration-4',
//         hourDuration:'hourDuration- 909',
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 'monthDuration-7',
//         hourDuration: 'hourDuration-909',
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 'monthDuration-4',
//         hourDuration: 'hourDuration-909',
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const coursesArrayElement of coursesArray) {
//     let div=document.createElement('div')
//     div.classList.add('box')
//
//
//     let adddiv=document.createElement('div')
//     adddiv.classList.add('adddiv')
//      div.appendChild(adddiv)
//
//     let title=document.createElement('h1')
//     title.classList.add('title')
//         adddiv.appendChild(title)
//     title.innerText=coursesArrayElement.title
//
// let adddiv2=document.createElement('div')
//     adddiv2.classList.add('adddiv2')
//     div.appendChild(adddiv2)
//
//     let addmonthDuration=document.createElement('div')
//     addmonthDuration.classList.add('addmonthDuration')
//     adddiv2.appendChild(addmonthDuration)
//
//     let addhourDuration=document.createElement('div')
//     addhourDuration.classList.add('addhourDuration')
//     adddiv2.appendChild(addhourDuration)
//
//
//
//     let monthDuration=document.createElement('h2')
//     monthDuration.classList.add('monthDuration')
//     monthDuration.innerText=coursesArrayElement.monthDuration
//     addmonthDuration.appendChild(monthDuration)
//
//     let hourDuration=document.createElement('h2')
//     hourDuration.classList.add('hourDuration')
//     hourDuration.innerText=coursesArrayElement.hourDuration
//     addhourDuration.appendChild(hourDuration)
//
// let addDivmodules=document.createElement('div')
//     addDivmodules.classList.add('addDivmodules')
//     div.appendChild(addDivmodules)
//
//     let divmodules=document.createElement('div')
//     divmodules.classList.add('divmodules')
//     addDivmodules.appendChild(divmodules)
//
//     let modules1=document.createElement('h2')
//     modules1.classList.add('modules')
//     divmodules.appendChild(modules1)
//     modules1.innerText='Modules:'
//
//     for (const modules1Element of coursesArrayElement.modules) {
//         let addmodules=document.createElement('li')
//         addmodules.innerText=modules1Element
//         addDivmodules.appendChild(addmodules)
//         addmodules.classList.add('addmodules')
//     }
//
//
//
//
//
//
//     document.body.appendChild(div)
// }

//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------








//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let div=document.createElement('div')
//  div.classList.add('wrap,collapse,alpha,beta')
// div.style.height='100px'
// div.style.width='100px'
// div.style.margin='10px'
// div.style.background='yellow'
// document.body.appendChild(div)
// let clon=div.cloneNode(true)
// document.body.appendChild(clon)



// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для
// кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

// let arr=['Main','Products','About us','Contacts']
// let ul=document.getElementsByClassName('menu')[0]
// for (const ulElement of arr) {
//    let li=document.createElement('li')
//     li.innerText=ulElement
//     document.body.appendChild(li)
//
// }



//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 'monthDuration-5'},
//     {title: 'Java Complex', monthDuration: 'monthDuration-6'},
//     {title: 'Python Complex', monthDuration: 'monthDuration-6'},
//     {title: 'QA Complex', monthDuration: 'monthDuration-4'},
//     {title: 'FullStack', monthDuration: 'monthDuration-7'},
//     {title: 'Frontend', monthDuration: 'monthDuration-4'}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про
// // title та monthDuration
// // Завдання робити через цикли.
//
// for (const Element of coursesAndDurationArray ) {
//     let div=document.createElement('div')
//     div.classList.add('adddiv')
//
//     let title=document.createElement('h1')
//     title.classList.add('title')
//     title.innerText=Element.title
//     div.appendChild(title)
//
//     let monthDuration=document.createElement('h2')
//     monthDuration.innerText=Element.monthDuration
//     div.appendChild(monthDuration)
//     monthDuration.classList.add('monthDuration')
//
//     document.body.appendChild(div)
// }



//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //
// //
// // За допомоги скріпта для кожного елементу масиву зробити
// // <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration
// // елементу.
// // Завдання робити через цикли.
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div=document.createElement('div')
//     div.classList.add('item')
//
//     let title=document.createElement('h1')
//     title.classList.add('heading')
//     title.innerText=coursesAndDurationArrayElement.title
// div.appendChild(title)
//
// let p=document.createElement('p')
//     p.innerText=coursesAndDurationArrayElement.monthDuration
//     p.classList.add('description')
//     div.appendChild(p)
//
//     document.body.appendChild(div)
// }





//..............................................................

//let div=document.queryCommandIndeterm('.target')
document.forms.f1.login.oninput=function () {
    let value=this.value;
    if ( typeof value=="number"){
        alert('num')
    }
    // let target=document.querySelector('.target')
    // target.innerText=this.value
}


