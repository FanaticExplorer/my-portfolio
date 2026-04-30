export interface Order {
  id: string
  techs: string[]
}

export const orders: Order[] = [
  {
    id: 'telegram-channel-parse',
    techs: ['pyrogram'],
  },
  {
    id: 'discord-account-checker',
    techs: ['Discord API', 'requests'],
  },
  {
    id: 'telegram-neuro-commentator',
    techs: ['pyrogram', 'OpenAI API'],
  },
  {
    id: 'reddit-autoposter',
    techs: ['PRAW', 'Reddit'],
  },
  {
    id: 'python-cgi-flask',
    techs: ['Flask'],
  },
  {
    id: 'account-registration-script',
    techs: ['Playwright'],
  },
  {
    id: 'binance-auth-bypass',
    techs: ['DevTools'],
  },
  {
    id: 'telegram-chatgpt-userbot',
    techs: ['pyrogram', 'OpenAI API'],
  },
  {
    id: 'binance-two-sessions',
    techs: ['Cookies'],
  },
  {
    id: 'automation-mailing',
    techs: ['Playwright', 'Flet'],
  },
  {
    id: 'run-script',
    techs: ['Linux', 'SSH'],
  },
  {
    id: 'telegram-captcha-free-groups',
    techs: ['pyrogram'],
  },
]
