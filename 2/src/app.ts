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
// 13. На входе динамичный массивчисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
// 15. На входе динамичный массивстрок. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.
// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
// 19. Создайте массив объектов, представляющих книги, и отобразите книгигде цена
// каждой > 50 (price – одно из полей объекта)
// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)
// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
