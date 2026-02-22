import { Telegraf, Markup } from 'telegraf'

const token = ''
const webAppUrl = 'https://token-tycoon-clicker.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {})

bot.launch()
