import http from 'http'
import socketIO from 'socket.io'
import consola from 'consola'

export default function() {
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)

    this.nuxt.server.listen = (port, host) =>
      new Promise((resolve) =>
        server.listen(port || 3010, host || 'localhost', resolve)
      )

    this.nuxt.hook('close', () => new Promise(server.close))

    const messages = []
    io.on('connection', (socket) => {
      socket.on('last-messages', function(fn) {
        consola.log('last-messages')
        fn(messages.slice(-50))
      })
      socket.on('send-message', function(message) {
        consola.log('send-message')
        messages.push(message)
        socket.broadcast.emit('new-message', message)
      })
    })
  })
}
