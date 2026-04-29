import { orders } from '../data/orders'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

export function Freelance() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Заказы
          </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map((order) => (
            <Card key={order.id} className="flex h-full flex-col gap-4 p-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{order.title}</h2>
                <p className="text-sm text-[#888888]">{order.description}</p>
              </div>
              {order.review ? (
                <blockquote className="border-l border-[#2a2a2a] pl-4 text-sm italic text-[#888888]">
                  {order.review}
                </blockquote>
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
