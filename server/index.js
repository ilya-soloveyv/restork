const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const jwt = require('express-jwt')
app.use(
  jwt({
    secret: 'dummy',
    credentialsRequired: false
  }).unless({
    path: ['/auth/login']
  })
)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

app.use('/api/auth', require('./routes/auth'))
app.use('/api/hotel', require('./routes/hotel'))
app.use('/api/hotel_guest', require('./routes/hotel_guest'))
app.use('/api/hotel_type', require('./routes/hotel_type'))
app.use('/api/hotel_option', require('./routes/hotel_option'))
app.use('/api/room_option', require('./routes/room_option'))

async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
