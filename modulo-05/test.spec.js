
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: 'Flash',
  poder: 'Speed'
}

describe ('Suite de manipulação de Heróis', () => {
  it ('deve pesquisar um herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [result] = await database.list(expected.id)

    expect(expected).toEqual(result)
  })

  it ('deve cadastrar um herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const result = await database.setRegisterHero(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.list(DEFAULT_ITEM_CADASTRAR.id)

    expect(expected).toEqual(actual)
  })
})