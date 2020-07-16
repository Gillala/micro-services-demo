const dataForPdf = () => {
  try {
    const name = 'Mr. Hari Gillala'
    const address = 'Somewhere in Manchester \n Beswick \n Manchester ,\n United Kingdom, \n M11 3NE \n'
    const contactdetails = '\tEmail:manchester.hari@gmail.com, \t\n Telephone: 07780805759.'

    var dataAsObject = [
      `\n\n\n\n\n\n\n\n\n\t\t\t\t\t\tTo \t\n ${name} \t\n ${address} ${contactdetails}`,
      {
        text: [`
               \n\n\n \n This quotation is generated as per the email and phone conversation we had earlier, after capturing the detailed requirement. Please let us know, if you have any questions\n\n\n`],
        color: 'orange',
        italics: true
      },
      {
        text: [`
               Quotation Reference: Test Reference\n\n\n`],
        color: 'indigo',
        italics: true
      },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          body: [
            [{ text: ' Supplier Name', style: 'tableHeader', color: 'blue' },
              { text: 'Item Name', style: 'tableHeader', color: 'blue' },
              { text: 'Contract Length', style: 'tableHeader', color: 'blue' },
              { text: 'Price in GBP', style: 'tableHeader', color: 'blue' },
              { text: 'VAT', style: 'tableHeader', color: 'blue' },
              { text: 'Total in GBP', style: 'tableHeader', color: 'blue' }
            ],
            [
              'British Telecommunications Limited',
              'Broad Band',
              '24M',
              '50',
              '20%',
              '60'
            ]
          ]
        }
      },
      {
        text: [`
      \n\n\n \n Please Let us know, if you find better deals anywhere else`],
        color: 'orange',
        italics: true
      },
      {
        text: [`
      \n\n\n \n Thank you for considering our quotation, we look forward to talk to you soon \n\n\n`],
        color: 'blue',
        italics: true
      },
      {
        text: [`
      \n\n\n \n Quotation can go more than one page, header will be printed in every page, this is an example \n\n\n`],
        color: 'blue',
        italics: true
      },
      {
        text: [`
      \n\n\n \nNo responsibility disclaimers explain to users that your business will not be held responsible for any damages they suffer as a result of using your products or services.Because these agreements limit your liability, they are also often referred to online as “no liability” disclaimers. No responsibility disclaimers address both tangible and intangible damages — for example, physical harm caused by using a product, loss of profits or loss of data, and defamatory comments`],
        color: 'red',
        italics: true
      }]
    return dataAsObject
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { dataForPdf }
