module.exports = {
  method: 'GET',
  path: '/',
  options: {
    description: 'This is basic home route, to see the API is running',
    handler: (request, h) => {
      return {
        hello: 'world'
      }
    }
  }
}
