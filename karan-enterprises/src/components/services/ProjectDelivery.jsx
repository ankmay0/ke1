import { Reveal, SectionHead, Icon } from '../../ui/ui'
import { PANEL_DARK } from '../../ui/tech'
import { WRAP, U, DOT } from '../../lib/cx'
import { DELIVERY_PHASES, EXEC_STAGES } from '../../lib/data'

/* ------------------------------------------ 04 · PROJECT DELIVERY */
export function ProjectDelivery() {
  return (
    <section className="relative py-[clamp(40px,6vw,96px)]" id="process">
      <div className={WRAP}>
        <div className={`${PANEL_DARK} overflow-hidden rounded-[clamp(16px,2vw,28px)] p-[clamp(36px,4.5vw,72px)_clamp(24px,4vw,64px)] shadow-[0_60px_120px_-50px_rgba(14,18,23,0.65)]`}>
          {/* blueprint grid — gives the type-only framework panel a visual anchor
              and keeps the band reading as elevated even in dark theme */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-[1] opacity-60 [background-size:40px_40px] [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [mask-image:radial-gradient(120%_95%_at_82%_0%,#000_28%,transparent_74%)]"
          />
          <div className="relative max-w-[940px]">
            <SectionHead idx="04" kicker="Project execution framework" dark>
              Efficient planning. Expert execution. <span className={U}>Delivered with excellence</span><em className={DOT}>.</em>
            </SectionHead>
            <Reveal delay={0.1}>
              <p className="mt-[18px] max-w-[64ch] text-[clamp(15px,1.4vw,18px)] leading-[1.6] text-on-dark-mute">
                A streamlined approach that ensures safety, quality, timely delivery and seamless
                coordination at every stage — four planning phases, five execution gates.
              </p>
            </Reveal>
          </div>

          {/* four planning phases */}
          <div className="mt-[clamp(32px,3.5vw,52px)] grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 max-[760px]:grid-cols-1">
            {DELIVERY_PHASES.map((p) => (
              <div className="bg-dark p-[clamp(26px,2.6vw,42px)]" key={p.n}>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-on-dark-mute">— Phase {p.n}</span>
                <div className="mt-2 font-cond text-[clamp(40px,4vw,60px)] font-semibold leading-none text-yellow">{p.n}</div>
                <h3 className="mt-3 font-display text-[clamp(18px,1.8vw,23px)] font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-on-dark-mute">{p.desc}</p>
                <ul className="mt-5 grid gap-2.5">
                  {p.checks.map((ch) => (
                    <li key={ch} className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-on-dark">
                      <span className="mt-px shrink-0 [&_svg]:h-[18px] [&_svg]:w-[18px]">{Icon.check}</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* five execution stages — connected timeline */}
          <Reveal className="mt-[clamp(36px,4vw,64px)] border-t border-line-dark pt-[clamp(28px,3vw,40px)]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-yellow-deep">Execution stages</span>
            <div className="mt-7 grid grid-cols-5 gap-x-7 gap-y-10 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
              {EXEC_STAGES.map((e) => (
                <div className="relative border-t border-white/[0.14] pt-7" key={e.n}>
                  <span aria-hidden="true" className="absolute left-0 top-[-5px] h-[10px] w-[10px] rounded-full bg-yellow shadow-[0_0_12px_rgba(255,214,10,0.85)]" />
                  <span className="font-cond text-[clamp(30px,2.6vw,42px)] font-semibold leading-none text-yellow">{e.n}</span>
                  <h3 className="mt-3 font-display text-[15px] font-bold text-white">{e.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.5] text-on-dark-mute">{e.desc}</p>
                  <span className="mt-3.5 block font-mono text-[10px] uppercase tracking-[0.06em] text-steel-2">{e.tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
