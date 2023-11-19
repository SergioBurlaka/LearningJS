
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration

// для масивів

for (let i = 0; i < 10; i++) {
    console.log(`i from 'for' loop `, i)
}

let index = 0
do {
    index++
    console.log(`index from 'do-while' loop`, index)

} while (index < 5)

let i = 0

while (i < 7) {
    console.log(`index from 'while' loop`, i)
    i++
}


// для об'єктів

const user = {
    name: 'Segii',
    lastName: 'Burlaka',
    age: 28,
    male: true,
    email: 'burlaka01@gmail.com'
}


for (let key in user) {
    console.log('key', key)
}


const myMap = new Map()


myMap.set('hello', true)
myMap.set([], 'some persone obj')
myMap.set(name, 'Vasil')


for (let value of myMap) {
    console.log('value fo myMap', value)
}
for (let value of [1, '3', true, { name: 'inner' }]) {
    console.log('value fo myMap', value)
}