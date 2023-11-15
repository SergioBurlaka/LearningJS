
// 52. В чем разница между spread-оператором и rest-оператором?\

// spread - висипає з об'єкта абло масива
// rest- собирає в обєкт або масив

// spread
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// ...spread у функціях

// оператор ...spread висипає вміст мастива  у  аргументи функції


const multiplication = (a, b, c) => {

  return a * b * c
}


const numbersForMultiply = [1, 2, 3]

console.log('multiplication', multiplication(...numbersForMultiply))


// ...spread у масивах

const arr_1 = [1, 2, 5]
const arr_2 = [5, 6, 7, 6]

// 1. Копіювання
const copyOfArr_1 = [...arr_1]

// 2. Об'єднання
const union = [...arr_1, ...arr_2]


// ...spread у об'єктах

const firstName = { firstName: 'Sergii' }
const lastname = { lastname: 'Igorovych' }

// 1. Копіювання

const copyOfCat = { ...firstName }

// 2. Об'єднання


const objectUnion = { ...firstName, ...lastname }

console.log('objectUnion', objectUnion)






