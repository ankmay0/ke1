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
          className="fixed inset-0 z-[9999] grid place-items-center bg-surface text-ink dark:bg-[#08090f] dark:text-white"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-[26px]">
            <img
              className="h-auto w-24 drop-shadow-[0_6px_14px_rgba(0,0,0,0.12)]"
              src="/assets/logo.png"
              alt="M/s Karan Enterprises"
            />
            <div className="font-display text-sm font-extrabold uppercase tracking-[0.02em] text-steel">
              M/s Karan Enterprises
            </div>
            <div className="h-[3px] w-[220px] overflow-hidden rounded-[2px] bg-line-2 dark:bg-white/10">
              <motion.i
                className="block h-full w-0 bg-yellow dark:shadow-[0_0_16px_rgba(255,214,10,0.9)]"
                animate={{ width: `${pct}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
