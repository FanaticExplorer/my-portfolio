import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github } from 'lucide-react'
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

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 py-16 text-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7">
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
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub: ${project.title}`}
                      className="rounded-full border border-[#2a2a2a] bg-[#151515] p-2 text-[#e8b84b] transition hover:border-[#e8b84b]"
                    >
                      <Github className="h-4 w-4" />
                    </a>
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
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
