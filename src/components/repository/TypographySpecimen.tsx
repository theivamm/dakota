import type { CSSProperties } from 'react'
import styles from './TypographySpecimen.module.css'

type TypographySpecimenProps = {
  family: 'brand' | 'meta'
  weight: number
  sample: string
  note: string
  className?: string
  large?: boolean
}

export function TypographySpecimen({
  family,
  weight,
  sample,
  note,
  className,
  large = false,
}: TypographySpecimenProps) {
  const style: CSSProperties = {
    fontFamily: family === 'meta' ? 'var(--font-meta)' : 'var(--font-brand)',
    fontWeight: weight,
  }

  return (
    <figure
      className={`${styles.specimen} ${large ? styles.large : ''} ${className ?? ''}`.trim()}
      data-testid="type-specimen"
    >
      <figcaption className="type-meta">
        {family === 'meta' ? 'IBM PLEX MONO' : 'MONTSERRAT'} {weight}
      </figcaption>
      <p className={styles.sample} style={style}>
        {sample}
      </p>
      <p className={styles.note}>{note}</p>
    </figure>
  )
}
