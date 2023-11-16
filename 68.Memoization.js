// 68. Как бы Вы реализовали вспомогательную функцию запоминания?

const memoization = () => {


  let argument = 0
  let result = 0

  return (arr) => {

    if (arr === argument) {
      console.log('return old result')
      return result
    }

    
    console.log('return new result')

    const hardCalculation = arr * arr * arr
    result = hardCalculation;
    argument = arr;

    return hardCalculation
  }

}


const memo = memoization()

memo(5)
memo(100)
memo(100)