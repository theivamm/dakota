import { motion } from 'framer-motion'
import { GlobalHeader } from '@/components/layout/GlobalHeader'
import { GlobalFooter } from '@/components/layout/GlobalFooter'
import { TrajectoryLines } from '@/components/ui/TrajectoryLines'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { StatusTag } from '@/components/ui/StatusTag'
import { ColorSwatch } from '@/components/repository/ColorSwatch'
import { TypographySpecimen } from '@/components/repository/TypographySpecimen'
import { IconPreview } from '@/components/repository/IconPreview'
import { ApplicationGallery } from '@/components/repository/ApplicationGallery'
import { moveUniverse } from '@/data/universes'
import heroDakotaMove from '@/assets/dakotamove/hero-dakota-move.png'
import portada from '@/assets/dakotamove/dakota-move-portada.png'
import bannerModulo02 from '@/assets/dakotamove/banner-modulo-02.png'
import styles from './DakotaMove.module.css'

function Hero() {
  return (
    <section className={styles.hero} data-testid="move-hero">
      <div className={styles.heroBackdrop} />
      <TrajectoryLines color="lime" className={styles.heroTrajectories} />
      <span className={`${styles.energy} ${styles.energyCoral}`} aria-hidden="true" />
      <span className={`${styles.energy} ${styles.energyLime}`} aria-hidden="true" />
      <span className={`${styles.energy} ${styles.energyBlue}`} aria-hidden="true" />

      <div className={`u-container-wide ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <motion.p
            className="type-meta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {moveUniverse.eyebrow}
          </motion.p>
          <h1 className={`type-hero ${styles.heroTitle}`}>
            <motion.span
              className={styles.heroLine}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            >
              {moveUniverse.heroHeadlineA}
            </motion.span>
            <motion.span
              className={`${styles.heroLine} ${styles.heroLineAccent}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
            >
              {moveUniverse.heroHeadlineB}
            </motion.span>
          </h1>
          <motion.p
            className={styles.heroText}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            {moveUniverse.heroText}
          </motion.p>
          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.42 }}
          >
            <Button href="#concepto" ariaLabel="Descubrir el sistema">
              Descubrir el sistema
              <Icon name="arrow-right" size={16} />
            </Button>
          </motion.div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrap}>
            <img
              src={heroDakotaMove}
              alt="Composición conceptual — Dakota Move"
              className={styles.heroImage}
              loading="eager"
              decoding="async"
            />
            {moveUniverse.heroMedia.map((media, index) => (
              <span
                key={media.id}
                className={`type-meta ${styles.heroImageTag} ${styles[`tagPos${index}`]}`}
              >
                {media.label}
              </span>
            ))}
          </div>

          <div className={styles.heroMobile}>
            <div className={styles.heroMain}>
              <img
                src={heroDakotaMove}
                alt="Composición conceptual — Dakota Move"
                className={styles.heroImageMain}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConceptSection() {
  return (
    <section id="concepto" className={styles.section} aria-labelledby="concepto-heading">
      <div className="u-container-wide">
        <div className={styles.conceptGrid}>
          <SectionHeading id="concepto-heading" eyebrow="Concepto" title={moveUniverse.concept.headline} />
          <div className={styles.conceptBody}>
            <p className={styles.conceptText}>{moveUniverse.concept.body}</p>
          </div>
        </div>
        <ul
          className={styles.words}
          style={{ backgroundImage: `url(${bannerModulo02})` }}
          aria-label="Palabras que definen el universo"
        >
          {moveUniverse.concept.words.map((word, index) => (
            <motion.li
              key={word}
              className={styles.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              {word}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PaletteSection() {
  return (
    <section id="color" className={styles.section} aria-labelledby="color-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="color-heading"
          eyebrow="Paleta"
          title="Seis colores con una función."
          description="Cada color cumple un rol dentro del sistema y se usa según su proporción: 50% azul noche, 30% claro, 12% celeste, 6% coral y 2% lima."
        />
        <div className={styles.paletteGrid}>
          {moveUniverse.colors.map((color, index) => (
            <ColorSwatch key={color.name} name={color.name} hex={color.hex} role={color.role} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TypographySection() {
  return (
    <section id="tipografia" className={styles.section} aria-labelledby="tipografia-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="tipografia-heading"
          eyebrow="Tipografía"
          title="Montserrat, la voz de todo el sistema."
        />
        <div className={styles.typeGrid}>
          <TypographySpecimen
            family="brand"
            weight={900}
            sample="MOVETE A TU MANERA"
            note="Titulares de máximo impacto, con tracking reducido."
            large
          />
          <TypographySpecimen
            family="brand"
            weight={700}
            sample="Entrená. Pedaleá. Explorá."
            note="Títulos de sección y llamados a la acción."
          />
          <TypographySpecimen
            family="brand"
            weight={400}
            sample="Una identidad preparada para cada forma de movimiento."
            note="Cuerpo de texto y lectura cotidiana."
          />
          <TypographySpecimen
            family="meta"
            weight={500}
            sample="UNIVERSO 01 / V1.0 / EN REVISION"
            note="Complementa, no reemplaza a Montserrat. Solo metadatos técnicos."
            className={styles.metaCard}
          />
        </div>
      </div>
    </section>
  )
}

function IconographySection() {
  return (
    <section id="iconografia" className={styles.section} aria-labelledby="iconografia-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="iconografia-heading"
          eyebrow="Iconografía"
          title="Un set conceptual, no una sola disciplina."
          description="Trazo uniforme, esquinas redondeadas y construcción geométrica. Disponibles en azul noche y blanco."
        />
        <div className={styles.iconGrid}>
          {moveUniverse.icons.map((icon, index) => (
            <IconPreview key={icon.name} name={icon.name} src={icon.src} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GraphicLanguageSection() {
  const { graphicLanguage } = moveUniverse
  return (
    <section className={styles.section} aria-labelledby="graphic-heading">
      <div className="u-container-wide">
        <div className={styles.graphicGrid}>
          <div>
            <SectionHeading
              id="graphic-heading"
              eyebrow={graphicLanguage.eyebrow}
              title={graphicLanguage.headline}
              description={graphicLanguage.body}
            />
          </div>
          <div className={styles.graphicComposition} data-testid="graphic-composition">
            <img
              src={portada}
              alt="Composición gráfica de Dakota Move"
              className={styles.graphicImage}
              width={1254}
              height={1254}
              loading="lazy"
            />
            <TrajectoryLines color="lime" className={styles.graphicTrajectories} />
            <span className={styles.graphicDot} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ApplicationsSection() {
  return (
    <section id="aplicaciones" className={styles.section} aria-labelledby="aplicaciones-heading">
      <div className="u-container-wide">
        <SectionHeading
          id="aplicaciones-heading"
          eyebrow="Aplicaciones"
          title="El sistema en piezas reales."
          description="Mockups conceptuales para cada canal. Las piezas se muestran como ejemplo de aplicación estética."
        />
        <div className={styles.galleryWrap}>
          <ApplicationGallery
            featured={moveUniverse.featuredApplication}
            secondaryBanner={moveUniverse.secondaryBanner}
            productGallery={moveUniverse.productGallery}
          />
        </div>
      </div>
    </section>
  )
}

function ClosingSection() {
  return (
    <section className={styles.closing} aria-labelledby="cierre-move-heading">
      <div className="u-container-wide">
        <motion.h2
          id="cierre-move-heading"
          className={`type-section ${styles.closingTitle}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {moveUniverse.closing.headline}
        </motion.h2>
        <p className={styles.closingText}>{moveUniverse.closing.body}</p>
        <StatusTag status={moveUniverse.status} />
        <div className={styles.closingCta}>
          <Button to="/" variant="outline" size="lg" ariaLabel="Volver a la evolución">
            Volver a la evolución
            <Icon name="arrow-up-right" size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export function DakotaMove() {
  return (
    <div data-theme="move" data-testid="move-page">
      <GlobalHeader theme="move" />
      <main id="main">
        <Hero />
        <ConceptSection />
        <PaletteSection />
        <TypographySection />
        <IconographySection />
        <GraphicLanguageSection />
        <ApplicationsSection />
        <ClosingSection />
      </main>
      <GlobalFooter theme="move" />
    </div>
  )
}
