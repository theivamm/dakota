import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '@/App'

describe('App routing', () => {
  it('resuelve la ruta del universo preparada', async () => {
    render(
      <MemoryRouter initialEntries={['/universos/hogar']}>
        <App />
      </MemoryRouter>
    )
    expect(await screen.findByTestId('universe-page')).toBeTruthy()
  })
})
