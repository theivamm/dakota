import { describe, it, expect } from 'vitest'
import { screen, within } from '@testing-library/react'
import { renderWithRouter } from '@/test/test-utils'
import { EvolutionHome } from '@/pages/EvolutionHome'

describe('EvolutionHome', () => {
  it('renderiza el hero con el headline de la evolución', async () => {
    renderWithRouter(<EvolutionHome />)
    const hero = await screen.findByTestId('hero-carousel')
    expect(within(hero).getByRole('heading', { level: 1 }).textContent).toContain('ESTÁ EVOLUCIONANDO.')
  })

  it('expone las anclas principales', () => {
    renderWithRouter(<EvolutionHome />)
    expect(screen.getByRole('link', { name: /Conocer la propuesta/i })).toBeTruthy()
    expect(screen.getByRole('link', { name: /Ver Dakota Move/i })).toBeTruthy()
  })

  it('muestra el banner destacado de Dakota Move', async () => {
    renderWithRouter(<EvolutionHome />)
    const featured = await screen.findByTestId('move-featured')
    expect(within(featured).getByRole('heading', { level: 2 }).textContent).toContain('Movete a tu manera')
  })
})
