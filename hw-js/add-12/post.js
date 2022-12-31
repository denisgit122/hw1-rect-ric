let url= new URL(location.href)
console.log(url);
let id =url.searchParams.get('id')
console.log(id);

//виводяться всі пости поточного юзера.
fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
.then(value => value.json())
.then((post=> {
    let postBox=document.createElement('div')
    postBox.classList.add('postBox')
    document.body.appendChild(postBox)

    for (const postElement of post) {
        console.log(postElement);
        const flex = document.createElement('div')
        flex.classList.add('flex')

        const usId = document.createElement('h2')
        usId.classList.add('usId')
        usId.innerText = `userId-${postElement.userId} `

        const res = document.createElement('h2')
        res.innerText = ` userId:${postElement.id}`

        const title = document.createElement('div')
        title.classList.add('title')
        title.innerText = `title-${postElement.title}`


        postBox.append(flex)


        flex.append(usId, id, title)


        const href = document.createElement('button')
        href.innerText = 'comen'
        const a = document.createElement('a')
        a.href = `comen.html?id=${postElement.id}`

        flex.appendChild(a)
        a.append(href)
    }
}))