const { Telegraf } = require('telegraf')

const bot = new Telegraf('1826230016:AAHzfYrCgcJ8vI8tB1BV2-o9LopSQSSGRko')

console.log('Bot has been started')
bot.launch()

module.exports = bot