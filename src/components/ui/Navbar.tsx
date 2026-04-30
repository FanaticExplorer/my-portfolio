import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Briefcase, FolderGit2, Home, Mail, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navLinkBase = 'inline-flex items-center gap-2 text-sm uppercase tracking-wide transition-colors'

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkBase} ${
    isActive
      ? 'text-[#f0f0f0] underline decoration-[#e8b84b] decoration-2 underline-offset-8'
      : 'text-[#888888] hover:text-[#f0f0f0]'
  }`

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  const languages = [
    { key: 'ru', label: 'RU' },
    { key: 'uk', label: 'UK' },
    { key: 'sk', label: 'SK' },
    { key: 'en', label: 'EN' },
  ]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2a2a2a] bg-[#0e0e0e] md:bg-[#0e0e0e]/90 md:backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div
          className="text-lg font-semibold"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="text-[#e8b84b]">Fanatic</span>
          <span className="text-[#f0f0f0]">Explorer</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={getNavLinkClass}>
            <Home className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.home')}
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>
            <FolderGit2 className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.projects')}
          </NavLink>
          <NavLink to="/orders" className={getNavLinkClass}>
            <Briefcase className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.orders')}
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.contact')}
          </NavLink>
        </nav>
        <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#888888] md:flex">
          {languages.map((language, index) => (
            <div key={language.key} className="flex items-center">
              <button
                type="button"
                onClick={() => i18n.changeLanguage(language.key)}
                aria-label={`${t('navbar.language')} ${language.label}`}
                className={`transition-colors ${
                  currentLanguage === language.key
                    ? 'text-[#e8b84b]'
                    : 'text-[#888888] hover:text-[#f0f0f0]'
                }`}
              >
                {language.label}
              </button>
              {index < languages.length - 1 ? (
                <span className="px-1 text-[#2a2a2a]">|</span>
              ) : null}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#2a2a2a] p-2 text-[#f0f0f0] md:hidden"
          aria-label={t('navbar.openMenu')}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-4.5 w-4.5" strokeWidth={1.8} />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 transform border-l border-[#2a2a2a] bg-[#161616] transition-transform duration-200 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#2a2a2a] px-6 py-4">
          <span className="text-sm uppercase tracking-widest text-[#888888]">{t('navbar.menu')}</span>
          <button
            type="button"
            className="rounded-full border border-[#2a2a2a] p-2 text-[#f0f0f0]"
            aria-label={t('navbar.closeMenu')}
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4.5 w-4.5" strokeWidth={1.8} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em]">
          {languages.map((language, index) => (
            <div key={language.key} className="flex items-center">
              <button
                type="button"
                onClick={() => i18n.changeLanguage(language.key)}
                aria-label={`${t('navbar.language')} ${language.label}`}
                className={`transition-colors ${
                  currentLanguage === language.key
                    ? 'text-[#e8b84b]'
                    : 'text-[#888888] hover:text-[#f0f0f0]'
                }`}
              >
                {language.label}
              </button>
              {index < languages.length - 1 ? (
                <span className="px-1 text-[#2a2a2a]">|</span>
              ) : null}
            </div>
          ))}
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6">
          <NavLink to="/" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            <Home className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.home')}
          </NavLink>
          <NavLink
            to="/projects"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            <FolderGit2 className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.projects')}
          </NavLink>
          <NavLink
            to="/orders"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            <Briefcase className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.orders')}
          </NavLink>
          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            {t('navbar.contact')}
          </NavLink>
        </nav>
      </div>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[#0e0e0e] md:hidden"
          aria-label={t('navbar.closeMenu')}
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </header>
  )
}
