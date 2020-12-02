const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '11992992929',
        ddd: 11
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'um',
      numero: 20
    })
  }, 2000)
}

const main = async () => {
  try {
    console.time('medida-promises')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)

    const result = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    const telefone = result[0]
    const endereco = result[1]

    console.log(`
      Nome: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereco: ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promises')
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()