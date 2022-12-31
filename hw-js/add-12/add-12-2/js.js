// Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
let item=JSON.parse(localStorage.getItem('int'))||[]
let phot=JSON.parse(localStorage.getItem('photo'))||[]

let arr=[]

console.log(arr);
const inpNam=document.createElement('input')
inpNam.type='text'
const but2=document.createElement('button')
but2.innerText='werr'


        let photo=[]
        const inpPhot=document.createElement('input')
        inpPhot.type='text'


but2.addEventListener('click',function () {






    inpPhot.oninput
    const resPhot=inpPhot.value
    let ar=new Array()
    ar.push(resPhot)
    phot.push(ar)
    localStorage.setItem('inpPhot',JSON.stringify(phot))

    inpNam.oninput
    const res= inpNam.value
    ar.push(res)
    console.log(arr);
        item.push(ar)
        localStorage.setItem('inpPhot',JSON.stringify(phot))







})






document.body.append(inpNam, inpPhot,but2,)







// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно
// відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході
// на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар