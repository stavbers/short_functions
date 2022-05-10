// 1. Копирование в буфер обмена
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("This Sring is Copied To Clipboard.");
// 2. Получение случайного числа в определенном диапазоне
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

randomNumberInRange()
// Результат: Диапазон случайных чисел по умолчанию составляет 0–100, поэтому вы получите число от 0 до 100.
randomNumberInRange(100, 200)
// Результат: Вы получите случайное число в диапазоне от 100 до 200, где 100 — минимальное значение, а 200 — максимальное.

// 3. Преобразование RGB в шестнадцатеричный код
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255); 
// Результат: #0033ff

// 4. Прокрутка к верху страницы
const goToTop = () => window.scrollTo(0, 0);

goToTop();

// 5. Нахождение количества промежуточных дней между двумя датами
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Результат: 366

// 6. Генерация случайных шестнадцатеричных кодов цветов
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());
// Результат: #92b008

// 7. Проверка того, является ли указанный день будним
const isWeekday = (date) => date.getDay() % 6 !== 0;

console.log(isWeekday(new Date(2021, 0, 11)));
// Результат: true(понедельник)
console.log(isWeekday(new Date(2021, 0, 10)));
// Результат: false(воскресенье)

// 8. Преобразование значений температуры по Фаренгейту / Цельсию
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// Примеры:
celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4

fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0

// 9. Проверка наличия у пользователя устройства от Apple
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

console.log(isAppleDevice);
// Результат: возвращает true, если у пользователя устройство от Apple

// 10. Получение времени из даты
const timeFromDate = date => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Результат: "17:30:00"
console.log(timeFromDate(new Date()));
// Результат: залоггит текущее время

// 10. Получение времени из даты

const timeFromDate = date => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Результат: "17:30:00"
console.log(timeFromDate(new Date()));
// Результат: залоггит текущее время

// 11. Извлечение HTML из текста
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

stripHtml('<h1>Hello <strong>World</strong>!!!</h1>');
// Результат: Hello World!!!

// 12. Переключение “показать/скрыть элемент”
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");

toggleElementDisplay(document.body)
// // Результат: если тело страницы присутствовало ранее, оно должно быть невидимым, и при повторном выполнении команды его следует переключить.

// 13. Разворот строки
const stringReverse = str => str.split("").reverse().join("");

stringReverse('elcitra ym ekil uoy epoh i');
// Результат: i hope you like my article

// 14. Выделение строки заглавной буквой
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

capitalize("i hope you like my article.");
// I hope you like my article.

// 15. Округление десятичных дробей до определенного числа знаков после запятой
// Поведение функции по умолчанию toFixed в Javascript:
Number((1.005).toFixed(2)) //outputs 1 instead of 1.01
Number((1.555).toFixed(2)) //outputs 1.55 instead of 1.56

const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

round(1.005, 2) //1.01
round(1.555, 2) //1.56

// 16. Перемешивание массива
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

console.log(shuffleArray([1, 2, 3, 4]));
// Результат: [ 1, 4, 3, 2 ]

// 17. Определение темного режима
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isDarkMode) // Результат: True или False

// 18. Получение параметров запроса из URL
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');

getParameters("https://www.google.de/search?q=cars&start=40");
// Результат: { q: 'cars', start: '40' }

// 19. Получение среднего значения массива чисел
const average = arr => arr.reduce((a, b) => a + b) / arr.length;

average([21, 56, 23, 122, 67])
//57.8

// 20. Проверка поддержки у текущего пользователя событий касания
const touchSupported = () => {
  ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
}

console.log(touchSupported());
// Результат: возвращает true, если события касания поддерживаются, false — если нет.

// 21. Определение порядкового номера дня в году
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());
// Результат: 272

// 22. Получение значения файла cookie браузера
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

cookie('_ga');
// Результат: "GA1.2.1929736587.1601974046"

// 23. Очистить все файлы cookie браузера
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// 24. Получение случайного булева значения (true/false)
const randomBoolean = () => Math.random() >= 0.5;

console.log(randomBoolean());
// Результат: 50/50 при возврате true или false.

// 25. Удаление дубликатов в массиве
const removeDuplicates = (arr) => [...new Set(arr)];

removeDuplicates([31, 56, 12, 31, 45, 12, 31]);
//[ 31, 56, 12, 45 ]

// 26. Проверка правильности даты
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");
// Результат: true

// 27. Получение случайного элемента из массива
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

randomArrayItem(['lol', 'a', 2, 'foo', 52, 'Jhon', 'hello', 57]);
// Результат: случайный элемент из массива.