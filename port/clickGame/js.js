const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const board=document.querySelector('#board')
const timeEl=document.querySelector('#time')
const colors=['red','blue','yellow','green','purple','#16D9E3','#30C7EC','#46AEF7']

let time=0              //це час який буде даватися на гру
let score=0
startBtn.addEventListener('click',(evt)=>{
    screens[0].classList.add('up') //ПЕРШОМУ  екрану зфдали дію при кліку перелистується на наступний
})
///////////////робота з другою сторінкою
const timeList=document.querySelector('#time-list')

timeList.addEventListener('click',event=>{   //ми добавили івент на всю юл а нам  труба з  робити зробити щоб слухалися тільки по одній кнопцш
    if (event.target.classList.contains('time-btn')){  // event.target  улумунт по якому клікнули  //contains перевіряє чи є в класа такий стиль

        screens[1].classList.add('up') //другому  екрану зфдали дію при кліку перелистується на наступний

        time= +(event.target.getAttribute('data-time')) //робимо шз стрінги число фбо моживо викор не + ф parseInt і time приймає це число
        console.log(time)//вивудиться кнопка на яку ми тикнули
startGame()
    }
})

board.addEventListener('click',event=>{  //ми добавили івент на всю board а нам  труба з  робити зробити щоб слухалися тільки по одній кнопцш
   if (event.target.classList.contains('circle')){// нам трубф щбробити клік тільки по кружечку ми знов викор contains
       score++
       event.target.remove()//якщо клікаємо круг він зникає
       createRandomCircle() // i додаємо в рфндомному місці
   }

})

/////////////3 екран
//////debug


// чуруз кожний заданий проміжуток часу виконувати другу дію
function startGame(){
    setInterval(decreaseTime,1000)
    timeEl.innerHTML=`00:${time}`
    createRandomCircle()//одаємо кружучок до гри
}

function decreaseTime(){
    if (time===0){
finishGAme()
    }else  {
        let cuurent = --time//працює секондоимір  -1сек від часу
    if (cuurent < 10) {
        cuurent = `0${cuurent}`//робимо так щоб час був  00:07 ане 00:7

    }
        timeEl.innerHTML=`00:${cuurent}` // передамщ цей час
    }
}
function finishGAme () {
    timeEl.parentNode.classList.add('hide')
board.innerHTML=`<h1>Счьот:<span class="primary"> ${score}</span></h1>`// гра зупиняється і виводиться счьот
}
//////////////////////круг


function createRandomCircle(){
    const circle=document.createElement('div')
    const size=getREndomNam(10,60)  //задаємо функції діфпазон
    const {width,height}=board.getBoundingClientRect() //board.getBoundingClientRect() показує розмір доски
    // і ми запихаємо ці розміри в довжину і ширину

    const x=getREndomNam(0,width-size) //виводимо рандомні розміпи
    const y=getREndomNam(0,height-size)
    circle.classList.add('circle')
    circle.style.width= `${size}px`//задаємо розмір
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    circle.style.backgroundColor=colorNum()
    circle.style.boxShadow=`0 0 2px ${colorNum()}, 0 0 10px ${colorNum()}`
    board.append(circle)
}

function getREndomNam(min,max) {
 return  Math.round(Math.random() * (max-min)+min )  // створюємо функцію яка приймає 2 значення у них зфдфємо діазон
}

function colorNum() {
   const id =Math.floor(Math.random()*colors.length)
    return  colors[id]
    console.log(colors[id])
}






