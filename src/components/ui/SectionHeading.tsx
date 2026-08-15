import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  action?: { label: string; href: string }
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${styles.heading} ${styles[align]} ${className ?? ''}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow ? (
        <p className="type-meta" data-testid="section-eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="type-section" id={id}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      {action ? (
        <a href={action.href} className={styles.action}>
          {action.label}
          <Icon name="arrow-right" size={16} />
        </a>
      ) : null}
    </motion.div>
  )
}
