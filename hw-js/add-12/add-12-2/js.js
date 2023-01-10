// Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)


let item=JSON.parse(localStorage.getItem('favs'))||[]
console.log(item);
const btn=document.createElement('button')
btn.classList.add('btn')

btn.innerText='save'

const inpNam=document.createElement('input')
inpNam.type='text'

const inpImg=document.createElement('input')
inpImg.type='text'

const inpPrice=document.createElement('input')
inpPrice.type='text'

btn.addEventListener('click',function () {
    inpNam.oninput
    const res2= inpNam.value

    inpImg.oninput
    let rs3=inpImg.value

    inpPrice.oninput
    const pricer = inpPrice.value


    let res={res2,rs3,pricer}

    item.push(res)
    localStorage.setItem('favs',JSON.stringify(item))
})

document.body.append(inpNam,inpImg,inpPrice,btn)

const href=document.createElement('button')
href.classList.add('href')
const a=document.createElement('a')
a.href='local.html'
a.innerText='page'
document.body.append(href)
href.append(a)



// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно
// відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході
// на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар