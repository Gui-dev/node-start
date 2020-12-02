const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}


const myEmitter = new MyEmitter()

const eventName = 'user:click'

myEmitter.on(eventName, click => {
  console.log('User click', click)
})

// myEmitter.emit(eventName, 'Na barra de rolagem')
// myEmitter.emit(eventName, 'No OK')

// let count = 0

// setInterval(() => {
//   myEmitter.emit(eventName, 'No OK: ' + count++)
// }, 1000)

const stdin = process.openStdin()
stdin.addListener('data', (value) => {
  console.log(`Vc digitou: ${value.toString().trim()}`)
})