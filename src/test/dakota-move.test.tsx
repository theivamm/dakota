import { describe, it, expect } from 'vitest'
import { screen, within } from '@testing-library/react'
import { renderWithRouter } from '@/test/test-utils'
import { DakotaMove } from '@/pages/DakotaMove'

describe('DakotaMove', () => {
  it('aplica el tema move y el hero del universo', async () => {
    const { container } = renderWithRouter(<DakotaMove />, { route: '/dakota-move' })
    const page = await screen.findByTestId('move-page')
    expect(page.dataset.theme).toBe('move')
    expect(container.querySelector('[data-theme="move"]')).toBeTruthy()
  })

  it('muestra el headline y el CTA del hero', async () => {
    renderWithRouter(<DakotaMove />, { route: '/dakota-move' })
    const hero = await screen.findByTestId('move-hero')
    expect(within(hero).getByRole('heading', { level: 1 }).textContent).toContain('A TU MANERA')
    expect(screen.getByRole('link', { name: /Descubrir el sistema/i })).toBeTruthy()
  })

  it('incluye las secciones de sistema del universo', async () => {
    renderWithRouter(<DakotaMove />, { route: '/dakota-move' })
    expect(screen.getByText(/Montserrat, la voz de todo el sistema/i)).toBeTruthy()
    expect(screen.getByTestId('graphic-composition')).toBeTruthy()
    expect(screen.getByText(/El movimiento recién empieza/i)).toBeTruthy()
  })
})
