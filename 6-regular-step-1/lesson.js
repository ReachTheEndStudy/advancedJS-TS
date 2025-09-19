/*

Специальный объет RegExp

Позволяет осуществлять продвинутую работу со стороками:
1) Поиск
2) Замена
3) Валидация

*/

// Синтаксис
// const reg = new RegExp('abc');

// или короткая запись (предпочтительная)

// const reg = /abc/
// console.log(reg.test('abcdef'))
// console.log(reg.test('defabc'))
// console.log(reg.test('defab'))


// Спецсимволы

// . — любой символ, кроме перевода строки
// const reg = /./
// console.log(reg.test('abcdef'))
// console.log(reg.test(''))

// \ -  экранируем символ
// const reg = /\./
// console.log(reg.test('.'))

// const reg = /java.cript/
// console.log(reg.test('java1cript'))
// console.log(reg.test('java cript'))


// ^ — начало строки
// const reg = /^ab/
// console.log(reg.test('abcdef'))
// console.log(reg.test('cdef'))


// $ — конец строки
// const reg = /f$/
// console.log(reg.test('abcdef'))
// console.log(reg.test('abcde'))


// \d — цифра (0–9)
// const reg = /\d/
// console.log(reg.test(1))
// console.log(reg.test('3'))

// шаблон даты
// const reg = /^\d\d\.\d\d\.\d\d\d\d$/
// console.log(reg.test('11.11.1111'))
// console.log(reg.test('11.11.11112'))



// \w — буква, цифра или _
// const reg = /\w\w\w\w\w/
// console.log(reg.test('12345'))
// console.log(reg.test('qwertyu'))
// console.log(reg.test('1234'))

// шаблон строки из двух символов,
// где на первом месте цифра, а на втором любой символ
// const reg = /^\d\w$/
// console.log(reg.test('1_вфыв'))


// \s — пробел/таб
// const reg = /\s/
// console.log(reg.test(' '))
// console.log(reg.test('  '))


// + — 1 или более
// const reg = /^\d+$/
// console.log(reg.test('12312'))
// console.log(reg.test('231213a'))


// * — 0 или более
// const reg = /^\d*$/
// console.log(reg.test('12312'))
// console.log(reg.test(''))
// console.log(reg.test('dsad'))


// ? — 0 или 1
// const reg = /^\d?$/
// console.log(reg.test('12312'))
// console.log(reg.test('1'))
// console.log(reg.test(''))


// {n,m} — от n до m повторений
// const reg = /^\d{3}$/
// console.log(reg.test('123'))
// console.log(reg.test('1234'))

// const reg = /^\d{3,5}$/
// console.log(reg.test('123'))
// console.log(reg.test('1234'))
// console.log(reg.test('12345'))
// console.log(reg.test('123456'))


// [...] — диапазон
// const reg = /[123abc]/
// console.log(reg.test('213'))
// console.log(reg.test('sadas'))
// console.log(reg.test(''))

// const reg = /[a-z]/
// console.log(reg.test('213'))
// console.log(reg.test('sadas'))

// const reg = /[A-Z]/
// console.log(reg.test('sadas'))
// console.log(reg.test('DASD'))

// const reg = /[а-яA-Z]/
// console.log(reg.test('вфывDASD'))
// console.log(reg.test('dasds'))

// шаблон строки из двух символов,
// где на первом месте цифра в диапазоне от 3 до 6,
// а на втором заглавная буква на русском
// const reg = /[3-6][А-Я]/
// console.log(reg.test('5Д'))
// console.log(reg.test('5в'))
// console.log(reg.test('вД'))
// console.log(reg.test('55'))



// [^...] — отрицание в диапазоне
const reg = /[^a-z]/
console.log(reg.test('213'))
console.log(reg.test('sadas'))
console.log(reg.test('АВФА'))