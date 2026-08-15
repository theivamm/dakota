import { Link } from 'react-router-dom'
import logoDarkUrl from '@/assets/brand/dakota-logo-dark.svg'
import logoLightUrl from '@/assets/brand/dakota-logo-light.svg'
import styles from './DakotaLogo.module.css'

type DakotaLogoProps = {
  variant?: 'dark' | 'light'
  height?: number
  to?: string
  className?: string
  id?: string
}

/**
 * Logo oficial Dakota. Siempre el archivo SVG/PNG oficial — nunca se
 * reconstruye con texto HTML.
 */
export function DakotaLogo({
  variant = 'dark',
  height = 40,
  to,
  className,
  id,
}: DakotaLogoProps) {
  const src = variant === 'dark' ? logoDarkUrl : logoLightUrl
  const mark = (
    <img
      src={src}
      alt="Dakota"
      width={Math.round(height * 3)}
      height={height}
      className={styles.logo}
      data-logo-usage="primary-logo"
      style={{ width: `${Math.round(height * 3)}px`, height: `${height}px` }}
    />
  )

  if (to) {
    return (
      <Link to={to} className={`${styles.link} ${className ?? ''}`.trim()} id={id} aria-label="Dakota — Inicio">
        {mark}
      </Link>
    )
  }

  return (
    <span className={`${styles.link} ${className ?? ''}`.trim()} id={id}>
      {mark}
    </span>
  )
}
