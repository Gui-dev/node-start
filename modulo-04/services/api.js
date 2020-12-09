const axios = require('axios')

const api = axios.create({
  baseURl: 'https://swapi.dev/api/people'
})

const getPeople = async (name) => {
  const { data } = await api.get(`/?search=${name}`)

  return data.results.map(getMapPeople)
}

const getMapPeople = async (item) => {
  return {
    nome: item.name,
    peso: item.height
  }
}

module.exports = {
  api,
  getPeople,
  getMapPeople
}