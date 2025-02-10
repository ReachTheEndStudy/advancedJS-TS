// Web Storage - localStorage и sessionStorage

// Хранят данные как пару ключ/значение в браузере
// sessionStorage - данные существуют, пока существует вкладка
// localStorage - условно бессрочное хранилище (зависит от браузера)

// Максимальный объём хранимых данных + - 5 Мб
// Все скрипты со html страницы имеют доступ к Web Storage


// Методы

// setItem(key: string, value: string): void - сохраняет значение по ключу
// sessionStorage.setItem('name', 'Nikita')
localStorage.setItem('name', 'Nikita')
// localStorage.setItem('data', {
//   name: 'Nikita',
//   age: 72
// })

// Объект JSON
// stringify(value: any): string - превращает value в строку
localStorage.setItem('data', JSON.stringify({
  name: 'Nikita',
  age: 72
}))


// getItem(key: string): string | null - получает значение по ключу
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('data'))


// Объект JSON
// parse(text: string): any
// console.log(JSON.parse(localStorage.getItem('data')))


// removeItem(key: string): void - удаляет значение по ключу
// localStorage.removeItem('name')


// clear(): void - удаляет все данные
// localStorage.clear()


// key(index: number): string | null - получает ключ по индексу
// console.log(localStorage.key(0))
// console.log(localStorage.key(1))


// Свойства

// length: number - показывает  количество элементов в хранилище
// console.log(localStorage.length)


/*Применение

localStorage:
1. Сохранение настроек пользователя (тема, язык, регион).
2. Кэширование данных для оффлайн-доступа (например, статичный контент).
3. Хранение токенов аутентификации.
4. Сохранение данных формы при риске случайного закрытия вкладки.
5. Запоминание состояния UI (открытые/закрытые меню, фильтры).
6. Корзина интернет-магазина (чтобы данные не терялись после закрытия браузера).

sessionStorage:
1. Временное хранение данных формы при переходе между шагами (например, многостраничная анкета).
2. Кэширование данных API в рамках одной сессии (чтобы избежать повторных запросов).
3. Сохранение конфиденциальной информации на время сессии (например, временные ключи).
4. Передача данных между вкладками/окнами только в рамках текущей сессии.
5. Хранение промежуточных результатов вычислений (например, в веб-редакторах).

*/