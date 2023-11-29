// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
    while (message.indexOf(symbol) != -1) {
    message = message.replace(symbol, '')
    }
    return message
}

console.log(removeString("Большое и интересное сообщение", "о")) // Бльше и интересне сбщение
