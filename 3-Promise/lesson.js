// promise - специальный объект для работы с асинхронным кодом

// new Promise - функция конструктор (класс) promise

// const promise = new Promise(function (resolve, reject) {
// });
// console.log(promise) // ожидание

// const promise = new Promise(function (resolve, reject) {
//   resolve(100)
// });
// console.log(promise) // успех

// const promise = new Promise(function (resolve, reject) {
//   reject('ошибка бла бла')
// });
// console.log(promise) // ошибка


// const promise = new Promise(function (resolve, reject) {
//   console.log(1)
//   resolve(12)
//   console.log(2)
//   reject() // не выполнится
//   console.log(3)

//   return 10 // игнорируется
// });

// console.log(promise)


// методы promise


// then: (onfulfilled?: ((value: any) => any) | null | undefined): Promise<any>
// const promise = new Promise(function (resolve) {
//   resolve(100)
// });
// promise.then((res) => {
//   console.log(res)
//   return res + 100
// })
//   .then(console.log)


// catch: (onrejected?: ((reason: any) => void | null | undefined): Promise<any>
// const promise = new Promise(function (resolve, reject) {
//   reject(100)
// });
// promise.catch((res) => {
//   console.log(res)
//   throw new Error(res + 100)
// })
//   .catch((res) => {
//     console.log(res)
//     return res + 100
//   })
//   .then((res) => {
//     console.log(res)
//   })


// finally: (onfinally?: (() => void) | null | undefined): Promise<any>
// const promise = new Promise(function (resolve) {
//   resolve(100)
// });
// promise
//   .then((res) => {
//     console.log(res)
//     return res + 100
//   })
//   .catch((res) => {
//     console.log(res)
//     return res + 100
//   })
//   .finally((res) => {
//     console.log(res)
//     return res + 500
//   })



// Статические методы Promise.(...) на самостоятельное изучение


// Зачем нам знать информацию о promise -
// самый важный метод для запроса на сервер fetch возвращает promise
// и нам надо уметь его обрабатывать и работать ним работать с ним понимая особенности promise

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => res.json())
//   .then((res) => console.log(res))

// fetch('https://jsonplacehold.typicode.com/posts/1')
// .then((res) => res.json())
// .then((res) => console.log(res))
// .catch(e => console.log(200))