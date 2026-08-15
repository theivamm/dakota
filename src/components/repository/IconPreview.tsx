import type { IconName } from '@/components/ui/Icon'
import { Icon } from '@/components/ui/Icon'
import styles from './IconPreview.module.css'

type IconPreviewProps = {
  name: string
  src: string
  index: number
}

export function IconPreview({ name, src, index }: IconPreviewProps) {
  return (
    <article className={styles.tile} data-testid="icon-preview">
      <div className={styles.media}>
        <Icon name={src as IconName} size={34} strokeWidth={1.6} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className="type-meta">{String(index).padStart(2, '0')} · SVG / V1.0</p>
    </article>
  )
}
