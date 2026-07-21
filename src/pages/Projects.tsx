import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { projects } from '../data/projects'

type FilterKey = 'all' | 'bots' | 'desktop' | 'web' | 'data' | 'other'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const { t } = useTranslation()

  const filters: Array<{ key: FilterKey; label: string }> = useMemo(
    () => [
      { key: 'all', label: t('projects.filters.all') },
      { key: 'bots', label: t('projects.filters.bots') },
      { key: 'desktop', label: t('projects.filters.desktop') },
      { key: 'web', label: t('projects.filters.web') },
      { key: 'data', label: t('projects.filters.data') },
      { key: 'other', label: t('projects.filters.other') },
    ],
    [t],
  )

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <Helmet>
        <title>{t('seo.projects.title')}</title>
        <meta name="description" content={t('seo.projects.description')} />
        <meta property="og:title" content={t('seo.projects.title')} />
        <meta property="og:description" content={t('seo.projects.description')} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7">
        <div>
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('projects.title')}
          </h1>
          <p className="mt-3 text-[#888888]">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = filter.key === activeFilter
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#e8b84b] text-[#0e0e0e]'
                    : 'border border-[#2a2a2a] bg-[#1e1e1e] text-[#f0f0f0]'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <Card className="flex h-full flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">
                      {t(`projects.items.${project.id}.title`)}
                    </h3>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t('projects.githubAria', {
                          title: t(`projects.items.${project.id}.title`),
                        })}
                        className="rounded-full border border-[#2a2a2a] bg-[#151515] p-2 text-[#e8b84b] transition hover:border-[#e8b84b]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p
                    className="text-sm text-[#888888]"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 10,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <Badge key={`${project.id}-${tech}`} label={tech} variant="tech" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
