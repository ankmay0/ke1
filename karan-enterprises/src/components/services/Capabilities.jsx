import { Reveal } from '../../ui/ui'
import { WRAP, SEC_EYEBROW, IDX, KICKER, H_SEC, LEAD, DOT } from '../../lib/cx'
import { SERVICES_FULL } from '../../lib/data'

/* ----------------------------------------------- 01 · CAPABILITIES */
/* The eight disciplines — Geotech-style layout (sticky intro column + a
   two-column grid) with Netflix-style image tiles: image-forward at rest with
   the title over a gradient, and on hover the tile scales and lifts while a
   dark info drawer slides up with the synopsis, genre-style tags and a play
   action. */
export function Capabilities() {
  return (
    <section className="relative pb-[clamp(28px,3.6vw,56px)] pt-[clamp(16px,2vw,32px)]">
      <div className={`${WRAP} grid grid-cols-[0.85fr_1.15fr] items-start gap-[clamp(40px,6vw,90px)] max-[1024px]:grid-cols-1`}>
        {/* sticky intro */}
        <Reveal className="min-[1025px]:sticky min-[1025px]:top-[104px] min-[1025px]:self-start">
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>01</span><span className={KICKER}>Core competencies</span>
          </div>
          <h2 className={H_SEC}>Eight core disciplines<em className={DOT}>.</em></h2>
          <p className={LEAD}>
            Each capability is delivered to specification — the same engineering discipline, safety
            culture and documentation our government and PSU clients rely on.
          </p>
          <div className="mt-[26px] inline-flex flex-col gap-[14px] rounded border border-line bg-paper p-[26px] dark:border-glass-brd dark:bg-glass dark:[backdrop-filter:blur(14px)_saturate(130%)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-steel">Delivering across</span>
            <div className="font-display text-[clamp(19px,1.8vw,24px)] font-extrabold leading-[1.1] text-ink dark:text-white">Eastern India</div>
            <small className="text-[13px] leading-[1.5] text-steel">Railway, roadway and geotechnical works executed across Jharkhand, Bihar and Chhattisgarh.</small>
          </div>
        </Reveal>

        {/* Netflix-style discipline tiles */}
        <div className="grid grid-cols-2 gap-[16px] max-[620px]:grid-cols-1">
          {SERVICES_FULL.map((s, i) => (
            <Reveal
              as="article"
              variant="fade"
              key={s.n}
              delay={Math.min(i * 0.05, 0.3)}
              className="group relative aspect-[16/10] overflow-hidden rounded-md bg-dark ring-1 ring-white/10 [scroll-snap-align:start] transition-[transform,box-shadow,ring-color] duration-[400ms] ease-smooth hover:z-20 hover:scale-[1.06] hover:shadow-[0_40px_70px_-24px_rgba(0,0,0,0.85)] hover:ring-white/25"
            >
              {/* thumbnail */}
              <img
                src={s.img}
                alt={s.short}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.4] brightness-[0.9] transition-[transform,filter] duration-[700ms] ease-smooth group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:brightness-100"
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,12,0.3)_0%,transparent_34%,rgba(6,8,12,0.82)_100%)]" />

              {/* rest — number badge + title */}
              <span className="absolute left-0 top-0 z-[2] grid h-8 w-10 place-items-center bg-yellow font-cond text-[14px] font-semibold leading-none text-on-accent">{s.n}</span>
              <h4 className="absolute inset-x-0 bottom-0 z-[1] line-clamp-2 p-4 font-display text-[clamp(15px,1.3vw,19px)] font-bold uppercase leading-[1.15] tracking-[-0.01em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.7)] transition-opacity duration-300 group-hover:opacity-0">
                {s.short}
              </h4>

              {/* hover info drawer */}
              <div className="absolute inset-x-0 bottom-0 z-[3] translate-y-full bg-gradient-to-t from-[#05070b] via-[#05070b]/95 to-transparent p-4 pt-8 opacity-0 transition-[transform,opacity] duration-[380ms] ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                <h4 className="line-clamp-1 font-display text-[15px] font-bold text-white">{s.short}</h4>
                <p className="mt-2 line-clamp-2 text-[11.5px] leading-[1.45] text-white/75">{s.desc}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-1.5 font-mono text-[9.5px] uppercase tracking-[0.06em] text-white/60">
                  {s.tags.slice(0, 3).map((t, idx) => (
                    <span key={t} className="flex items-center gap-1.5">{idx > 0 && <span aria-hidden="true" className="text-white/35">•</span>}{t}</span>
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
