import { MediaImage } from '@/components/ui/MediaImage'
import type { MediaTone } from '@/components/ui/mediaPlaceholder'
import styles from './DiagonalPanels.module.css'

export type DiagonalPanelItem = {
  id: string
  label: string
  detail: string
  tone?: MediaTone
}

type DiagonalPanelsProps = {
  items: DiagonalPanelItem[]
  className?: string
}

/**
 * Tres cortes diagonales (running, ciclismo, outdoor) sobre fondo azul noche.
 */
export function DiagonalPanels({ items, className }: DiagonalPanelsProps) {
  return (
    <div className={`${styles.panels} ${className ?? ''}`.trim()} aria-hidden="true">
      {items.map((item) => (
        <div key={item.id} className={styles.panel} data-panel={item.id}>
          <MediaImage
            media={{
              alt: `Composición conceptual — ${item.label}`,
              label: item.label,
              detail: item.detail,
              tone: item.tone ?? 'navy',
            }}
            width={640}
            height={480}
          />
          <span className={`type-meta ${styles.tag}`}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
