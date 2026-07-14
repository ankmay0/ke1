import { Reveal } from '../../ui/ui'
import { WRAP, U } from '../../lib/cx'
import { COMPANY, BLOG_POSTS } from '../../lib/data'

/* ============================================================== HEADER */
/* Compact editorial masthead — an eyebrow + oversized title on the left,
   baseline-aligned with a short standfirst and article count on the right,
   split by a yellow keyline. A faint watermark word anchors the band. */
export function BlogHeader() {
  return (
    <header className="relative isolate overflow-hidden border-b border-line bg-surface pb-[clamp(12px,1.4vw,20px)] pt-[clamp(14px,1.7vw,24px)] dark:border-glass-brd dark:bg-transparent">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[2%] -top-[18%] -z-[1] select-none font-cond text-[clamp(120px,20vw,240px)] font-bold uppercase leading-none tracking-[-0.04em] text-ink opacity-[0.035] dark:text-white dark:opacity-[0.05]"
      >
        Blog
      </span>

      <div className={WRAP}>
        <div className="grid grid-cols-[1fr_auto] items-end gap-x-[clamp(24px,4vw,64px)] gap-y-4 max-[720px]:grid-cols-1">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-steel">
              <span className="h-2 w-2 rounded-full bg-yellow dark:shadow-[0_0_8px_rgba(255,214,10,0.8)]" />
              The Blog · Field notes &amp; insights
            </span>
            <h1 className="mt-[clamp(5px,0.7vw,10px)] font-display text-[clamp(24px,3.4vw,44px)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-ink dark:text-text">
              Notes from the <span className={U}>field</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="max-w-[38ch] border-l-2 border-yellow pl-3.5 max-[720px]:border-l-0 max-[720px]:pl-0">
            <p className="text-[clamp(12.5px,1vw,14px)] leading-[1.5] text-steel">
              Reflections on building infrastructure that lasts — railway track works, slope protection and
              civil construction across India.
            </p>
            <span className="mt-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-steel-2">
              <b className="font-display text-[12px] font-extrabold not-italic text-yellow-deep">{BLOG_POSTS.length}</b>
              articles · Since {COMPANY.since}
            </span>
          </Reveal>
        </div>
      </div>
    </header>
  )
}
