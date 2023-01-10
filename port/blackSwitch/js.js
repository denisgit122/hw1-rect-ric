// try {
//     if (localStorage.getItem('theme')==='dark')
//         // $('html').classList.add('dark');
//     document.querySelector('html').classList.add('dark')
// }catch (err){}


const themotoggle=document.querySelector('.themotoggle')

themotoggle.addEventListener('click', (event)=> {
 event.preventDefault() // при переході не буде відображфтися #
    if (localStorage.getItem('theme')==='dark'){//якщо в локалі є клас
         localStorage.removeItem('theme')           // дарк ми його идаляємо
    }else  {localStorage.setItem('theme','dark')}
    addDark()
})


function addDark() {
    try {
    if (localStorage.getItem('theme')==='dark'){//якщо є дарк в локалі
        document.querySelector('html').classList.add('dark') //додaємо клас дарк
        document.querySelector('.themotoggle span').textContent='dark_mode' //міняємо іконку
    }else {
        document.querySelector('html').classList.remove('dark')
        document.querySelector('.themotoggle span').textContent='wb_sunny'
    }
}catch (err){}
}
addDark()


