// 1.
//  Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
//  (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
//  наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
//  для вычисленияплощадипрямоугольника:S=длина*ширина
//  Входные: Rectangle(5, 4) → Результат: 20
//  Входные: Rectangle(10, 3) → Результат: 30
//  Входные: Rectangle(7, 7) → Результат: 49
class StringChecker {
    str;
    constructor(str) {
        this.str = str;
    }
    hasNumbers() {
        return /\d/.test(this.str);
    }
    hasUpperCase() {
        return /[A-Z]/.test(this.str);
    }
    hasSymbols() {
        return /[!@#$%^&*()]/.test(this.str);
    }
}
const str = new StringChecker('A1!');
console.log(str.hasNumbers());
console.log(str.hasSymbols());
console.log(str.hasUpperCase());
