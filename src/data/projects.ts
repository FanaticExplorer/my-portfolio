export type ProjectCategory = 'bots' | 'desktop' | 'web' | 'data' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  techs: string[]
  status: string
  githubUrl?: string
  liveUrl?: string
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
    status: '✅ Активно поддерживается',
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
    status: '✅ Готов к использованию',
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
    status: '✅ Работает, но зависит от внешнего сайта',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'window-manager',
    title: 'WindowManager',
    description: 'Легковесная утилита для управления окнами Windows из командной строки.',
    category: 'desktop',
    techs: ['Python', 'Go (план)'],
    status:
      '✅ Работает, но автор планирует переписать с нуля на Go для лучшей производительности.',
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
    status: '❌ Deprecated',
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
    status: '✅ Завершён, есть релиз v1.0.0',
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
    status: '🎓 Учебный проект',
    liveUrl: 'https://uni-vue.fanaticexplorer.dev',
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
    status: '✅ Опубликовано, готово к использованию',
    liveUrl: 'https://addons.mozilla.org/firefox/addon/genius-lyrics-cleaner/',
    isDeprecated: false,
    isFeatured: true,
  },
  {
    id: 'pear-cleaner',
    title: 'PearCleaner',
    description: 'Генератор CSS для кастомизации YouTube Music в приложении Pear.',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript'],
    status: '✅ Работает онлайн',
    liveUrl: 'https://utils.fanaticexplorer.dev/pear-cleaner',
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
    status: '✅ Готов к использованию',
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
    status: '✅ Завершённый учебный проект, оцененный и принятый университетом',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'easymsgbox',
    title: 'easymsgbox',
    description: 'Простая библиотека для создания диалоговых окон в Python.',
    category: 'other',
    techs: ['Python'],
    status: '✅ Опубликован (настроен CI/CD через GitHub Actions и Travis)',
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
    status:
      '🛠️ Личная утилита для разовой задачи, не предназначена для публичного использования.',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'lrc-discord-sync',
    title: 'LRCDiscordSync',
    description: 'Программа для синхронизации текста песни со статусом в Discord.',
    category: 'other',
    techs: ['Python'],
    status: '🛠️ Личный инструмент',
    isDeprecated: false,
    isFeatured: false,
  },
  {
    id: 'qrcode-generator',
    title: 'QRCode_Generator',
    description: 'Генератор QR-бейджей для участников мероприятий.',
    category: 'other',
    techs: ['Python', 'Flet'],
    status: 'Практический проект',
    isDeprecated: false,
    isFeatured: false,
  },
]
