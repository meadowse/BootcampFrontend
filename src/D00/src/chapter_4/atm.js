// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50]
  if (sum % 50 != 0) {
    return "Incorrect value"
  } else {
    let allbanknots = 0
    const banknot = {}
    for (let i = 0; i < banknots.length; i++) {
      if (((sum - sum % banknots[i]) / banknots[i]) > 0) {
        banknot[banknots[i]] = (sum - sum % banknots[i]) / banknots[i]
        allbanknots += (sum - sum % banknots[i]) / banknots[i]
        sum = sum % banknots[i]
      }
    }
    if (allbanknots > 20) {
      return "limit exceeded"
    } else {
      return banknot
    }
  }
}

console.log(atm(8350)) // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)) // Incorrect value
console.log(atm(100050)) // limit exceeded
