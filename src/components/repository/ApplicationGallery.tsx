import type { ProductGallerySpec } from '@/data/universes'
import { MediaImage } from '@/components/ui/MediaImage'
import styles from './ApplicationGallery.module.css'

type FeaturedApplication = { title: string; format: string; src: string }

type ApplicationGalleryProps = {
  featured?: FeaturedApplication
  secondaryBanner?: FeaturedApplication
  productGallery?: { title: string; items: ProductGallerySpec[] }
}

export function ApplicationGallery({ featured, secondaryBanner, productGallery }: ApplicationGalleryProps) {
  return (
    <div data-testid="application-gallery">
      {featured ? (
        <figure className={styles.featured}>
          <figcaption className={styles.caption}>
            <span className={styles.name}>{featured.title}</span>
            <span className={`type-meta ${styles.format}`}>{featured.format}</span>
          </figcaption>
          <div className={styles.featuredMedia}>
            <img src={featured.src} alt={`Ejemplo conceptual — ${featured.title}`} loading="lazy" />
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
            <img src={secondaryBanner.src} alt={`Ejemplo conceptual — ${secondaryBanner.title}`} loading="lazy" />
          </div>
        </figure>
      ) : null}
    </div>
  )
}
