import { useState } from 'react'
import { ABOUT_CALLOUTS } from '../../lib/data'
import { Reveal, Icon } from '../../ui/ui'
import { useScrubScale } from '../../lib/motion'
import { TiltPlate } from '../../ui/fx'
import {
  WRAP, BTN_PRIMARY, SEC_EYEBROW, IDX, KICKER, H_SEC, LEAD, DOT, WM, WM_LEFT,
} from '../../lib/cx'

export function About() {
  const photo = useScrubScale({ from: 1.16, to: 1 })
  const [open, setOpen] = useState(null)
  return (
    <section className="relative z-[2] pt-[var(--sec)] pb-[clamp(12px,1.8vw,28px)]" id="about">
      <span className={`${WM} ${WM_LEFT}`} aria-hidden="true">01</span>
      <div className={`${WRAP} grid grid-cols-[1.05fr_0.95fr] items-start gap-[clamp(36px,5vw,80px)] max-[1024px]:grid-cols-1`}>
        <Reveal>
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>01</span><span className={KICKER}>About M/s Karan Enterprises</span>
          </div>
          <h2 className={H_SEC}>Integrated infrastructure,<br />delivered end to end<em className={DOT}>.</em></h2>
          <p className={LEAD}>
            Since 2013, M/s Karan Enterprises has executed railway formation, roadway and civil
            infrastructure for government bodies and PSUs — combining RDSO-grade engineering, a
            230-strong workforce and modern machinery to deliver safely and on schedule.
          </p>

          <ul className="mt-8 list-none border-t border-line">
            {ABOUT_CALLOUTS.map((c) => {
              const isOpen = open === c.n
              return (
                <li
                  key={c.n}
                  className={`border-b border-line transition-colors duration-300 ${isOpen ? 'dark:[background:linear-gradient(90deg,var(--glass),transparent)]' : ''}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : c.n)}
                    className="group flex w-full items-baseline gap-5 px-0.5 py-4 text-left transition-[padding-left] duration-300 ease-smooth hover:pl-2"
                  >
                    <span className={`shrink-0 font-cond text-sm tracking-[0.12em] transition-colors duration-300 ${isOpen ? 'text-yellow-deep' : 'text-yellow-deep/70 group-hover:text-yellow-deep'}`}>{c.n}</span>
                    <span className="flex-1 transition-colors duration-300">{c.text}</span>
                    <span
                      aria-hidden="true"
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-yellow-deep transition-all duration-300 ease-smooth ${isOpen ? 'rotate-180 border-yellow-deep bg-yellow-soft dark:bg-yellow dark:text-on-accent' : 'group-hover:border-yellow-deep'}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-[450ms] ease-smooth ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p
                        className={`pb-5 pl-[calc(0.5rem+1.25rem+1ch)] pr-6 text-sm leading-relaxed text-steel transition-all duration-500 ease-smooth ${isOpen ? 'translate-y-0 opacity-100 blur-0 delay-100' : 'translate-y-2 opacity-0 blur-[2px]'}`}
                      >
                        {c.detail}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <a className={`${BTN_PRIMARY} mt-[30px]`} href="#quote">Start a conversation {Icon.arrow}</a>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-0 max-[1024px]:mt-0">
          <span className="absolute right-[-16px] top-[-16px] -z-[1] h-[120px] w-[120px] rounded border-[3px] border-yellow dark:shadow-glow-y" />
          <TiltPlate strength={6}>
            <div className="relative aspect-[4/5] overflow-hidden rounded dark:shadow-glow-soft">
              <img ref={photo} className="h-full w-full object-cover" src="/assets/photo2.jpg" alt="Site engineer at a railway formation site" />
              <span aria-hidden="true" />
              <span className="font-mono">ON-SITE · RANCHI</span>
            </div>
          </TiltPlate>
          <div className="absolute bottom-7 left-[-22px] max-w-[230px] rounded bg-yellow px-6 py-5 text-ink shadow-[0_24px_50px_-20px_rgba(0,0,0,0.4)] dark:shadow-[var(--glow-y),0_24px_50px_-20px_rgba(0,0,0,0.7)] max-[760px]:left-0">
            <b className="block font-cond text-[40px] font-semibold leading-none">2013</b>
            <span className="text-[13px] font-semibold">Delivering India's rail &amp; road infrastructure since</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
