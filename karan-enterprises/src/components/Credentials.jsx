import { COMPANY } from '../data'
import { Reveal } from '../ui'
import { SECTION, WRAP, SEC_EYEBROW, KICKER, CARD, ICON_CHIP } from '../cx'

/* Trust & Authority "proof" band — verifiable credentials shown as badges.
   Per UI/UX Pro Max: enterprise/government products lead with prominent
   trust signals (certifications, registrations, authorisations). */
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
    <section className={SECTION} id="credentials" aria-label="Credentials and compliance">
      <div className={WRAP}>
        <div className="mb-[38px] flex flex-wrap items-baseline justify-between gap-x-10 gap-y-[14px]">
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className="pr-[14px] font-mono text-[13px] font-bold tracking-[0.04em] text-yellow-deep">★</span><span className={KICKER}>Credentials You Can Verify</span>
          </div>
          <p className="max-w-[44ch] text-[clamp(15px,1.4vw,18px)] text-steel">Registered, compliant and authorised — every project executed to standard.</p>
        </div>

        <div className="grid grid-cols-4 gap-[18px] max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1">
          {CERTS.map((c, i) => (
            <Reveal as="article" variant="scale" key={c.value} delay={i * 0.08} className={`${CARD} flex items-center gap-4 p-[22px] hover:-translate-y-1`}>
              <span className={`${ICON_CHIP} h-[52px] w-[52px] shrink-0 [&_svg]:h-[26px] [&_svg]:w-[26px]`}>{c.icon}</span>
              <div className="flex min-w-0 flex-col gap-1">
                <b className="font-display text-[15.5px] font-bold leading-[1.2] text-ink dark:text-white">{c.value}</b>
                <span className="break-words text-xs leading-[1.35] text-steel">{c.label}</span>
              </div>
              <span className="absolute right-3.5 top-3.5 grid h-[18px] w-[18px] place-items-center text-yellow-deep dark:text-yellow [&_svg]:h-3.5 [&_svg]:w-3.5" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
