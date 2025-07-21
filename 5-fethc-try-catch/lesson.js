/*

Клиент-серверное взаимодействие

Для взаимодействия могут использоваться следующие технологии:

1. Fetch - Формы, загрузка данных, поиск без перезагрузки
2. WebSockets - Чат, онлайн-игры, трейдинг
3. GraphQL - Сложные API, мобильные приложения
4. SSE - Стриминг данных, уведомления
5. gRPC	- Микросервисы, высоконагруженные системы
6. WebRTC - Видеозвонки, P2-приложения

*/

// Fetch - современный стандарт для работы с HTTP-запросами,
// где HTTP это протокол, который используется для передачи данных в интернете

// const promise = fetch('https://jsonplaceholder.typicode.com/posts') // возвращает промис
// promise.then(res => {
//     console.log(res)
//     // res.json().then(console.log)
// })


/*
status:
1** - запрос принят, обработка продолжается

2** - запрос успешно обработан

3** - требуется дополнительное действие для завершения запроса (чаще всего перенаправление запроса)

4** - ошибка на стороне клиента
404 - страница не найдена

5** - ошибка на стороне сервера

*/


// Методы согласно REST API (рекомендации при проектирование интерфейса между сервером и клиентом):

// GET - получение сушности (метод по умолчанию по умолчанию)
// const promise = fetch('https://jsonplaceholder.typicode.com/posts/5')
// promise.then(res => {
//     res.json().then(console.log)
// })

// HEAD - получить только заголовки
// const promise = fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'HEAD' }).then(console.log)

// POST - создание сущности
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// PUT - полностью обновить существующие сущность
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// DELETE - удалить сущность
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// PATCH - обновить часть сущности
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//         id: 2,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// Query-параметры - часть адресса запроса после ?
// формат key=value, перечисление через &

// const promise = fetch('https://jsonplaceholder.typicode.com/posts?userId=1&id=7')
// promise.then(res => {
//     res.json().then(console.log)
// })



// async/await

// const someFunc = async () => {
//     console.log(1)
//     const promise = await fetch('https://jsonplaceholder.111typicode.com/posts?userId=1&id=7')
//     const trasformPromise = await promise.json()
//     console.log(trasformPromise)
//     console.log(2)
// }
// someFunc()
// console.log(3)



// try/catch/finnaly

const someFunc = async () => {
    try {
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1&id=7')
        const trasformPromise = await promise.json()
        // set(trasformPromise)
    } catch (error) {
        console.error('catch', error)
    } finally {
        console.log('finally')
    }
}
someFunc()