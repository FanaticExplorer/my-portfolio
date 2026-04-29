export type ProjectCategory = 'bots' | 'desktop' | 'web' | 'data' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  techs: string[]
  githubUrl: string
  isDeprecated: boolean
  isFeatured: boolean
}

export const projects: Project[] = [
  {
    id: 'super-role-manager',
    title: 'SuperRoleManager',
    description:
      'Конфигурируемый бот для Discord для управления само-назначаемыми ролями.',
    category: 'bots',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru', 'python-dotenv'],
    githubUrl: 'https://github.com/FanaticExplorer/SuperRoleManager',
    isDeprecated: false,
    isFeatured: true,
  },
  {
    id: 'emojies-parser',
    title: 'EmojiesParser',
    description:
      'Инструмент для скачивания эмодзи и стикеров с публичных Discord серверов.',
    category: 'bots',
    techs: ['Python'],
    githubUrl: 'https://github.com/FanaticExplorer/EmojiesParser',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'myinstantsapi-py',
    title: 'MyinstantsAPI-py',
    description:
      'Неофициальный FastAPI-клиент для сайта MyInstants (звуковая доска).',
    category: 'bots',
    techs: ['Python', 'FastAPI'],
    githubUrl: 'https://github.com/FanaticExplorer/MyinstantsAPI-py',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'window-manager',
    title: 'WindowManager',
    description: 'Легковесная утилита для управления окнами Windows из командной строки.',
    category: 'desktop',
    techs: ['Python', 'Go (план)'],
    githubUrl: 'https://github.com/FanaticExplorer/WindowManager',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'sayclip-legacy',
    title: 'SayClip-legacy',
    description: 'Приложение для преобразования речи в текст с использованием Whisper и WebView.',
    category: 'desktop',
    techs: ['Python', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/FanaticExplorer/SayClip-legacy',
    isDeprecated: true,
    isFeatured: false,
  },
  {
    id: 'watermark-wizard',
    title: 'WatermarkWizard',
    description: 'Простая программа для добавления водяных знаков на изображения.',
    category: 'desktop',
    techs: ['Python', 'tkinter'],
    githubUrl: 'https://github.com/FanaticExplorer/WatermarkWizard',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'lifehack-hub',
    title: 'LifehackHub',
    description:
      'Семестровый проект для курса "Фронтенд-технологии". SPA-приложение с подборкой лайфхаков для продуктивности.',
    category: 'web',
    techs: ['Vue 3 (Options API)', 'Pinia', 'Vue Router', 'Vuetify 3', 'Vite'],
    githubUrl: 'https://github.com/FanaticExplorer/LifehackHub',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'genius-cleaner',
    title: 'GeniusCleaner',
    description:
      'Расширение для Firefox, которое убирает аннотации, всплывающие окна и подсветку с Genius.com, оставляя только чистый текст песен.',
    category: 'web',
    techs: ['JavaScript', 'HTML'],
    githubUrl: 'https://github.com/FanaticExplorer/GeniusCleaner',
    isDeprecated: false,
    isFeatured: true,
  },
  {
    id: 'pear-cleaner',
    title: 'PearCleaner',
    description: 'Генератор CSS для кастомизации YouTube Music в приложении Pear.',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/FanaticExplorer/PearCleaner',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'recording-converter',
    title: 'RecordingConverter',
    description:
      'Продвинутый плагин для OBS Studio, который автоматически конвертирует записи и реплеи через FFmpeg.',
    category: 'other',
    techs: ['Python', 'FFmpeg'],
    githubUrl: 'https://github.com/FanaticExplorer/RecordingConverter',
    isDeprecated: false,
    isFeatured: true,
  },
  {
    id: 'uni-nfl-fantasy-dwh',
    title: 'uni-nfl-fantasy-dwh',
    description:
      'Реализация ELT-процесса и создание Data Warehouse по методологии Kimball для датасета NFL Fantasy Football из Snowflake Marketplace.',
    category: 'data',
    techs: ['SQL (Snowflake)'],
    githubUrl: 'https://github.com/FanaticExplorer/uni-nfl-fantasy-dwh',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'easymsgbox',
    title: 'easymsgbox',
    description: 'Простая библиотека для создания диалоговых окон в Python.',
    category: 'other',
    techs: ['Python'],
    githubUrl: 'https://github.com/FanaticExplorer/easymsgbox',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'presentations-translator',
    title: 'PresentationsTranslator',
    description:
      'Программа "на коленке за час", которая переводила текст презентации с одного языка на другой (со словацкого на английский).',
    category: 'other',
    techs: ['Python', 'CustomTkinter (возможно)'],
    githubUrl: 'https://github.com/FanaticExplorer/PresentationsTranslator',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'lrc-discord-sync',
    title: 'LRCDiscordSync',
    description: 'Программа для синхронизации текста песни со статусом в Discord.',
    category: 'other',
    techs: ['Python'],
    githubUrl: 'https://github.com/FanaticExplorer/LRCDiscordSync',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'qrcode-generator',
    title: 'QRCode_Generator',
    description: 'Генератор QR-бейджей для участников мероприятий.',
    category: 'other',
    techs: ['Python', 'Flet'],
    githubUrl: 'https://github.com/FanaticExplorer/QRCode_Generator',
    isDeprecated: false,
    isFeatured: false,
  },
]
