const joi = require('@hapi/joi')
const envs = ['development', 'test', 'production']
const schema = joi.object().keys({
  port: joi.number().default(3000),
  env: joi.string().valid(...envs).default(envs[0])
})
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV
}
const { error, value } = schema.validate(config)
if (error) {
  throw new Error(`The server config is invalid. ${error.message}`)
}
module.exports = value
