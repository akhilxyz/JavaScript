
const Arr = ['Note 1', 'Note 2', 'Note 3']

// push - adding new item

Arr.push('My new Note')
console.log(Arr)


// pop - removing items

Arr.pop(Arr.length-1)
console.log(Arr)


// shift - removing 1st item

Arr.shift()
console.log(Arr)


// unsift - adding new item in front

Arr.unshift('new Note 1')
console.log(Arr)


// splice -  remove item from middle

Arr.splice(1, 1)
console.log(Arr)

// adiing new item with splice

Arr.splice(1,0, 'new item')
console.log(Arr)
