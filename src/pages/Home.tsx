import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { orders } from '../data/orders'
import { projects } from '../data/projects'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 3)

const techTags = Array.from(
  new Set([...projects.flatMap((project) => project.techs), ...orders.flatMap((order) => order.techs)]),
).slice(0, 12)

const orderCount = orders.length
const averageRating = orderCount
  ? orders.reduce((sum, order) => sum + order.rating, 0) / orderCount
  : 0

export function Home() {
  return (
    <div className="bg-[#0e0e0e] text-[#f0f0f0]">
      <AnimatedSection
        className="relative flex min-h-screen items-center px-6"
        style={{
          backgroundImage: 'radial-gradient(#2a2a2a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-28">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#888888]">
              Python / Automation / Bots
            </p>
            <h1
              className="text-4xl font-semibold leading-tight md:text-6xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Привет, я — <span className="text-[#e8b84b]">FanaticExplorer</span>
            </h1>
            <p className="mt-6 text-lg text-[#888888] md:text-xl">
              Python-разработчик · Боты, утилиты, автоматизация
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[#e8b84b] px-6 py-3 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110"
            >
              Посмотреть проекты
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#e8b84b] px-6 py-3 text-sm font-semibold text-[#e8b84b] transition hover:bg-[#e8b84b] hover:text-[#0e0e0e]"
            >
              Связаться
            </button>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2
              className="text-2xl font-semibold md:text-3xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              О себе
            </h2>
            <p className="mt-4 text-base text-[#888888] md:text-lg">
              Делаю Python-ботов и утилиты для Discord и Telegram, а также проекты вроде
              RecordingConverter и WindowManager. В портфолио есть веб-инструменты
              GeniusCleaner и PearCleaner, а также учебные проекты на Vue 3 и SQL
              (Snowflake).
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {techTags.map((tech) => (
              <Badge key={tech} label={tech} variant="tech" />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h2
              className="text-2xl font-semibold md:text-3xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Избранные проекты
            </h2>
            <p className="text-[#888888]">Три ключевые работы из GitHub-портфолио.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <Card key={project.id} className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[#f0f0f0]">
                    {project.title}
                  </h3>
                  <Badge label={project.category} variant="category" />
                </div>
                <p className="text-sm text-[#888888]">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techs.slice(0, 4).map((tech) => (
                    <Badge key={`${project.id}-${tech}`} label={tech} variant="tech" />
                  ))}
                </div>
                <Badge label={project.status} variant="status" />
              </Card>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-start">
            <Link
              to="/projects"
              className="text-sm font-semibold uppercase tracking-wide text-[#e8b84b]"
            >
              Все проекты →
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <h2
              className="text-2xl font-semibold md:text-3xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Фриланс-превью
            </h2>
            <p className="text-[#888888]">Краткая статистика по завершенным заказам.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col gap-2 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#888888]">Заказы</p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">{orderCount}</p>
            </Card>
            <Card className="flex flex-col gap-2 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#888888]">Средняя оценка</p>
              <p className="text-3xl font-semibold text-[#f0f0f0]">
                {averageRating.toFixed(1)} / 10
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/freelance"
              className="text-sm font-semibold uppercase tracking-wide text-[#e8b84b]"
            >
              Посмотреть заказы →
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
