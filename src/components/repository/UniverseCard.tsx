import { Link } from 'react-router-dom'
import type { Universe } from '@/data/universes'
import { StatusTag } from '@/components/ui/StatusTag'
import { Icon } from '@/components/ui/Icon'
import styles from './UniverseCard.module.css'

type UniverseCardProps = {
  universe: Universe
  state: 'active' | 'upcoming'
  index: number
}

export function UniverseCard({ universe, state, index }: UniverseCardProps) {
  const isUpcoming = state === 'upcoming'
  return (
    <article
      className={`${styles.card} ${isUpcoming ? styles.upcoming : ''}`.trim()}
      data-testid="universe-card"
    >
      <div className={styles.top}>
        <span className="type-meta">
          {String(index).padStart(2, '0')} / {universe.category}
        </span>
        {isUpcoming ? (
          <span className={styles.upcomingTag}>Próximamente</span>
        ) : (
          <StatusTag status={universe.status} />
        )}
      </div>

      <h3 className="type-card">{universe.name}</h3>
      <p className={styles.tagline}>{universe.tagline}</p>

      <div className={styles.foot}>
        {isUpcoming ? (
          <span className={styles.muted}>Sin contenido todavía</span>
        ) : (
          <Link to={`/${universe.slug}`} className={styles.cta}>
            Explorar el universo
            <Icon name="arrow-right" size={16} />
          </Link>
        )}
      </div>
    </article>
  )
}
