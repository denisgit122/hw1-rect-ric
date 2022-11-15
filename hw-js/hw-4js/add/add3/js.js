
let arr=[]
for (let i = 0; i < 20; i++) {
    const arrElement = arr[i];
    arr[i]=Math.ceil( Math.random()*(700-8)+8)
}
console.log(arr )
