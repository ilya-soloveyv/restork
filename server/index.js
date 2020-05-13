const http = require('http')
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const SocketIO = require('socket.io')
const consola = require('consola')

const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const server = http.createServer(app)
const io = SocketIO(server)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('../nuxt.config.js')
config.dev = !isProd

const jwt = require('express-jwt')
app.use(
  jwt({
    secret: 'dummy',
    credentialsRequired: false
  }).unless({
    path: ['/auth/login']
  })
)

app.use('/api/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/user'))
app.use('/api/object', require('./routes/object'))
app.use('/api/object_type', require('./routes/object_type'))
app.use('/api/object_option', require('./routes/object_option'))
app.use('/api/room_option', require('./routes/room_option'))
app.use('/api/room_type', require('./routes/room_type'))
app.use('/api/application', require('./routes/application'))
app.use('/api/application_object', require('./routes/application_object'))

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

server.listen(port, 'localhost')
consola.log('Server listening on localhost:' + port)

// Socket.io
const messages = []
io.on('connection', (socket) => {
  socket.on('last-messages', function(fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function(message) {
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})

// // const config = require('../nuxt.config.js')
// // config.dev = process.env.NODE_ENV !== 'production'

// async function start() {
//   const nuxt = new Nuxt(config)
//   const { host, port } = nuxt.options.server
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   } else {
//     await nuxt.ready()
//   }
//   app.use(nuxt.render)
//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
//   const messages = []
//   io.on('connection', (socket) => {
//     socket.on('last-messages', function(fn) {
//       fn(messages.slice(-50))
//     })
//     socket.on('send-message', function(message) {
//       messages.push(message)
//       socket.broadcast.emit('new-message', message)
//     })
//   })
// }
// start()
