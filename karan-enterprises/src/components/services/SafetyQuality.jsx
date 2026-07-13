import { Reveal, SectionHead, Icon } from '../../ui/ui'
import { PANEL_DARK, TECH_PANEL, CornerTicks } from '../../ui/tech'
import { WRAP, SECTION, LEAD, DOT, WM } from '../../lib/cx'
import { COMPANY, SAFETY_STANDARDS, COMPLIANCE } from '../../lib/data'

/* -------------------------------------------- 05 · SAFETY & QUALITY */
export function SafetyQuality() {
  return (
    <section className={SECTION} id="safety">
      <span className={WM} aria-hidden="true">05</span>
      <div className={WRAP}>
        <div className="max-w-[760px]">
          <SectionHead idx="05" kicker="Safety & quality assurance">
            Safety. Quality. Compliance<em className={DOT}>.</em>
          </SectionHead>
          <p className={LEAD}>
            Engineering infrastructure that meets the highest operational and regulatory standards — at
            every phase, on every site.
          </p>
        </div>

        <div className="mt-[clamp(28px,3vw,44px)] grid grid-cols-[0.82fr_1.18fr] items-start gap-[clamp(16px,1.6vw,24px)] max-[900px]:grid-cols-1">
          {/* compliance dossier — the section's trust marks made visual */}
          <Reveal className="min-[900px]:sticky min-[900px]:top-24">
            <aside className={`${PANEL_DARK} overflow-hidden rounded-[clamp(14px,1.6vw,20px)] p-[clamp(26px,2.6vw,38px)]`}>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-yellow-deep">Compliance dossier</span>
              <div className="mt-4 font-cond text-[clamp(23px,2.4vw,31px)] font-semibold leading-[1.05] text-white">{COMPANY.rdso}</div>
              <span className="mt-1.5 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-on-dark-mute">RDSO specification · railway formation</span>
              <ul className="mt-6 grid gap-0">
                {COMPLIANCE.map((c) => (
                  <li key={c} className="flex items-start gap-3 border-t border-line-dark py-3.5 text-[13.5px] leading-[1.4] text-on-dark">
                    <span className="mt-px shrink-0 [&_svg]:h-[17px] [&_svg]:w-[17px]">{Icon.check}</span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3.5 border-t border-line-dark pt-6">
                <img className="h-9 w-auto" src="/assets/maccaferri-logo.png" alt="Maccaferri" />
                <span className="font-mono text-[10px] uppercase leading-[1.5] tracking-[0.1em] text-on-dark-mute">Authorised applicator · since {COMPANY.since}</span>
              </div>
            </aside>
          </Reveal>

          {/* four assurance standards */}
          <div className="grid grid-cols-2 gap-[clamp(14px,1.4vw,20px)] max-[560px]:grid-cols-1">
            {SAFETY_STANDARDS.map((s, i) => (
              <Reveal as="div" key={s.n} delay={i * 0.06} className="h-full">
                <article className={`${TECH_PANEL} group h-full p-[clamp(24px,2.2vw,34px)]`}>
                  <CornerTicks />
                  <div className="relative z-[1]">
                    <span className="font-cond text-[15px] font-semibold tracking-[0.06em] text-yellow-deep">/{s.n}</span>
                    <h4 className="mt-3 font-display text-[clamp(17px,1.6vw,21px)] font-bold dark:text-text">{s.title}</h4>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-steel">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
