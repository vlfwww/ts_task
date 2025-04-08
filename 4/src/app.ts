// 1.
//  Создайте класс Rectangle, который содержит свойства width и height, а также метод
//  getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
//  экземпляр класса Rectangle и выведите его площадь.

// class Rectangle{
//     private width:number;
//     private height:number;
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     public getArea():void{
//         console.log(this.height*this.width);
//     }
// }
// const rectangle = new Rectangle(5,10);
// rectangle.getArea();

//  2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
//  multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
//  выполните несколько операций.

// class Calculator{
//     private a:number;
//     private b:number;
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     public add():void{
//         console.log(this.a+this.b);
//     }
//     public subtract():void{
//         console.log(this.a-this.b);
//     }
//     public multiply():void{
//         console.log(this.a*this.b);
//     }
//     public divide():void{
//         if(this.b===0){
//             console.log('Division by zero');
//         }
//         else{
//             console.log(this.a/this.b);
//         }
//     }
// }
// const cal=new Calculator(2,0);
// cal.add();
// cal.subtract();
// cal.multiply();
// cal.divide();

//  3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
//  (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
//  окружности. Площадь круга: π * r^2

// class CircleR{
//     private radius:number;
//     constructor(radius){
//         this.radius=radius;
//     }
//     public getArea():void{
//         console.log(3.14*this.radius*this.radius);
//     }
// }
// const circle = new CircleR(5);
// circle.getArea();

//  4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
//  продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
//  массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
//  displayProductInfo().

// class Product{
//     private product:ARR[];
//     constructor(product){
//         this.product=product;
//     }
//     public displayProductInfo():void{
//         for(let el of this.product){
//             if(el.price>20) console.log(el.title);
//         }
//     }
// }
// interface ARR{
//     price:number,
//     title:string
// }
// const obj:ARR[]=[
//     {
//         'title':'Молоко',
//         'price':15,
//     },
//     {
//         'title':'Хлеб',
//         'price':25,
//     },
//     {
//         'title':'Масло',
//         'price':12,
//     },
//     {
//         'title':'Батон',
//         'price':30,
//     },
//     {
//         'title':'Яйца',
//         'price':5,
//     },
// ]
// const pr = new Product(obj);
// pr.displayProductInfo();

//  5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
//  объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
//  методы:
//  addBook(book) — добавление книгивбиблиотеку.
//  removeBookByTitle(title) — удаление книги по названию.
//  getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
//  getBooksByYear(year) — получение всех книг, выпущенных вопределенный год.
//  getBooksByGenre(genre) — получение всех книг в определенном жанре.

// class Library{
//     private list:ARR[];
//     constructor(list){
//         this.list=list;
//     }
//     public addBook(book:ARR):void{
//         this.list.push(book);
//         console.log(this.list);
//     }
//     public removeBookByTitle(title: string): void {
//         this.list = this.list.filter(el => el.title !== title); 
//         console.log(this.list);
//     }
//     public getBooksByAuthor(author:string):void{
//         for(let el of this.list){
//             if(el.author===author){
//                 console.log(el);
//             }
//         }
//     }
//     public getBooksByYear(year:number):void{
//         for(let el of this.list){
//             if(el.year===year){
//                 console.log(el);
//             }
//         }
//     }
//     public getBooksByGenre(genre:string):void{
//         for(let el of this.list){
//             if(el.genre===genre){
//                 console.log(el);
//             }
//         }
//     }
// }
// interface ARR{
//     title:string,
//     author:string,
//     year:number,
//     genre:string,
// }
// let list:ARR[]=[
//     {
//         title:'aaa',
//         author:'fghjk',
//         year:254,
//         genre:'Художественная',
//     },
//     {
//         title:'aan',
//         author:'Пушкин',
//         year:254,
//         genre:'Художественная',
//     },
//     {
//         title:'aan',
//         author:'Пин',
//         year:1234,
//         genre:'fghjk',
//     },
// ]
// let book:ARR={
//     title:'ДОБАВЛЕНО',
//     author:'ДОБАВЛЕНО',
//     year:1234,
//     genre:'ДОБАВЛЕНО',
// }
// const lib = new Library(list);
// lib.addBook(book);
// lib.getBooksByAuthor('Пушкин');
// lib.getBooksByGenre('Художественная');
// lib.getBooksByYear(1234);
// lib.removeBookByTitle('aaa');

//  6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
//  содержать только метод:
//  getMode() —находит ивозвращаетмодумассива чисел (самоечасто встречающееся число).

// class NumberStats {
//     private arr: number[];

//     constructor(arr: number[]) {
//         this.arr = arr;
//     }

//     public getMode(): number | null {
//         const frequency: { [key: number]: number } = {};
//         let maxCount = 0;
//         let mode: number | null = null;
//         for (const num of this.arr) {
//             frequency[num] = (frequency[num] || 0) + 1;
//             if (frequency[num] > maxCount) {
//                 maxCount = frequency[num];
//                 mode = num;
//             }
//         }
//         return maxCount > 1 ? mode : null;
//     }
// }
// const stats = new NumberStats([1, 2, 2, 3, 4, 4, 4, 5]);
// console.log(stats.getMode()); 

//  7. Создайте класс NumberOperations, который должен включать сам массив и методы для
//  работы с массивом чисел:
//  getMax() — возвращает максимальное число измассива.
//  getMin() — возвращает минимальное число измассива.
//  getSum() —вычисляет сумму всех чисел вмассиве.
//  getAverage() — вычисляет среднее значение чисел вмассиве.
//  getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
//  sortAscending() — сортирует массив по возрастанию.
//  sortDescending() — сортирует массив по убыванию.

// class NumberOperations {
//     private arr: number[];

//     constructor(arr: number[]) {
//         this.arr = arr;
//     }
//     public getMax(): number | null {
//         return this.arr.length > 0 ? Math.max(...this.arr) : null;
//     }
//     public getMin(): number | null {
//         return this.arr.length > 0 ? Math.min(...this.arr) : null;
//     }
//     public getSum(): number {
//         return this.arr.reduce((sum, num) => sum + num, 0);
//     }
//     public getAverage(): number | null {
//         if (this.arr.length === 0) return null;
//         return this.getSum() / this.arr.length;
//     }
//     public getAboveAverage(): number[] {
//         const average = this.getAverage();
//         return average !== null ? this.arr.filter(num => num > average) : [];
//     }
//     public sortAscending(): number[] {
//         return [...this.arr].sort((a, b) => a - b);
//     }
//     public sortDescending(): number[] {
//         return [...this.arr].sort((a, b) => b - a);
//     }
// }
// const numbers = new NumberOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

// console.log(numbers.getMax()); 
// console.log(numbers.getMin()); 
// console.log(numbers.getSum());
// console.log(numbers.getAverage()); 
// console.log(numbers.getAboveAverage()); 
// console.log(numbers.sortAscending()); 
// console.log(numbers.sortDescending());

//  8. Создайте класс Sentence, который работает с предложением. Класс должен содержать один
//  метод:
//  getLongestWord() — находит и возвращает самое длинноеслово впредложении.

// class Sentence{
//     private str:string;
//     constructor(str){
//         this.str=str;
//     }
//     public getLongestWord():void{
//         const arr:string[] = this.str.trim().split(' ');
//         let max_length:number=arr[0].length;
//         let max:string=arr[0];
//         for(let el of arr){
//             if(el.length>max_length){
//                 max_length=el.length;
//                 max=el;
//             }
//         }
//         console.log(max);
//     }
// }
// const str=new Sentence('df ghjkjhytgfrdcxvbn hjk erthydhnbnbd');
// str.getLongestWord();

//  9. Создайте класс ListFilter, который работает с массивом чисел. Класс должен содержать один
//  метод:
//  getEvenNumbers() —возвращает все четные числа измассива.

// class ListFilter{
//     private arr:number[];
//     constructor(arr){
//         this.arr=arr;
//     }
//     public getEvenNumbers():number[]{
//         return this.arr.filter(el=>el%2===0);
//     }
// }
// const list = new ListFilter([1,2,3,4,5,6]);
// console.log(list.getEvenNumbers());

//  10. Создайте класс ArrayMerger, который сливает два отсортированных массива в один
//  отсортированный массив используя метод:mergeSortedArrays()
//  Входныеданные: [1, 3, 5], [2, 4, 6]
//  Выходныеданные: [1, 2, 3, 4, 5, 6]

// class ArrayMerger{
//     private arr1:number[];
//     private arr2:number[];
//     constructor(arr1,arr2){
//         this.arr1=arr1;
//         this.arr2=arr2;
//     }
//     public mergeSortedArrays():void{
//         for(let el of this.arr2){
//             this.arr1.push(el);
//         }
//         console.log(this.arr1.sort());
//     }
// }
// const arr = new ArrayMerger([1, 3, 5], [2, 4, 6]);
// arr.mergeSortedArrays();

//  11. Создайте класс PrimeNumberGenerator и метод generatePrimes(limit), который генерирует
//  все простые числа дозаданногопредела.
//  Входныеданные:10
//  Выходныеданные: [2, 3, 5, 7]
//  Входныеданные:20
//  Выходныеданные: [2, 3, 5, 7, 11, 13, 17, 19]
//  Просто́е число́ — это натуральное число, большее единицы, имеющее ровно два натуральных
//  делителя: 1 и само себя

// class PrimeNumberGenerator {
//     public generatePrimes(limit: number): number[] {
//         const primes: number[] = [];

//         for (let num = 2; num <= limit; num++) {
//             if (this.isPrime(num)) {
//                 primes.push(num);
//             }
//         }

//         return primes;
//     }

//     private isPrime(num: number): boolean {
//         if (num < 2) return false; 
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false; 
//             }
//         }
//         return true;
//     }
// }
// const primeGenerator = new PrimeNumberGenerator();

// console.log(primeGenerator.generatePrimes(10)); 
// console.log(primeGenerator.generatePrimes(20));

//  12. Создайте класс ShoppingCart, который будет содержать список товаров. Каждый товар — это
//  объект с такими полями, как name, price и quantity. Класс должен содержать следующие
//  методы:
//  addItem(item) — добавление товара вкорзину.
//  removeItem(itemName) —удаление товара изкорзиныпоназванию.
//  updateItemQuantity(itemName, newQuantity) — обновление количества товара вкорзине.
//  getTotalPrice() — вычисление общей суммы корзины.
//  getItemsAbovePrice(minPrice) — возвращает список товаров, цена которых выше заданного
//  порога.

// class ShoppingCart {
//     private items: { name: string; price: number; quantity: number }[] = [];

//     public addItem(item: { name: string; price: number; quantity: number }): void {
//         const existingItem = this.items.find(i => i.name === item.name);
//         if (existingItem) {
//             existingItem.quantity += item.quantity;
//         } else {
//             this.items.push(item); 
//         }
//     }

//     public removeItem(itemName: string): void {
//         this.items = this.items.filter(item => item.name !== itemName); 
//     }

//     public updateItemQuantity(itemName: string, newQuantity: number): void {
//         const item = this.items.find(i => i.name === itemName);
//         if (item) {
//             item.quantity = newQuantity; 
//         }
//     }

//     public getTotalPrice(): number {
//         return this.items.reduce((total, item) => total + item.price * item.quantity, 0); 
//     }

//     public getItemsAbovePrice(minPrice: number): { name: string; price: number; quantity: number }[] {
//         return this.items.filter(item => item.price > minPrice); 
//     }
// }
// const cart = new ShoppingCart();

// cart.addItem({ name: "Apple", price: 1.5, quantity: 3 });
// cart.addItem({ name: "Banana", price: 1.0, quantity: 5 });
// cart.addItem({ name: "Orange", price: 2.0, quantity: 2 });

// console.log(cart.getTotalPrice()); 
// cart.updateItemQuantity("Apple", 5);
// console.log(cart.getTotalPrice()); 
// cart.removeItem("Banana");
// console.log(cart.getItemsAbovePrice(1.0));

//  13. Создайте класс NumberOperations, который должен включать сам массив и методы для
//  работы с массивом чисел:
//  getMax() — возвращает максимальное число измассива.
//  getMin() — возвращает минимальное число измассива.
//  getSum() —вычисляет сумму всех чисел вмассиве.
//  getAverage() — вычисляет среднее значение чисел вмассиве.
//  getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
//  sortAscending() — сортирует массив по возрастанию.
//  sortDescending() — сортирует массив по убыванию.

class NumberOperations {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    public getMax(): number | null {
        return this.arr.length > 0 ? Math.max(...this.arr) : null;
    }

    public getMin(): number | null {
        return this.arr.length > 0 ? Math.min(...this.arr) : null;
    }

    public getSum(): number {
        return this.arr.reduce((sum, num) => sum + num, 0);
    }

    public getAverage(): number | null {
        if (this.arr.length === 0) return null;
        return this.getSum() / this.arr.length;
    }

    public getAboveAverage(): number[] {
        const average = this.getAverage();
        return average !== null ? this.arr.filter(num => num > average) : [];
    }

    public sortAscending(): number[] {
        return [...this.arr].sort((a, b) => a - b);
    }

    public sortDescending(): number[] {
        return [...this.arr].sort((a, b) => b - a);
    }
}
const numbers = new NumberOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

console.log(numbers.getMax()); 
console.log(numbers.getMin());
console.log(numbers.getSum());
console.log(numbers.getAverage());
console.log(numbers.getAboveAverage());
console.log(numbers.sortAscending()); 
console.log(numbers.sortDescending());