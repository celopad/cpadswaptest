
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./web3-react-injected-connector-celo.cjs.production.min.js')
} else {
  module.exports = require('./web3-react-injected-connector-celo.cjs.development.js')
}
