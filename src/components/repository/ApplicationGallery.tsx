import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import type { ProductGallerySpec } from '@/data/universes'
import { MediaImage } from '@/components/ui/MediaImage'
import styles from './ApplicationGallery.module.css'

type FeaturedApplication = { title: string; format: string; src: string }

type LightboxItem = {
  src: string
  alt: string
  caption: string
  format?: string
}

type ApplicationGalleryProps = {
  featured?: FeaturedApplication
  secondaryBanner?: FeaturedApplication
  productGallery?: { title: string; items: ProductGallerySpec[] }
}

export function ApplicationGallery({ featured, secondaryBanner, productGallery }: ApplicationGalleryProps) {
  const [selected, setSelected] = useState<LightboxItem | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <div data-testid="application-gallery">
      {featured ? (
        <figure className={styles.featured}>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{featured.title}</span>
            <span className={`type-meta ${styles.format}`}>{featured.format}</span>
          </figcaption>
          <div className={styles.featuredMedia}>
            <button
              type="button"
              className={styles.mediaButton}
              onClick={() =>
                setSelected({
                  src: featured.src,
                  alt: `Ejemplo conceptual — ${featured.title}`,
                  caption: featured.title,
                  format: featured.format,
                })
              }
              aria-label={`Ampliar imagen — ${featured.title}`}
            >
              <img src={featured.src} alt={`Ejemplo conceptual — ${featured.title}`} loading="lazy" />
            </button>
          </div>
        </figure>
      ) : null}

      {productGallery ? (
        <section className={styles.productBlock} aria-labelledby="product-gallery-heading">
          <h3 id="product-gallery-heading" className={`type-meta ${styles.productTitle}`}>
            {productGallery.title}
          </h3>
          <ul className={styles.productGrid}>
            {productGallery.items.map((item) => (
              <li key={item.id} className={styles.productItem}>
                {item.src ? (
                  <button
                    type="button"
                    className={styles.mediaButton}
                    onClick={() =>
                      setSelected({
                        src: item.src ?? '',
                        alt: `Imagen de producto — ${item.name}`,
                        caption: item.name,
                        format: '1:1',
                      })
                    }
                    aria-label={`Ampliar imagen — ${item.name}`}
                  >
                    <MediaImage
                      media={{
                        src: item.src,
                        alt: `Imagen de producto — ${item.name}`,
                        label: item.name,
                        detail: '1:1',
                        tone: 'light',
                      }}
                      width={600}
                      height={600}
                    />
                  </button>
                ) : (
                  <MediaImage
                    media={{
                      alt: `Imagen de producto — ${item.name}`,
                      label: item.name,
                      detail: '1:1',
                      tone: 'light',
                    }}
                    width={600}
                    height={600}
                  />
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {secondaryBanner ? (
        <figure className={styles.featured}>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{secondaryBanner.title}</span>
            <span className={`type-meta ${styles.format}`}>{secondaryBanner.format}</span>
          </figcaption>
          <div className={styles.featuredMedia}>
            <button
              type="button"
              className={styles.mediaButton}
              onClick={() =>
                setSelected({
                  src: secondaryBanner.src,
                  alt: `Ejemplo conceptual — ${secondaryBanner.title}`,
                  caption: secondaryBanner.title,
                  format: secondaryBanner.format,
                })
              }
              aria-label={`Ampliar imagen — ${secondaryBanner.title}`}
            >
              <img src={secondaryBanner.src} alt={`Ejemplo conceptual — ${secondaryBanner.title}`} loading="lazy" />
            </button>
          </div>
        </figure>
      ) : null}

      {selected ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`Imagen ampliada — ${selected.caption}`}>
          <button
            type="button"
            className={styles.lightboxBackdrop}
            aria-label="Cerrar imagen ampliada"
            onClick={() => setSelected(null)}
          />
          <div className={styles.lightboxContent}>
            <img src={selected.src} alt={selected.alt} />
            <div className={styles.lightboxCaption}>
              <span className={styles.name}>{selected.caption}</span>
              {selected.format ? (
                <span className={`type-meta ${styles.format}`}>{selected.format}</span>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            className={styles.lightboxClose}
            aria-label="Cerrar"
            onClick={() => setSelected(null)}
            autoFocus
          >
            <Icon name="close" size={22} />
          </button>
        </div>
      ) : null}
    </div>
  )
}
