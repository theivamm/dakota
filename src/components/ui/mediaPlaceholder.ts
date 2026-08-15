export type MediaTone = 'light' | 'navy' | 'coral' | 'lime'

const toneColors: Record<MediaTone, { bg: string; fg: string; line: string; soft: string }> = {
  light: { bg: '#eef3f5', fg: '#477fa6', line: '#82b9d9', soft: '#f5f8fa' },
  navy: { bg: '#10283a', fg: '#82b9d9', line: '#477fa6', soft: '#071b2b' },
  coral: { bg: '#f04444', fg: '#ffffff', line: '#c8f23d', soft: '#10283a' },
  lime: { bg: '#c8f23d', fg: '#071b2b', line: '#ffffff', soft: '#82b9d9' },
}

/**
 * Placeholder SVG inline para piezas conceptuales.
 * TODO: replace with approved content (WebP/AVIF).
 */
export function mediaPlaceholder(
  label: string,
  detail: string,
  tone: MediaTone,
  width: number,
  height: number,
): string {
  const c = toneColors[tone]
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="t d">`,
    `<title id="t">${escapeXml(label)}</title>`,
    `<desc id="d">Placeholder — reemplazar con pieza aprobada (WebP/AVIF).</desc>`,
    `<rect width="${width}" height="${height}" fill="${c.bg}"/>`,
    `<g stroke="${c.line}" stroke-width="2" opacity="0.4">`,
    `<line x1="0" y1="${height * 0.2}" x2="${width * 0.3}" y2="0"/>`,
    `<line x1="0" y1="${height * 0.6}" x2="${width * 0.55}" y2="0"/>`,
    `<line x1="${width}" y1="${height * 0.8}" x2="${width * 0.5}" y2="${height}"/>`,
    `</g>`,
    `<g font-family="IBM Plex Mono, ui-monospace, monospace" text-anchor="middle">`,
    `<text x="${width / 2}" y="${height / 2 - 4}" fill="${c.fg}" font-size="${Math.max(12, Math.round(width / 38))}" font-weight="500" letter-spacing="2">${escapeXml(label.toUpperCase())}</text>`,
    `<text x="${width / 2}" y="${height / 2 + 16}" fill="${c.soft}" font-size="${Math.max(10, Math.round(width / 52))}" letter-spacing="1">${escapeXml(detail)} · PLACEHOLDER</text>`,
    `</g>`,
    `</svg>`,
  ].join('')
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
