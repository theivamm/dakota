import type { UniverseStatus } from '@/data/universes'
import { universeStatusLabels } from '@/data/universes'
import styles from './StatusTag.module.css'

type StatusTagProps = {
  status: UniverseStatus
  className?: string
}

export function StatusTag({ status, className }: StatusTagProps) {
  return (
    <span className={`${styles.tag} ${styles[status]} ${className ?? ''}`.trim()}>
      {universeStatusLabels[status]}
    </span>
  )
}
