import type { ComponentPropsWithoutRef } from 'react'

export type BadgeVariant = 'tech' | 'status' | 'category'

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  label: string
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  tech: 'bg-[#2a2a2a] text-[#e8b84b]',
  status: 'border border-[#2a2a2a] text-[#888888] bg-transparent',
  category: 'bg-[#e8b84b] text-[#0e0e0e]',
}

export function Badge({ label, variant = 'tech', className = '', ...props }: BadgeProps) {
  const fontClass = variant === 'tech' ? 'font-mono' : 'font-normal'

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${fontClass} ${variantClasses[variant]} ${className}`}
      style={variant === 'tech' ? { fontFamily: 'var(--font-mono)' } : undefined}
      {...props}
    >
      {label}
    </span>
  )
}
