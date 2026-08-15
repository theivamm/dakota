import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Restaura el scroll al cambiar de ruta (respeta anclas hash). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
