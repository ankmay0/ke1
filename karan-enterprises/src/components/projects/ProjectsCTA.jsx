import { Reveal, Icon } from '../../ui/ui'
import { WRAP, BTN_PRIMARY } from '../../lib/cx'

/* ------------------------------------------------------------ CTA */
export function ProjectsCTA() {
  return (
    <section className="relative pb-[clamp(48px,7vw,110px)] pt-[clamp(8px,1vw,16px)]">
      <div className={WRAP}>
        <Reveal className="relative overflow-hidden rounded-[14px] border border-rule bg-dark px-[clamp(24px,4vw,64px)] py-[clamp(36px,5vw,72px)] text-on-dark dark:border-line">
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1] bg-grain [background-size:150px_150px] opacity-40 [mix-blend-mode:overlay]" />
          <div className="grid grid-cols-[1.1fr_auto] items-center gap-x-[clamp(24px,4vw,60px)] gap-y-8 max-[720px]:grid-cols-1">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-yellow"><span className="text-yellow-deep">/</span> Add your project to the record</span>
              <h2 className="mt-4 font-display text-[clamp(30px,4.2vw,56px)] font-black uppercase leading-[0.94] tracking-[-0.03em] text-white">
                Have a contract<br />to execute<em className="not-italic text-yellow">?</em>
              </h2>
              <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.35vw,18px)] leading-[1.6] text-on-dark">
                Railway sidings, formation, slope protection, roadways or civil works — talk to the team that delivers, certifies and signs off on time.
              </p>
            </div>
            <a className={`${BTN_PRIMARY} justify-self-start`} href="/#quote">Request a quote{Icon.arrow}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
