/*

Теория:
1. https://learn.javascript.ru/microtask-queue
2. https://learn.javascript.ru/event-loop
3. https://doka.guide/js/micro-and-macro-tasks/
4. https://www.youtube.com/watch?v=377qAu37OTE
5. https://www.youtube.com/watch?v=8aGhZQkoFbQ


Практика: 
Что покажет консоль:

1) easy
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
console.log(4)

2) easy
console.log(1)
new Promise((res) => {
  console.log(2)
  res()
}).then(() => console.log(3))
console.log(4)

3) easy
console.log(1)
setTimeout(() => console.log(2), 0)
console.log(3)
setTimeout(() => console.log(4), 0)
console.log(5)

4) easy
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => console.log(4))
console.log(5)

5) medium
console.log(1)
Promise.resolve()
  .then(() => {
    console.log(2)
    return new Promise((res) => {
      console.log(3)
      res()
    })
  })
  .then(() => console.log(4))
console.log(5)

6) medium
console.log(1)
new Promise((res) => {
  console.log(2)
  setTimeout(() => {
    console.log(3)
    res()
  }, 0)
}).then(() => console.log(4))
console.log(5)

7) medium
console.log(1)
Promise.resolve()
  .then(() => {
    console.log(2)
    setTimeout(() => console.log(3), 0)
  })
  .then(() => console.log(4))
console.log(5)

8) medium
console.log(1)
new Promise((res) => {
  console.log(2)
  res()
})
  .then(() => {
    console.log(3)
    return new Promise((res) => {
      console.log(4)
      res()
    })
  })
  .then(() => console.log(5))
console.log(6)

9) hard
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve()
  .then(() => console.log(3))
  .then(() => {
    setTimeout(() => console.log(4), 0)
    return new Promise((res) => {
      console.log(5)
      setTimeout(() => res(), 0)
    })
  })
  .then(() => console.log(6))
console.log(7)

10) hard
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve()
  .then(() => {
    console.log(3);
    return new Promise((res) => {
      console.log(4);
      setTimeout(() => {
        console.log(5);
        res();
      }, 0);
    });
  })
  .then(() => {
    console.log(6);
    setTimeout(() => console.log(7), 0);
  });
console.log(8)

11) hard
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve()
  .then(() => console.log(3))
  .then(() => {
    return new Promise((res) => {
      console.log(4)
      setTimeout(() => {
        console.log(5)
        res()
      }, 0)
    });
  })
  .then(() => {
    console.log(6)
})

12) hard
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve()
  .then(() => {
    console.log(3)
    setTimeout(() => console.log(4), 0)
  })
  .then(() => {
    console.log(5)
    return new Promise((res) => {
      console.log(6)
      setTimeout(() => res(), 0)
    })
  })
  .then(() => console.log(7))
console.log(8)

*/