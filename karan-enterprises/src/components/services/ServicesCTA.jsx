import { Link } from 'react-router-dom'
import { Magnetic } from '../Chrome'
import { Icon } from '../../ui/ui'
import { PANEL_DARK } from '../../ui/tech'
import { WRAP, BTN_PRIMARY, SEC_EYEBROW, H_SEC, U, DOT } from '../../lib/cx'
import { COMPANY } from '../../lib/data'

/* ------------------------------------------------------------- CTA */
export function ServicesCTA() {
  return (
    <section className="relative pb-[clamp(48px,7vw,110px)] pt-[clamp(8px,1vw,16px)]">
      <div className={WRAP}>
        <div className={`${PANEL_DARK} grid grid-cols-[1.2fr_0.9fr] items-center gap-[clamp(28px,4vw,64px)] rounded-[clamp(16px,2vw,28px)] p-[clamp(34px,4.4vw,68px)] max-[860px]:grid-cols-1`}>
          <div>
            <div className={`${SEC_EYEBROW} border-white/[0.28]`}>
              <span className="font-mono text-[13px] font-bold tracking-[0.04em] text-white">→</span>
              <span className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-on-dark-mute">Let's build</span>
            </div>
            <h2 className={`${H_SEC} max-w-[16ch] text-white`}>Ready to start a <span className={U}>build</span><em className={DOT}>?</em></h2>
            <p className="mt-5 max-w-[46ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.6] text-on-dark-mute">
              Share your scope, block window and specifications — we respond with a capability brief and a phased execution plan.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Magnetic className="w-full"><Link className={`${BTN_PRIMARY} w-full justify-between`} to="/contact">Begin a project {Icon.arrow}</Link></Magnetic>
            <a className="flex items-center justify-between gap-4 rounded-[12px] border border-white/[0.16] bg-white/[0.04] px-5 py-4 transition-[border-color,background] duration-300 ease-smooth hover:border-yellow hover:bg-white/[0.08]" href={`tel:+${COMPANY.phoneRaw}`}>
              <span className="flex items-center gap-3 text-white [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-yellow">{Icon.phone}
                <span className="font-display text-[15px] font-bold">{COMPANY.phone}</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-dark-mute max-[420px]:hidden">Call</span>
            </a>
            <a className="flex items-center justify-between gap-4 rounded-[12px] border border-white/[0.16] bg-white/[0.04] px-5 py-4 transition-[border-color,background] duration-300 ease-smooth hover:border-yellow hover:bg-white/[0.08]" href={`mailto:${COMPANY.emails[0]}`}>
              <span className="flex min-w-0 items-center gap-3 text-white [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:shrink-0 [&_svg]:text-yellow">{Icon.mail}
                <span className="truncate font-display text-[15px] font-bold">{COMPANY.emails[0]}</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-on-dark-mute max-[420px]:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
