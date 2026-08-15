import { Link } from 'react-router-dom'
import { DakotaLogo } from '@/components/brand/DakotaLogo'
import { DakotaMoveLockup } from '@/components/brand/DakotaMoveLockup'
import styles from './GlobalFooter.module.css'

type GlobalFooterProps = {
  theme: 'home' | 'move'
}

export function GlobalFooter({ theme }: GlobalFooterProps) {
  const isMove = theme === 'move'
  return (
    <footer className={isMove ? styles.footerMove : styles.footerHome} data-testid="global-footer">
      <div className="u-container-wide">
        <div className={styles.row}>
          {isMove ? (
            <DakotaMoveLockup to="/dakota-move" height={30} light />
          ) : (
            <DakotaLogo to="/" height={30} />
          )}

          <nav aria-label="Footer" className={styles.nav}>
            <Link to="/" className={styles.link}>
              La evolución
            </Link>
            <Link to="/dakota-move" className={styles.link}>
              Dakota Move
            </Link>
          </nav>

          <p className={`type-meta ${styles.meta}`}>EVOLUCIÓN VISUAL / V0.1</p>
        </div>
      </div>
    </footer>
  )
}
