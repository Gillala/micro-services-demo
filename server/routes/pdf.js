const completedPDFData = require('../util/generate-quote')
module.exports = {
  method: 'GET',
  path: '/pdf',
  options: {
    description: 'Calling this method would generate a PDF document in rootfolder\\quotes of the project with nam, this document is like quotation',
    handler: async (request, h) => {
      await completedPDFData()
      return {
        ok: 200
      }
    }
  }
}
