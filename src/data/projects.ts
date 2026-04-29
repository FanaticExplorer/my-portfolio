export type ProjectCategory = 'bots' | 'desktop' | 'web' | 'data' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  techs: string[]
  githubUrl: string
  isFeatured: boolean
}

export const projects: Project[] = [
  {
    id: 'super-role-manager',
    title: 'SuperRoleManager',
    description:
      'Конфигурируемый бот для Discord для управления само-назначаемыми ролями.',
    category: 'bots',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
    githubUrl: 'https://github.com/FanaticExplorer/SuperRoleManager',
    isFeatured: true,
  },
  {
    id: 'emojies-parser',
    title: 'EmojiesParser',
    description:
      'Инструмент для скачивания эмодзи и стикеров с публичных Discord серверов.',
    category: 'bots',
    techs: ['Python', 'CLI'],
    githubUrl: 'https://github.com/FanaticExplorer/EmojiesParser',
    isFeatured: false,
  },
  {
    id: 'myinstantsapi-py',
    title: 'MyinstantsAPI-py',
    description:
      'Неофициальный FastAPI-клиент для сайта MyInstants.',
    category: 'bots',
    techs: ['Python', 'FastAPI'],
    githubUrl: 'https://github.com/FanaticExplorer/MyinstantsAPI-py',
    isFeatured: false,
  },
  {
    id: 'window-manager',
    title: 'WindowManager',
    description: 'Утилита для управления окнами Windows из командной строки.',
    category: 'desktop',
    techs: ['Python', 'Windows'],
    githubUrl: 'https://github.com/FanaticExplorer/WindowManager',
    isFeatured: false,
  },
  {
    id: 'sayclip-legacy',
    title: 'SayClip-legacy',
    description: 'Приложение для преобразования речи в текст с использованием Whisper и WebView.',
    category: 'desktop',
    techs: ['Python', 'JavaScript', 'CSS', 'HTML', 'OpenAI API', 'Whisper', 'WebView'],
    githubUrl: 'https://github.com/FanaticExplorer/SayClip-legacy',
    isFeatured: false,
  },
  {
    id: 'watermark-wizard',
    title: 'WatermarkWizard',
    description: 'Простая программа для добавления водяных знаков на изображения.',
    category: 'desktop',
    techs: ['Python', 'CustomTkinter', 'Pillow'],
    githubUrl: 'https://github.com/FanaticExplorer/WatermarkWizard',
    isFeatured: false,
  },
  {
    id: 'lifehack-hub',
    title: 'LifehackHub',
    description:
      'Семестровый проект для курса "Фронтенд-технологии". SPA-приложение с подборкой лайфхаков для продуктивности.',
    category: 'web',
    techs: ['Vue', 'Vuetify 3', 'Vite', 'Node.js'],
    githubUrl: 'https://github.com/FanaticExplorer/LifehackHub',
    isFeatured: false,
  },
  {
    id: 'genius-cleaner',
    title: 'GeniusCleaner',
    description:
      'Расширение для Firefox, которое убирает лишнее с Genius.com, оставляя только чистый текст песен.',
    category: 'web',
    techs: ['JavaScript', 'HTML'],
    githubUrl: 'https://github.com/FanaticExplorer/GeniusCleaner',
    isFeatured: true,
  },
  {
    id: 'pear-cleaner',
    title: 'PearCleaner',
    description: 'Генератор CSS для кастомизации Pear Desktop.',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/FanaticExplorer/PearCleaner',
    isFeatured: false,
  },
  {
    id: 'recording-converter',
    title: 'RecordingConverter',
    description:
      'Продвинутый плагин для OBS Studio, который автоматически конвертирует записи и реплеи через FFmpeg.',
    category: 'other',
    techs: ['Python', 'FFmpeg', 'OBS Studio'],
    githubUrl: 'https://github.com/FanaticExplorer/RecordingConverter',
    isFeatured: true,
  },
  {
    id: 'uni-nfl-fantasy-dwh',
    title: 'uni-nfl-fantasy-dwh',
    description:
      'Реализация ELT-процесса и создание Data Warehouse по методологии Kimball для датасета.',
    category: 'data',
    techs: ['SQL (Snowflake)'],
    githubUrl: 'https://github.com/FanaticExplorer/uni-nfl-fantasy-dwh',
    isFeatured: false,
  },
  {
    id: 'easymsgbox',
    title: 'easymsgbox',
    description: 'Простая библиотека для создания диалоговых окон в Python.',
    category: 'other',
    techs: ['Python'],
    githubUrl: 'https://github.com/FanaticExplorer/easymsgbox',
    isFeatured: false,
  },
  {
    id: 'presentations-translator',
    title: 'PresentationsTranslator',
    description:
      'Программа "на коленке за час", которая переводила текст презентации с одного языка на другой (со словацкого на английский).',
    category: 'other',
    techs: ['Python', 'CustomTkinter'],
    githubUrl: 'https://github.com/FanaticExplorer/PresentationsTranslator',
    isFeatured: false,
  },
  {
    id: 'lrc-discord-sync',
    title: 'LRCDiscordSync',
    description: 'Программа для синхронизации текста песни со статусом в Discord.',
    category: 'other',
    techs: ['Python'],
    githubUrl: 'https://github.com/FanaticExplorer/LRCDiscordSync',
    isFeatured: false,
  },
  {
    id: 'qrcode-generator',
    title: 'QRCode_Generator',
    description: 'Генератор QR-бейджей для участников мероприятий.',
    category: 'other',
    techs: ['Python', 'Flet'],
    githubUrl: 'https://github.com/FanaticExplorer/QRCode_Generator',
    isFeatured: false,
  },
]
