const routes = [].concat(
  require('../routes/home'),
  require('../routes/pdf')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
