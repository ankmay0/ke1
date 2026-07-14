import { Magnetic } from '../Chrome'
import { Icon } from '../../ui/ui'
import { WRAP, BTN_PRIMARY, U, DOT } from '../../lib/cx'
import { COMPANY } from '../../lib/data'

/* ============================================================ CLOSER */
export function Closer() {
  return (
    <section className="relative py-[clamp(48px,6.5vw,104px)] text-center">
      <div className={`${WRAP} flex flex-col items-center`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-steel-2">That's all for now</span>
        <h2 className="mt-5 max-w-[16ch] font-display text-[clamp(28px,4.4vw,58px)] font-black uppercase leading-[0.99] tracking-[-0.03em] text-ink dark:text-text">
          Have a <span className={U}>project</span> in mind<em className={DOT}>?</em>
        </h2>
        <p className="mt-5 max-w-[52ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.6] text-steel">
          Share your scope, block window and specifications — we respond with a capability brief and a
          phased execution plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Magnetic><a className={BTN_PRIMARY} href="/#quote">Begin a project {Icon.arrow}</a></Magnetic>
          <a className="font-mono text-[12px] uppercase tracking-[0.1em] text-steel underline decoration-yellow decoration-2 underline-offset-[6px] transition-colors hover:text-ink dark:hover:text-text" href={`tel:+${COMPANY.phoneRaw}`}>
            or call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
