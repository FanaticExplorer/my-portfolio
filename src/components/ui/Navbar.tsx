import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinkBase = 'text-sm uppercase tracking-wide transition-colors'

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkBase} ${
    isActive
      ? 'text-[#f0f0f0] underline decoration-[#e8b84b] decoration-2 underline-offset-8'
      : 'text-[#888888] hover:text-[#f0f0f0]'
  }`

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2a2a2a] bg-[#0e0e0e]/90 backdrop-blur">
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
            Главная
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>
            Проекты
          </NavLink>
          <NavLink to="/freelance" className={getNavLinkClass}>
            Фриланс
          </NavLink>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#2a2a2a] p-2 text-[#f0f0f0] md:hidden"
          aria-label="Открыть меню"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={18} />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 transform border-l border-[#2a2a2a] bg-[#161616] transition-transform duration-200 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#2a2a2a] px-6 py-4">
          <span className="text-sm uppercase tracking-widest text-[#888888]">Меню</span>
          <button
            type="button"
            className="rounded-full border border-[#2a2a2a] p-2 text-[#f0f0f0]"
            aria-label="Закрыть меню"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6">
          <NavLink to="/" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Главная
          </NavLink>
          <NavLink
            to="/projects"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Проекты
          </NavLink>
          <NavLink
            to="/freelance"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Фриланс
          </NavLink>
        </nav>
      </div>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-label="Закрыть меню"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </header>
  )
}
