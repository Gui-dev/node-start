const { obterPessoas } = require('./service')

Array.prototype.myFilter = function (callback) {
  const list = []
  for (index in this) {
    const item = this[index]
    const result = callback(item, index, this)

    if (!result) continue

    list.push(item)
  }

  return list
}

const main = async () => {

  try {
    const { results } = await obterPessoas('a')
    
    console.time('filter')
    // const familyLars = results.filter(item => {
    //   const result = item.name.toLowerCase().includes('lars') 
    //   return result
    // })
    // const names = familyLars.map(people => people.name)

    const familyLars = results.myFilter(item => item.name.toLowerCase().includes('lars'))
    const names = familyLars.map(people => people.name)
    console.timeEnd('filter')

    console.log(names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()