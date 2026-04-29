import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { projects } from '../data/projects'

type FilterKey = 'all' | 'bots' | 'desktop' | 'web' | 'data' | 'other'

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: 'all', label: 'Все' },
  { key: 'bots', label: 'Боты' },
  { key: 'desktop', label: 'Десктоп' },
  { key: 'web', label: 'Веб' },
  { key: 'data', label: 'Data' },
  { key: 'other', label: 'Другое' },
]

const getStatusIcon = (status: string) => {
  if (status.includes('⚠️')) return '⚠️'
  if (status.includes('🎓')) return '🎓'
  return '✅'
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-24 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div>
          <h1
            className="text-3xl font-semibold md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Проекты
          </h1>
          <p className="mt-3 text-[#888888]">
            Коллекция ботов, утилит, веб-инструментов и учебных проектов.
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
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getStatusIcon(project.status)}</span>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                  <p
                    className="text-sm text-[#888888]"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <Badge key={`${project.id}-${tech}`} label={tech} variant="tech" />
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#888888]">
                      {project.status}
                    </span>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-[#e8b84b]"
                      >
                        GitHub
                      </a>
                    ) : null}
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
