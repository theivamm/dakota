import { useEffect } from 'react'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { PageTransition } from '@/components/layout/PageTransition'
import { EvolutionHome } from '@/pages/EvolutionHome'
import { DakotaMove } from '@/pages/DakotaMove'

function UniversePlaceholder() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div data-testid="universe-page" style={{ paddingBlock: '6rem', textAlign: 'center' }}>
      <h1 className="type-section">Universo en construcción</h1>
      <p className="type-meta" style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
        DAKOTA / UNIVERSOS / {slug?.toUpperCase()}
      </p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <Routes>
        <Route path="/" element={<EvolutionHome />} />
        <Route path="/dakota-move" element={<DakotaMove />} />
        <Route path="/universos/:slug" element={<UniversePlaceholder />} />
      </Routes>
    </>
  )
}
