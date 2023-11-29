//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function counter() {
    let a = -3;
    return function() {
        return a += 3
    }
}

let count = counter()

console.log(count()) // Функция вернет 0
console.log(count()) // Функция вернет 3
console.log(count()) // Функция вернет 6
console.log(count()) // Функция вернет 9
