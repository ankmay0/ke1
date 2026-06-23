import { useParallax } from '../motion'
import { Magnetic } from './Chrome'
import { Reveal, Icon } from '../ui'
import { WRAP, BTN_PRIMARY } from '../cx'

/* Full-bleed cinematic statement band with scroll-linked parallax —
   a second photographic "moment" mid-page that breaks the stacked-panel rhythm.
   Intentionally dark in both themes, so its colours are fixed. */
export default function Banner() {
  const bg = useParallax({ amount: 120 })
  return (
    <section
      className="relative isolate overflow-hidden bg-dark py-[clamp(90px,14vw,190px)] text-white after:absolute after:inset-0 after:-z-[1] after:content-[''] after:[background:linear-gradient(90deg,rgba(8,11,15,0.93)_0%,rgba(8,11,15,0.72)_46%,rgba(8,11,15,0.42)_100%),linear-gradient(0deg,rgba(8,11,15,0.6),rgba(8,11,15,0.28))] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:bg-grain before:opacity-[0.45] before:[background-size:160px_160px] before:[mix-blend-mode:overlay] before:content-['']"
      aria-label="Our commitment"
    >
      <div className="absolute inset-0 -z-[2] overflow-hidden">
        <img
          ref={bg}
          className="absolute left-0 top-[-15%] h-[130%] w-full object-cover object-[center_30%] will-change-transform"
          src="/assets/photo8.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className={`${WRAP} relative z-[1]`}>
        <Reveal>
          <span className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-yellow before:h-0.5 before:w-7 before:bg-yellow before:content-['']">
            Our Commitment
          </span>
          <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(28px,4.2vw,56px)] font-black uppercase leading-[1.0] tracking-[-0.03em] [text-shadow:0_4px_40px_rgba(0,0,0,0.4)]">
            Railway-grade execution.<br />
            <span className="relative after:absolute after:inset-x-0 after:bottom-[0.02em] after:h-[0.09em] after:bg-yellow after:content-['']">Every project, every time.</span>
          </h2>
          <p className="mt-[22px] max-w-[56ch] font-body text-[clamp(15px,1.4vw,19px)] leading-[1.6] text-white/[0.82]">
            From earthwork to commissioning, we hold every site to RDSO standards and the
            Indian Railway Construction Manual — delivered safely, on schedule, across India.
          </p>
          <Magnetic className="mt-8">
            <a href="#quote" className={BTN_PRIMARY}>Start a conversation {Icon.arrow}</a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
