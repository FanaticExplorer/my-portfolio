import { useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Briefcase, FolderGit2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { orders, type Order } from '../data/orders'
import { projects } from '../data/projects'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
}

const featuredProjects = projects.filter((project) => project.isFeatured).slice(0, 3)

const featuredOrderIds = [
  'telegram-chatgpt-userbot',
  'telegram-captcha-free-groups',
  'binance-auth-bypass',
]

const featuredOrders = featuredOrderIds
  .map((id) => orders.find((order) => order.id === id))
  .filter((order): order is Order => Boolean(order))

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const particles = Array.from({ length: 64 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: 1 + Math.random() * 1.6,
    }))

    const mouse = { x: 0, y: 0, active: false }
    let width = 0
    let height = 0
    let animationId = 0
    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = window.devicePixelRatio || 1
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    const update = () => {
      ctx.clearRect(0, 0, width, height)

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1
        }

        if (mouse.active) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.hypot(dx, dy)
          if (distance > 0 && distance < 160) {
            particle.vx += (dx / distance) * 0.015
            particle.vy += (dy / distance) * 0.015
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)

          if (distance < 140) {
            const alpha = 0.2 * (1 - distance / 140)
            ctx.strokeStyle = `rgba(232, 184, 75, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const particle of particles) {
        ctx.fillStyle = 'rgba(240, 240, 240, 0.65)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = window.requestAnimationFrame(update)
    }

    resize()
    update()

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export function Home() {
  return (
    <div className="bg-[#0e0e0e] text-[#f0f0f0]">
      <AnimatedSection
        className="relative -mt-20 flex min-h-[70vh] items-center overflow-hidden px-6 pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,184,75,0.08),transparent_55%)]" />
        <ParticleField />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent via-[#0e0e0e]/60 to-[#0e0e0e]" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 py-16">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#888888]">
              Python / Automation / Bots
            </p>
            <h1
              className="text-3xl font-semibold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-[#e8b84b]">Технологии</span> созданы, чтобы помогать.
              <br />
              Я помогаю им <span className="text-[#e8b84b]">работать на вас</span>.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#b5b5b5] md:text-lg">
              Python-разработчик, специализируюсь на ботах, парсинге и автоматизации.
              Пишу код, который решает задачи, а не создаёт новые.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8b84b] px-5 py-2.5 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110"
            >
              Посмотреть проекты
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e8b84b] px-5 py-2.5 text-sm font-semibold text-[#e8b84b] transition hover:bg-[#e8b84b] hover:text-[#0e0e0e]"
            >
              Связаться
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <FolderGit2 className="h-5 w-5 shrink-0 text-[#e8b84b]" strokeWidth={1.8} />
                <h2
                  className="text-2xl font-semibold md:text-3xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Проекты
                </h2>
              </div>
              <p className="mt-2 text-[#888888]">Примеры работ из моего GitHub</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#e8b84b] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#e8b84b] transition hover:bg-[#e8b84b] hover:text-[#0e0e0e]"
            >
              Все проекты
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="flex h-full flex-col gap-3 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="h-4 w-4 shrink-0 text-[#e8b84b]" strokeWidth={1.8} />
                    <h3 className="text-lg font-semibold text-[#f0f0f0]">
                      {project.title}
                    </h3>
                  </div>
                  <Badge label={project.category} variant="category" />
                </div>
                <p className="text-sm text-[#888888]">{project.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 shrink-0 text-[#e8b84b]" strokeWidth={1.8} />
                <h2
                  className="text-2xl font-semibold md:text-3xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Заказы на фрилансе
                </h2>
              </div>
              <p className="mt-2 text-[#888888]">Три проекта, которыми особенно горжусь</p>
            </div>
            <Link
              to="/freelance"
              className="inline-flex items-center gap-2 rounded-full border border-[#e8b84b] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#e8b84b] transition hover:bg-[#e8b84b] hover:text-[#0e0e0e]"
            >
              Все заказы
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
          <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredOrders.map((order) => (
              <Card key={order.id} className="flex h-full flex-col gap-3 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 shrink-0 text-[#e8b84b]" strokeWidth={1.8} />
                    <h3 className="text-lg font-semibold text-[#f0f0f0]">{order.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#888888]">{order.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
