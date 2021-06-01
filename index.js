const bot = require('./bootstap')
const { calc, functions } = require('./calculating')

bot.start(ctx => ctx.reply('Добро пожаловать в s1mple калькулятор'))

// bot.hears(days, ctx => ctx.reply(findSchedule(ctx.message.text)))

bot.hears(functions, ctx => {
    const a = ctx.message.text
    let b = a.split("")
    ctx.reply(calc('вычти'))
})