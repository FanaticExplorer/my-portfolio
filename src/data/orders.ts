export interface Order {
  id: string
  techs: string[]
}

export const orders: Order[] = [
  {
    id: 'discord-temp-vc-bot',
    techs: ['Python', 'Pycord', 'aiosqlite', 'Docker', 'GitHub Actions'],
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
    id: 'automation-mailing',
    techs: ['Playwright', 'Flet'],
  },
  {
    id: 'discord-mod-bot',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
  },
  {
    id: 'discord-srm-deploy',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
  },
  {
    id: 'reddit-autoposter',
    techs: ['PRAW', 'Reddit'],
  },
  {
    id: 'telegram-neuro-commentator',
    techs: ['pyrogram', 'OpenAI API'],
  },
  {
    id: 'account-registration-script',
    techs: ['Playwright'],
  },
  {
    id: 'discord-account-checker',
    techs: ['Discord API', 'requests'],
  },
  {
    id: 'telegram-channel-parse',
    techs: ['pyrogram'],
  },
  {
    id: 'binance-two-sessions',
    techs: ['Cookies'],
  },
  {
    id: 'python-cgi-flask',
    techs: ['Flask'],
  },
  {
    id: 'run-script',
    techs: ['Linux', 'SSH'],
  },
]
