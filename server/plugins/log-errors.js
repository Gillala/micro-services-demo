module.exports = {
  plugin: {
    name: 'log-errors',
    register: (server, options) => {
      server.ext('onPreResponse', (request, h) => {
        const response = request.response

        if (response.isBoom) {
          const statusCode = response.output.statusCode
          request.log('error', {
            statusCode: statusCode,
            message: response.message,
            stack: response.data ? response.data.stack : response.stack
          })
        }
        return h.continue
      })
    }
  }
}
