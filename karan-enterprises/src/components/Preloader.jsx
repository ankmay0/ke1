import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SHOT } from '../ui'

/* Light preloader. Home only, once per browser session.
   (Replaces the heavy black PPT-style loader that showed on every page.) */
export default function Preloader() {
  const seen = SHOT || (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('ke_loaded'))
  const [show, setShow] = useState(!seen)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    if (!show) return
    let v = 0
    const id = setInterval(() => {
      v = Math.min(100, v + Math.random() * 22 + 8)
      setPct(Math.round(v))
      if (v >= 100) {
        clearInterval(id)
        sessionStorage.setItem('ke_loaded', '1')
        setTimeout(() => setShow(false), 360)
      }
    }, 130)
    return () => clearInterval(id)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pl-inner">
            <img className="pl-logo" src="/assets/logo.png" alt="M/s Karan Enterprises" />
            <div className="pl-word">M/s Karan Enterprises</div>
            <div className="pl-bar"><motion.i animate={{ width: `${pct}%` }} transition={{ ease: 'linear' }} /></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
