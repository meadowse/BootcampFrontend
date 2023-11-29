// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
    let rezult = []
    for (let str of array) {
        if (!rezult.includes(str)) {
            rezult.push(str);
        }
    }
    return rezult;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])) // [1,2,4,5,6,8,9,11]
