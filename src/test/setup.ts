import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

class IntersectionObserverMock {
  root = null
  rootMargin = ''
  thresholds = []
  private callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    this.observe = this.observe.bind(this)
    this.unobserve = this.unobserve.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.takeRecords = this.takeRecords.bind(this)
  }

  observe(): void {
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    )
  }

  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

afterEach(() => {
  cleanup()
})
