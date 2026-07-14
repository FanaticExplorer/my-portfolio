import { motion, type HTMLMotionProps } from 'framer-motion'

export type CardProps = HTMLMotionProps<'div'>

export function Card({ className = '', ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border border-[#2a2a2a] bg-[#161616] transition-colors duration-200 hover:border-[#e8b84b] ${className}`}
      {...props}
    />
  )
}
