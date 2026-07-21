import { SectionHead, Reveal } from '../../ui/ui'
import { WRAP, SECTION, LEAD } from '../../lib/cx'
import { SITE_FILMS } from '../../lib/data'

/* ---------------------------------------------------- 04 · SITE FILMS
   Short clips from active sites, self-hosted and compressed to 720p. Each
   card shows a poster frame and only downloads the clip on play
   (preload="none"), inside the site's own card chrome. */
export function SiteFilms() {
  return (
    <section className={`${SECTION} bg-surface dark:bg-transparent`} id="films">
      <div className={WRAP}>
        <SectionHead idx="04" kicker="Watch the work">
          Site films
        </SectionHead>
        <Reveal delay={0.05}>
          <p className={LEAD}>Short clips from active sites — railway siding formation, block-work rehabilitation and slope protection.</p>
        </Reveal>

        <div className="mt-[clamp(26px,3vw,44px)] grid grid-cols-3 gap-[clamp(14px,1.6vw,22px)] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {SITE_FILMS.map((f, i) => (
            <Reveal
              key={f.id}
              delay={(i % 3) * 0.06}
              variant="scale"
              className="overflow-hidden rounded-[10px] border border-line bg-dark shadow-[0_30px_70px_-45px_rgba(0,0,0,0.7)] dark:border-glass-brd"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={f.src}
                  poster={f.poster}
                  controls
                  preload="none"
                  playsInline
                  title={f.title}
                />
              </div>
              <div className="flex items-center gap-2.5 p-4">
                <span className="font-cond text-[13px] text-yellow">/{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-[13.5px] font-semibold leading-snug text-white">{f.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
