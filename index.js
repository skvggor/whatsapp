const qrcode = require('qrcode-terminal')

const { Client } = require('whatsapp-web.js')
const client = new Client()

client.on('qr', qr => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message', message => {
  if (message.body.includes('hora') || message.body.includes('horas')) {
    message.reply(`São ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
  }
  if (message.body.includes('mano')) {
    message.reply(`Resposta automática: assim que eu ver eu respondo!`)
  }
})

client.initialize()