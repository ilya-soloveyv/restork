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
app.use('/api/hotels', require('./routes/hotels'))
app.use('/api/hotel_type', require('./routes/hotel_type'))

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
