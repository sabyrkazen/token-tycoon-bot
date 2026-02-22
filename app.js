import { Telegraf, Markup } from 'telegraf'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.BOT_TOKEN
const webAppUrl = 'https://token-tycoon-clicker.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open App', `${webAppUrl}?ref=${ctx.payload}`),
    ]),
  )
})

bot.launch()
