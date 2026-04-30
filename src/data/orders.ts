export interface Order {
  id: string
  title: string
  description: string
  techs: string[]
  review?: string
}

export const orders: Order[] = [
  {
    id: 'telegram-channel-parse',
    title: 'Парсинг Telegram каналов',
    description:
      'Скрипт, который по ID Telegram-канала определял его username и название.',
    techs: ['pyrogram'],
    review: 'Грамотный специалист. Мастер своего дела. Буду знать к кому обратиться еще.',
  },
  {
    id: 'discord-account-checker',
    title: 'Чекер аккаунтов на сервере Discord',
    description:
      'Консольное приложение на Python для массовой проверки наличия аккаунтов в указанном Discord-сервере с сохранением результатов, чистым кодом и обработкой ошибок.',
    techs: ['Discord API', 'requests'],
    review: 'Чекер працює, завдання виконано успішно. Рекомендую!',
  },
  {
    id: 'telegram-neuro-commentator',
    title: 'Нейро-коментатор под посты в Telegram',
    description:
      'Telegram userbot на Pyrogram + OpenAI, который автоматически комментировал новые посты в канале с естественным тоном и лёгким продвижением.',
    techs: ['pyrogram', 'OpenAI API'],
    review:
      'Чудовий спеціаліст. Відповідальний, завжди на зв\'язку. Дуже задоволений співпрацею. Рекомендую.',
  },
  {
    id: 'reddit-autoposter',
    title: 'Reddit-автопостер / накрутка активности',
    description:
      'Автоматический постинг на Reddit через PRAW с привязкой к таблице + последующая накрутка апвоутов через внешний API по расписанию.',
    techs: ['PRAW', 'Reddit'],
    review:
      'Дякую за професійно і оперативно виконане завдання! Окремо хочу відзначити відмінну комунікацію і швидкість роботи. Рекомендую до співпраці!',
  },
  {
    id: 'python-cgi-flask',
    title: 'Доработка Python CGI app',
    description: 'Миграция локального CGI-проекта на Flask с последующим деплоем на хостинг PythonAnywhere.',
    techs: ['Flask'],
    review: 'Красава, сделал всё по деталям',
  },
  {
    id: 'account-registration-script',
    title: 'Скрипт для регистрации аккаунтов',
    description:
      'Разработал скрипт для массового создания профилей без капчи с интеллектуальным управлением IP-адресами и заполнением данных.',
    techs: ['Playwright'],
    review: 'Дякую за роботу, гарний фахівець',
  },
  {
    id: 'binance-auth-bypass',
    title: 'Парсинг страницы Binance с обходом авторизации',
    description:
      'Reverse-engineering страницы Binance Futures Leaderboard. Реализован парсинг без авторизации через анализ API-запросов (REST API в DevTools).',
    techs: ['DevTools'],
    review:
      'Буду тепер завжди працювати з Андрієм, зробив те що інші фрілансери казали неможливо. Виконав все швидко та якісно, щиро рекомендую',
  },
  {
    id: 'telegram-chatgpt-userbot',
    title: 'Реалистичный userbot-собеседник с ChatGPT',
    description:
      'Продвинутый Telegram userbot на Pyrogram + GPT-3.5-turbo, который вёл диалог максимально похоже на живого человека c эмуляцией человчеческих действий и консультировал по услугам компании.',
    techs: ['pyrogram', 'OpenAI API'],
    review: 'Все зроблено чудово, рекомендую!',
  },
  {
    id: 'binance-two-sessions',
    title: 'Обход ограничений и поддержка двух сессий на Binance',
    description: 'Найти способ иметь одну сессию Binance на нескольких устройствах - решение через cookies и их перенос.',
    techs: ['Cookies'],
    review: 'Дякую, допоміг вирішити питання',
  },
  {
    id: 'automation-mailing',
    title: 'Автоматизации рассылки на непопулярном веб-сайтах',
    description: 'Программа на Playwright + Flet для автоматизации рассылки сообщений на разных веб сайтах. Разработан удобный Flutter интерфейс для заказчика.',
    techs: ['Playwright', 'Flet'],
    review: 'Гарна комунікація. Співпрацею задоволений',
  },
  {
    id: 'run-script',
    title: 'Запуск скрипта',
    description:
      'Срочный запуск готовой программы на сервере заказчика после исчезновения предыдущего исполнителя.',
    techs: ['Linux', 'SSH'],
    review: 'Рекомендую. Пише по ділу, робить швидко',
  },
  {
    id: 'telegram-captcha-free-groups',
    title: 'Бот для поиска групп без капчи',
    description:
      'Автоматизированный поиск Telegram-групп и каналов для рассылок. Фильтрация через GPT-4o-mini для исключения групп с капчей.',
    techs: ['pyrogram'],
    review: 'Задача з зірочкою , але замовлення виконано успішно. Дякую',
  },
]
