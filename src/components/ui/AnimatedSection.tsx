import type { ComponentPropsWithoutRef } from 'react'
import { motion } from 'framer-motion'

export interface AnimatedSectionProps extends ComponentPropsWithoutRef<'section'> {}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
}

export function AnimatedSection({ className = '', ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      {...props}
    />
  )
}
