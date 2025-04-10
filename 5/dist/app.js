// 1.
//  Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
//  (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
//  наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
//  для вычисленияплощадипрямоугольника:S=длина*ширина
//  Входные: Rectangle(5, 4) → Результат: 20
//  Входные: Rectangle(10, 3) → Результат: 30
//  Входные: Rectangle(7, 7) → Результат: 49
// abstract class Shape {
//     abstract calculateArea(a:number,b:number):void;
// }
// class Rectangle extends Shape{
//     calculateArea(a:number,b:number):void{
//         console.log(a*b);
//     }
// }
// const rec = new Rectangle();
// rec.calculateArea(2,5);
//  2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
//  Затем создайтедва дочернихкласса:
//  • Dog
//  • Cat
//  Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
//  возвращаясоответствующийзвукживотного.
//  Входные: Dog().makeSound() → Результат: "Гав-гав"
//  Объяснение:МетодmakeSound() дляобъектаклассаDog долженвернутьзвуксобаки.
//  Входные: Cat().makeSound() → Результат: "Мяу"
//  Объяснение:МетодmakeSound() дляобъектаклассаCat долженвернутьзвуккошки.
// abstract class Animal {
//     abstract makeSound():void;
// }
// class Dog extends Animal{
//     makeSound():void{
//         console.log('Гав-гав');
//     }
// }
// class Cat extends Animal{
//     makeSound():void{
//         console.log('Мяу');
//     }
// }
// const dog = new Dog();
// dog.makeSound();
// const cat = new Cat();
// cat.makeSound();
// 3. СоздайтеинтерфейсiAccountсоследующимиметодами:
//  • balance: хранитцисловоезначениебалансасвета
//  • getBalance():возвращаеттекущийбаланссчета
//  • deposit(amount: number): пополняетсчетна указаннуюсумму
//  • withdraw(amount: number):снимаетуказаннуюсуммусосчета
//  Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте всеметоды
//  интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
//  недостаточно, выбрасывайте ошибку.
// interface iAccount{
//     balance:number;
//     getBalance():void;
//     deposit(amount: number):void;
//     withdraw(amount: number):void;
// }
// class Account implements iAccount{
//     balance: number;
//     constructor(balance){
//         this.balance=balance;
//     }
//     getBalance():void{
//         console.log(this.balance);
//     }
//     deposit(amount: number):void{
//         this.balance+=amount;
//         console.log(this.balance);
//     }
//     withdraw(amount: number){
//         try{
//             if(this.balance<amount) throw new Error('Недостаточно средств');
//             this.balance-=amount;
//             console.log(this.balance);
//         }
//         catch(error){
//             console.log(error.name);
//         }
//     }
// }
// const ac = new Account(100);
// ac.getBalance();
// ac.deposit(50);
// ac.withdraw(100);
//  4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
//  метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
//  (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
//  реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
//  транспортных средств (например,через console.log).
//  Входные:
//  let car = new Car();
//  car.start();
//  → Результат: Car started
//  Входные:
//  let car = new Car();
//  car.stop();
//  → Результат: Car stopped
//  Входные:
//  let motorcycle = new Motorcycle();
//  motorcycle.start();
//  → Результат: Motorcycle started
//  Входные:
//  let motorcycle = new Motorcycle();
//  motorcycle.stop();
//  → Результат: Motorcycle stopped
// abstract class Vehicle{
//     abstract start():void;
//     abstract stop():void;
// }
// class Car extends Vehicle{
//     start(): void {
//         console.log('Car started');
//     }
//     stop(): void {
//         console.log('Car stopped');
//     }
// }
// class Motorcycle extends Vehicle{
//     start(): void {
//         console.log('Motorcycle started');
//     }
//     stop(): void {
//         console.log('Motorcycle stopped');
//     }
// }
// let car = new Car();
// car.start()
// car.stop();
// let motorcycle = new Motorcycle();
// motorcycle.start();
// motorcycle.stop();
// 5. СоздайтеабстрактныйклассFruit (Фрукт) соследующимполем:
//  • fruits: массив объектов, где каждый объект имеет свойства id, title
//  (название) и price (цена)
//  Затем создайте дочерний класс Apple (Яблоко), который наследует
//  Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
//  возвращать информацию о яблоке из массива fruits, где title равно
//  "яблоко".
//  Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price": 
// 45} ] 
// → Результат: {"id": 1, "title": "яблоко", "price": 50}
//  Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null
// interface OBJ {
//     id: number;
//     title: string;
//     price: number;
// }
// abstract class Fruit {
//     protected fruits: OBJ[] = []; 
// }
// class Apple extends Fruit {
//     setFruits(arr: OBJ[]): void {
//         this.fruits = arr;
//     }
//     public getAppleInfo(): void {
//         for (let el of this.fruits) {
//             if (el.title === 'яблоко') {
//                 console.log(el);
//             }
//         }
//     }
// }
// const ap = new Apple();
// const arr: OBJ[] = [
//     { id: 1, title: "яблоко", price: 50 },
//     { id: 2, title: "банан", price: 30 },
//     { id: 3, title: "груша", price: 45 }
// ];
// ap.setFruits(arr);
// ap.getAppleInfo(); 
//  6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
//  isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation. 
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
//  Validation должен приниматьпараметры email, date, path иинициализироватьихкак полякласса.
//  Входные:
//  let validation = new Validation('example@mail.com', 
// '2023-09-10', '/usr/local/bin');
//  validation.isValidEmail();
//  → Результат: true
//  Входные:
//  let validation = new Validation('invalid-email', '2023-09
// 10', '/usr/local/bin');
//  validation.isValidEmail();
//  → Результат: false
// interface iValidation{
//     isValidEmail():boolean,
//     isValidDate():boolean, 
//     isValidPath():boolean,
// }
// class Validation implements iValidation{
//     private email:string;
//     private date:string;
//     private path:string;
//     constructor(email:string, date:string, path:string){
//         this.email=email;
//         this.date=date;
//         this.path=path;
//     }
//     isValidEmail():boolean{
//         return (/^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/gm).test(this.email)
//     }
//     isValidDate():boolean {
//         const arr=this.date.split('-');
//         if( arr.length===3 && arr[0].length==4 && !isNaN(Number(arr[0])) && arr[1].length==2 && !isNaN(Number(arr[1])) && Number(arr[1])<=12 && arr[2].length==2 && !isNaN(Number(arr[2])) && Number(arr[1])<=31){
//             return true;
//         }
//         else return false;
//     }
//     isValidPath():boolean{
//         return (/\/[A-Za-z]+\/[A-Za-z]+\/[a-z]{3}$/gm).test(this.path);
//     }
// }
// let validation = new Validation('example@mail.com', '2023-09-10', '/usr/local/bin');
// console.log(validation.isValidEmail());
// console.log(validation.isValidDate());
// console.log(validation.isValidPath());
// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
//  инициализируемоечерезконструктор.Реализуйтеметоды:
//  • getAverageдлявычислениясреднегозначениямассива,
//  • getMaxдляпоискамаксимальногозначениявмассиве,
//  • getMinдляпоискаминимальногозначениявмассиве.
//  Входные:
//  let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
//  analyzer.getAverage();
//  → Результат: 3
//  Входные:
//  let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
//  analyzer.getMax();
//  → Результат: 30
//  Входные:
//  let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
//  analyzer.getMin();
//  → Результат: 5
// class ArrayAnalyzer{
//     private arr:number[]
//     constructor(arr:number[]){
//         this.arr=arr;
//     }
//     getAverage():number{
//         return this.arr.reduce((el,sum)=>el+sum)/this.arr.length;
//     }
//     getMax():number{
//         let max=this.arr[0];
//         for(let el of this.arr){
//             if(el>max) max=el;
//         }
//         return max;
//     }
//     getMin():number{
//         let min=this.arr[0];
//         for(let el of this.arr){
//             if(el<min) min=el;
//         }
//         return min;
//     }
// }
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// console.log(analyzer.getMin());
//  8. СоздайтеклассStringManipulator, который будет иметьтри метода:
//  • reverseString(str) — разворачиваетстроку,
//  • isPalindrome(str) — проверяет,является ли строка палиндромом,
//  • countVowels(str) — подсчитываетколичествогласных буквв строке.
//  Входные:
//  let manipulator = new StringManipulator();
//  manipulator.reverseString('hello');
//  → Результат: 'olleh
//  Входные:
//  let manipulator = new StringManipulator();
//  manipulator.isPalindrome('madam');
//  → Результат: true
// class StringManipulator{
//     reverseString(str:string){
//         return str.split('').reverse().join('');
//     }
//     isPalindrome(str:string){
//         if(str===str.split('').reverse().join('')) return true;
//         else return false;
//     }
//     countVowels(str:string){
//         const arr = str.split('');
//         const rez:string[]=[];
//         const vow:string='aioue';
//         for(let el of arr){
//             if(vow.includes(el)) rez.push(el)
//         }
//         return rez.length;
//     }
// }
// let manipulator = new StringManipulator();
// console.log(manipulator.reverseString('hello'));
// console.log(manipulator.countVowels('hello'));
// let manipulator1 = new StringManipulator();
// console.log(manipulator1.isPalindrome('madam'));
// 9. Создайтеинтерфейс iPwd, которыйописываетметодshowPwd.РеализуйтеклассPwd, который
//  будетсодержатьметодshowPwd,возвращающийслучайносгенерированныйпарольиз8цифр.
//  Создайте класс Validation, которыйнаследуется от Pwdипереопределяет метод showPwd,
//  вызываяметодродительскогоклассачерезsuperидополняяеговыводомрезультатавконсоль.
// interface iPwd{
//     showPwd():string;
// }
// class Pwd{
//     showPwd():string{
//         const arr:number[]=[];
//         for(let i=0;i<8;i++){
//             arr.push(Math.round(Math.random()*10));
//         }
//         return arr.join('');
//     }
// }
// class Validation extends Pwd{
//     showPwd():string{
//        const arr = super.showPwd();
//        console.log(arr);
//        return arr;
//     }
// }
// const val = new Validation();
// val.showPwd();
//  10. СоздайтеабстрактныйклассUniversity, которыйсодержит:
//  • абстрактныйметодgetStudentById(id: number),
//  • полеstudents — массивобъектовстудентов.
//  РеализуйтеклассStudent, которыйнаследуетсяотUniversity иреализуетметодgetStudentById, 
// возвращающийобъектстудентапоегоID.
//  const students = [
//   new Student(1, 'Alice'),
//   new Student(2, 'Bob'),
//   new Student(3, 'Charlie')
//  ];
//  Входные:
//  let university = new UniversityStudent([
//   new Student(1, 'Alice'),
//   new Student(2, 'Bob')
//  ]);
//  university.getStudentById(1);
//  → Результат:{id: 1, name: 'Alice' }
// interface OBJ{
//     id:number;
//     name:string;
// }
// abstract class University{
//     abstract getStudentById(id: number):void;
//     abstract students:OBJ[];
// }
// class Student extends University{
//     students:OBJ[]=[
//         {id: 1, name: 'Alice' },
//         {id: 2, name: 'Alex' },
//         {id: 3, name: 'Mary' },
//     ];
//     getStudentById(id: number):void{
//         for(let el of this.students){
//             if(el.id===id) console.log(el);
//         }
//     }
// }
// const st = new Student();
// st.getStudentById(1);
// 11.
//  Создайтекласс Counter, которыйбудет представлять счетчик. У класса должнобыть:
//  • Свойствоcount,значениекоторогозадается черезсеттер.
//  • Методincrement—увеличиваетзначениесчётчикана1.
//  • Методdecrement—уменьшаетзначениесчётчикана1.
// class Counter{
//     private count:number;
//     constructor(count:number){
//         this.count=count;
//     }
//     increment():void{
//         this.count+=1;
//         console.log(this.count);
//     }
//     decrement():void{
//         this.count-=1;
//         console.log(this.count);
//     }
// }
// const c = new Counter(5);
// c.increment();
// c.increment();
// c.decrement();
// 12. Необходимо реализовать класс QuoteGenerator, который будет содержать список заранее
// заданных цитат и метод для получения случайной цитаты. Класс должен содержать массив с
// заранее определёнными цитатами и иметь метод getRandomQuote(), который: Возвращает одну
// случайнуюцитату измассива.Списокцитат можнорасширитьилиизменить,добавивсвои.
// this.quotes = [
// "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
// "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
// "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
// "Believe you can and you're halfway there. — Theodore Roosevelt",
// "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
// "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
// "It does not matter how slowly you go as long as you do not stop. — Confucius",
// "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
// "The best way to predict the future is to create it. — Peter Drucker",
// "You miss 100% of the shots you don't take. — Wayne Gretzky"
// ];
class QuoteGenerator {
    quotes;
    constructor() {
        this.quotes = [
            "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
            "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
            "Believe you can and you're halfway there. — Theodore Roosevelt",
            "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
            "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
            "It does not matter how slowly you go as long as you do not stop. — Confucius",
            "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
            "The best way to predict the future is to create it. — Peter Drucker",
            "You miss 100% of the shots you don't take. — Wayne Gretzky"
        ];
    }
    getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }
    addQuote(newQuote) {
        this.quotes.push(newQuote);
    }
}
const quoteGenerator = new QuoteGenerator();
console.log(quoteGenerator.getRandomQuote());
quoteGenerator.addQuote("xcvbnmwlkjqbdcwqw");
console.log(quoteGenerator.getRandomQuote());
