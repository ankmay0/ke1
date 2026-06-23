import { motion, useScroll, useSpring } from 'framer-motion'
import { useMagnetic } from '../motion'

/* Thin reading-progress bar pinned to the very top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[300] h-[3px] origin-[0_50%] bg-yellow shadow-[0_0_18px_rgba(255,214,10,0.9)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

/* Wraps an interactive element so it eases toward the cursor on hover. */
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useMagnetic({ strength })
  return (
    <span ref={ref} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </span>
  )
}
