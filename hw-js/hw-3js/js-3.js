// 1. Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//let x = +prompt('write x')
let x = -1
if (x!=0){
    console.log('true')
}if (x===0){
    console.log('false')
}

let x2 = 0
if (x2!=0){
    console.log('true')
}if (x2===0){
    console.log('false')
}

let x3 = -3
if (x3!=0){
    console.log('true')
}if (x3===0){
    console.log('false')
}

//  5. - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let num1 = prompt('num1')
let num2 = prompt('num2')

if  (num1===num2){
    console.log("riw")
}if (num1>num2){
    console.log('num1 is big', num1)
} if (num1<num2){
    console.log('num2 is big', num2)
}


// 3.  У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=+prompt('write day')
if ((day<=10) && (day=>0)) {
    console.log(1)

}else if (day<=20){
    console.log(2)
}else if (day<=31){
    console.log(3)
}else (console.log('error'))



// 4  Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let timetable = +prompt('note')
switch (timetable){
    case '1':
        console.log('monday')
        break
    case '2':
        console.log('tuesday')
        break
    case '3':
        console.log('wednesday')
        break
    case '4':
        console.log('thursday')
        break
    case '5':
        console.log('friday')
        break
    case '6':
        console.log
        ('saturday')
        break
    case '7':
        console.log('sanday')
        break
    default: console.log('error')
}




// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let min=prompt('min')
 if (0<=min<=15){
    console.log('1')
}else if (min<=30){
    console.log('2')
}else if (min<=45){
     console.log(3)
 }else if (min<=59){
     console.log('4')
 }else (console.log('error'))



//  6. - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = +prompt() || "default"
console.log(y)


