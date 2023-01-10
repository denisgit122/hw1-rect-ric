const box=document.querySelector('.box')
const num=500
const color=['red','blue','yellow','green','purple']
for (let i = 0; i < num; i++) {
   const div=document.createElement('div')
div.classList.add('qw')

    div.addEventListener('mouseover',function (e) {
        start(div)
    })


    div.addEventListener('mouseleave',function () {
end(div)
    })
    box.append(div)
}

function start(e) {
    e.style.backgroundColor=rand()
    e.style.boxShadow=`0 0 2px ${rand()}, 0 0 10px ${rand()}`


}
function end(e) {
    e.style.backgroundColor='silver'
    e.style.boxShadow='0 0 2px white'

}
function rand() {
    const id=Math.floor(Math.random()*color.length)
    return color[id]
}
