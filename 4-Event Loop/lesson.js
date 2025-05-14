// event loop -  механизм, который управляет асинхронными операциями.
// Он позволяет обрабатывать задачи, не блокируя основной поток выполнения программы

// выполнение кода
// console.time()
// console.log(1)
// console.log(2)
// console.log(3)
// console.timeEnd()

// код с тяжелой операции
// const hardWorking = () => {
//     let count = 1
//     for (let i = 1; i < 999_999_999; i++) {
//         count = count * i
//     }
//     return 2
// }

// console.time()
// console.log(1)
// console.log(hardWorking())
// console.log(3)
// console.timeEnd()

// код c promise
// console.log(1)
// const promise = new Promise(res => {
//     console.log(2)
//     res()
// })
// promise.then(() => console.log(3))
// console.log(4)


// код c promise + event
// console.log(1)
// const promise = new Promise(res => {
//     console.log(2)
//     res()
// })
// setTimeout(() => {
//     console.log(3)
// })
// promise.then(() => console.log(4))
// console.log(5)

