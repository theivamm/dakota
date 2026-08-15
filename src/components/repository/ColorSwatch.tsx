import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import styles from './ColorSwatch.module.css'

type ColorSwatchProps = {
  name: string
  hex: string
  role: string
  index: number
}

function textOn(hex: string): string {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.62 ? '#071b2b' : '#ffffff'
}

export function ColorSwatch({ name, hex, role, index }: ColorSwatchProps) {
  const [open, setOpen] = useState(false)
  const ink = textOn(hex)
  const exampleId = `color-example-${index}`

  return (
    <article className={styles.card} data-testid="color-swatch">
      <div className={styles.swatch} style={{ backgroundColor: hex }}>
        <span className="type-meta" style={{ color: ink, opacity: 0.7 }}>
          {String(index).padStart(2, '0')}
        </span>
        <div>
          <h3 className={styles.name} style={{ color: ink }}>
            {name}
          </h3>
          <p className={styles.hex} style={{ color: ink }}>
            {hex}
          </p>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.role}>{role}</p>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={exampleId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Ocultar aplicación' : 'Ver aplicación'}
          <Icon name={open ? 'close' : 'spark'} size={14} />
        </button>
      </div>

      <div id={exampleId} className={`${styles.example} ${open ? styles.exampleOpen : ''}`.trim()}>
        <div className={styles.exampleBar} style={{ backgroundColor: hex }} />
        <span className={`type-meta ${styles.exampleLabel}`}>Aplicación de ejemplo</span>
      </div>
    </article>
  )
}
