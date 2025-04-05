// 1.
//  У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести все товары, количество которых больше 10
// interface ARR{
//     id: number; title: string; count: number; price: number
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     for (let el of arr) {
//         if (el.count > 10) {
//             console.log(el.title);
//         }
//     }
// }
// check(arr);
//  2. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести все товары в обратном порядке
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function show(arr: ARR[]): void {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i].title);
//     }
// }
// show(arr);
//  3. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести только те товары из положения, количество которых внутри массива 
// кратно 3
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     for (let el of arr) {
//         if (el.count%3==0) {
//             console.log(el.title);
//         }
//     }
// }
// check(arr);
//  4. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести итоговую стоимость на складе.
//  Итоговая стоимость = количество * цена + ...
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     let sum:number=0;
//     for (let el of arr) {
//         sum+=(el.count*el.price)
//     }
//     console.log(sum);
// }
// check(arr);
//  5. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести товар с максимальным прайсом
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     let max:number=arr[0].price;
//     for (let el of arr) {
//         if(el.price>max) max=el.price
//     }
//     console.log(max);
// }
// check(arr);
//  6. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести средний прайс среди всех продуктов
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     let sum:number=0;
//     for (let el of arr) {
//         sum+=el.price;
//     }
//     console.log(sum/arr.length);
// }
// check(arr);
//  7. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести тот товар, где количество * прайс является наибольшим значением
// interface ARR {
//     id: number; 
//     title: string; 
//     count: number; 
//     price: number;
// }
// const arr: ARR[] = [ 
//     { id: 1, title: 'Часы', count: 10, price: 500 }, 
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 }, 
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 }, 
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 }, 
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ];
// function check(arr: ARR[]): void {
//     let max:number=0;
//     for (let el of arr) {
//         if((el.count*el.price)>max) max=el.count*el.price
//     }
//     console.log(max);
// }
// check(arr);
//  8. У вас есть массив строковых значений почт. Необходимо вывести значения 
// массива без дубликатов. Добавить проверки на тип данных, почту
// const arr:string[]=['vlfwww@outlook.com','fhacbjjaj@','vlfwww@outlook.com','vlfwwwoutlook.com','sffss@outlook.com']
// function check(arr:string[]):void{
//     const rez:string[]=[];
//     for(let el of arr){
//         if((/^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/gm).test(el) && !rez.includes(el)) rez.push(el);
//     }
//     console.log(rez);
// }
// check(arr);
//  9. Напишите код, который сделает из массива объект
//  [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
// interface ARR{
//     name:string,
//     value:number,
// }
// const arr:ARR[]= [ {name: 'width', value: 10}, {name: 'height', value: 20} ];
// function toObj(arr:ARR[]):void{
//     let obj:{}={};
//     for(let el of arr){
//         obj[el.name]=el.value;
//     }
//     console.log(obj);
// }
// toObj(arr);
// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже 
// вернет 5. Использовать каррирование
function f(a, b) {
    if (b !== undefined) {
        return a + b;
    }
    return (b) => a + b;
}
console.log(f(2, 3));
console.log(f(2)(3));
