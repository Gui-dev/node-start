const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {

  constructor () {
    this.FILE_NAME = 'heros.json'
  }

  async getDataFile () {
    const files = await readFileAsync(this.FILE_NAME, 'utf8')
    return JSON.parse(files.toString())
  }

  async setFile (data) {
    await writeFileAsync(this.FILE_NAME, JSON.stringify(data))
    return true
  }

  async setRegisterHero (hero) {
    const data = await this.getDataFile()
    const id = hero.id <= 2 ? hero.id : Date.now()
    const heroWithId = { id, ...hero }
    const finalData = [...data, heroWithId]
    const result = await this.setFile(finalData)

    return result
  }

  async list (id = null) {
    const data = await this.getDataFile()
    const filterData = data.filter(item => (id ? (item.id === id) : true))
    return filterData
  }
}

module.exports = new Database()