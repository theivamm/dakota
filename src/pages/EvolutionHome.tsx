import { motion } from 'framer-motion'
import { GlobalHeader } from '@/components/layout/GlobalHeader'
import { GlobalFooter } from '@/components/layout/GlobalFooter'
import { TrajectoryLines } from '@/components/ui/TrajectoryLines'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { DakotaMoveLockup } from '@/components/brand/DakotaMoveLockup'
import { UniverseCard } from '@/components/repository/UniverseCard'
import { RepositoryCard } from '@/components/repository/RepositoryCard'
import { moveUniverse } from '@/data/universes'
import portada from '@/assets/dakotamove/dakota-move-portada.png'
import type { Universe } from '@/data/universes'
import type { IconName } from '@/components/ui/Icon'
import styles from './EvolutionHome.module.css'

const pillarIcons: Array<{ title: string; description: string; icon: IconName; accent: 'blue' | 'coral' | 'lime' }> = [
  { title: 'Color', description: 'Tokens y proporciones cromáticas por universo.', icon: 'palette', accent: 'blue' },
  { title: 'Tipografía', description: 'Jerarquía Montserrat con metadatos técnicos.', icon: 'type', accent: 'coral' },
  { title: 'Iconografía', description: 'Iconos SVG propios, geométricos y consistentes.', icon: 'grid', accent: 'blue' },
  { title: 'Fotografía', description: 'Dirección de imagen y tratamiento editorial.', icon: 'image', accent: 'lime' },
  { title: 'Composición', description: 'Grillas de 12, 8 y 4 columnas con cortes diagonales.', icon: 'layout', accent: 'coral' },
  { title: 'Aplicaciones', description: 'Piezas listas para cada canal y cada formato.', icon: 'spark', accent: 'lime' },
]

const evolutionPoints = [
  'Dakota ya cuenta con una identidad reconocible.',
  'El nuevo trabajo organiza y amplía esa base.',
  'Cada categoría podrá desarrollar una personalidad propia.',
  'Todo seguirá formando parte de una misma Dakota.',
]

const comparison = [
  { from: 'IDENTIDAD BASE', to: 'SISTEMA VISUAL' },
  { from: 'CATEGORÍAS AISLADAS', to: 'UNIVERSOS' },
  { from: 'RECURSOS SUELTOS', to: 'REGLAS CONSISTENTES' },
]

const upcoming: Universe[] = [
  {
    id: 'upcoming-1',
    slug: '',
    name: 'Próximo universo',
    category: 'Por definir',
    tagline: 'Un nuevo universo en camino.',
    description: '',
    status: 'exploration',
    version: '0.0',
    colors: [],
    typography: [],
    icons: [],
    applications: [],
  },
  {
    id: 'upcoming-2',
    slug: '',
    name: 'Próximo universo',
    category: 'Por definir',
    tagline: 'Un nuevo universo en camino.',
    description: '',
    status: 'exploration',
    version: '0.0',
    colors: [],
    typography: [],
    icons: [],
    applications: [],
  },
]

function Hero() {
  return (
    <section className={styles.hero} data-testid="hero-carousel">
      <div className={styles.heroGrid} aria-hidden="true" />

      <div className={`u-container-wide ${styles.heroInner}`}>
        <motion.p
          className={`type-meta ${styles.heroEyebrow}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          DAKOTA / EVOLUCIÓN VISUAL 2026
        </motion.p>

        <motion.h1
          className={`type-hero ${styles.heroTitle}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
        >
          <span className={styles.line}>DAKOTA</span>
          <span className={`${styles.line} ${styles.lineAccent}`}>ESTÁ EVOLUCIONANDO.</span>
        </motion.h1>

        <motion.p
          className={styles.heroLead}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.32 }}
        >
          Una identidad más actual, coherente y preparada para acompañar cada categoría de la marca.
        </motion.p>

        <motion.div
          className={styles.heroCta}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.44 }}
        >
          <Button href="#evolucion" size="lg">
            Conocer la propuesta
          </Button>
          <Button to="/dakota-move" variant="outline" size="lg">
            Ver Dakota Move
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function EvolutionSection() {
  return (
    <section id="evolucion" className={styles.section} aria-labelledby="evolucion-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="evolucion-heading"
          eyebrow="El punto de partida"
          title="Una marca reconocible. Un sistema que puede crecer."
        />
        <div className={styles.evolutionGrid}>
          <ul className={styles.points}>
            {evolutionPoints.map((point, index) => (
              <motion.li
                key={point}
                className={styles.point}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <span className={styles.pointIndex}>{String(index + 1).padStart(2, '0')}</span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div className={styles.comparison} aria-label="De la identidad base al sistema visual">
            {comparison.map((row) => (
              <div key={row.to} className={styles.comparisonRow}>
                <span className="type-meta">{row.from}</span>
                <Icon name="arrow-right" size={18} className={styles.comparisonArrow} />
                <span className="type-meta">{row.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section id="que-cambia" className={styles.section} aria-labelledby="que-cambia-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="que-cambia-heading"
          eyebrow="Qué vamos a evolucionar"
          title="Seis pilares de una misma identidad."
        />
        <div className={styles.pillarGrid}>
          {pillarIcons.map((pillar, index) => (
            <RepositoryCard
              key={pillar.title}
              index={index + 1}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              accent={pillar.accent}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function UniversesSection() {
  return (
    <section id="universos" className={styles.section} aria-labelledby="universos-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="universos-heading"
          eyebrow="Sistema de universos"
          title="Una misma Dakota. Nuevas formas de expresarla."
        />
        <div className={styles.universeGrid}>
          <UniverseCard universe={moveUniverse} state="active" index={1} />
          {upcoming.map((universe, index) => (
            <UniverseCard key={universe.id} universe={universe} state="upcoming" index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MoveFeaturedBanner() {
  return (
    <section className={styles.featured} data-testid="move-featured">
      <TrajectoryLines className={styles.featuredTrajectories} />
      <div className={`u-container-wide ${styles.featuredInner}`}>
        <div className={styles.featuredContent}>
          <DakotaMoveLockup height={34} light to="/dakota-move" />
          <h2 className={`type-section ${styles.featuredTitle}`}>
            Movete a tu manera.
          </h2>
          <p className={styles.featuredText}>
            Running, ciclismo y outdoor en una sola identidad activa.
          </p>
          <Button to="/dakota-move" ariaLabel="Explorar el universo Dakota Move">
            Explorar el universo
            <Icon name="arrow-right" size={16} />
          </Button>
        </div>
        <img
          src={portada}
          alt="Portada del universo Dakota Move"
          className={styles.featuredPanels}
          width={1254}
          height={1254}
          loading="lazy"
        />
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className={styles.closing} aria-labelledby="cierre-heading">
      <div className="u-container-wide">
        <motion.h2
          id="cierre-heading"
          className={`type-section ${styles.closingTitle}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          El primer paso de una identidad preparada para crecer.
        </motion.h2>
        <Button to="/dakota-move" size="lg" ariaLabel="Entrar a Dakota Move">
          Entrar a Dakota Move
          <Icon name="arrow-right" size={16} />
        </Button>
      </div>
    </section>
  )
}

export function EvolutionHome() {
  return (
    <>
      <GlobalHeader theme="home" />
      <main id="main">
        <Hero />
        <EvolutionSection />
        <PillarsSection />
        <UniversesSection />
        <MoveFeaturedBanner />
        <ClosingSection />
      </main>
      <GlobalFooter theme="home" />
    </>
  )
}
