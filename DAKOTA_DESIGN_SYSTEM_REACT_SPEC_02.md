# DAKOTA — Landing de Evolución Visual

## Brief corregido para OpenCode

> IMPORTANTE: este proyecto **NO es una tienda online**, **NO es un ecommerce** y **NO debe replicar la web comercial actual de Dakota**.

El objetivo es construir una landing de presentación visual para mostrarle al cliente el rework estético propuesto para la marca Dakota.

La experiencia tendrá únicamente dos páginas:

1. **Home / Evolución Dakota:** explica qué se propone actualizar y presenta el sistema de universos.
2. **Dakota Move:** muestra la nueva dirección estética de Deportes mediante un banner principal, paleta, tipografías, iconografía y ejemplos visuales.

La web debe sentirse como una mezcla entre brand book digital, presentación creativa interactiva, repositorio visual y caso de estudio de diseño.

Debe ser sorprendente y premium, pero simple de navegar y fácil de ampliar cuando se diseñen otras categorías.

---

# 1. Alcance estricto

## Implementar

- Landing narrativa del rework de Dakota.
- Página visual Dakota Move.
- Navegación entre ambas páginas.
- Secciones para mostrar decisiones de diseño.
- Cards de paleta, tipografía, iconografía y aplicaciones.
- Galería de imágenes y piezas conceptuales.
- Animaciones sutiles.
- Estructura preparada para sumar futuros universos.

## No implementar

- Tienda, catálogo ni categorías comerciales.
- Carrito, checkout, precios o promociones.
- Buscador de productos.
- Fichas comerciales reales.
- Login, cuentas o favoritos.
- Integraciones con Mercado Libre.
- CMS, backend o panel administrativo.
- Descargas complejas de assets.

Las imágenes de productos, banners o posteos se muestran **solamente como ejemplos de aplicación estética**, dentro de mockups o galerías.

---

# 2. Reglas de marca

## Logo

- Mantener el logo oficial Dakota sin modificar su geometría.
- No redibujar letras ni crear un símbolo nuevo.
- No inventar flechas, monogramas o isotipos deportivos.
- En Dakota Move se puede agregar `MOVE` debajo del logo como descriptor secundario.
- `MOVE` nunca debe competir con `DAKOTA`.
- Usar el archivo oficial SVG o PNG; no reconstruir el logo con HTML.

## Tipografía

- **Montserrat debe ser la tipografía principal en toda la web.**
- Utilizar sus distintos pesos, tamaños, cursivas y espaciados para crear jerarquía.
- Fuente complementaria: **IBM Plex Mono**, únicamente para metadatos visuales: versiones, estados, códigos HEX, numeración y etiquetas del repositorio.
- No utilizar Bebas Neue, Barlow Condensed, Oswald ni otras fuentes deportivas.

---

# 3. Stack y rutas

- React + TypeScript.
- Vite.
- React Router.
- CSS Modules o CSS con variables.
- Framer Motion para animaciones puntuales.
- SVG propios para iconografía de marca.

Mantener el proyecto liviano. No instalar dependencias innecesarias.

```txt
/                   Home — Evolución Dakota
/dakota-move        Universo Deportes
```

Opcionalmente dejar preparada, pero no construir todavía, la ruta `/universos/:slug`.

---

# 4. Arquitectura mínima

```txt
src/
├── assets/
│   ├── brand/
│   ├── home/
│   └── move/
├── components/
│   ├── layout/
│   ├── repository/
│   └── ui/
├── data/
│   └── universes.ts
├── pages/
│   ├── EvolutionHome.tsx
│   └── DakotaMove.tsx
├── styles/
│   ├── reset.css
│   ├── tokens.css
│   ├── typography.css
│   └── themes.css
├── App.tsx
└── main.tsx
```

---

# 5. Sistema visual

## Colores institucionales Dakota

```css
:root {
  --dakota-blue: #82b9d9;
  --dakota-blue-dark: #477fa6;
  --dakota-gray: #8a8d8f;
  --dakota-ink: #17212b;
  --dakota-white: #ffffff;
  --dakota-mist: #eef3f5;
  --surface: #ffffff;
  --surface-soft: #f5f8fa;
  --text-primary: #17212b;
  --text-secondary: #64707a;
  --border: #e2e8ec;
}
```

El Home utiliza blanco, celeste Dakota, gris y azul profundo institucional.

## Colores Dakota Move

```css
[data-theme='move'] {
  --move-blue: #82b9d9;
  --move-navy: #10283a;
  --move-navy-deep: #071b2b;
  --move-coral: #f04444;
  --move-lime: #c8f23d;
  --move-white: #ffffff;
  --move-mist: #eef3f5;
  --surface: #071b2b;
  --surface-soft: #10283a;
  --text-primary: #ffffff;
  --text-secondary: #bdcbd4;
  --border: rgb(130 185 217 / 22%);
}
```

Proporción recomendada:

- 50% azul noche.
- 30% blanco o gris niebla.
- 12% celeste Dakota.
- 6% coral.
- 2% lima.

El lima es un detalle de impulso o estado activo, no un fondo dominante.

---

# 6. Tipografía

```css
:root {
  --font-brand: 'Montserrat', system-ui, sans-serif;
  --font-meta: 'IBM Plex Mono', ui-monospace, monospace;
}
```

## Jerarquías

- Hero: Montserrat 800 o 900.
- H2: Montserrat 700 u 800.
- H3: Montserrat 700.
- Cuerpo: Montserrat 400 o 500.
- Botones: Montserrat 700.
- Etiquetas y versiones: IBM Plex Mono 500.

Para dar energía en Dakota Move sin cambiar de tipografía:

- Usar Montserrat 900 y cursiva cuando corresponda.
- Reducir el tracking en titulares grandes.
- Utilizar saltos de línea fuertes.
- Contrastar tamaños extremos.
- Animar bloques o líneas completas, no letra por letra.
- No condensar artificialmente la fuente.

```css
--text-body: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
--text-card: clamp(1.2rem, 1.05rem + 0.5vw, 1.5rem);
--text-section: clamp(2rem, 1.4rem + 2vw, 3.75rem);
--text-hero: clamp(3.4rem, 1.8rem + 6vw, 8rem);
```

---

# 7. Componentes compartidos

- `GlobalHeader`
- `DakotaLogo`
- `DakotaMoveLockup`
- `PageTransition`
- `SectionHeading`
- `UniverseCard`
- `RepositoryCard`
- `ColorSwatch`
- `TypographySpecimen`
- `IconPreview`
- `ApplicationGallery`
- `StatusTag`
- `GlobalFooter`

No crear componentes de productos o ecommerce.

---

# 8. Página Home — Evolución Dakota

## Objetivo

Explicar la propuesta de renovación visual. El Home no vende productos: vende la visión del rework.

Debe conservar el ADN institucional mediante celeste, gris, blanco, Montserrat y el logo oficial.

## Header

- Logo Dakota.
- `La evolución`.
- `Qué cambia`.
- `Universos`.
- Botón `Descubrir Dakota Move`.

Header blanco o celeste muy claro, sticky y con sombra mínima.

## Hero

Eyebrow:

```txt
DAKOTA / EVOLUCIÓN VISUAL 2026
```

H1:

```txt
DAKOTA
ESTÁ EVOLUCIONANDO.
```

Texto:

```txt
Una identidad más actual, coherente y preparada para acompañar cada categoría de la marca.
```

CTA:

- `Conocer la propuesta`.
- `Ver Dakota Move`.

Visual:

- Fondo blanco o celeste Dakota muy claro.
- Logo oficial grande.
- Fragmentos de color, iconografía y grillas alrededor.
- Animación suave que sugiera construcción y evolución.
- No mostrar productos.

## El punto de partida

Headline:

```txt
Una marca reconocible. Un sistema que puede crecer.
```

Explicar de forma positiva:

- Dakota ya cuenta con una identidad reconocible.
- El nuevo trabajo organiza y amplía esa base.
- Cada categoría podrá desarrollar una personalidad propia.
- Todo seguirá formando parte de una misma Dakota.

Comparación conceptual:

```txt
DE IDENTIDAD BASE → A SISTEMA VISUAL
DE CATEGORÍAS AISLADAS → A UNIVERSOS
DE RECURSOS SUELTOS → A REGLAS CONSISTENTES
```

## Qué vamos a evolucionar

Crear seis cards:

1. Color.
2. Tipografía.
3. Iconografía.
4. Fotografía.
5. Composición.
6. Aplicaciones.

Cada card contiene número, nombre, descripción de una línea y micropreview.

## Sistema de universos

Headline:

```txt
Una misma Dakota.
Nuevas formas de expresarla.
```

Tarjetas:

- Dakota Move — Deportes — activo.
- Próximo universo — próximamente.
- Próximo universo — próximamente.

Solo Dakota Move es navegable.

## Dakota Move destacado

Banner inmersivo de ancho completo:

- Fondo azul noche.
- Logo Dakota + descriptor MOVE.
- Titular `Movete a tu manera`.
- Running, ciclismo y outdoor en cortes diagonales.
- Líneas de trayectoria.
- CTA `Explorar el universo`.

Este banner realiza la transición desde el Home institucional hacia Dakota Move.

## Cierre

```txt
El primer paso de una identidad preparada para crecer.
```

CTA `Entrar a Dakota Move` y footer mínimo con logo y versión del proyecto.

---

# 9. Página Dakota Move

## Objetivo

Mostrar la propuesta estética completa de Deportes. No vender productos ni simular una tienda.

Debe sentirse más intensa, dinámica y deportiva que el Home, manteniendo el logo Dakota y Montserrat.

## Header

- Fondo transparente sobre el hero.
- Logo Dakota + MOVE.
- Links ancla: Concepto, Color, Tipografía, Iconografía y Aplicaciones.
- Link `Volver a la evolución`.

## Hero / Banner principal

Eyebrow:

```txt
UNIVERSO 01 / DEPORTES
```

H1:

```txt
MOVETE
A TU MANERA
```

Texto:

```txt
Una identidad activa, cercana y versátil para representar todas las formas de movimiento.
```

Visual:

- Fondo azul noche.
- Running, ciclismo y outdoor en tres cortes diagonales.
- Logo oficial intacto con `MOVE` debajo.
- Detalles coral y lima.
- Trayectorias finas.
- Sin botones de compra.
- CTA ancla `Descubrir el sistema`.

## Concepto

Headline:

```txt
No existe una sola forma de moverse.
```

Texto:

```txt
Dakota Move representa a quienes empiezan, vuelven, entrenan, juegan o salen a descubrir. Una identidad que no habla solamente de rendimiento: habla de movimiento cotidiano.
```

Palabras destacadas:

- Entrená.
- Pedaleá.
- Explorá.
- Jugá.
- Desplazate.

## Paleta

Mostrar seis cards grandes:

- Heritage Blue — `#82B9D9`.
- Deep Navy — `#10283A`.
- Action Coral — `#F04444`.
- Energy Lime — `#C8F23D`.
- Move Mist — `#EEF3F5`.
- White — `#FFFFFF`.

Cada card muestra nombre, HEX, función y ejemplo de aplicación. IBM Plex Mono solo para HEX y etiquetas.

## Tipografía

Mostrar Montserrat como protagonista:

```txt
MONTSERRAT 900
MOVETE A TU MANERA
```

```txt
MONTSERRAT 700
Entrená. Pedaleá. Explorá.
```

```txt
MONTSERRAT 400
Una identidad preparada para cada forma de movimiento.
```

Mostrar IBM Plex Mono en una card pequeña:

```txt
IBM PLEX MONO 500
UNIVERSO 01 / V1.0 / APROBADO
```

Aclarar visualmente que complementa, pero no reemplaza a Montserrat.

## Iconografía

Mostrar un set conceptual:

- Fitness.
- Ciclismo.
- Outdoor.
- Deportes con pelota.
- Movilidad.
- Accesorios.

Características: trazo uniforme, esquinas redondeadas, construcción geométrica, versiones azul noche y blanca. No utilizar bicicleta como único símbolo de Deportes.

## Lenguaje gráfico

Mostrar una composición editorial con:

- Cortes diagonales.
- Líneas de trayectoria.
- Puntos de energía.
- Etiquetas pequeñas.
- Persona o producto atravesando la grilla.
- Uso controlado del coral y lima.

La sección explica cómo se construyen las piezas.

## Aplicaciones

Crear una galería visual, no funcional, con ejemplos:

- Banner institucional.
- Post de Instagram 4:5.
- Historia 9:16.
- Banner horizontal.
- Iconografía aplicada.
- Composición conceptual de una pieza.

Etiquetas:

- `SOCIAL / 4:5`.
- `STORY / 9:16`.
- `BANNER / 1.91:1`.
- `SISTEMA / V1.0`.

No agregar precios, carrito ni comportamiento ecommerce.

## Cierre

```txt
El movimiento recién empieza.
```

```txt
Dakota Move es el primer universo de un sistema visual preparado para seguir creciendo.
```

CTA `Volver a la evolución`.

---

# 10. Sensación de repositorio

La web debe tener esencia de repositorio sin convertirse en una herramienta compleja.

Utilizar numeración de secciones, tags de versión, estados visuales, cards ordenadas, códigos de color, nombres de activos y pequeños labels técnicos.

Estados permitidos:

- Exploración.
- En revisión.
- Aprobado.

No implementar usuarios, subidas, edición online, descargas masivas, versionado real ni filtros complejos.

---

# 11. Animaciones

- Transición Home → Move mediante overlay azul noche.
- Reveal suave de títulos por línea.
- Parallax máximo de 10–12 px en imágenes.
- Trayectorias SVG que se dibujan una vez.
- Cards que ascienden 3–4 px al hover.
- Swatches que expanden información al hover o click.
- Galería horizontal suave en mobile.

Evitar animaciones letra por letra, efectos 3D excesivos, cursores invasivos, movimiento permanente y scroll hijacking.

Respetar `prefers-reduced-motion`.

---

# 12. Responsive y calidad

- Desktop: grilla editorial de 12 columnas.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Hero Move mobile: una imagen principal y dos miniaturas.
- Paleta: 2 columnas en mobile.
- Aplicaciones: carrusel horizontal con scroll snap.
- Navegación mobile mediante menú simple.
- Nunca reducir el diseño desktop como una captura escalada.

Revisar en 375, 768, 1280 y 1536 px.

Calidad:

- WCAG AA.
- Contraste mínimo 4.5:1.
- Foco visible y navegación por teclado.
- Headings semánticos.
- Alt text relevante.
- Imágenes WebP/AVIF.
- Lazy load debajo del hero.
- TypeScript, lint y build sin errores.

---

# 13. Preparación para futuros universos

```ts
export type Universe = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: 'exploration' | 'review' | 'approved';
  version: string;
  colors: Array<{ name: string; hex: string; role: string }>;
  typography: Array<{ family: string; weight: number; role: string }>;
  icons: Array<{ name: string; src: string }>;
  applications: Array<{ name: string; format: string; image: string }>;
};
```

La futura incorporación de otra categoría debe requerir datos y assets nuevos, no reescribir toda la aplicación.

---

# 14. Orden de implementación

## Etapa 1

- Configurar React, Router y TypeScript.
- Incorporar Montserrat e IBM Plex Mono.
- Crear tokens, temas y componentes básicos.

## Etapa 2

- Construir Home de evolución.
- Implementar narrativa, cards y transición a Dakota Move.

## Etapa 3

- Construir Dakota Move.
- Hero, paleta, tipografía, iconografía, lenguaje gráfico y galería.

## Etapa 4

- Responsive, accesibilidad, motion, TypeScript, lint y build.

---

# 15. Prompt operativo para OpenCode

Leé este archivo completo antes de modificar código.

Construí únicamente una landing de presentación del rework visual de Dakota y la página Dakota Move descritas aquí.

No construyas una tienda, ecommerce, catálogo, carrito, checkout, buscador, fichas comerciales ni backend.

Los ejemplos de banners, posteos e imágenes deben aparecer solamente como aplicaciones visuales dentro de la presentación.

Antes de implementar:

1. Revisá el repositorio actual.
2. Indicá qué archivos crearás o modificarás.
3. Identificá los assets faltantes.
4. Confirmá que el alcance será solo `/` y `/dakota-move`.

Después implementá ambas páginas y verificá:

- Montserrat como tipografía principal.
- IBM Plex Mono solo como complemento técnico.
- Logo oficial sin alteraciones.
- Colores provenientes de tokens.
- Responsive completo.
- TypeScript, lint y build exitosos.

El resultado debe sentirse como una presentación estratégica, visual y sorprendente del nuevo sistema de marca, no como un sitio comercial.
