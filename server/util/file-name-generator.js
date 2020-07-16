const generate = require('nanoid-generate')
const generatefilename = () => generate.english(12)
module.exports = { generatefilename }
