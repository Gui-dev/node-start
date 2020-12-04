const { obterPessoas } = require('./service')

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0]

  for (let index = 0; index <= this.length - 1; index++) {
    finalValue = callback(finalValue, this[index], this)
  }

  return finalValue
}

const main = async () => {

  try {
    const { results } = await obterPessoas('a')
    
    console.time('reducer')
    // const weights = results.map(item => parseInt(item.height))
    // const total = weights.reduce((prev, next) => {
    //   return prev + next
    // }, 0)

    const weights = results.map(item => parseInt(item.height))
    const total = weights.myReduce((prev, next) => {
      return prev + next
    }, 0)
    console.timeEnd('reducer')

    console.log('Pesos', weights)
    console.log('Total', total)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()