// function numb(num) {
//     let min =num[0]
//     for (const minElement of num) {
//         if (min>minElement){
//             min=minElement
//         }
//
//     }console.log(min)
// }
// numb([2,5,8,1])
// function name( ) {
//     if (arguments.length===2){
//        console.log(arguments[0]+arguments[1])
//     }else if (arguments.length===3){
//         console.log(arguments[0]-arguments[1]-arguments[2])
//     }
// }
// name(40,30,20)
//numb([2,5,8,1])
//function name( ) {
//    if ( typeof arguments.length==="number"){
//        console.log(arguments[0]+arguments[1])
//    }else if ( typeof arguments.length==="string"){
//        console.log(arguments[0] +('')+ arguments[1])
//    }
//}
//name('wors','ddd',)
//


// function clas (tag, text){
//     document.write(`<${tag}> ${text} </${tag}>`)
// }
// clas( 'h2' , 'word')
// clas( 'h1' , 'word')

//  function arr(aray) {
//    let sero=0
//      for (let i = 0; i < aray.length; i++) {
//          const arayElement = aray[i];
//               if (arayElement===0) {
//
//               }
//
//      }return arayElement
//  }
//
//    let res=arr([1,2,0,3,0,56,66])
// console.log(res)








                     //hw

        //- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function arr(a,b,c) {
//     if (a>b&& a>c){
//         console.log(a)
//     }else if (b>a && c<b){
//         console.log(b)
//     }else if (c>a&& c>b ){
//         console.log(c)
//     }
// }
// arr(10,20,30)
// let num=[1,3,4]
// function arr(array) {
//     let min=array[0]
//     for (const minElement of array) {
//         if (minElement<min){
//             min=minElement
//         }
//     }console.log(min)
// }
// arr(num)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function arr(a,b,c) {
//     if (a>b && b<c){
//         console.log(b)
//     }else if (b>a && a<c){
//         console.log(a)
//     }else if (c<a&& c<b ){
//         console.log(c)
//     }
// }
// arr(10,20,3)
// - створити функцію яка повертає найбільше число з масиву
// let res=[10,20,30]
// function arr(array) {
//     let max=array[0]
//     for (const max1 of array) {
//         if (max1>max){
//             max=max1
//         }
//     }console.log(max)
// }
// arr(res)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num = [10,20,30,1,2]
// function arr(array) {
//    let mid=0
//     for (let i = 0; i < array.length; i++) {
//         mid+=array[i]
//
//     }return mid/array.length
// }
//
// console.log(arr(num))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function arr(...array) {
//
// let min1=array[0]
// let min=array[0]
//     for (const minElement of array) {
//         if (minElement<min1){
//             min1=minElement
//         }else if (minElement>min){
//            min=minElement
//         }
//
//     }console.log(min)
//     return min1
//
// }
//
// let res=arr(1,2,3,4,5,66,6,6,7)
// console.log(res)
// - створити функцію яка заповнює масив рандомними числами
// let arry=[]
//
// function arr(...number) {
//     for (let i = 0; i < 4; i++) {
//         arry[i]=Math.floor(Math.random()*100)
//
//     }return arry
// }
// let res=arr(arry)
// console.log(res)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує
// кінцеве значення діапазону
// let arr=[]
// function array (...num) {
//     for (let i = 0; i < 3; i++) {
//         arr[i]=Math.floor(Math.random()*(70-0)+0)
//     }return arr
// }
// let  res = array(arr)
// console.log(res)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let num = [1,2,3]
// function arr(numb) {
//     let foo=[]
//     for (let i = numb.length - 1,j=0;  i >= 0; i--) {
//          foo [j++]=numb[i]
//
//     }return foo
// }
// let res=arr(num)
// console.log(res)

//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
// їх між собою.
// function arr(...arguments) {
//     for (const argument of arguments) {
//         if (arguments.length===1){
//             console.log(arguments[0])
//         }else if (arguments.length===2){
//             console.log(arguments[0]+arguments[1])
//         }
//     }
// }
// let res=arr(1)

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий 
// результуючий масив.
// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]
// function foo(array1,array2) {
//     let res =[]
//     let num=array1.length>=array2.length?array1 : array2
//     for (let i = 0; i < num.length; i++) {
//        res[i]= (array1[i]  || 0) + (array2[i]||0)
//
//     }return res
// }
//
// console.log(foo(arr1, arr2));
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]




//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr=[{name: 'Dima', age: 13}, {model: 'Camry'}]
// function name (array) {
//     let ne=[]
//     for (let i = 0,j=0; i < arr.length; i++) {
//         for (let key in arr[i]) {
//             ne [j++]=key
//         }
//
//     }return ne
// }
// let res=name(arr)
// console.log(res)
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arr=[{name: 'Dima', age: 13}, {model: 'Camry'}]
function name (array) {
    let ne=[]
    for (let i = 0,j=0; i < arr.length; i++) {
        for (let key in arr[i]) {
            ne [j++]=array[i][key]
        }

    }console.log(ne)
}
name(arr)







