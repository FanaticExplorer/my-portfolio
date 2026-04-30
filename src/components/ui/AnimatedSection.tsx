import { motion, type HTMLMotionProps, type Variants } from 'framer-motion'

export interface AnimatedSectionProps extends HTMLMotionProps<'section'> {}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut' as const,
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
