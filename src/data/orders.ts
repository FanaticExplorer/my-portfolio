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
      'Создание скрипта, который по ID канала смог находить его username и название.',
    techs: ['pyrogram'],
    review: 'Грамотный специалист. Мастер своего дела. Буду знать к кому обратиться еще.',
  },
  {
    id: 'discord-account-checker',
    title: 'Чекер аккаунтов на сервере Discord',
    description:
      'Создать консольное приложение на Python для проверки наличия аккаунтов в указанной группе Discord.',
    techs: ['Discord API', 'requests'],
    review: 'Чекер працює, завдання виконано успішно. Рекомендую!',
  },
  {
    id: 'telegram-neuro-commentator',
    title: 'Нейро-коментатор под посты в Telegram',
    description:
      'Telegram userbot, который реагирует на появление постов в Telegram канале и оставляет комментарий под постом.',
    techs: ['pyrogram', 'OpenAI API'],
    review:
      'Чудовий спеціаліст. Відповідальний, завжди на зв\'язку. Дуже задоволений співпрацею. Рекомендую.',
  },
  {
    id: 'reddit-autoposter',
    title: 'Reddit-автопостер / накрутка активности',
    description:
      'Автоматический постинг на Reddit с привязкой к таблице и дальнейшей накруткой апвоутов через внешний API.',
    techs: ['PRAW', 'Reddit'],
    review:
      'Дякую за професійно і оперативно виконане завдання! Окремо хочу відзначити відмінну комунікацію і швидкість роботи. Рекомендую до співпраці!',
  },
  {
    id: 'python-cgi-flask',
    title: 'Доработка Python CGI app',
    description: 'Перепись локального CGI проекта на Flask и его деплой.',
    techs: ['Flask'],
    review: 'Красава, сделал всё по деталям',
  },
  {
    id: 'account-registration-script',
    title: 'Скрипт для регистрации аккаунтов',
    description:
      'Python-скрипт для автоматической регистрации профилей с заполнением данных и капчи.',
    techs: ['Playwright'],
    review: 'Дякую за роботу, гарний фахівець',
  },
  {
    id: 'binance-auth-bypass',
    title: 'Парсинг страницы Binance с обходом авторизации',
    description:
      'Реверс-инженеринг страницы Binance Futures Leaderboard без авторизации.',
    techs: ['DevTools'],
    review:
      'Буду тепер завжди працювати з Андрієм, зробив те що інші фрілансери казали неможливо. Виконав все швидко та якісно, щиро рекомендую',
  },
  {
    id: 'telegram-chatgpt-userbot',
    title: 'Реалистичный userbot-собеседник с ChatGPT',
    description:
      'Telegram юзербот, который ведет себя максимально похоже на реального человека и консультирует по возможностям компании.',
    techs: ['pyrogram', 'OpenAI API'],
    review: 'Все зроблено чудово, рекомендую!',
  },
  {
    id: 'binance-two-sessions',
    title: 'Обход ограничений и поддержка двух сессий на Binance',
    description: 'Найти способ иметь одну сессию Binance на нескольких устройствах.',
    techs: ['Cookies'],
    review: 'Дякую, допоміг вирішити питання',
  },
  {
    id: 'automation-mailing',
    title: 'Автоматизации рассылки на непопулярном веб-сайтах',
    description: 'Создание программы для автоматизации рассылки на непопулярном вебсайте.',
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
      'Автоматизированный поиск Telegram-каналов/групп для рассылок, исключая те, где стоит капча.',
    techs: ['pyrogram'],
    review: 'Задача з зірочкою , але замовлення виконано успішно. Дякую',
  },
]
