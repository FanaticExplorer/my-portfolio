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
      'Конфигурируемый Discord-бот для управления само-назначаемыми ролями. Роли настраиваются через YAML-файл, поддерживает single- и multi-select категории, кнопки с актуальным состоянием и горячую перезагрузку конфигурации без перезапуска бота.',
    category: 'bots',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
    githubUrl: 'https://github.com/FanaticExplorer/SuperRoleManager',
    isFeatured: true,
  },
  {
    id: 'emojies-parser',
    title: 'EmojiesParser',
    description:
      'Инструмент для массового скачивания эмодзи и стикеров с публичных Discord-серверов. Поддерживает как статичные, так и анимированные эмодзи, собирает метаданные и структурирует результат в JSON и папки.',
    category: 'bots',
    techs: ['Python', 'CLI'],
    githubUrl: 'https://github.com/FanaticExplorer/EmojiesParser',
    isFeatured: false,
  },
  {
    id: 'myinstantsapi-py',
    title: 'MyinstantsAPI-py',
    description:
      'Неофициальный FastAPI-клиент для сайта MyInstants. Позволяет искать звуки по ключевым словам, получать тренды, недавно добавленные звуки и информацию о конкретных аудио. Работает через веб-скрапинг.',
    category: 'bots',
    techs: ['Python', 'FastAPI'],
    githubUrl: 'https://github.com/FanaticExplorer/MyinstantsAPI-py',
    isFeatured: false,
  },
  {
    id: 'window-manager',
    title: 'WindowManager',
    description: 'Лёгкая утилита для управления окнами Windows из командной строки. Поддерживает просмотр списка окон, проверку запуска, сворачивание и активацию нужного окна. Присутствует скомпилированный файл благодаря Nuitka.',
    category: 'desktop',
    techs: ['Python', 'Windows'],
    githubUrl: 'https://github.com/FanaticExplorer/WindowManager',
    isFeatured: false,
  },
  {
    id: 'sayclip-legacy',
    title: 'SayClip-legacy',
    description: 'WebView приложение для преобразования речи в текст с использованием Whisper. Визуализирует аудио, использует VAD и позволяет определять инструкциии для полировки текста.',
    category: 'desktop',
    techs: ['Python', 'JS', 'HTML', 'OpenAI API', 'Whisper', 'WebView'],
    githubUrl: 'https://github.com/FanaticExplorer/SayClip-legacy',
    isFeatured: false,
  },
  {
    id: 'lifehack-hub',
    title: 'LifehackHub',
    description:
      'Семестровый проект для курса "Фронтенд-технологии". SPA-приложение с подборкой лайфхаков для продуктивности. Лайфхаки хранятся в JSON. Позволяет фильтровать лайфхаки по категориям, просматривать детали и сохранять избранные.',
    category: 'web',
    techs: ['Vue', 'Vuetify 3', 'Vite', 'Node.js'],
    githubUrl: 'https://github.com/FanaticExplorer/LifehackHub',
    isFeatured: false,
  },
  {
    id: 'genius-cleaner',
    title: 'GeniusCleaner',
    description:
      'Опубликованное Firefox-расширение, которое очищает страницы Genius.com от аннотаций, всплывающих окон и подсветки, оставляя только чистый текст песен. Работает при скролле и динамической загрузке контента.',
    category: 'web',
    techs: ['JavaScript', 'HTML'],
    githubUrl: 'https://github.com/FanaticExplorer/GeniusCleaner',
    isFeatured: true,
  },
  {
    id: 'pear-cleaner',
    title: 'PearCleaner',
    description: 'Онлайн-генератор кастомных CSS-стилей для веб-приложения Pear Desktop, позволяющий пользователям скрывать ненужные элементы интерфейса в YouTube Music, такие как чипсы настроения, социальные кнопки, пункты меню и другие ненужные элементы.',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript', 'Youtube Music'],
    githubUrl: 'https://github.com/FanaticExplorer/PearCleaner',
    isFeatured: false,
  },
  {
    id: 'recording-converter',
    title: 'RecordingConverter',
    description:
      'Продвинутый плагин для OBS Studio, который автоматизирует конвертацию записей и replay-ев в различные форматы через FFmpeg. Поддерживает множество форматов, кастомные параметры, и опциональное удаление оригинальных файлов.',
    category: 'other',
    techs: ['Python', 'FFmpeg', 'OBS Studio'],
    githubUrl: 'https://github.com/FanaticExplorer/RecordingConverter',
    isFeatured: true,
  },
  {
    id: 'uni-nfl-fantasy-dwh',
    title: 'uni-nfl-fantasy-dwh',
    description:
      'Учебный проект по созданию Data Warehouse по методологии Kimball на основе датасета NFL Fantasy Football в Snowflake. Реализован Star Schema с SCD Type 2, включает аналитические запросы для ранжирования игроков и расчёта fantasy-очков.',
    category: 'data',
    techs: ['SQL', 'Snowflake'],
    githubUrl: 'https://github.com/FanaticExplorer/uni-nfl-fantasy-dwh',
    isFeatured: false,
  },
  {
    id: 'easymsgbox',
    title: 'easymsgbox',
    description: 'Компактная библиотека, опубликованная в PyPI, которая упрощает создание стандартных диалоговых окон (информационные, предупреждающие, ошибочные).',
    category: 'other',
    techs: ['Python', 'PyPI'],
    githubUrl: 'https://github.com/FanaticExplorer/easymsgbox',
    isFeatured: false,
  },
  {
    id: 'lrc-discord-sync',
    title: 'LRCDiscordSync',
    description: 'Утилита для синхронизации текста текущей песни со статусом в Discord. Обновляет пользовательский статус в реальном времени в соответствии с проигрываемой строчкой из LRC-файла. Использует User Token, полезен только в образовательных целях.',
    category: 'other',
    techs: ['Python', 'Discord', 'LRC'],
    githubUrl: 'https://github.com/FanaticExplorer/LRCDiscordSync',
    isFeatured: false,
  },
]
