//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

function g(b) {
  for (var d = b.length, a = 0; a < d; a++) {
    for (var c = a + 1; c < d; c++) {
      var e = b[a][c]
      b[a][c] = b[c][a]
      b[c][a] = e
    }
  }
  return b
}

// function diag(rez) {
//   const gor = []
//   for (let i = 0; i < rez.length; i++) {
//     for (let j = 0; j < rez[i].length; j++) {
//       if (i == 0 || j == 0) {
//         gor[i][j] = rez[i][j]
//       }
//       if (i + 1 < rez.length && j + 1 < rez[i].length) {
//         gor[i][j] = rez[i + 1][j + 1]
//       }
//     }
//   }
//   return gor
// }

function searchSubString(puzzle, word) {
  let flag = 0 
  for(let i = 0; i < puzzle.length; i++) {
    if (puzzle[i].join('').indexOf(word) != -1) {
      flag = 1
    }
    if (puzzle[i].reverse().join('').indexOf(word) != -1) {
      flag = 1
    }
  }
  const ver = g(puzzle)
  for(let i = 0; i < ver.length; i++) {
    if (ver[i].join('').indexOf(word) != -1) {
      flag = 1
    }
    if (ver[i].reverse().join('').indexOf(word) != -1) {
      flag = 1
    }
  }
  if (flag) {
    console.log("true")
  } else {
    console.log("false")
  }
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
searchSubString(examplePuzzle, "like"); // true
searchSubString(examplePuzzle, "gold"); // true
searchSubString(examplePuzzle, "queen"); // true

// Level 2
searchSubString(examplePuzzle, "cake"); // true

// console.log(diag(examplePuzzle))