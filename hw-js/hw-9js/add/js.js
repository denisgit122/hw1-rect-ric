



// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній
// масив.
// let arr=[]
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let res=user.address
//     arr.push(res)
// }
// console.log(arr);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
//  document.createElement. Всі данні в одному блоці.
// let headDiv=document.createElement('div')
// headDiv.classList.add('headDiv')
// document.body.append(headDiv)
//
// for (const user of users) {
// let div=document.createElement('div')
//     div.classList.add('div')
//     headDiv.append(div)
//
//     let addDiv=document.createElement('div')
//     addDiv.classList.add('addDiv')
//     div.append(addDiv)
//
//     let nameAge=document.createElement('h3')
//     nameAge.innerText=`name-${user.name}  age-${user.age}`
//     nameAge.classList.add('nameAge')
//     addDiv.append(nameAge)
//
// let addstutAdres=document.createElement('div')
//     addstutAdres.classList.add('addstutAdres')
//     div.append(addstutAdres)
//
//
//         let address=document.createElement('div')
//         address.classList.add('addres')
//         address.innerText=`city-${user.address.city} country-${user.address.country}   street-${user.address.street} houseNumber-${user.address.houseNumber} `
//     addstutAdres.append(address)
//
//         let stut=document.createElement('h2')
//         stut.classList.add('stut')
//         stut.innerText=`status-${user.status}`
//     addstutAdres.append(stut)
//
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
// з блоками для кожної властивості
//
//     let headDiv=document.createElement('div')
// headDiv.classList.add('headDiv')
// document.body.append(headDiv)
//
// for (const user of users) {
// let div=document.createElement('div')
//     div.classList.add('div')
//     headDiv.append(div)
//
//     let addDiv=document.createElement('div')
//     addDiv.classList.add('addDiv')
//     div.append(addDiv)
//
//     let nameAge=document.createElement('h3')
//     nameAge.innerText=`name-${user.name}  age-${user.age}`
//     nameAge.classList.add('nameAge')
//     addDiv.append(nameAge)
//
// let addstutAdres=document.createElement('div')
//     addstutAdres.classList.add('addstutAdres')
//     div.append(addstutAdres)
//
//     let stut=document.createElement('h2')
//         stut.classList.add('stut')
//         stut.innerText=`status-${user.status}`
//     addstutAdres.append(stut)
//
//
//
//
//     let div1=document.createElement('div')
//     div1.innerText=user.address.country
//     div1.classList.add('div1')
// addstutAdres.append(div1)
//
//     let div2=document.createElement('div')
//     div2.innerText=user.address.city
//     div2.classList.add('div1')
//     addstutAdres.append(div2)
//
//     let div3=document.createElement('div')
//     div3.innerText=user.address.street
//     div3.classList.add('div1')
//     addstutAdres.append(div3)
//
//     let div4=document.createElement('div')
//     div4.innerText=user.address.houseNumber
//     div4.classList.add('div1')
//     addstutAdres.append(div4)
// }




//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2)
// характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список
// (ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
//
// let contents=document.querySelectorAll('h2')
// let ul=document.createElement('ul')
//
// console.log(contents);
// for (const content of contents) {
//     // console.log(content);
//     let li=document.createElement('li')
//     li.innerText=content.innerText
//     //document.body.append(content)
//     document.body.append(li)
// }


// let headers = document.getElementsByTagName('h2');
// let content = document.createElement('ul');
// content.id = 'content';
// document.body.appendChild(content);
// for (const item of headers) {
//     let contentItem = document.createElement('li');
//     contentItem.innerText = item.innerText;
//     content.append(contentItem);
// }







let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з
// кожне правило в окремому блоці.

let div=document.createElement('div')
div.id='wrap'
document.body.append(div)

let rul1=document.createElement('div')
rul1.classList.add('rules-rule1')
div.append(rul1)
    res1=document.createElement('h2')
    res1.innerText=rules[0].title
        p1=document.createElement('p')
        p1.innerText=rules[0].body
rul1.append(res1,p1)


let rul2=document.createElement('div')
rul2.classList.add('rules-rule2')
div.append(rul2)
    res2=document.createElement('h2')
    res2.innerText=rules[1].title
        p2=document.createElement('p')
        p2.innerText=rules[1].body
rul2.append(res2,p2)

let rul3=document.createElement('div')
rul3.classList.add('rules-rule3')
div.append(rul3)
        res3=document.createElement('h2')
        res3.innerText=rules[2].title
            p3=document.createElement('p')
            p3.innerText=rules[2].body
            rul3.append(res3,p3)

let rul4=document.createElement('div')
rul4.classList.add('rules-rule4')
div.append(rul4)
    res4=document.createElement('h2')
    res4.innerText=rules[3].title
        p4=document.createElement('p')
        p4.innerText=rules[3].body
        rul4.append(res4,p4)

let rul5=document.createElement('div')
rul5.classList.add('rules-rule5')
div.append(rul5)
    res5=document.createElement('h2')
    res5.innerText=rules[4].title
        p5=document.createElement('p')
        p5.innerText=rules[4].body
        rul5.append(res5,p5)

let rul6=document.createElement('div')
rul6.classList.add('rules-rule6')
div.append(rul6)
    res6=document.createElement('h2')
    res6.innerText=rules[5].title
        p6=document.createElement('p')
        p6.innerText=rules[5].body
        rul6.append(res6,p6)

let rul7=document.createElement('div')
rul7.classList.add('rules-rule7')
div.append(rul7)
    res7=document.createElement('h2')
    res7.innerText=rules[6].title
        p7=document.createElement('p')
        p7.innerText=rules[6].body
        rul7.append(res7,p7)

let rul8=document.createElement('div')
rul8.classList.add('rules-rule8')
div.append(rul8)
res8=document.createElement('h2')
res8.innerText=rules[7].title
p8=document.createElement('p')
p8.innerText=rules[7].body
rul8.append(res8,p8)

// let res2=rules[0]
// let res1=res2.title
// console.log(res1);





//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій
//     окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap
//     файла rule.html