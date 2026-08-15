import type { MediaTone } from './mediaPlaceholder'
import { mediaPlaceholder } from './mediaPlaceholder'

export type MediaAsset = {
  /** Si no hay src aprobado, se genera un placeholder identificado. */
  src?: string
  alt: string
  label: string
  detail?: string
  tone?: MediaTone
  aspect?: string
}

type MediaImageProps = {
  media: MediaAsset
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

/**
 * Imagen conceptual. Sin src aprobado renderiza un placeholder SVG marcado
 * (data-media="placeholder") para reemplazar luego por WebP/AVIF.
 * Lazy load excepto en el hero (priority).
 */
export function MediaImage({ media, className, width = 1200, height = 800, priority = false }: MediaImageProps) {
  const src =
    media.src ??
    mediaPlaceholder(media.label, media.detail ?? '', media.tone ?? 'light', width, height)

  return (
    <img
      src={src}
      alt={media.alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      data-media={media.src ? 'approved' : 'placeholder'}
      style={{ aspectRatio: `${width} / ${height}` }}
    />
  )
}
