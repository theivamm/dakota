import type { IconName } from '@/components/ui/Icon'
import { Icon } from '@/components/ui/Icon'
import styles from './RepositoryCard.module.css'

type RepositoryCardProps = {
  index: number
  title: string
  description: string
  icon: IconName
  accent: 'blue' | 'coral' | 'lime'
}

export function RepositoryCard({ index, title, description, icon, accent }: RepositoryCardProps) {
  return (
    <article className={styles.card} data-testid="repository-card">
      <div className={styles.head}>
        <span className="type-meta">{String(index).padStart(2, '0')}</span>
        <span className={`${styles.icon} ${styles[accent]}`} aria-hidden="true">
          <Icon name={icon} size={22} />
        </span>
      </div>
      <h3 className="type-card">{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={`${styles.preview} ${styles[`preview-${accent}`]}`} aria-hidden="true">
        <span className={styles.previewBar} />
        <Icon name={icon} size={14} />
      </div>
    </article>
  )
}
