import { Github } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0e0e0e]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm text-[#888888]">
          FanaticExplorer · {year}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#e8b84b]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#e8b84b]"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21.5 3.2 2.9 10.4c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 11.2-7.1c.5-.3 1-.1.6.2L9 15.7l-.4 5.2c.6 0 .9-.3 1.3-.7l2.9-2.8 4.9 3.6c.9.5 1.6.2 1.8-.9l3.2-15.2c.3-1.3-.5-1.9-1.2-1.7Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2a2a] text-[#f0f0f0] hover:border-[#e8b84b]"
            aria-label="FreelanceHunt"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4 4h16v3H4V4Zm0 5h9v3H4V9Zm0 5h16v3H4v-3Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
