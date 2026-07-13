import { CLIENTS } from '../../lib/data'
import { Reveal, SectionHead } from '../../ui/ui'
import { WRAP, SECTION, DOT } from '../../lib/cx'

export function Clients() {
  return (
    <section className={`${SECTION} pt-[clamp(12px,1.6vw,24px)]`} id="clients">
      <div className={WRAP}>
        <SectionHead idx="07" kicker="Major Clients · Trusted Partners">
          Relied upon by government &amp; PSU bodies<em className={DOT}>.</em>
        </SectionHead>

        {/* Cohesive white logo wall — the transparent-PNG client marks are
            dark artwork, so (like the marquee) they live on one white surface
            that reads identically in light and dark. A hairline blueprint grid
            frames each mark; full colour at rest so they stay recognisable
            everywhere (including mobile, where there is no hover). */}
        <Reveal
          delay={0.06}
          className="mt-[clamp(34px,4vw,52px)] overflow-hidden rounded-[var(--radius)] bg-white shadow-[0_40px_100px_-60px_rgba(0,0,0,0.6)] ring-1 ring-black/[0.06]"
        >
          <div className="grid grid-cols-4 border-l border-t border-black/[0.07] max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
            {CLIENTS.map((c, i) => (
              <article
                key={c.abbr}
                className="group relative flex flex-col border-b border-r border-black/[0.07] p-[clamp(24px,2.4vw,32px)] transition-colors duration-300 ease-out hover:bg-[#fffaea]"
              >
                {/* index numeral */}
                <span
                  aria-hidden="true"
                  className="absolute right-[clamp(18px,2vw,26px)] top-[clamp(16px,1.8vw,22px)] font-cond text-[13px] font-semibold tracking-[0.12em] text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* full-colour client mark, gently scaled on hover */}
                <div className="flex h-[70px] items-center justify-center">
                  <img
                    src={c.logo}
                    alt={c.full}
                    width="200"
                    height="70"
                    className="max-h-[100px] w-auto max-w-[85%] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* identity */}
                <div className="mt-[clamp(18px,2vw,26px)]">
                  <h3 className="font-display text-[22px] font-bold leading-[1.05] tracking-[-0.015em] text-[#0c1118]">
                    {c.abbr}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.45] text-[#5b6472]">{c.full}</p>
                </div>

                {/* top accent bar draws in on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-yellow transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
