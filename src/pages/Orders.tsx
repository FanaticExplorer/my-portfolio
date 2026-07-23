import { orders } from '../data/orders'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export function Orders() {
  const { t, i18n } = useTranslation()

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <Helmet>
        <title>{t('seo.orders.title')}</title>
        <meta name="description" content={t('seo.orders.description')} />
        <meta property="og:title" content={t('seo.orders.title')} />
        <meta property="og:description" content={t('seo.orders.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portfolio.fanaticexplorer.dev/orders" />
      </Helmet>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7">
        <div>
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('orders.title')}
          </h1>
          <p className="mt-3 text-[#888888]">
            {t('orders.subtitle')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map((order) => (
            <Card key={order.id} className="flex h-full flex-col gap-4 p-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">
                  {t(`orders.items.${order.id}.title`)}
                </h2>
                <p className="text-sm text-[#888888]">
                  {t(`orders.items.${order.id}.description`)}
                </p>
              </div>
              {i18n.exists(`orders.items.${order.id}.review`) ? (
                <blockquote className="border-l border-[#2a2a2a] pl-4 text-sm italic text-[#888888]">
                  {t(`orders.items.${order.id}.review`)}
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
