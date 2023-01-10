document.querySelector('.but').addEventListener('click',function () {
    document.querySelector('.menu').classList.toggle('click')
})



const witch=document.querySelector('.switch_inp')
const switch2=document.querySelector('.switch_slider')
// console.log(witch.checked=true);

witch.addEventListener('click', (event)=> {
    if (localStorage.getItem('theme')==='dark'){//якщо в локалі є клас
        localStorage.removeItem('theme')           // дарк ми його идаляємо
    }else  {localStorage.setItem('theme','dark')}
    addDark()
})

function addDark() {
    if (localStorage.getItem('theme')==='dark'){//якщо є дарк в локалі
        document.querySelector('html').classList.add('dark') //додaємо клас дарк
        witch.checked=true
    }else {
        document.querySelector('html').classList.remove('dark')
    }
}
addDark()