import { COMPANY } from '../lib/data'
import { Reveal } from '../ui/ui'
import { WRAP, ICON_CHIP } from '../lib/cx'

/* Trust & Authority strip — verifiable credentials as a slim, unified band that
   sits quietly in the page flow between About and Services (rather than a tall
   boxed card section). Hairline dividers echo the site's other split-grid bands. */
const CERTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    value: 'RDSO Registered',
    label: COMPANY.rdso,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
    ),
    value: 'GSTIN Verified',
    label: COMPANY.gstin,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M14 3v5h5" /><path d="M8 14h6M8 17h4" /></svg>
    ),
    value: 'Indian Railway CM',
    label: 'Construction Manual compliant',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><path d="m9 13.5-1.5 7L12 18l4.5 2.5L15 13.5" /></svg>
    ),
    value: 'Maccaferri Authorised',
    label: 'Engineered geosynthetics applicator',
  },
]

export default function Credentials() {
  return (
    <section className="relative isolate z-[3] py-[clamp(6px,1vw,14px)] mb-[calc(-1*clamp(26px,3.4vw,56px))]" id="credentials" aria-label="Credentials and compliance">
      <div className={WRAP}>
        <Reveal>
          <div className="grid grid-cols-4 gap-px overflow-hidden rounded border border-line bg-line max-[880px]:grid-cols-2 max-[480px]:grid-cols-1 dark:border-glass-brd dark:bg-glass-brd">
            {CERTS.map((c) => (
              <div
                key={c.value}
                className="group flex items-center gap-3.5 bg-paper px-[clamp(18px,2vw,28px)] py-[clamp(15px,1.6vw,22px)] transition-colors duration-300 hover:bg-surface dark:hover:bg-glass-2"
              >
                <span className={`${ICON_CHIP} h-[42px] w-[42px] shrink-0 [&_svg]:h-[21px] [&_svg]:w-[21px]`}>{c.icon}</span>
                <div className="min-w-0">
                  <b className="block font-display text-[14px] font-bold leading-[1.15] text-ink dark:text-white">{c.value}</b>
                  <span className="block truncate text-[11.5px] leading-[1.3] text-steel">{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
