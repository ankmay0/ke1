import { GEO_CAPS } from '../../lib/data'
import { Reveal, GeoIcon } from '../../ui/ui'
import { WRAP, SECTION, SEC_EYEBROW, IDX, KICKER, H_SEC, LEAD, DOT, CARD, ICON_CHIP } from '../../lib/cx'

export function Geotech() {
  return (
    <section className={`${SECTION} pb-[clamp(20px,2.4vw,40px)]`} id="geotech">
      <div className={`${WRAP} grid grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(40px,6vw,90px)] max-[1024px]:grid-cols-1`}>
        <Reveal className="min-[1025px]:sticky min-[1025px]:top-[104px] min-[1025px]:self-start">
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>04</span><span className={KICKER}>Specialised Capability</span>
          </div>
          <h2 className={H_SEC}>Advanced Geotechnical Solutions</h2>
          <p className={LEAD}>
            Leveraging globally recognised geotechnical technologies and high-performance materials to
            deliver durable, sustainable and engineered solutions for complex infrastructure projects.
          </p>
          <div className="mt-[26px] inline-flex flex-col gap-[14px] rounded border border-line bg-paper p-[26px] dark:border-glass-brd dark:bg-glass dark:[backdrop-filter:blur(14px)_saturate(130%)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel">Powered by</span>
            <img className="w-[220px] max-w-full" src="/assets/maccaferri-logo.png" alt="Maccaferri Engineering Solutions" />
            <small className="text-[13px] leading-[1.5] text-steel">Authorised applicator of Maccaferri engineered systems — gabions, geocell, reinforced soil and erosion control.</small>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-[18px] max-[620px]:grid-cols-1">
          {GEO_CAPS.map((c, i) => (
            <Reveal
              as="article"
              variant="scale"
              key={c.title}
              delay={i * 0.06}
              className={`${CARD} group flex flex-col hover:-translate-y-1`}
            >
              {/* relevant field image — desaturated at rest, full colour on hover */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  className="h-full w-full object-cover grayscale-[0.4] brightness-[0.95] transition-[transform,filter] duration-[800ms] ease-smooth group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:brightness-100"
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                />
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,19,0)_40%,rgba(10,13,19,0.62)_100%)]" />
                <span className="absolute right-3 top-3 grid h-8 w-10 place-items-center bg-yellow font-cond text-[14px] font-semibold leading-none text-on-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className={`${ICON_CHIP} absolute bottom-3.5 left-4 h-[44px] w-[44px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] group-hover:bg-yellow dark:group-hover:bg-yellow-deep [&_svg]:h-[23px] [&_svg]:w-[23px]`}>{GeoIcon[c.icon]}</span>
              </div>
              <div className="flex flex-col p-[24px]">
                <h4 className="font-display text-[17px] font-bold">{c.title}</h4>
                <p className="mt-2.5 text-sm text-steel">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
