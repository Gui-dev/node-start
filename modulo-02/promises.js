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

const usuario = obterUsuario()
  
usuario
  .then(user => {
    return obterTelefone(user.id)
      .then(result => {
        return {
          usuario: {
            id: user.id,
            nome: user.nome
          },
          telefone: result
        }
      })
  })
  .then(resultado => {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco
      .then( function resolverEndereco(result) {
        return {
          usuario: resultado.usuario,
          telefone: resultado.telefone,
          endereco: result
        }
      })
  })
  .then(result => {
    console.log(`
      Nome: ${result.usuario.nome}
      Endereço: ${result.endereco.rua}, ${result.endereco.numero}
      Telefone: (${result.telefone.ddd}) ${result.telefone.telefone}
    `)
  })
  .catch( err => console.error('DEU RUIM', err))
