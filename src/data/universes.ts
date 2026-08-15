/**
 * Modelo de universos.
 * La incorporación de una nueva categoría requiere datos y assets nuevos,
 * no reescribir la aplicación. El tipo `Universe` sigue la definición del spec.
 */

import bannerMercadoLibre from '@/assets/dakotamove/banner-mercado-libre.png'
import bannerSecundario from '@/assets/dakotamove/Banner-Secundario.png'
import ficha01 from '@/assets/dakotamove/fichamercadolibre/ficha-01.png'
import ficha02 from '@/assets/dakotamove/fichamercadolibre/ficha-02.png'
import ficha03 from '@/assets/dakotamove/fichamercadolibre/ficha-03.png'
import ficha04 from '@/assets/dakotamove/fichamercadolibre/ficha-04.png'

export type UniverseStatus = 'exploration' | 'review' | 'approved'

export type ColorSpec = { name: string; hex: string; role: string }
export type TypographySpec = { family: string; weight: number; role: string }
export type IconSpec = { name: string; src: string }
export type ApplicationSpec = { name: string; format: string; image: string }
export type ProductGallerySpec = { id: string; name: string; src?: string }

export type Universe = {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  status: UniverseStatus
  version: string
  colors: ColorSpec[]
  typography: TypographySpec[]
  icons: IconSpec[]
  applications: ApplicationSpec[]
}

/** Contenido de presentación extra de un universo (hero, concepto, cierre). */
export type UniversePresentation = Universe & {
  eyebrow: string
  heroHeadlineA: string
  heroHeadlineB: string
  heroText: string
  heroMedia: Array<{ id: string; label: string; detail: string }>
  concept: { headline: string; body: string; words: string[] }
  graphicLanguage: {
    eyebrow: string
    headline: string
    body: string
    labels: string[]
  }
  featuredApplication?: { title: string; format: string; src: string }
  secondaryBanner?: { title: string; format: string; src: string }
  productGallery?: { title: string; items: ProductGallerySpec[] }
  closing: { headline: string; body: string }
}

export const universeStatusLabels: Record<UniverseStatus, string> = {
  exploration: 'Exploración',
  review: 'En revisión',
  approved: 'Aprobado',
}
export const moveUniverse: UniversePresentation = {
  id: 'move',
  slug: 'dakota-move',
  name: 'Dakota Move',
  category: 'Deportes',
  tagline: 'Movete a tu manera',
  description:
    'Una identidad activa, cercana y versátil para representar todas las formas de movimiento.',
  status: 'review',
  version: '1.0',
  eyebrow: 'UNIVERSO 01 / DEPORTES',
  heroHeadlineA: 'MOVETE',
  heroHeadlineB: 'A TU MANERA',
  heroText:
    'Una identidad activa, cercana y versátil para representar todas las formas de movimiento.',
  heroMedia: [
    { id: 'run', label: 'Running', detail: 'Composición 01' },
    { id: 'bike', label: 'Ciclismo', detail: 'Composición 02' },
    { id: 'trail', label: 'Outdoor', detail: 'Composición 03' },
  ],
  concept: {
    headline: 'No existe una sola forma de moverse.',
    body: 'Dakota Move representa a quienes empiezan, vuelven, entrenan, juegan o salen a descubrir. Una identidad que no habla solamente de rendimiento: habla de movimiento cotidiano.',
    words: ['Entrená.', 'Pedaleá.', 'Explorá.', 'Jugá.', 'Desplazate.'],
  },
  colors: [
    { name: 'Heritage Blue', hex: '#82B9D9', role: 'Color institucional del sistema' },
    { name: 'Deep Navy', hex: '#10283A', role: 'Base de superficies y fondos' },
    { name: 'Action Coral', hex: '#F04444', role: 'Acciones y energía puntual' },
    { name: 'Energy Lime', hex: '#C8F23D', role: 'Estados activos y detalles' },
    { name: 'Move Mist', hex: '#EEF3F5', role: 'Fondos y texturas claras' },
    { name: 'White', hex: '#FFFFFF', role: 'Contenido principal sobre navy' },
  ],
  typography: [
    { family: 'Montserrat', weight: 900, role: 'Titulares de máximo impacto' },
    { family: 'Montserrat', weight: 700, role: 'Títulos de sección y CTA' },
    { family: 'Montserrat', weight: 400, role: 'Cuerpo de texto y lectura' },
    { family: 'IBM Plex Mono', weight: 500, role: 'Metadatos, HEX, versiones' },
  ],
  icons: [
    { name: 'Fitness', src: 'fitness' },
    { name: 'Ciclismo', src: 'cycling' },
    { name: 'Outdoor', src: 'outdoor' },
    { name: 'Con pelota', src: 'ball' },
    { name: 'Movilidad', src: 'mobility' },
    { name: 'Accesorios', src: 'accessories' },
  ],
  applications: [
    { name: 'Post de Instagram', format: 'SOCIAL / 4:5', image: 'social' },
    { name: 'Historia', format: 'STORY / 9:16', image: 'story' },
    { name: 'Banner horizontal', format: 'BANNER / 3:1', image: 'wide' },
    { name: 'Iconografía aplicada', format: 'SISTEMA / V1.0', image: 'icons' },
    { name: 'Composición conceptual', format: 'SISTEMA / V1.0', image: 'composition' },
  ],
  featuredApplication: {
    title: 'Banner para Mercado Libre',
    format: 'BANNER / 1.91:1',
    src: bannerMercadoLibre,
  },
  productGallery: {
    title: 'Imágenes de producto',
    items: [
      { id: 'product-1', name: 'Producto 01', src: ficha01 },
      { id: 'product-2', name: 'Producto 02', src: ficha02 },
      { id: 'product-3', name: 'Producto 03', src: ficha03 },
      { id: 'product-4', name: 'Producto 04', src: ficha04 },
    ],
  },
  secondaryBanner: {
    title: 'Banner secundario',
    format: 'BANNER / 2:1',
    src: bannerSecundario,
  },
  graphicLanguage: {
    eyebrow: 'Lenguaje gráfico',
    headline: 'Piezas que se construyen con reglas.',
    body: 'Cortes diagonales, líneas de trayectoria, puntos de energía y etiquetas pequeñas organizan cada composición. El coral y el lima se usan con control para marcar ritmo, nunca como fondo dominante.',
    labels: ['DIAGONAL', 'TRAYECTORIA', 'ENERGÍA', 'ETIQUETA', 'GRADIENTE'],
  },
  closing: {
    headline: 'El movimiento recién empieza.',
    body: 'Dakota Move es el primer universo de un sistema visual preparado para seguir creciendo.',
  },
}

export const universes: Universe[] = [moveUniverse]
