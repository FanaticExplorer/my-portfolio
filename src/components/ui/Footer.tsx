import { useTranslation } from 'react-i18next'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0e0e0e]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <div className="text-xs text-[#888888]">{t('footer.signature', { year })}</div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/FanaticExplorer"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#2a2a2a] text-[#f0f0f0] transition hover:border-[#e8b84b] hover:text-[#e8b84b]"
            aria-label={t('footer.aria.github')}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04a9.34 9.34 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.92-2.34 4.78-4.58 5.03.36.32.69.95.69 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49 3.97-1.35 6.83-5.17 6.83-9.67C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
