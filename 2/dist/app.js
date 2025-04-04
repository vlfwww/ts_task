// 1.Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
// const arr: number[] = [1, 2, 3, 4, 5, 6];
// const rez: number = arr.filter(el => el % 2 !== 0).reduce((sum, el) => sum + el, 0);
// console.log(rez);
// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
// const arr:string[]=['fghdhdha','vvbbvbvbbv','aaaa','yyty'];
// for(let el of arr){
//     if(el.includes('a')) console.log(el);
// }
// 3. На входе динамичный массивчисел. Используя reduce выведите сумму чисел
// массива
// const arr:number[]=[];
// for(let i =0;i<10;i++){
//     arr.push(Math.floor(Math.random()*100));
// }
// console.log(arr.reduce((sum,el)=>sum+el));
// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
// const arr:string[]=[];
// for(let i=0;i<3;i++){
//     arr.push(prompt('Enter str'));
// }
// console.log(arr.some(el=>el.length>5));
// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
// const arr:number[]=[1,2,3,6];
// for(let el of arr){
//     if(el%3==0 && el%2!=0) console.log(el);
// }
// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.
// const arr:string[]=['gggg','eeeee','wwwww'];
// let str:string='';
// for(let el of arr){
//     str+=el;
// }
// console.log(str);
// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.
// const arr:string[]=[];
// for(let i =0 ;i<5;i++){
//     let el = prompt('Enter')
//     if(!isNaN(Number(el))){
//         arr.push(el);
//     }
// }
// console.log(arr);
// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
// const arr:string[]=['asdsa','yyfv','yycvv'];
// for(let el of arr){
//     if(el===el.split('').reverse().join('')) console.log(true)
// }
// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
// const arr:(string|number)[]=[5,5,5,'q',8,7,'q','r'];
// const arr1:(string|number)[]=[];
// for(let el of arr){
//     if(!arr1.includes(el)) arr1.push(el);
// }
// console.log(arr1);
// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
// const arr:string[]=['arigd','ucnn','ibdhwq'];
// const vow:string[]=['a','u','i','e','o'];
// const arr1:string[]=[]
// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         if(vow.includes(arr[i][j])) arr1.push(arr[i][j]);
//     }
// }
// console.log(arr1);
// 11. На входе динамичный массивстрок. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
// const arr: string[] = [
//   "vlfwww@outlook.com",
//   "vlfwww@outlook.com",
//   "vlfwww@outlook.com",
// ];
// console.log(arr.every((el) => /^[A-Za-z]+@[a-zA-Z]+\.+[a-z]{1,3}$/gm.test(el)));
// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
// const arr:number[]=[1,2,3,4,5,6,7,8,9];
// let sum:number=0;
// for(let i = 0;i<arr.length;i++){
//     if((i+1)%2!=0) sum+=arr[i];
// }
// console.log(sum);
// 13. На входе динамичный массивчисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// const arr:number[]=[];
// for(let i=0;i<6;i++){
//     arr.push(Math.round(Math.random()*10));
// }
// console.log(arr);
// const rez:string[]=arr.map(el=>{
//     if(el%2==0) return 'чет';
//     else return'нечет';
// })
// console.log(rez);
// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
// const str ='arrtsawa';
// let obj={};
// for(let i = 0;i<str.length;i++){
//     obj[str[i]]=0;
// }
// for(let i = 0;i<str.length;i++){
//     for(let key in obj){
//         if(str[i]===key) obj[key]++;
//     }
// }
// const val:number[] = Object.values(obj);
// console.log(val);
// let max:number=val[1];
// for(let el of val){
//     if(el>max) max=el;
// }
// console.log(max);
// for(let key in obj){
//     if(max===obj[key]) console.log(`${key} - повторяется ${obj[key]} раз`);
// }
// 15. На входе динамичный массивстрок. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
// const arr:string[]=[]
// for(let i = 0;i<5;i++){
//     arr.push(prompt('Enter'));
// }
// const arr1:string[]=[];
// const rez = arr.forEach(el=>{arr1.push('!'+el)});
// console.log(arr1);
// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
// const arr:number[]=[1,5,3,4,5,6,7,8];
// let bul:boolean=true;
// for(let i = 0;i<arr.length-1;i++){
//     if(arr[i]<arr[i+1]) continue
//     else bul=false;
// }
// if(bul) console.log('явл');
// else console.log('неявл');
// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.
// const arr:number[]=[];
// for(let i=0;i<6;i++){
//     arr.push(Math.round(Math.random()*10));
// }
// console.log(arr);
// let max:number=0;
// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr.length;j++){
//         if(Math.abs(arr[i]-arr[j])>max) max = Math.abs(arr[i]-arr[j]);
//     }
// }
// console.log(max);
// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
// const arr=[
//     {   author:'Булгаков',
//         book:'Мастер и маргарита',
//         price:40,
//     },
//     {   author:'Пушкин',
//         book:'kzkzkkz',
//         price:80,
//     },
//     {   author:'Маяковский',
//         book:'hhhvfffc',
//         price:52,
//     },
//     {   author:'Колас',
//         book:'hhhvfffc',
//         price:48,
//     },
//     {   author:'Купала',
//         book:'hhhvfffc',
//         price:60,
//     },
// ];
// for(let el of arr){
//     if(el.author==='Булгаков') console.log(el.book);
// }
// 19. Создайте массив объектов, представляющих книги, и отобразите книгигде цена
// каждой > 50 (price – одно из полей объекта)
// const arr=[
//     {   author:'Булгаков',
//         book:'Мастер и маргарита',
//         price:40,
//     },
//     {   author:'Пушкин',
//         book:'kzkzkkz',
//         price:80,
//     },
//     {   author:'Маяковский',
//         book:'hhhvfffc',
//         price:52,
//     },
//     {   author:'Колас',
//         book:'hhhvfffc',
//         price:48,
//     },
//     {   author:'Купала',
//         book:'hhhvfffc',
//         price:60,
//     },
// ];
// for(let el of arr){
//     if(el.price>50) console.log(el.book);
// }
// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
// const arr=[
//         {   author:'Булгаков',
//             book:'Мастер и маргарита',
//             price:40,
//             count:50,
//         },
//         {   author:'Пушкин',
//             book:'kzkzkkz',
//             price:80,
//             count:58,
//         },
//         {   author:'Маяковский',
//             book:'hhhvfffc',
//             price:52,
//             count:90,
//         },
//         {   author:'Колас',
//             book:'hhhvfffc',
//             price:48,
//             count:100,
//         },
//         {   author:'Купала',
//             book:'hhhvfffc',
//             price:60,
//             count:20,
//         },
//     ];
//     let max:number=0;
//     for(let el of arr){
//         if(el.count>max) max = el.count;
//     }
//     for(let el of arr){
//         if(el.count===max) console.log(el.book);
//     }
// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
// let maxCount:number=0;
// let maxW:string='';
// let str:string='dfg rtyui asdfghjkl;dfghjkl re rfbhkj';
// const arr:string[]=str.split(' ');
// for(let el of arr){
//     if(el.length>maxCount){
//         maxCount=el.length;
//         maxW =el;
//     }
// }
// console.log(maxW);
// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
// const arr = [
//   {
//     name: "Masha",
//     salary: 50,
//   },
//   {
//     name: "Dasha",
//     salary: 80,
//   },
//   {
//     name: "Poly",
//     salary: 30,
//   },
//   {
//     name: "Pasha",
//     salary: 90,
//   },
//   {
//     name: "Ira",
//     salary: 70,
//   },
// ];
// let sum:number=0;
// for (let el of arr) {
//   sum+=el.salary;
// }
// const average = sum/arr.length;
// console.log(average);
// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
const arr = [
    {
        name: 'Молоко',
        price: 10,
        quantity: 2,
    },
    {
        name: 'Сыр',
        price: 30,
        quantity: 3,
    },
    {
        name: 'Хлеб',
        price: 5,
        quantity: 4,
    },
    {
        name: 'Масло',
        price: 20,
        quantity: 2,
    },
    {
        name: 'Яйца',
        price: 40,
        quantity: 1,
    },
];
let sum = 0;
for (let el of arr) {
    sum += (el.price * el.quantity);
}
console.log(sum);
