
const numbers = [4,7,1,5,3,9,2]

// array.reduce(callback[, initialValue])

const initialValue = 10


const result = numbers.reduce((acum, item, index, currntArray)=>{

return acum + item
})

console.log('result', result)