const url= new URL(location.href)
console.log(url);
const id=url.searchParams.get('id')
console.log(id);
let slide1=document.querySelector('.slide1')
let slide3=document.querySelector('.slide3')
let slide4=document.querySelector('.slide4')
let slide5=document.querySelector('.slide5')
let slide6=document.querySelector('.slide6')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(value => value.json())
.then(users=>{
        let comenId=document.createElement('div')
        comenId.classList.add('comenId')
        comenId.innerText=`Id-${users[0].id} ,+" "+  postId-${users[0].postId}`
                let comenEmail=document.createElement('div')
                comenEmail.classList.add('Emain')
                        let a=document.createElement('a')
                        a.classList.add('a')
                        a.innerText=`Element:${users[0].email}`
                        a.href='mailto:'
                        comenEmail.append(a)
                        let body=document.createElement('div')
                        body.classList.add('body')
                        body.innerText=`${users[0].body}`
                        slide1.append(comenId,comenEmail,body)




        let comenId2=document.createElement('div')
        comenId2.classList.add('comenId')
        comenId2.innerText=`Id-${users[1].id} ,+" "+  postId-${users[1].postId}`
                let comenEmail2=document.createElement('div')
                comenEmail2.classList.add('Emain')
                        let a2=document.createElement('a')
                        a2.classList.add('a')
                        a2.innerText=`Element:${users[1].email}`
                        a2.href='mailto:'
                        comenEmail2.append(a2)
                        let body2=document.createElement('div')
                        body2.classList.add('body')
                        body2.innerText=`${users[1].body}`
                        slide3.append(comenId2,comenEmail2,body2)


        let comenId3=document.createElement('div')
        comenId3.classList.add('comenId')
        comenId3.innerText=`Id-${users[2].id} ,+" "+  postId-${users[2].postId}`
                let comenEmail3=document.createElement('div')
                comenEmail3.classList.add('Emain')
                        let a3=document.createElement('a')
                        a3.classList.add('a')
                        a3.innerText=`Element:${users[2].email}`
                        a3.href='mailto:'
                        comenEmail3.append(a3)
                        let body3=document.createElement('div')
                        body3.classList.add('body')
                        body3.innerText=`${users[2].body}`
                        slide4.append(comenId3,comenEmail3,body3)


        let comenId4=document.createElement('div')
        comenId4.classList.add('comenId')
        comenId4.innerText=`Id-${users[3].id} ,+" "+  postId-${users[3].postId}`
        let comenEmail4=document.createElement('div')
        comenEmail4.classList.add('Emain')
        let a4=document.createElement('a')
        a4.classList.add('a')
        a4.innerText=`Element:${users[3].email}`
        a4.href='mailto:'
        comenEmail4.append(a4)
        let body4=document.createElement('div')
        body4.classList.add('body')
        body4.innerText=`${users[3].body}`
        slide5.append(comenId4,comenEmail4,body4)


        let comenId5=document.createElement('div')
        comenId5.classList.add('comenId')
        comenId5.innerText=`Id-${users[4].id} ,+" "+  postId-${users[4].postId}`
        let comenEmail5=document.createElement('div')
        comenEmail5.classList.add('Emain')
        let a5=document.createElement('a')
        a5.classList.add('a')
        a5.innerText=`Element:${users[4].email}`
        a5.href='mailto:'
        comenEmail5.append(a5)
        let body5=document.createElement('div')
        body5.classList.add('body')
        body5.innerText=`${users[4].body}`
        slide6.append(comenId5,comenEmail5,body5)

})




