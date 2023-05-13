// Модуль FileSystem відповідає за роботу з файлами в Node.js. Сучасна ініціалізація модуля з промісами відбувається наступним чином:
const fs = require("fs").promises;

// Найбільш використовувані функції для основних операцій над файлами, наступні:

// fs.readFile(filename, [options]) - читання файлу
// fs.writeFile(filename, data, [options]) - запис файлу
// fs.appendFile(filename, data, [options])- додавання у файл
// fs.rename(oldPath, newPath) - перейменування файлу.
// fs.unlink(path, callback) - видалення файлу.

// Найпростіший спосіб працювати з даними як з рядком, необхідно конвертувати data методом toString():

fs.readFile("readme.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message));

//   Також існують методи модуля fs з синхронними версіями, що закінчуються на Sync. Їх необхідно підключати як

const fs = require("fs");
// Але тоді всі функції, що підключаються, не повертають проміс і їм необхідний callback.


// Напишемо скрипт files.js
// читатиме поточний каталог та виводити його вміст: ім'я файлу, його розмір та дату останньої зміни.
