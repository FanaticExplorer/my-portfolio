import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Briefcase } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Card } from '../components/ui/Card'

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' as const } },
}

function XIcon({ className }: { className?: string }) {
  return (
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
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 4l11.733 16H20L8.267 4z" />
      <path d="M4 20l6.768-6.768M15.232 10.232L20 4" />
    </svg>
  )
}

export function Contact() {
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      alert(t('contact.status.success'))
      form.reset()
    } catch {
      alert(t('contact.status.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#0e0e0e] text-[#f0f0f0]">
      <Helmet>
        <title>{t('seo.contact.title')}</title>
        <meta name="description" content={t('seo.contact.description')} />
        <meta property="og:title" content={t('seo.contact.title')} />
        <meta property="og:description" content={t('seo.contact.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://portfolio.fanaticexplorer.dev/contact" />
      </Helmet>
      <div className="relative -mt-20 overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,184,75,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent via-[#0e0e0e]/60 to-[#0e0e0e]" />
      </div>

      <AnimatedSection className="px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t('contact.form.title')}
                </h2>
                <form
                  action="https://formspree.io/f/xeenjoyz"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="mt-5 grid gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm text-[#888888]">
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder={t('contact.form.namePlaceholder')}
                      className="rounded-xl border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition focus:border-[#e8b84b] focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm text-[#888888]">
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="rounded-xl border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition focus:border-[#e8b84b] focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="text-sm text-[#888888]">
                      {t('contact.form.detailsLabel')}
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      placeholder={t('contact.form.detailsPlaceholder')}
                      className="rounded-xl border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition focus:border-[#e8b84b] focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#e8b84b] px-6 py-3 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t('contact.form.submit')}
                    <Send size={16} />
                  </button>
                </form>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="flex h-full flex-col gap-5 p-5">
                <div>
                  <h2
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t('contact.links.title')}
                  </h2>
                  <p className="mt-1 text-xs text-[#888888]">
                    {t('contact.links.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://t.me/FanaticExplorer"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
                  >
                    <Send className="h-4 w-4 shrink-0 text-[#e8b84b] transition group-hover:text-[#e8b84b]" strokeWidth={1.8} />
                    <span>{t('contact.links.telegram')}</span>
                  </a>
                  <a
                    href="https://github.com/FanaticExplorer"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
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
                      className="h-4 w-4 shrink-0 text-[#e8b84b] transition group-hover:text-[#e8b84b]"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>{t('contact.links.github')}</span>
                  </a>
                  <a
                    href="https://freelancehunt.com/freelancer/FanaticExplorer.html"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
                  >
                    <Briefcase className="h-4 w-4 shrink-0 text-[#e8b84b] transition group-hover:text-[#e8b84b]" strokeWidth={1.8} />
                    <span>{t('contact.links.freelancehunt')}</span>
                  </a>
                  <a
                    href="https://x.com/FanaticExplorer"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
                  >
                    <XIcon className="h-4 w-4 shrink-0 text-[#e8b84b] transition group-hover:text-[#e8b84b]" />
                    <span>{t('contact.links.x')}</span>
                  </a>
                  <a
                    href="mailto:the.fanatic.explorer@gmail.com"
                    className="group flex items-center gap-3 rounded-lg border border-[#2a2a2a] bg-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#e8b84b] transition group-hover:text-[#e8b84b]" strokeWidth={1.8} />
                    <span className="truncate">{t('contact.links.email')}</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
