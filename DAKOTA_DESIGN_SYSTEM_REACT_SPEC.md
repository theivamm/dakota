# DAKOTA — Brand Evolution & Design System Web

## Brief de implementación para React

Construir una experiencia web premium, responsive y escalable que cumpla simultáneamente dos funciones:

1. Renovar el **Home institucional/comercial de Dakota** sin perder reconocimiento de marca.
2. Presentar **Dakota Move** como el primer universo visual especializado de la marca.
3. Funcionar como un **design system vivo y repositorio** para documentar colores, tipografías, iconografía, componentes, banners, fichas de producto, estados y versiones.
4. Permitir incorporar futuras categorías sin duplicar componentes ni crear micrositios inconexos.

La implementación debe sentirse diseñada a medida. Evitar una estética genérica de ecommerce, dashboard SaaS o plantilla de inteligencia artificial.

---

# 1. Principios no negociables

## Marca

- Mantener el logotipo oficial de Dakota **sin redibujarlo ni alterar su geometría**.
- No inventar isotipos, flechas, monogramas ni símbolos deportivos alternativos.
- El personaje integrado en la letra `D`, el detalle de bicicleta, las proporciones y el espaciado son parte del activo oficial.
- En Dakota Move, agregar `MOVE` como descriptor secundario debajo del logo, nunca como reemplazo.
- El archivo del logo debe utilizarse como SVG o PNG oficial. No reconstruirlo con texto HTML.

## Tipografía

- **Montserrat es obligatoria y principal en todo el proyecto.**
- Utilizar Montserrat en navegación, headings, cuerpo, botones, promociones, precios y fichas.
- Fuente complementaria: **IBM Plex Mono**, exclusivamente para información de sistema: versiones, estados, códigos HEX, numeración, nombres de tokens y metadatos.
- IBM Plex Mono no debe aparecer en campañas comerciales ni sustituir a Montserrat.
- No utilizar Barlow Condensed, Bebas Neue, Oswald ni tipografías deportivas genéricas.

## Experiencia

- El Home debe conservar los colores institucionales y sentirse como una evolución reconocible del ecommerce actual.
- Dakota Move debe cambiar completamente de atmósfera al ingresar, pero seguir perteneciendo a Dakota.
- La transición entre ambos universos debe ser deliberada, elegante y clara.
- Mobile first, accesibilidad AA y rendimiento real.
- Animar solamente propiedades eficientes: `transform`, `opacity`, máscaras y variables CSS.
- Respetar `prefers-reduced-motion`.

---

# 2. Stack recomendado

- React 19 + TypeScript.
- Vite.
- React Router.
- CSS Modules o Tailwind con tokens CSS centralizados. Preferencia: CSS Modules + variables CSS para evitar clases improvisadas.
- Framer Motion para transiciones y entradas puntuales.
- Embla Carousel para carruseles accesibles.
- Lucide React solamente para iconos funcionales temporales.
- Iconografía final de categorías cargada desde SVG propios.
- Google Fonts o fuentes locales: Montserrat e IBM Plex Mono.
- ESLint + Prettier.
- Vitest + Testing Library.

No agregar un CMS en esta primera etapa. El contenido debe modelarse en archivos TypeScript para poder migrarlo más adelante.

---

# 3. Arquitectura de rutas

```txt
/
├── /                         Home Dakota
├── /universos                Mapa de universos
├── /universos/dakota-move    Landing inmersiva Dakota Move
├── /biblioteca               Repositorio general
│   ├── /fundamentos
│   ├── /color
│   ├── /tipografia
│   ├── /iconografia
│   ├── /componentes
│   ├── /banners
│   └── /fichas-producto
└── /move-lab                 Exploraciones y piezas en desarrollo
```

Para el MVP implementar primero:

- `/`
- `/universos/dakota-move`
- Preview funcional de `/biblioteca` dentro de Dakota Move.

Las rutas restantes pueden quedar preparadas con contenido `Próximamente`, sin enlaces rotos.

---

# 4. Estructura de carpetas

```txt
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
├── assets/
│   ├── brand/
│   ├── home/
│   ├── move/
│   ├── icons/
│   └── products/
├── components/
│   ├── brand/
│   ├── commerce/
│   ├── layout/
│   ├── repository/
│   └── ui/
├── data/
│   ├── categories.ts
│   ├── home-sections.ts
│   ├── move-system.ts
│   └── repository.ts
├── pages/
│   ├── HomePage/
│   ├── DakotaMovePage/
│   └── RepositoryPage/
├── styles/
│   ├── reset.css
│   ├── tokens.css
│   ├── typography.css
│   ├── themes.css
│   └── utilities.css
├── types/
│   └── brand-system.ts
└── main.tsx
```

---

# 5. Design tokens globales

Definir los tokens como variables CSS semánticas. Los componentes no deben consumir colores HEX directamente.

## 5.1 Colores institucionales Dakota

La paleta parte del manual y de la web actual. Validar los valores exactos contra los archivos fuente antes de producción.

```css
:root {
  /* Master brand */
  --dakota-blue-50: #f2f8fc;
  --dakota-blue-100: #e1f0f8;
  --dakota-blue-300: #acd1e6;
  --dakota-blue-500: #82b9d9;
  --dakota-blue-600: #649fc4;
  --dakota-blue-700: #477fa6;

  --dakota-gray-100: #eef1f3;
  --dakota-gray-300: #c8cdd1;
  --dakota-gray-500: #8a8d8f;
  --dakota-gray-700: #565b60;
  --dakota-ink: #17212b;

  /* Current commercial cues */
  --dakota-commerce-blue: #3888ed;
  --dakota-footer-blue: #24467f;
  --dakota-action-pink: #ff3f8f;
  --dakota-white: #ffffff;

  /* Neutral system */
  --surface-canvas: #f7f9fa;
  --surface-card: #ffffff;
  --border-subtle: #e4e9ec;
  --text-primary: #17212b;
  --text-secondary: #5f6972;
  --focus-ring: #246bfd;
}
```

El rosa comercial puede permanecer en botones de compra del ecommerce institucional durante la transición. No utilizarlo en Dakota Move.

## 5.2 Paleta Dakota Move

```css
[data-theme='move'] {
  --brand-primary: #82b9d9;
  --brand-primary-strong: #649fc4;
  --brand-ink: #10283a;
  --brand-ink-deep: #071b2b;
  --brand-coral: #f04444;
  --brand-lime: #c8f23d;
  --brand-white: #ffffff;
  --brand-mist: #eef3f5;

  --surface-canvas: #071b2b;
  --surface-section: #10283a;
  --surface-card: #ffffff;
  --text-primary: #ffffff;
  --text-secondary: #b9c8d2;
  --border-subtle: rgb(130 185 217 / 22%);
  --action-primary: #f04444;
  --action-primary-hover: #d93838;
  --focus-ring: #c8f23d;
}
```

### Proporción cromática Move

- 50–55% azul noche.
- 25–30% blanco o gris niebla.
- 10–12% celeste Dakota.
- 5–8% coral.
- Máximo 3–5% lima.

El lima comunica impulso, selección, estado activo o detalle. No debe convertirse en fondo dominante.

## 5.3 Categorías existentes

Mantener los colores actuales como referencia en el Home, pero normalizarlos mediante tokens:

```ts
type CategoryTheme = {
  id: string;
  name: string;
  slug: string;
  color: string;
  icon: string;
  universe?: string;
  status: 'legacy' | 'in-development' | 'approved';
};
```

No codificar estilos por nombre de categoría dentro de los componentes.

---

# 6. Tipografía y jerarquías

## Carga

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&display=swap');
```

En producción preferir fuentes locales para evitar CLS y dependencias externas.

## Roles tipográficos

```css
:root {
  --font-brand: 'Montserrat', system-ui, sans-serif;
  --font-system: 'IBM Plex Mono', ui-monospace, monospace;
}
```

### Escala fluida

```css
:root {
  --text-xs: clamp(0.72rem, 0.69rem + 0.12vw, 0.8rem);
  --text-sm: clamp(0.84rem, 0.8rem + 0.16vw, 0.95rem);
  --text-md: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
  --text-lg: clamp(1.2rem, 1.05rem + 0.55vw, 1.55rem);
  --text-xl: clamp(1.55rem, 1.25rem + 1vw, 2.25rem);
  --text-2xl: clamp(2rem, 1.45rem + 2vw, 3.5rem);
  --text-hero: clamp(3rem, 1.6rem + 5.5vw, 7.5rem);
}
```

### Jerarquías institucionales

- Hero Home: Montserrat 800, tracking `-0.045em`, line-height `0.98`.
- H1/H2: Montserrat 800.
- H3/cards: Montserrat 700.
- Cuerpo: Montserrat 400/500, line-height 1.55.
- Botones: Montserrat 700, no usar todo en mayúsculas salvo CTA corto.
- Precios: Montserrat 800 con números tabulares.

### Jerarquías Move

- Hero: Montserrat 900 italic opcional, mayúsculas, tracking `-0.065em`, line-height `0.86–0.92`.
- Titulares de sección: Montserrat 800, mayúsculas selectivas.
- Etiquetas deportivas: Montserrat 700 italic.
- No simular una fuente condensada deformando el texto con `scaleX`.
- Para lograr energía usar peso, cursiva, tracking, saltos de línea, máscaras y contraste de tamaño.
- IBM Plex Mono 500: `V1.0`, `SISTEMA 01`, estados, tokens y códigos HEX.

---

# 7. Espaciado, grilla y forma

## Espaciado

Utilizar una base de 4 px:

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-section: clamp(4.5rem, 8vw, 9rem);
}
```

## Contenedores

```css
:root {
  --container-wide: 1440px;
  --container-default: 1240px;
  --container-reading: 760px;
  --page-gutter: clamp(1rem, 4vw, 4rem);
}
```

- Desktop: grilla de 12 columnas.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Home institucional: bordes redondeados entre 14 y 24 px.
- Dakota Move: combinar esquinas suaves con cortes diagonales realizados con `clip-path` o máscaras.
- No abusar de cards. Usar cards únicamente cuando representen objetos consultables o interactivos.

---

# 8. Componentes base compartidos

## Layout

- `SiteHeader`
- `MobileNavigation`
- `MegaCategoryMenu`
- `AnnouncementBar`
- `PageContainer`
- `SectionHeader`
- `SiteFooter`
- `ThemeTransition`

## Marca

- `DakotaLogo`
- `DakotaMoveLockup`
- `UniverseBadge`
- `BrandStatus`

`DakotaMoveLockup` debe componer una imagen oficial del logo y el descriptor `MOVE`, nunca escribir `DAKOTA` como texto.

## Comercio

- `HeroCarousel`
- `CategoryRail`
- `ProductCard`
- `ProductRail`
- `OfferCountdown`
- `PromoBanner`
- `TrustBenefit`
- `ReviewBanner`
- `NewsletterBanner`

## Repositorio

- `SystemCard`
- `TokenSwatch`
- `TypeSpecimen`
- `IconGallery`
- `AssetPreview`
- `VersionTag`
- `StatusPill`
- `RepositoryFilters`
- `UsageRule`

## UI

- `Button`
- `IconButton`
- `Chip`
- `Tabs`
- `CarouselControls`
- `Tooltip`
- `Dialog`
- `Skeleton`

Todos los componentes deben soportar variantes por tema y estados de foco, hover, active, disabled y loading.

---

# 9. Página 1 — Home Dakota

## Objetivo

Evolucionar el Home actual manteniendo reconocimiento y orientación comercial. Mejorar jerarquía, aire, agrupación y navegación. No replicar la captura píxel por píxel.

## Problemas a resolver de la versión actual

- Exceso de secciones visualmente similares.
- Banners con estilos muy diferentes entre sí.
- Productos pequeños y con poca jerarquía.
- Muchas llamadas a la acción compitiendo.
- Espacios vacíos no intencionales.
- Iconografía de categorías poco consistente.
- Escala tipográfica demasiado pequeña en desktop.
- Falta de un sistema claro entre contenidos comerciales, confianza y categorías.

## Header

### Desktop

- Barra superior institucional de 36–40 px para mensajes de envío o financiación.
- Header principal blanco o azul Dakota muy claro, altura aproximada 72 px.
- Logo a la izquierda.
- Buscador como elemento central dominante.
- Acciones a la derecha: cuenta, favoritos y carrito.
- Botón `Categorías` abre mega menú.
- Header sticky al hacer scroll, con sombra mínima.

### Mobile

- Primera fila: menú, logo, cuenta y carrito.
- Segunda fila: buscador a ancho completo.
- No ocultar el acceso a categorías.

## Hero institucional

- Alto desktop: entre 520 y 620 px.
- Un mensaje principal por slide.
- Máximo dos CTA.
- Fotografía/producto con lectura clara.
- Textos HTML, no incrustados en la imagen.
- Fondo adaptativo por campaña.
- Indicadores, pausa y controles accesibles.

Copy base temporal:

```txt
Todo lo que te acompaña, en un mismo lugar.
Descubrí productos para tu casa, tus momentos y tu manera de moverte.
```

CTA:

- `Explorar categorías`
- `Ver ofertas`

## Navegación de categorías

- Ubicar inmediatamente después del hero.
- Desktop: grilla o rail de 8 categorías.
- Mobile: rail horizontal con snap.
- Cada categoría: icono consistente, nombre y color de referencia.
- Deportes debe mostrar un tratamiento especial discreto: badge `Nuevo universo` y link a Dakota Move.

Categorías iniciales:

- Hogar
- Bebés
- Mascotas
- Camping
- Deportes y fitness
- Electrónica
- Jardín
- Textil
- Herramientas

## Ofertas ganadoras

- Unificar countdown, producto destacado y rail en una misma sección.
- Fondo azul institucional.
- Card de apertura con nombre de campaña y reloj.
- 4 productos visibles desktop, 1.2 mobile.
- Evitar tarjetas extremadamente angostas.

## Universo destacado — Dakota Move

Este bloque es la puerta de transición hacia el nuevo sistema.

- Debe ocupar un ancho completo dentro del contenedor.
- Fondo azul noche.
- Logotipo Dakota oficial + descriptor MOVE.
- Imágenes de running, ciclismo y outdoor en cortes diagonales.
- Headline: `Movete a tu manera`.
- Texto: `Un nuevo universo para entrenar, pedalear, explorar y disfrutar el movimiento.`
- CTA: `Descubrir Dakota Move`.
- Al hacer hover, las imágenes se desplazan 8–12 px y las líneas de trayectoria reaccionan suavemente.
- En mobile apilar texto e imagen; no reducir todo el banner desktop.

## Bloques comerciales

Orden sugerido:

1. `Ofertas ganadoras`.
2. `Lo nuevo`.
3. `Dakota Move`.
4. `Elegidos para tu hogar`.
5. Banner de canal de difusión.
6. Beneficios de compra.
7. `La gente lo recomienda`.
8. Newsletter y footer.

No intercalar un banner cada tres productos. Cada bloque debe tener un propósito.

## Beneficios

Tres tarjetas consistentes:

- Envíos a todo el país.
- 30 días de garantía.
- Atención por WhatsApp.

Usar iconos lineales institucionales y textos breves.

## Footer

- Fondo `--dakota-footer-blue`.
- Newsletter en la parte superior.
- Columnas: Explorar, Servicios, Seguinos y Contacto.
- Logo oficial en blanco.
- Mejorar contraste y tamaño respecto de la web actual.

---

# 10. Página 2 — Dakota Move

## Objetivo

Crear una landing inmersiva que presente Deportes como el primer universo especializado de Dakota. Debe vender, inspirar y documentar el sistema.

Agregar `data-theme="move"` en el contenedor raíz de esta ruta. No cambiar tokens globales desde JavaScript.

## Header Move

- Inicialmente transparente sobre el hero.
- Logo Dakota oficial en versión clara, con `MOVE` debajo.
- Navegación: `Concepto`, `Categorías`, `Productos`, `Sistema`, `Move Lab`.
- CTA discreto: `Explorar productos`.
- Al hacer scroll se transforma en header azul noche sólido.
- Mantener acceso visible a `Volver a Dakota`.

## Hero Move

### Contenido

Eyebrow IBM Plex Mono:

```txt
UNIVERSO 01 / DEPORTES
```

H1 Montserrat 900:

```txt
MOVETE
A TU MANERA
```

Descripción:

```txt
Equipamiento para entrenar, pedalear, explorar y disfrutar cada forma de movimiento.
```

CTA:

- `Explorar el universo`
- `Ver el sistema`

### Dirección visual

- Altura mínima: `min(900px, 100svh)`.
- Fondo azul noche.
- Tres ventanas diagonales para running, ciclismo y outdoor.
- Líneas de trayectoria con SVG liviano.
- Puntos coral y lima como indicadores.
- En mobile utilizar una sola fotografía dominante y dos miniaturas; evitar tres columnas diminutas.

## Manifiesto

Headline:

```txt
No existe una sola forma de moverse.
```

Texto:

```txt
Dakota Move acompaña a quienes empiezan, vuelven, entrenan, juegan o salen a descubrir. El movimiento no exige un nivel: solamente un punto de partida.
```

Mostrar palabras activas en Montserrat 800 italic:

- Entrená.
- Pedaleá.
- Explorá.
- Jugá.
- Desplazate.

## Categorías Move

Crear seis tarjetas o paneles:

1. Fitness y entrenamiento.
2. Ciclismo.
3. Outdoor.
4. Deportes con pelota.
5. Movilidad.
6. Accesorios.

Cada tarjeta contiene:

- Icono SVG propio.
- Nombre.
- Descripción de una línea.
- Imagen editorial.
- Enlace.

En desktop se puede utilizar una grilla editorial asimétrica. En mobile, cards apiladas o rail accesible.

## Productos destacados

- Fondo blanco para generar descanso.
- Cards más amplias que en el Home.
- Fotografías limpias, fondo neutro.
- Mostrar máximo cuatro productos por vista.
- Etiquetas permitidas: `Nuevo`, `Más elegido`, `Para empezar`.
- No usar lima para descuentos; utilizar coral.

## Banner comercial Move

Estructura reutilizable:

- Lado izquierdo: logo, titular, beneficio y CTA.
- Lado derecho: producto grande + fotografía contextual.
- Máximo tres beneficios iconográficos.
- Variantes: fitness, ciclismo, outdoor y movilidad.

## Ficha de producto — Preview

Mostrar el sistema de galería como demostración:

1. Producto sobre blanco.
2. Presentación del producto.
3. Tres beneficios.
4. Medidas técnicas.
5. Producto en uso.
6. Contenido del paquete.

Agregar CTA `Ver estructura de ficha` que abre un modal o navega a la biblioteca.

## Sección “Sistema Dakota Move”

Esta sección introduce la esencia de repositorio.

Cards:

- Color.
- Tipografía.
- Iconografía.
- Banners.
- Fichas de producto.
- Fotografía.

Cada card debe mostrar:

- Número.
- Nombre.
- Preview real.
- Estado.
- Versión.
- Acción `Abrir guía`.

Estados:

```ts
type AssetStatus = 'exploration' | 'review' | 'approved' | 'implemented';
```

Etiquetas visibles:

- Exploración.
- En revisión.
- Aprobado.
- Implementado.

## Move Lab

- Fondo azul más profundo.
- Muestra experimentos, comparativas y piezas en progreso.
- Separar con claridad elementos aprobados de pruebas.
- Cada entrada: miniatura, título, tipo, fecha, versión y estado.
- No permitir descargar activos en revisión.

## Cierre

Headline:

```txt
Tu próximo movimiento empieza acá.
```

CTA:

- `Explorar productos`.
- `Volver a Dakota`.

---

# 11. Sistema de repositorio escalable

Modelar cada universo mediante configuración, no páginas duplicadas.

```ts
export type UniverseConfig = {
  id: string;
  slug: string;
  name: string;
  categoryName: string;
  tagline: string;
  description: string;
  version: string;
  status: AssetStatus;
  theme: {
    primary: string;
    ink: string;
    action: string;
    accent: string;
    surface: string;
  };
  typography: {
    primary: 'Montserrat';
    metadata: 'IBM Plex Mono';
  };
  categories: UniverseCategory[];
  assets: RepositoryAsset[];
};

export type RepositoryAsset = {
  id: string;
  universeId: string;
  type:
    | 'color'
    | 'typography'
    | 'icon'
    | 'banner'
    | 'product-sheet'
    | 'social'
    | 'photography';
  name: string;
  description: string;
  status: AssetStatus;
  version: string;
  previewUrl: string;
  downloadUrl?: string;
  updatedAt: string;
  tags: string[];
};
```

Futuras categorías deben poder agregarse creando:

1. Un nuevo `UniverseConfig`.
2. Sus tokens de tema.
3. Sus activos.
4. Sus contenidos.

No duplicar `DakotaMovePage.tsx` para cada universo. Crear un `UniversePage` configurable y permitir excepciones solamente cuando estén justificadas.

---

# 12. Interacciones y motion system

## Home

- Hover de cards: elevación máxima 4 px y sombra suave.
- CategoryRail: icono asciende 2 px y cambia el fondo.
- ProductCard: imagen escala hasta 1.03.
- Hero: transiciones de 600–800 ms.
- Evitar autoplay agresivo. Pausar al interactuar.

## Move

- Entrada del hero: máscara horizontal y desplazamiento de 24 px.
- Fotografías diagonales: parallax máximo de 12 px.
- Trayectorias SVG: animación de `stroke-dashoffset` una vez.
- Titulares: revelar por línea, no letra por letra.
- Cards del sistema: preview cambia con hover, sin efectos 3D exagerados.
- Transición desde Home a Move: overlay azul noche de 450–600 ms.

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 13. Responsive

Breakpoints orientativos:

```css
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

No escribir la experiencia desktop y luego encogerla.

## Reglas mobile

- Target táctil mínimo: 44x44 px.
- Texto mínimo: 16 px en contenido.
- Header no debe superar 128 px incluyendo buscador.
- Hero Home entre 520 y 680 px según contenido.
- Hero Move utiliza `100svh` con contenido legible sin scroll horizontal.
- Rail de productos con `scroll-snap` y controles accesibles.
- Las grillas del repositorio pasan a una columna.
- Los filtros del repositorio se convierten en sheet/modal.
- Ocultar decoración antes que contenido.

---

# 14. Accesibilidad

- Cumplir WCAG 2.2 AA.
- Contraste mínimo 4.5:1 para texto normal.
- No comunicar estados solamente por color.
- Todos los controles con foco visible.
- Carruseles operables por teclado.
- Botón para pausar autoplay.
- `alt` descriptivo para productos; `alt=""` para decoración.
- Headings en orden lógico.
- `aria-current` en navegación.
- Dialogs con focus trap y cierre por Escape.
- Íconos decorativos con `aria-hidden="true"`.

---

# 15. Performance

- Imágenes AVIF/WebP con `srcset`.
- Reservar dimensiones para evitar CLS.
- Hero crítico con preload; resto lazy.
- SVG inline solamente cuando requiera interacción.
- Dividir por rutas con `React.lazy`.
- No cargar la galería completa del repositorio en el Home.
- Objetivos Lighthouse:
  - Performance ≥ 90.
  - Accessibility ≥ 95.
  - Best Practices ≥ 95.
  - SEO ≥ 90.
- LCP < 2.5 s en conexión móvil razonable.

---

# 16. Datos temporales y activos

Crear placeholders claramente identificados para:

- Logo oficial Dakota.
- Variantes autorizadas del logo.
- Fotografías institucionales.
- Fotografías de Dakota Move.
- Iconografía final.
- Productos y especificaciones reales.
- Banners aprobados.

No inventar precios, medidas, descuentos, garantías ni beneficios comerciales en la implementación final.

Mantener todo el contenido temporal en `data/` y agregar comentario `TODO: replace with approved content`.

---

# 17. Criterios de aceptación

## Home

- Se reconoce inmediatamente como Dakota.
- Usa paleta institucional.
- Mejora jerarquía y legibilidad de la web actual.
- El acceso a categorías y búsqueda es prioritario.
- Dakota Move aparece como universo destacado, no como publicidad aislada.
- No existen espacios vacíos accidentales ni rails con una sola card perdida.

## Dakota Move

- El logo Dakota está intacto.
- `MOVE` funciona como descriptor secundario.
- Montserrat es claramente la fuente protagonista.
- La página cambia de atmósfera sin perder continuidad de marca.
- Running, ciclismo y outdoor conviven sin que una disciplina represente a todas.
- La sección de sistema se siente como un repositorio real.
- Los activos aprobados y experimentales están diferenciados.

## Código

- TypeScript sin errores.
- Sin colores hardcodeados dentro de componentes.
- Sin duplicación de layouts por categoría.
- Componentes accesibles y responsive.
- Tests mínimos para navegación, cambio de tema, carruseles y filtros.
- Build de producción exitoso.

---

# 18. Orden de implementación

## Sprint 1 — Fundamentos

1. Configurar React, Router, TypeScript y estilos.
2. Implementar tokens, tipografía y temas.
3. Crear componentes UI básicos.
4. Incorporar logo oficial sin modificarlo.
5. Crear datos configurables de universos.

## Sprint 2 — Home Dakota

1. Header y búsqueda.
2. Hero.
3. Navegación de categorías.
4. Rails de productos.
5. Bloque destacado Dakota Move.
6. Beneficios y footer.

## Sprint 3 — Dakota Move

1. Header temático.
2. Hero inmersivo.
3. Manifiesto.
4. Categorías.
5. Productos y banner.
6. Preview de fichas.
7. Sistema y Move Lab.

## Sprint 4 — Calidad

1. Responsive completo.
2. Accesibilidad.
3. Optimización de imágenes.
4. Animaciones y reduced motion.
5. Tests y build.

---

# 19. Instrucción final para OpenCode

Implementar primero la estructura visual y funcional con contenido temporal claramente separado de los activos finales. Priorizar fidelidad al sistema, responsive, accesibilidad y reutilización.

Antes de considerar terminada una sección:

1. Revisarla en 375 px, 768 px, 1280 px y 1536 px.
2. Verificar contraste y navegación por teclado.
3. Confirmar que Montserrat sea la tipografía principal.
4. Confirmar que el logo no haya sido reconstruido ni deformado.
5. Revisar que todos los colores provengan de tokens.
6. Confirmar que el mismo componente pueda reutilizarse en futuros universos.

El resultado debe sentirse como una evolución estratégica y comercial de Dakota, no como un cambio cosmético aislado.
