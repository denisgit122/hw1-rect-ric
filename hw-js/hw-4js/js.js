//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let users = [
    {}
    ]
for (let i = 0; i < users.length; i++) {
    document.write(`
    <div>1</div>
    <div></div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    
    `)
    const user = users[i];

}



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let user = [
    {}
]
for (let i = 0; i < user.length; i++) {
    document.write(`
    <div>1, index:1</div>
    <div>2 index:2</div>
    <div>3 index:3</div>
    <div>4 index:4</div>
    <div>5 index:5</div>
    <div>6 index:6</div>
    <div>7 index:7</div>
    <div>8 index:8</div>
    <div>9 index:9</div>
    <div>10 index:10</div>
    `)
    const user = users[i];

}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


let users9 = [
	{},

];
let i = 0;
while (i < users9.length){
	document.write(`
	<h1>1</h1>
	<h1>2</h1>
	<h1>3</h1>
	<h1>4</h1>
	<h1>5</h1>
	<h1>6</h1>
	<h1>7</h1>
	<h1>8</h1>
	<h1>9</h1>
	<h1>9</h1>
	<h1>10</h1>
	<h1>11</h1>
	<h1>12</h1>
	<h1>13</h1>
	<h1>14</h1>
	<h1>15</h1>
	<h1>16</h1>

`)
	//console.log( users9[i])
	i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users8 = [
	{},

];
let p = 0;
while (p < users8.length){
	document.write(`
	<h1>1 id-1</h1>
	<h1>2 id-2</h1>
	<h1>3 id-2</h1>
	<h1>4 id-2</h1>
	<h1>5 id-2</h1>
	<h1>6 id-2</h1>
	<h1>7 id-2</h1>
	<h1>8 id-2</h1>
	<h1>9 id-2</h1>
	<h1>9 id-2</h1>
	<h1>10 id-2</h1>
	<h1>11 id-2</h1>
	<h1>12 id-2</h1>
	<h1>13 id-2</h1>
	<h1>14 id-2</h1>
	<h1>15 id-2</h1>
	<h1>16 id-2</h1>

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
for (let i = 7; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];


    document.write(`
    <ul>
   <li>'html'</li>
   <li>'css'</li>
   <li>javascript</li>
   <li>mysql</li>
   <li>mongodb</li>
   <li>react</li>
   <li>angular</li>
   <li>node.js</li>
   

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
