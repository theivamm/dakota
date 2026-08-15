import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { PageTransition } from '@/components/layout/PageTransition'

export function renderWithRouter(
  ui: ReactElement,
  options: RenderOptions & { route?: string } = {}
) {
  const { route = '/', ...renderOptions } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <PageTransition />
      {ui}
    </MemoryRouter>,
    renderOptions
  )
}
