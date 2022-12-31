//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https:jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users =>{
        let heaBox=document.createElement('div')
        heaBox.classList.add('headBox')
        document.body.append(heaBox)

        for (const user of users) {
           const div =document.createElement('div')
            div.innerText=`${user.id}`


            const but=document.createElement('button')
            but.innerText=',m,'
            const a=document.createElement('a')
            a.href=`post.html?id=${user.id}`
            a.append(but)


            heaBox.append(div,a)
        }
    } )
)