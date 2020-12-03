const axios = require('axios')

const api = axios.create({
  baseURL: 'https://swapi.dev/api/people'
})

const obterPessoas = async (name) => {
  const { data } = await api.get(`/?search=${name}`)

  return data  
}

module.exports = {
  obterPessoas,
  api
}
 