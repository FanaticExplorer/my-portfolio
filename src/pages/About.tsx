import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { AvailabilityBadge } from '../components/ui/AvailabilityBadge'

export function About() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.description')} />
        <meta property="og:title" content={t('seo.about.title')} />
        <meta property="og:description" content={t('seo.about.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portfolio.fanaticexplorer.dev/about" />
      </Helmet>
      <AnimatedSection>
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
          <div>
            <AvailabilityBadge />
            <h1
              className="mt-5 text-3xl font-semibold md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('about.title')}
            </h1>
          </div>
          <p className="text-base leading-relaxed text-[#c4c4c4] md:text-lg">
            {t('about.p1')}
          </p>
          <p className="text-base leading-relaxed text-[#c4c4c4] md:text-lg">
            {t('about.p2')}
          </p>
          <p className="text-base leading-relaxed text-[#c4c4c4] md:text-lg">
            {t('about.p3')}
          </p>
          <p className="text-base leading-relaxed text-[#c4c4c4] md:text-lg">
            {t('about.p4')}
          </p>
        </div>
      </AnimatedSection>
    </section>
  )
}
