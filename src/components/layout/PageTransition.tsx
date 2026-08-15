import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './PageTransition.module.css'

/**
 * Transición Home → Dakota Move mediante overlay azul noche (560 ms).
 * Solo anima opacity y respeta prefers-reduced-motion.
 */
export function PageTransition() {
  const location = useLocation()
  const isMove = location.pathname === '/dakota-move'
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isMove) return
    const show = window.setTimeout(() => setVisible(true), 0)
    const hide = window.setTimeout(() => setVisible(false), 560)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [isMove, location.key])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className={styles.overlay}
          data-testid="page-transition"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.56, ease: 'easeOut' }}
        />
      ) : null}
    </AnimatePresence>
  )
}
