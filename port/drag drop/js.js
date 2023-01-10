const item=document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')

item.addEventListener('dragstart',dragstart) //говорить коли ми почали перетаскувати блок)
item.addEventListener('dragend',dragend)// говорить коли ми закінчили перетаскувати блок

function dragstart(event) {
    event.target.classList.add('hold')    //ми викор евент луп щоб блок зразу не знак
    // а зник після того як ми відпустимо блок
    setTimeout( ()=> event.target.classList.add('hide'),0)//скриває блок пр перенесиннш
}

function dragend() {
    event.target.classList.remove('hold','hide') //видфляємо hide для того щоб коли ми
                                                    // відпускаємо мишку блок знову появлявся
}

////////////////////////////      робимо місце у яке ми можемо покдасти блок

for (const placeholder of placeholders) {
    // кожному плуйсхолдеру додаємо евент
    placeholder.addEventListener('dragover',dragover)   // визивається коли блок знаход під placeholder
    placeholder.addEventListener('dragenter',dragenter)// визивається тоді еоли ми заходимо на тереторію placeholder
    placeholder.addEventListener('dragleave',dragleave)// коли перетаскали блок але вийшли за знаниуі placeholder
    placeholder.addEventListener('drop',drop)  //коли відпустили блок
}
//////створюємо функції для евенту
function dragover(event) {  //ось ця функція за замовчуванням блокує дію дроп
    console.log('ragover');
    event.preventDefault()   //відмін дiю за замовчуванням


}
function dragenter(event) {
    event.target.classList.add('hovere')//додаємоклас який підсвічує лінією куди можемо поставити блок
    console.log('dragenter');
}
function dragleave(event) {
    console.log('dragleave');
    event.target.classList.remove('hovere') //удаляє всі залишає тільки 1 активний
}

function drop(event) {
    console.log('drop')
    event.target.classList.remove('hovere')
    event.target.append(item)//пхаємо блок в рлайсхолдер
}