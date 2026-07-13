import { TESTIMONIALS } from '../../lib/data'
import { Reveal, SectionHead } from '../../ui/ui'
import { WRAP, SECTION, CARD, DOT } from '../../lib/cx'

const initials = (name) =>
  name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase()

export function Testimonials() {
  return (
    <section className={SECTION} id="testimonials">
      <div className={WRAP}>
        <SectionHead idx="08" kicker="In their words" className="mb-[52px]">
          Trusted on the ground<em className={DOT}>.</em>
        </SectionHead>
        <div className="grid grid-cols-3 gap-5 max-[1024px]:grid-cols-1">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={i}
              delay={i * 0.1}
              className={`${CARD} flex flex-col gap-6 p-[40px_32px_30px] hover:-translate-y-[5px] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-yellow before:content-[''] after:absolute after:right-6 after:top-1 after:z-0 after:pointer-events-none after:font-display after:text-[150px] after:font-extrabold after:leading-none after:text-yellow after:opacity-[0.13] after:content-['\\201D'] dark:after:opacity-[0.12]`}
            >
              <p className="relative z-[1] flex-1 text-[16.5px] leading-[1.6] text-ink-2">{t.quote}</p>
              <figcaption className="flex items-center gap-[14px] border-t border-line pt-[22px]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-yellow font-display text-[15px] font-extrabold tracking-[0.02em] text-ink" aria-hidden="true">{initials(t.name)}</span>
                <span>
                  <b className="block font-display text-[15px] font-bold leading-[1.2] dark:text-white">{t.name}</b>
                  <span className="text-[13px] text-steel">{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
