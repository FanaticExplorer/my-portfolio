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
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Фриланс
          </h1>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="flex flex-col gap-2 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#888888]">Заказы</p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">{orderCount}</p>
            </Card>
            <Card className="flex flex-col gap-2 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#888888]">
                Средняя оценка
              </p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">
                {averageRating.toFixed(1)} / 10
              </p>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map((order) => (
            <Card key={order.id} className="flex h-full flex-col gap-4 p-5">
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

      </div>
    </section>
  )
}
