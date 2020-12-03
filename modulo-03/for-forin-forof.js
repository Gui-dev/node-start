const { obterPessoas } = require('./service')

const main = async () => {

  try {
    const result = await obterPessoas('a')
    const names = []

    console.time('for')
    for (let i = 0; i <= result.results.length -1; i++) {
      const people = result.results[i]
      names.push(people.name)
    }
    console.timeEnd('for')

    console.time('forIn')
    for (let i in result.results) {
      const people = result.results[i]
      names.push(people.name)
    }
    console.timeEnd('forIn')

    console.time('forOf')
    for (people of result.results) {
      names.push(people.name)
    }
    console.timeEnd('forOf')

    console.log(names)
  } catch (error) {
    console.error('Erro interno', error)
  }
}

main()