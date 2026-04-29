export interface Order {
  id: string
  title: string
  description: string
  category: string
  techs: string[]
  rating: number
  review?: string
  completedAt: string
}

export const orders: Order[] = [
  {
    id: 'telegram-channel-parse',
    title: 'Парсинг Telegram каналов',
    description:
      'Создание скрипта, который по ID канала смог находить его username и название.',
    category: 'Telegram',
    techs: ['pyrogram'],
    rating: 10,
    review:
      '"Грамотный специалист. Мастер своего дела. Буду знать к кому обратиться еще. Rank 10/10"',
    completedAt: 'Июль 2023',
  },
  {
    id: 'discord-account-checker',
    title: 'Чекер аккаунтов на сервере Discord',
    description:
      'Создать консольное приложение на Python для проверки наличия аккаунтов в указанной группе Discord.',
    category: 'Discord',
    techs: ['Python', 'Discord User API'],
    rating: 10,
    review: '"Чекер працює, завдання виконано успішно. Рекомендую!"',
    completedAt: 'Июль 2023',
  },
  {
    id: 'telegram-neuro-commentator',
    title: 'Нейро-коментатор под посты в Telegram',
    description:
      'Telegram userbot, который реагирует на появление постов в Telegram канале и оставляет комментарий под постом.',
    category: 'Telegram',
    techs: ['pyrogram', 'OpenAI API'],
    rating: 10,
    review:
      '"Чудовий спеціаліст. Відповідальний, завжди на зв\'язку. Дуже задоволений співпрацею. Рекомендую."',
    completedAt: 'Август 2023',
  },
  {
    id: 'telegram-members-export',
    title: 'Выгрузка участников Telegram канала и дальнейшая рассылка',
    description:
      'Парсинг всех участников канала и дальнейшая рассылка им контента через Userbot.',
    category: 'Telegram',
    techs: ['pyrogram'],
    rating: 5,
    review: '"Сделал что смог но задача не подалась. 5/10"',
    completedAt: 'Август 2023',
  },
  {
    id: 'reddit-autoposter',
    title: 'Reddit-автопостер / накрутка активности',
    description:
      'Автоматический постинг на Reddit с привязкой к таблице и дальнейшей накруткой апвоутов через внешний API.',
    category: 'Reddit',
    techs: ['Python', 'PRAW', 'APScheduler', 'REST API'],
    rating: 10,
    review:
      '"Дякую за професійно і оперативно виконане завдання! Окремо хочу відзначити відмінну комунікацію і швидкість роботи. Рекомендую до співпраці!"',
    completedAt: 'Ноябрь 2023',
  },
  {
    id: 'python-cgi-flask',
    title: 'Доработка Python CGI app',
    description: 'Перепись локального CGI проекта на Flask и его деплой на pythonanywhere.com.',
    category: 'Web',
    techs: ['Python', 'Flask'],
    rating: 10,
    review: '"Красава, сделал всё по деталям"',
    completedAt: 'Декабрь 2023',
  },
  {
    id: 'account-registration-script',
    title: 'Скрипт для регистрации аккаунтов',
    description:
      'Python-скрипт для автоматической регистрации профилей без подтверждения email и капчи с заполнением данных и загрузкой аватара.',
    category: 'Automation',
    techs: ['Python', 'Playwright'],
    rating: 10,
    review: '"Дякую за роботу, гарний фахівець"',
    completedAt: 'Декабрь 2023',
  },
  {
    id: 'telegram-session-backup',
    title: 'Доработка Python кода с сохранением Telegram сессии пользователя',
    description:
      'Доработать существующий Python-код с авторизацией и сохранением сессии пользователя Telegram для скачивания медиафайлов и переписки.',
    category: 'Telegram',
    techs: ['Python', 'Telethon'],
    rating: 1,
    review: '"виконавець протягнув та зробив лиш частину обіцяного. 1/10"',
    completedAt: 'Январь 2024',
  },
  {
    id: 'binance-auth-bypass',
    title: 'Парсинг страницы Binance с обходом авторизации',
    description:
      'Скрипт, который позволяет видеть позиции трейдера на странице Binance Futures Leaderboard, обходя требование авторизации.',
    category: 'Binance',
    techs: ['DevTools'],
    rating: 10,
    review:
      '"Буду тепер завжди працювати з Андрієм, зробив те що інші фрілансери казали неможливо. Виконав все швидко та якісно, щиро рекомендую"',
    completedAt: 'Февраль 2024',
  },
  {
    id: 'telegram-chatgpt-userbot',
    title: 'Реалистичный userbot-собеседник с ChatGPT',
    description:
      'Юзербот, который ведет себя максимально похоже на реального человека и консультирует по возможностям компании.',
    category: 'Telegram',
    techs: ['pyrogram', 'OpenAI API', 'gpt-3.5-turbo', 'JSON'],
    rating: 10,
    review: '"Все зроблено чудово, рекомендую!"',
    completedAt: 'Март 2024',
  },
  {
    id: 'binance-two-sessions',
    title: 'Обход ограничений и поддержка двух сессий на Binance',
    description: 'Найти способ иметь одну сессию Binance на нескольких устройствах.',
    category: 'Binance',
    techs: ['Cookies'],
    rating: 10,
    review: '"Дякую, допоміг вирішити питання"',
    completedAt: 'Апрель 2024',
  },
  {
    id: 'automation-mailing',
    title: 'Автоматизации рассылки на непопулярном веб-сайтах',
    description: 'Создание программы для автоматизации рассылки на непопулярном вебсайте.',
    category: 'Automation',
    techs: ['Playwright', 'Flet'],
    rating: 10,
    review: '"Гарна комунікація. Співпрацею задоволений"',
    completedAt: 'Март 2024',
  },
  {
    id: 'run-script',
    title: 'Запуск скрипта',
    description:
      'Срочный запуск готовой программы на сервере заказчика после исчезновения предыдущего исполнителя.',
    category: 'Server',
    techs: [],
    rating: 10,
    review: '"Рекомендую. Пише по ділу, робить швидко"',
    completedAt: 'Июль 2024',
  },
  {
    id: 'telegram-captcha-free-groups',
    title: 'Бот для поиска групп без капчи',
    description:
      'Автоматизированный поиск каналов/групп для рассылок, исключая те, где стоит капча.',
    category: 'Telegram',
    techs: ['pyrogram', 'gpt-4o-mini'],
    rating: 10,
    review:
      '"Задача з зірочкою , але замовлення виконано успішно. Дякую"',
    completedAt: 'Ноябрь 2024',
  },
]
