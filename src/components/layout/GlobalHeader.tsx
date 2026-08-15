import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DakotaLogo } from '@/components/brand/DakotaLogo'
import { DakotaMoveLockup } from '@/components/brand/DakotaMoveLockup'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import styles from './GlobalHeader.module.css'

type NavItem = { label: string; href: string }

const homeNav: NavItem[] = [
  { label: 'La evolución', href: '#evolucion' },
  { label: 'Qué cambia', href: '#que-cambia' },
  { label: 'Universos', href: '#universos' },
]

const moveNav: NavItem[] = [
  { label: 'Concepto', href: '#concepto' },
  { label: 'Color', href: '#color' },
  { label: 'Tipografía', href: '#tipografia' },
  { label: 'Iconografía', href: '#iconografia' },
  { label: 'Aplicaciones', href: '#aplicaciones' },
]

type GlobalHeaderProps = {
  theme: 'home' | 'move'
}

export function GlobalHeader({ theme }: GlobalHeaderProps) {
  const isMove = theme === 'move'
  const items = isMove ? moveNav : homeNav
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const nav = (mobile = false) => (
    <nav
      className={mobile ? styles.mobileNav : styles.nav}
      aria-label={isMove ? 'Dakota Move — secciones' : 'Principal'}
    >
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {isMove ? (
        <Button to="/" variant="outline" size="sm" ariaLabel="Volver a la evolución">
          Volver a la evolución
        </Button>
      ) : (
        <Button to="/dakota-move" size="sm" ariaLabel="Descubrir Dakota Move">
          Descubrir Dakota Move
        </Button>
      )}
    </nav>
  )

  return (
    <header
      className={[
        styles.header,
        isMove ? styles.move : styles.home,
        scrolled && styles.scrolled,
      ]
        .filter(Boolean)
        .join(' ')}
      data-testid={isMove ? 'move-header' : 'home-header'}
    >
      <div className="u-container-wide">
        <div className={styles.row}>
          {isMove ? (
            <DakotaMoveLockup to="/dakota-move" height={34} light={scrolled} />
          ) : (
            <DakotaLogo to="/" height={34} />
          )}

          {nav()}

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="global-nav-panel"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {open ? (
        <div className={styles.panel} id="global-nav-panel">
          <div className="u-container-wide">{nav(true)}</div>
        </div>
      ) : null}
    </header>
  )
}
