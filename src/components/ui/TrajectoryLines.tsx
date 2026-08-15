import { motion, useReducedMotion } from 'framer-motion'
import styles from './TrajectoryLines.module.css'

const trails = [
  'M-40 380 C 180 320, 260 260, 460 170 S 780 60, 860 30',
  'M-40 470 C 220 410, 320 350, 520 250 S 820 130, 860 110',
  'M840 340 C 640 300, 560 250, 420 190 S 180 90, -40 60',
]

type TrajectoryLinesProps = {
  color?: 'blue' | 'lime'
  className?: string
}

/** Líneas de trayectoria que se dibujan una sola vez. */
export function TrajectoryLines({ color = 'blue', className }: TrajectoryLinesProps) {
  const reduced = useReducedMotion()
  return (
    <svg
      className={`${styles.svg} ${styles[color]} ${className ?? ''}`.trim()}
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {trails.map((d) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
      ))}
    </svg>
  )
}
