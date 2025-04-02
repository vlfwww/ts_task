// 1.
//  Напишитепрограмму, которая проверяет, делится ли заданное число num на 3и 5одновременно.
//  Еслиделится, выведите "Числоделится на 3и5", иначе"Числоне делитсяна3и5".
//  Входные: num=15→Результат:"Числоделится на 3и5"
//  Входные: num=14→Результат:"Числонеделитсяна 3и5"
// function isDiv(num:number):string{
//     return (num%3===0 && num %5===0) ? 'Число делится на 3 и5 ':'Число не делитсяна 3 и 5';
// }
// console.log(isDiv(15));
//  2. Создайтедвепеременныеиприсвойтеимчисловыезначения.Выведитевконсольчисло,которое
//  ближе к 10. Если оба числа находятся на одинаковом расстоянии от 10, выведите "Оба числа
//  равноудаленыот10".
//  Входные: num1=8,num2=20→Результат:8
//  Входные: num1=9,num2=11 →Результат:"Обачисларавноудаленыот10"
// function isCloser(num1:number,num2:number):string|number{
//     if(Math.abs(num1-10)===Math.abs(num2-10)) return 'Оба числа равноудалены от 10';
//     else if(Math.abs(num1-10)<Math.abs(num2-10)) return num1;
//     else return num2;
// }
// console.log(isCloser(8,20));
//  3. Напишитепрограмму, которая проверяет, является ли год високосным. Год является високосным,
//  еслионделитсяна4, нонеделитсяна100,илиеслионделитсяна400.
//  Входные: year = 2024 →Результат: "2024 год является високосным"
//  Входные: year = 1900 →Результат: "1900 год не является високосным"
// function isYear(year:number):string{
//     if((year%4===0 && year%100!=0)|| year%400===0) return `${year} год является високосным`;
//     else return `${year} год  не является високосным`
// }
// console.log(isYear(1900));
//  4. Создайтепеременнуюстроки.Напишитепрограмму,которая определяет, содержитли строкахотя
//  быоднуцифру.Еслида, выведите"Строкасодержитцифры",иначе"Строка несодержитцифр".
//  Входные: str = "Hello123" → Результат: "Строка содержит цифры"
//  Входные: str = "Hello" → Результат: "Строка не содержит цифр"
// function isContainsNum(str:string):string{
//     let arr = str.split('');
//     for(let i = 0;i<arr.length;i++){
//         if(!isNaN(Number(arr[i]))) return 'Строка содержит цифры';
//     }
//     return 'Строка не содержит цифр';
// }
// console.log(isContainsNum('hello'));
// 5.
//  Напишите программу, которая проверяет, является ли число num2 квадратом числа num1.
//  Выведитесообщениевконсоль,указывающеерезультатпроверки.
//  Входные: num1=3,num2=9→Результат:"9являетсяквадратом3"
//  Входные: num1=4,num2=20→Результат:"20неявляетсяквадратом4"
// function check(num1:number,num2:number):string{
//     if(num1*num1===num2) return `${num2} является квадратом ${num1}`;
//     else return `${num2} не является квадратом ${num1}`;
// }
// console.log(check(3,9));
//  6.
//  Создайте две переменные, представляющие собой двузначные числа. Напишите программу,
//  которая сравнивает суммуцифркаждогочислаивыводитвконсольбольшееиздвухчисел.
//  Входные: num1=23,num2=56→Результат:"56имеетбольшуюсуммуцифр"
//  Входные: num1=34,num2=25→Результат:"Обачислаимеютодинаковуюсуммуцифр"
// function checkNum(num1:number,num2:number):string{
//     if(Math.floor(num1/10)+Math.floor(num1%10)===Math.floor(num2/10)+Math.floor(num2%10)) return 'Оба числа имеют одинаковую сумму цифр';
//     else if(Math.floor(num1/10)+Math.floor(num1%10)>=Math.floor(num2/10)+Math.floor(num2%10)) return `${num1} имеет большую сумму цифр`;
//     else return `${num2} имеет большую сумму цифр`;
// }
// console.log(checkNum(23,56));
// console.log(checkNum(34,25));
// console.log(checkNum(27,11));
//  7. Напишитепрограмму, которая принимает строку str и переставляет местами первый и последний
//  символыстроки.Выведитерезультат в консоль.
//  Входные: str = "hello" → Результат: "oellh"
//  Входные: str = "typescript" → Результат: "tpescripy"
// function changeLet(str:string):string{
//     return str[str.length-1]+str.slice(1,str.length-1)+str[0];
// }
// console.log(changeLet('hello'));
//  8. Напишите программу, которая принимает две строки str1 и str2 и проверяет, содержат ли они
//  одинаковыесимволы(необязательновтомжепорядке).Выведитерезультатвконсоль.
//  Входные: str1 = "abc", str2 = "cba" → Результат: "Строки содержат одинаковыесимволы"
//  Входные: str1 = "abc", str2 = "def" → Результат: "Строки не содержат одинаковыесимволы"
// function check(str1:string,str2:string):string{
//     let strCh1=str1.split('').sort();
//     let strCh2=str2.split('').sort();
//     return (strCh1.join('')===strCh2.join(''))?'Строки содержат одинаковые символы':'Строки не содержат одинаковые символы';
// }
// console.log(check('abc','cba'));
// 9.
//  Создайте две переменные num1 и num2. Напишите программу, которая проверяет, является ли
//  суммаэтихчиселчетной.Еслида, выведите"Сумма четная", иначе "Сумманечетная".
//  Входные: num1=4,num2=6→Результат:"Суммачетная"
//  Входные: num1=7,num2=5→Результат:"Сумманечетная"
// function checkSum(num1:number,num2:number):string{
//     if((num1+num2)%2===0) return 'Сумма четная';
//     else return 'Сумма не четная';
// }
// console.log(checkSum(4,6));
// console.log(checkSum(7,4));
//  10.
//  Напишите программу, которая находит наибольший общий делитель (НОД) двух чисел num1 и
//  num2.
//  Входные: num1=15, num2=25→Результат:"НОД:5"
//  Входные: num1=14, num2=28→Результат:"НОД:14"
// function NOD(num1:number,num2:number):number{
//     let max = Math.max(num1,num2);
//     for(let i = Math.round(max/2);i>0;i--){
//         if(num1%i===0&&num2%i===0) return i;
//     }
//     return 1;
// }
// console.log(NOD(15,25));
//  11. Напишите программу, которая проверяет, начинается ли строка str с гласной буквы. Гласными
//  считаются: a, e, i, o, u. Выведите результат в консоль.
//  Входные: str = "apple" → Результат: "Строка начинается с гласной"
//  Входные: str = "banana" → Результат: "Строка не начинается с гласной"
// function startsVow(str:string):string{
//     if('aeiou'.includes(str[0])) return 'Строка начинается с гласной';
//     return 'Строка не начинается с гласной';
// }
// console.log(startsVow('ajjjj'));
//  12. Напишите программу, которая проверяет, можно ли строку str разделить на две части таким
//  образом, чтобы количество уникальных символов в обеих частях было одинаковым. Если
//  возможно,выведите"Можно",иначе"Нельзя".
//  Входные: str = "aabbcc" → Результат: "Можно"
//  Входные: str = "abcbbc" → Результат: "Нельзя"
// function isDiv(str:string):string{
//     if(str.length%2!=0) return 'Нельзя';
//     let f = str.slice(0,str.length/2);
//     let l = str.slice(str.length/2,);
//     let rez1=[];
//     let rez2=[];
//     for(let i = 0; i<f.length;i++){
//         if(!rez1.includes(f[i])) rez1.push(f[i]);
//     }
//     for(let i = 0; i<l.length;i++){
//         if(!rez2.includes(f[i])) rez2.push(l[i]);
//     }
//     if(rez1.length===rez2.length) return 'Можно';
//     return 'Нельзя';
// }
// console.log(isDiv('aabbcc'));
// console.log(isDiv('abcbbc'));
// 13.
//  Напишите программу, которая проверяет, можно ли заданное число num представить в виде
//  произведения двух последовательных целых чисел. Если возможно, выведите эти числа, иначе
//  выведите"Невозможно".
//  Входные: num=20→Результат:"4*5=20"
//  Входные: num=30→Результат:"Невозможно"
//  Входные: num=42→Результат:"6*7=42"
// function check(num:number):string{
//     for(let i = 1;i<=num;i++){
//         if(i*(i+1)==num) return `${i}*${i+1}=${num}`
//     }
//     return 'Невозможно';
// }
// console.log(check(20));
// console.log(check(30));
//  14. Напишитепрограмму, которая проверяет, можно ли из символов строки str составить палиндром,
//  переставив их. Если возможно,выведите"Можно",иначе"Нельзя".
//  Входные: str = "civic" → Результат: "Можно"
//  Входные: str = "ivicc" → Результат: "Можно"
//  Входные: str = "hello" → Результат: "Нельзя"
// function canPal(str: string): string {
//     const elCount: { [key: string]: number } = {};
//     for (let el of str) {
//         elCount[el] = (elCount[el] || 0) + 1;
//     }
//     let oddCount = 0;
//     for (let el of Object.values(elCount)) {
//         if (typeof el === 'number' && el % 2 !== 0) {
//             oddCount++;
//         }
//     }
//     return (oddCount <= 1) ? 'Можно' : 'Нельзя';
// }
// console.log(canPal('ivicc'));
// console.log(canPal('hello'));
// console.log(canPal('civic'));
//  15. Напишите программу, которая проверяет, можно ли число num разделить на две части так, чтобы
//  суммацифрвэтихчастяхбылаодинаковой.Есливозможно,выведите"Можно",иначе"Нельзя".
//  Входные: num=123321 →Результат:"Можно"
//  Входные: num=123456 →Результат:"Нельзя"
//  Входные: num=1221 →Результат:"Можно"
function check(str) {
    if (str.length % 2 != 0)
        return "Нельзя";
    let f = str.slice(0, str.length / 2);
    let l = str.slice(str.length / 2);
    let arr1 = f.split("");
    let arr2 = l.split("");
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum1 += Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2 += Number(arr2[i]);
    }
    return sum1 === sum2 ? "Можно" : "Нельзя";
}
console.log(check('123321'));
console.log(check('123456'));
console.log(check('1221'));
