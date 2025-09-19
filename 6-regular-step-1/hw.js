/*

Теория:
1. https://learn.javascript.ru/regexp-introduction
2. https://learn.javascript.ru/regexp-character-classes
3. https://learn.javascript.ru/regexp-anchors
4. https://learn.javascript.ru/regexp-escaping
5. https://learn.javascript.ru/regexp-character-sets-and-ranges
6. https://learn.javascript.ru/regexp-quantifiers
7. https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions



Практика: 
1) Строка должна начинаться с "hello".
const reg = //
console.log(reg.test('hello end')) - must be true

2) Строка должна заканчиваться на "end".
const reg = //
console.log(reg.test('hello end')) - must be true

3) Строка должна быть ровно "yes".
const reg = //
console.log(reg.test('yes')) - must be true

4) Строка должна содержать букву "a" хотя бы один раз.
const reg = //
console.log(reg.test('nnksv d-1399afdvs3324')) - must be true

5) Строка должна состоять из ровно 3 букв "x".
const reg = //
console.log(reg.test('xxx')) - must be true

6) Строка состоит только из строчных латинских букв.
const reg = //
console.log(reg.test('hello')) - must be true
console.log(reg.test('Hello')) - must be false

7) Строка состоит только из заглавных латинских букв.
const reg = //
console.log(reg.test('HELLO')) - must be true
console.log(reg.test('Hello')) - must be false

8) Строка состоит только из цифр и латинских букв.
const reg = //
console.log(reg.test('User123')) - must be true
console.log(reg.test('User 123')) - must be false

9) Строка состоит только из нецифровых символов.
const reg = //
console.log(reg.test('abc!')) - must be true
console.log(reg.test('123')) - must be false

10) Пользователь может вводить только email

console.log(reg.test('fafds@fdsf.fds')) - must be true
console.log(reg.test('fafds@fdsffds')) - must be false
console.log(reg.test('fafdsfdsf.fds')) - must be false
console.log(reg.test('@fdsf.fds')) - must be false

*/