// Set


// create
// const set = new Set()
// console.log(set)

// const set = new Set('my name')
// console.log(set)

// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set)

// const set = new Set({name: 'Nikita', age: 19, city: 'SPB'})
// console.log(set)


// const someObj0 = { id: 1 }
// const someObj1 = { id: 1 }
// const someObj2 = { id: 2 }
// const someObj3 = { id: 3 }
// const someObj4 = { id: 4 }

// const set = new Set([someObj0, someObj1, someObj2, someObj3, someObj4, someObj0, someObj1, someObj2, someObj3, someObj4])
// console.log(set)

// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set[0]) //undefined


// property - static data

// Set.size - as array's length
// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set.size)


// methods - functions

// Set.add(value) - inserts a new element with a specified value in to this set,
// if there isn't an element with the same value already in this set
// return added element
// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(3)
// console.log(set.add(3))
// console.log(set)

// Set.delete(value) - removes a specified value from this set, if it is in the set
// return boolean
// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set.delete(6))
// console.log(set.delete(6))
// console.log(set)

// Set.has(value) - returns a boolean indicating whether an element
// with the specified value exists in this set or not
// return boolean
// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set.has(6))
// console.log(set.has(7))

// Set.clear() - removes all elements from this set
// return
// const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6])
// console.log(set.clear())
// console.log(set)

