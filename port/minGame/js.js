const board =document.querySelector('#board')
const SQUARE_NUMBER=500  //кількість квадратиків всуредині
const colors=['red','blue','yellow','green','purple'] //колори які будуть рандобно генеруватися


for (let i = 0; i < SQUARE_NUMBER; i++) {       //ітуруємо без довжини
    const square=document.createElement('div')
    square.classList.add('we')

    square.addEventListener('mouseover',function () {// визивається тоді коли ми наводимо на квадрат
        setColor(square)
    })

    square.addEventListener('mouseleave',function () {// визивається тоді коли ми  забираємо мишку з квадратика
        removeColor(square)
    })

    board.append(square)
}
function setColor(element) {
    const color=getColor()    // беремо функцію з рандомними кольорами і вставляємо в стайл
    element.style.backgroundColor=getColor()
    element.style.boxShadow=`0 0 2px ${getColor()}//додаємо тінь відповідно до кольру квадратика але границі не зникають
    , 0 0 10px ${getColor()} `// додали ніби квадратик підсвічується
}

function removeColor(element) {
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 1px white` //забираємо границі
}

function getColor(){
  const id=Math.floor(Math.random()*colors.length)
    return colors[id] //повертаємо кольор з його індексом
}





