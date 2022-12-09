// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone= phone;
// }
// let arr=[]
// arr.push(new User(1,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(2,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(3,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(4,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(5,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(6,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(7,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(8,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(9,'vasya','asadd','sasad@gmail.com',0673950797));
// arr.push(new User(10,'vasya','asadd','sasad@gmail.com',0673950797));
//
//
//
// console.log(arr);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let res=arr.filter(value => {if (value.id% 2==0){
//     return arr
// }})
// console.log(res)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let res=arr.sort((a, b) => a.id-b.id)
// console.log(res);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом ' +
// 'зі списком товарів)
// function Client(id, name, surname , email, phone,orderWAre) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone= phone;
//     this.order=orderWAre
// }
// let arr=[]
// arr.push(new Client(1,'vasya','asadd','sasad@gmail.com',0673950797,['Абрикос','Абсент']));
// arr.push(new Client(2,'vasya','asadd','sasad@gmail.com',0673950797,[,'Авокадо','Айва','Агар-агар']));
// arr.push(new Client(3,'vasya','asadd','sasad@gmail.com',0673950797,['Айран']));
// arr.push(new Client(4,'vasya','asadd','sasad@gmail.com',0673950797,['Алтей','Алыча']));
// arr.push(new Client(5,'vasya','asadd','sasad@gmail.com',0673950797,['Арника']));
// arr.push(new Client(6,'vasya','asadd','sasad@gmail.com',0673950797,['Артишок','Ацидофилин','Базилик','Багульник']));
// arr.push(new Client(7,'vasya','asadd','sasad@gmail.com',0673950797,['Алтей','Алыча']));
// arr.push(new Client(8,'vasya','asadd','sasad@gmail.com',0673950797,['Алтей','Базилик']));
// arr.push(new Client(9,'vasya','asadd','sasad@gmail.com',0673950797,['Абрикос']));
// arr.push(new Client(10,'vasya','asadd','sasad@gmail.com',0673950797,['Ацидофилин']));
//
//
//
// console.log(arr);
// let res=arr.sort((a, b) => a.order.length-b.order.length)
// console.log(res);
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)





// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model,producer,year,MaxSpeed,volume) {
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.MaxSpeed=MaxSpeed;
//     this.volume=volume
// }
// function Castomer(model,producer,pas) {
//     Car.apply(this.[model,producer])
//     this.pas=pas
// }
// let addd=new Castomer("legacy", "subaru", '111');
// console.log(addd);


//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(car1);
// Car.prototype.drive = function () {
//     return `їдемо зі швидкістю ${this.MaxSpeed} на годину`
// }
// let car1=new Car( "wrx","subaru", 2010, 250, 2,)
// console.log(car1.drive());
// let car2=new Car( "legacy","subaru", 2007,  280,3)
// console.log(car2.drive());

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// Car.prototype.info=function () {
//     return `infoCar : model=${this.model}, producer=${this.producer},  year=${this.year} , MaxSpeed=${this.MaxSpeed}, volume=${this.volume}   `
// }
// let car1=new Car( "wrx","subaru", 2010, 250, 2,)
// console.log(car1.info())
// let car2=new Car( "legacy","subaru", 2007,  280,3)
// console.log(car2.info())

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// Car.prototype.increaseMaxSpeed=function () {
//     let newSpeed=2
//     return `model-${this.model}, producer-${this.producer}, year-${ this.year}, newSpeed-${ this.MaxSpeed * newSpeed }`
//
// }
// let car1=new Car( "wrx","subaru", 2010, 250, 2)
// console.log(car1.increaseMaxSpeed());

//     -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear=function () {
//     let newValue=2015
//     this.newValue=newValue
//     return `model-${this.model}, producer-${this.producer}, newValue-${ this.newValue}, newSpeed-${ this.MaxSpeed }`
//
// }
//
// let car1=new Car( "wrx","subaru", 2010, 250, 2,)
// console.log(car1.changeYear());
// let car2=new Car( "legacy","subaru", 2007,  280,3)
// console.log(car2.changeYear());

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let driver='ldspslpdsld'
// Car.prototype.addDriver=function () {
//
//     this.driver=driver
//     return `model-${this.model}, producer-${this.producer}, year-${ this.year}, newSpeed-${ this.MaxSpeed},${this.driver}`
//
// }
// let car2=new Car( "legacy","subaru", 2007,  280,3)
// console.log(car2.addDriver())







//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model,producer,year,MaxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.MaxSpeed = MaxSpeed;
//         this.volume = volume
//     }
//
//     driver() {
//
//         return `їдемо зі швидкістю ${this.MaxSpeed} на годину`;
//     }
//
// }
// let car1=new Car("legacy", "subaru", 2007, 280, 3)
//
// console.log(car1.driver());

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// class Car {
//     constructor(model,producer,year,MaxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.MaxSpeed = MaxSpeed;
//         this.volume = volume
//     }
//
//     info() {
//
//         return ` model-${this.model},   producer-${this.producer}, year-${this.year}, MaxSpeed-${this.MaxSpeed}, volume-${this.volume}`;
//     }
//
// }
// let car1=new Car("legacy", "subaru", 2007, 280, 3)
//
// console.log(car1.info());

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// class Car {
//     constructor(model,producer,year,MaxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.MaxSpeed = MaxSpeed;
//         this.volume = volume
//     }
//
//     increaseMaxSpeed () {
// let newSpeed=2
//         return `newSpeed-${this.MaxSpeed*newSpeed}`
//     }
//
// }
// let car1=new Car("legacy", "subaru", 2007, 280, 3)
//
// console.log(car1.increaseMaxSpeed());

//     -- changeYear (newB) - змінює рік випуску на значення newValue
// class Car {
//     constructor(model,producer,year,MaxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.MaxSpeed = MaxSpeed;
//         this.volume = volume
//     }
//
//     changeYear () {
//         let newB=2020
// this.year=newB
//
//         return `model-${this.model},   producer-${this.producer}, newValue--${this.year}, MaxSpeed-${this.MaxSpeed}, volume-${this.volume}`
//     }
//
// }
// let car1=new Car("legacy", "subaru", 2007, 280, 3)
//
// console.log(car1.changeYear());



//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model,producer,year,MaxSpeed,volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.MaxSpeed = MaxSpeed;
//         this.volume = volume
//     }
//
//     addDriver () {
//     let driver=['xkx',121]
// this.driver=driver
//         return `model-${this.model},   producer-${this.producer}, newValue--${this.year}, MaxSpeed-${this.MaxSpeed}, volume-${this.volume}, addDr-${this.driver}`
//     }
//
// }
// let car1=new Car("legacy", "subaru", 2007, 280, 3)
//
// console.log(car1.addDriver());
// class cust extends Car{
//     constructor(model,producer,year,MaxSpeed,volume,adddriver) {
//         super(model,producer,year,MaxSpeed,volume);
//         this.adddriver=adddriver
//     }
// }
//
// console.log(new cust("wrx", "subaru", 2010, 250, 2, 1111));








//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.



        // function Cinderella (name, age, size) {
        //     this.name = name;
        //     this.age = age;
        //     this.size = size;
        // }
        //
        //
        //
        // let arr=[
        //     new Cinderella('anna', 20, 36),
        //     new Cinderella('ala', 20, 35),
        //     new Cinderella('vika', 20, 37)
        //]
//console.log(arr);

// function Prince(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// let prin=new Prince('vasya',23,37)
//console.log(prin);

// function res(arr,prin) {
//     for (const arrElement of arr) {
//         if (arrElement.size===prin.size){
//             return  `${arrElement.name}`
//         }
//     }
// }
// let res1=res(arr,prin)
// console.log(res1);



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let fin=arr.find(value => value.size===prin.size)
// console.log(fin);











