

const myPromise = new Promise((resolve, reject) => {
  resolve('Hello')
})

myPromise
  .then((res) => {
    console.log('res', res)
  })


const promiseFromFunction = () => {

  return new Promise((resolve, reject) => {
    resolve('promise from fanction')

  })
}



const myAsyncFn = async () => {
  return 'Hello async'
}

myAsyncFn()
  .then((resp) => {
    console.log('my async result ', resp)
  })


// 51. Что такое async/await?

const result = async () => {
  const res_2 = await myAsyncFn()
  const res_3 = await myPromise
  const res_4 = await promiseFromFunction()

  console.log('simple asymc function', res_2)
  console.log('from promisw', res_3)
  console.log('promise From Function', res_4)

}

result()


const promiesWithError = new Promise((resolve, reject) => {

  setTimeout(() => {
    reject('En error occurred')
  }, 1500)
})

promiesWithError.then(
  resp => {
    console.log('resp', resp)
  },
  error => {
    console.log('error', error)
  }
)