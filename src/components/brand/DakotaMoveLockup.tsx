import { Link } from 'react-router-dom'
import { DakotaLogo } from './DakotaLogo'
import styles from './DakotaMoveLockup.module.css'

type DakotaMoveLockupProps = {
  height?: number
  to?: string
  className?: string
  light?: boolean
}

/**
 * Lockup Dakota Move: logo oficial Dakota + descriptor MOVE secundario.
 * MOVE nunca compite con DAKOTA: se muestra en menor tamaño, debajo.
 */
export function DakotaMoveLockup({ height = 40, to, className, light = false }: DakotaMoveLockupProps) {
  const lockup = (
    <span className={styles.lockup}>
      <DakotaLogo variant={light ? 'light' : 'dark'} height={height} />
      <span className={styles.descriptor} aria-hidden="true">
        MOVE
      </span>
      <span className="u-sr-only">Dakota Move</span>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={`${styles.link} ${className ?? ''}`.trim()} aria-label="Dakota Move — Inicio">
        {lockup}
      </Link>
    )
  }

  return <span className={`${styles.link} ${className ?? ''}`.trim()}>{lockup}</span>
}
