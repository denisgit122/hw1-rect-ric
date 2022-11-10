//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let users = [
    {name: 'vasya'},
    {name: 'petya'},
    {name: 'kolya'},
    {name: 'olya'},
    {name: 'max'},
    {name: 'anya'},
    {name: 'oleg',},
    {name: 'andrey'},
    {name: 'masha'},
    {name: 'olya'},
    {name: 'max'}

    ]
for (let j = 0; j < users.length; j++) {
	const user1 = users[j];



	document.write(`
    <div>${user1.name}</div>
    
    `)

}



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


let users20 = [
	{name: 'vasya', nam: 1},
	{name: 'petya', nam:2},
	{name: 'kolya', nam:3},
	{name: 'olya', nam:4},
	{name: 'max', nam:5},
	{name: 'anya', nam:6},
	{name: 'oleg', nam:7},
	{name: 'andrey', nam:8},
	{name: 'masha', nam:9},
	{name: 'olya', nam:10},


]
for (let j = 0; j < users20.length; j++) {
	const users20Element = users20[j];


	document.write(`
	<div>${users20Element.name} ${users20Element.nam}</div>
	
	`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


let users9 = [
	{},

];
let i = 0;
while (i < 10){
	document.write(`
	<h1>1</h1>


`)
	//console.log( users9[i])
	i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users8 = [
	{},

];
let p = 0;
while (p <10){
	document.write(`
	<h1>1, ${p}</h1>
	

`)
	//console.log( users9[i])
	p++
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
// 
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// 
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// 
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let j = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];



    document.write(`
    <ul>
   <li>${listOfItem}</li>
   
   

</ul>
    
    `)
}



//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
//
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
 				{
					title: 'milk',
 					price: 22,
 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
				},
 				{
					title: 'juice',
					price: 27,
 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
				},
 				{
 					title: 'tomato',
 					price: 47,
 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
 				},
 				{
                     title: 'tea',
 					price: 15,
 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
				},
 			];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`
    
    <div class="box">
    
    <h3 class="title">${product.title}</h3>
    <div class="bord"></div>
    <h4 class="price">${product.price}</h4>
    <div class="bord"></div>
    <img src="${product.image}" alt="" class="img">
</div>

    `)


}


// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users2 = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
]
for (let i = 0; i < users2.length; i++) {
	const users2Element = users2[i];
	if (users2Element.status){
		console.log("true")
	}
}


let users3 = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
]

for (let i = 0; i < users3.length; i++) {
	const users3Element = users3[i];
	if (!users3Element .status){
		console.log("false")
	}
}



let users4 = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
]
for (let i = 0; i < users4.length; i++) {
	const users4Element = users4[i];
	if (users4Element.age<=30)
		console.log("old")
}
