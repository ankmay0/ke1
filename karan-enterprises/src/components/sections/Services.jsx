import { SERVICES } from '../../lib/data'
import { Reveal, SectionHead, Icon } from '../../ui/ui'
import { WRAP, SECTION, BTN_DARK } from '../../lib/cx'

export function Services() {
  return (
    <section className={SECTION} id="services">
      <div className={WRAP}>
        <div className="mb-[52px] grid grid-cols-[1fr_auto] items-end gap-[30px] max-[760px]:grid-cols-1">
          <SectionHead idx="02" kicker="Our Capabilities">
            Solutions engineered to perform
          </SectionHead>
          <Reveal delay={0.1}>
            <a className={BTN_DARK} href="#quote">Request a capability brief {Icon.arrow}</a>
          </Reveal>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[760px]:grid-cols-1">
          {SERVICES.map((s, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={s.title}
              delay={i * 0.08}
              className="group relative isolate flex min-h-[400px] items-end overflow-hidden rounded text-white transition-[transform,box-shadow] duration-[400ms] ease-smooth hover:-translate-y-[5px] hover:shadow-[0_30px_50px_-28px_rgba(0,0,0,0.5)] after:absolute after:inset-0 after:-z-[1] after:transition-[background] after:duration-[400ms] after:content-[''] after:[background:linear-gradient(0deg,rgba(14,18,23,0.96)_18%,rgba(14,18,23,0.55)_54%,rgba(14,18,23,0.12)_100%)] hover:after:[background:linear-gradient(0deg,rgba(14,18,23,0.97)_22%,rgba(20,40,30,0.55)_72%)] dark:shadow-glow-soft dark:[outline:1px_solid_var(--glass-brd)] dark:[outline-offset:-1px] dark:hover:shadow-[var(--glow-soft),var(--glow-y)]"
            >
              <img className="absolute inset-0 -z-[2] h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.07]" src={s.img} alt={s.title} loading="lazy" />
              <span className="absolute left-[18px] top-[18px] z-[1] rounded-[3px] bg-yellow px-[11px] py-[5px] font-cond text-[15px] font-semibold tracking-[0.06em] text-ink">{s.n}</span>
              <div className="p-6">
                <h3 className="font-display text-[21px] font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.5] text-white/[0.84]">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-[7px]">
                  {s.tags.map((t, ti) => (
                    <span
                      key={t}
                      className={`rounded-full border border-white/30 px-[11px] py-[5px] font-body text-[11px] font-semibold tracking-[0.03em] text-white transition-[background,color,border-color] duration-300 dark:border-white/[0.32] ${ti === 0 ? 'group-hover:border-yellow group-hover:bg-yellow group-hover:text-ink' : ''}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
