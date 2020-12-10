
const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
  id: 1,
  nome: 'Flash',
  poder: 'Speed'
}

describe ('Suite de manipulação de Heróis', () => {

  beforeAll(async () => {
    await database.setRegisterHero (DEFAULT_ITEM_CADASTRAR)
  })

  it ('deveria pesquisar um herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [result] = await database.list (expected.id)

    expect(expected).toEqual(result)
  })

  it ('deveria cadastrar um herói, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const result = await database.setRegisterHero (DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.list (DEFAULT_ITEM_CADASTRAR.id)

    expect(expected).toEqual(actual)
  })

  it ('deveria deletar um herói por id, usando arquivos', async () => {
    const expected = true
    const result = await database.delete (DEFAULT_ITEM_CADASTRAR.id)

    expect(expected).toEqual(result)
  })
})