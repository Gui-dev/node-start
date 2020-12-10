const { readFile } = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(readFile)

class Database {

  constructor () {
    this.FILE_NAME = 'heros.json'
  }

  async getDataFile () {
    const files = await readFileAsync(this.FILE_NAME, 'utf8')
    return JSON.parse(files.toString())
  }

  async setFile () {

  }

  async list (id = null) {
    const data = await this.getDataFile()
    const filterData = data.filter(item => (id ? (item.id === id) : true))
    return filterData
  }
}

module.exports = new Database()