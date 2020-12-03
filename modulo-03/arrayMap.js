const { obterPessoas } = require('./service')

Array.prototype.myMap = function (callback) {
  const newArrayMap = []

  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index)
    newArrayMap.push(result)
  }

  return newArrayMap
}

const main = async () => {

  try {
    const result = await obterPessoas('a')
    // const names = []

    // console.time('forEach')
    // result.results.forEach(item => {
    //   names.push(item.name)
    // })
    // console.timeEnd('forEach')

    console.time('map')
    // const names = result.results.map(people => people.name)
    const names = result.results.myMap(function (people, index) {
      return `[${index}]${people.name}`
    })
    console.timeEnd('map')

    console.log(names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()