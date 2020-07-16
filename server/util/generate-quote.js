const pdfMake = require('pdfmake/build/pdfmake')
const vfsFonts = require('pdfmake/build/vfs_fonts')
pdfMake.vfs = vfsFonts.pdfMake.vfs
const body = require('./body')
const header = require('./header')

var fs = require('fs')
const Boom = require('boom')

var completedPDFData = async () => {
  try {
    var fullContentForPDF = {
      pageSize: {
        height: 595.28,
        width: 841.89
      },
      pageMargins: [0, 0, 0, 0],
      info: {
        title: 'Demo Micro Service',
        author: 'Salford Private Client',
        subject: 'PDF document, generated for a quotation',
        keywords: 'Quotation'
      },
      content: {},
      header: function (currentPage, pageCount, pageSize) {
        return [
          {
            image: `${header.header()}`,
            height: 100,
            width: 841.89
          }
        ]
      }
    }
    fullContentForPDF.content = body.dataForPdf()

    pdfMake.createPdf(fullContentForPDF).getBuffer(function (result) {
      fs.writeFile('quotes/test.pdf', result, function (err) {
        if (err) throw err
      })
    })
  } catch (err) {
    return Boom.badImplementation(
      `${err.message}, issue occured in generating the complete PDF`
    )
  }
}
module.exports = completedPDFData
