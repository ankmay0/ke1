import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* On every route change: scroll to the hash target if one is present
   (e.g. "/#quote"), otherwise jump to the top of the new page. Runs on the
   initial mount too, so a full-load deep link like "/#quote" still scrolls
   once React has rendered the target. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // wait for the page to paint before scrolling to the anchor
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
