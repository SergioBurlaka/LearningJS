// 46. Что такое деструктуризация объекта (Object Destructuring)?

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


// Об'єкти

const user = {
  firstName: 'Vasyl',
  lastName: 'Baydak',
  age: undefined,
  hired: new Date('11, 11, 2022')
}

console.log('user', user)

const { firstName: name, ...rest } = user
const { age = 25 } = user

console.log('name', name)
console.log('age', age)

console.log('rest', rest)
console.log('rest', typeof rest)


// Масиви


const user_4 = ['1', '4', 7, new Date('01,06,2019'), 10, true]

console.log('user_4', user_4)

const [first, second, , , ...rest_2] = user_4

console.log('first', first)
console.log('second', second)
console.log('rest_2', rest_2)

