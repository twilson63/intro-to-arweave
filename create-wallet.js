const Arweave = require('arweave')

const arweave = Arweave.init({
  host: 'localhost',
  port: 1984,
  protocol: 'http'
})

arweave.wallets.generate().then(key => {
  console.log(JSON.stringify(key))
})


