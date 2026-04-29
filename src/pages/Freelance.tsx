import { orders } from '../data/orders'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

const orderCount = orders.length
const averageRating = orderCount
  ? orders.reduce((sum, order) => sum + order.rating, 0) / orderCount
  : 0

const renderStars = (rating: number) => {
  const fullStars = Math.round(rating)
  return Array.from({ length: 10 }, (_, index) => (
    <span key={index} className={index < fullStars ? 'text-[#e8b84b]' : 'text-[#2a2a2a]'}>
      ★
    </span>
  ))
}

export function Freelance() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-24 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Фриланс
          </h1>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#888888]">Заказы</p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">{orderCount}</p>
            </Card>
            <Card className="flex flex-col gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#888888]">
                Средняя оценка
              </p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">
                {averageRating.toFixed(1)} / 10
              </p>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {orders.map((order) => (
            <Card key={order.id} className="flex h-full flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{order.title}</h2>
                <p className="text-sm text-[#888888]">{order.description}</p>
              </div>
              <div className="text-sm">{renderStars(order.rating)}</div>
              {order.review ? (
                <p className="text-sm italic text-[#888888]">{order.review}</p>
              ) : null}
              <div className="mt-auto flex flex-wrap gap-2">
                {order.techs.map((tech) => (
                  <Badge key={`${order.id}-${tech}`} label={tech} variant="tech" />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <h2
                className="text-2xl font-semibold md:text-3xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Заказать разработку
              </h2>
              <p className="mt-3 text-[#888888]">
                Опишите задачу, и я вернусь с уточнениями по срокам и стоимости.
              </p>
            </div>
            {/* Замени YOUR_FORMSPREE_ID на свой ID с formspree.io */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              className="grid gap-4"
            >
              <input
                name="name"
                placeholder="Имя"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <select
                name="task"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              >
                <option value="Бот Discord">Бот Discord</option>
                <option value="Скрипт">Скрипт</option>
                <option value="Расширение">Расширение</option>
                <option value="Другое">Другое</option>
              </select>
              <textarea
                name="details"
                rows={5}
                placeholder="Описание"
                className="rounded-xl border border-[#2a2a2a] bg-[#161616] px-4 py-3 text-sm text-[#f0f0f0]"
                required
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#e8b84b] px-6 py-3 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110"
              >
                Отправить запрос
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-[#2a2a2a] bg-[#161616] p-6">
              <h3 className="text-lg font-semibold">Контакты</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href="https://github.com/FanaticExplorer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8b84b]"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/FanaticExplorer"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8b84b]"
                >
                  Telegram
                </a>
                <a
                  href="https://freelancehunt.com/freelancer/FanaticExplorer.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e8b84b]"
                >
                  FreelanceHunt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
