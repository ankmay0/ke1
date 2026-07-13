import { Reveal, SectionHead } from '../../ui/ui'
import { WRAP, SECTION, LEAD, DOT } from '../../lib/cx'
import { PROJECT_GALLERY } from '../../lib/data'

/* ---------------------------------------------------- 03 · FIELD GALLERY */
export function Gallery() {
  return (
    <section className={`${SECTION} bg-surface dark:bg-transparent`} id="gallery">
      <div className={WRAP}>
        <SectionHead idx="03" kicker="From the field">
          On site<em className={DOT}>.</em>
        </SectionHead>
        <Reveal delay={0.05}>
          <p className={LEAD}>Authentic imagery from our railway, slope-protection and roadway sites.</p>
        </Reveal>

        <div className="mt-[clamp(26px,3vw,44px)] grid grid-cols-4 auto-rows-[clamp(120px,13vw,188px)] gap-[clamp(8px,1vw,14px)] max-[860px]:grid-cols-3 max-[560px]:grid-cols-2">
          {PROJECT_GALLERY.map((g, i) => (
            <Reveal
              key={g.img}
              delay={(i % 4) * 0.05}
              variant="scale"
              className={`group relative overflow-hidden rounded-[8px] border border-rule dark:border-line ${i % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img src={g.img} alt={g.alt} loading="lazy" className="h-full w-full object-cover contrast-[1.04] transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.07]" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-2 p-3 font-mono text-[10.5px] leading-[1.35] text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">{g.alt}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
