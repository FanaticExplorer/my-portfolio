import { useTranslation } from 'react-i18next'

export function AvailabilityBadge() {
  const { t } = useTranslation()

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      {t('availability')}
    </div>
  )
}
