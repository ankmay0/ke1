import { MISSION, VISION } from '../../lib/data'
import { Reveal } from '../../ui/ui'
import { WRAP, SECTION, SEC_EYEBROW, KICKER, CARD } from '../../lib/cx'

export function MissionVision() {
  const cards = [
    { ...MISSION, dark: false },
    { ...VISION, dark: true },
  ]
  return (
    <section className={SECTION} id="mission-vision">
      <div className={WRAP}>
        <Reveal>
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={KICKER}>Our purpose · Mission &amp; Vision</span>
          </div>
        </Reveal>

        <div className="mt-[clamp(26px,3vw,44px)] grid grid-cols-2 gap-6 max-[860px]:grid-cols-1">
          {cards.map((mv, i) => (
            <Reveal
              as="article"
              key={mv.label}
              delay={i * 0.12}
              className={`flex flex-col gap-5 rounded-[var(--radius)] border p-[clamp(24px,2.6vw,40px)] ${
                mv.dark
                  ? 'border-line bg-dark text-on-dark dark:border-glass-brd dark:bg-glass'
                  : `${CARD}`
              }`}
            >
              <div
                className={`flex items-center justify-between border-b pb-3 font-mono text-[11px] uppercase tracking-[0.18em] ${
                  mv.dark ? 'border-white/25' : 'border-line'
                }`}
              >
                <span className={`inline-flex items-center gap-2.5 font-medium ${mv.dark ? 'text-on-dark' : 'text-ink dark:text-text'}`}>
                  <i className="h-2 w-2 rounded-full bg-yellow shadow-[0_0_0_1px_currentColor]" />
                  {mv.label}
                </span>
                <span className={mv.dark ? 'text-on-dark-mute' : 'text-steel'}>{mv.n}</span>
              </div>

              <blockquote className={`font-body text-[clamp(18px,1.9vw,26px)] italic leading-[1.32] ${mv.dark ? 'text-on-dark' : 'text-ink-2 dark:text-text'}`}>
                {mv.quote.pre}
                <em className="bg-yellow px-1 font-medium not-italic text-on-accent [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {mv.quote.em}
                </em>
                {mv.quote.post}
              </blockquote>

              <ul
                className={`mt-auto flex list-none flex-wrap items-center gap-x-4 gap-y-2 border-t pt-4 font-mono text-[10.5px] uppercase tracking-[0.08em] ${
                  mv.dark ? 'border-white/25 text-on-dark-mute' : 'border-line text-steel'
                }`}
              >
                {mv.pillars.map((p, pi) => (
                  <li key={p} className="inline-flex items-center gap-4">
                    {pi > 0 && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" aria-hidden="true" />}
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
