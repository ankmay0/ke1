import { COMPANY } from '../data'
import { Icon } from '../ui'
import { WRAP } from '../cx'

const COMMITMENTS = ['Safety First', 'Quality Assured', 'Commitment Delivered', 'Building Tomorrow']

export default function Footer() {
  return (
    <footer
      className="bg-dark text-on-dark-mute dark:bg-[#05060a] dark:border-t dark:border-line"
      id="contact"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 py-[clamp(56px,7vw,90px)] border-b border-line-dark max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div>
            <img className="w-[74px]" src="/assets/logo.png" alt="M/s Karan Enterprises" />
            <div className="mt-4 font-display text-[20px] font-extrabold tracking-[0.02em] text-white">
              <small className="block text-[11px] font-semibold tracking-[0.34em] text-on-dark-mute">M/S</small>
              Karan Enterprises
            </div>
            <p className="mt-4 max-w-[34ch] text-sm">
              A trusted railway and roadway infrastructure contractor delivering with precision, safety and proven execution since {COMPANY.since}.
            </p>
            <a
              className="mt-1 inline-flex items-center gap-2.5 font-semibold text-white [&_svg]:h-[18px] [&_svg]:w-[18px]"
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener"
            >
              {Icon.linkedin} LinkedIn
            </a>
          </div>

          {[
            {
              h: 'Capabilities',
              items: [
                <a href="#services">Railway formation & track</a>,
                <a href="#services">Roads, drains & culverts</a>,
                <a href="#geotech">Slope & erosion protection</a>,
                <a href="#services">Ash transportation</a>,
              ],
            },
            {
              h: 'Compliance',
              items: [
                `GSTIN · ${COMPANY.gstin}`,
                COMPANY.rdso,
                'Indian Railways CM compliant',
                'Maccaferri Geocell authorised',
              ],
            },
            {
              h: 'Contact',
              items: [
                <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>,
                <a href={`mailto:${COMPANY.emails[0]}`}>{COMPANY.emails[0]}</a>,
                <a href={`mailto:${COMPANY.emails[1]}`}>{COMPANY.emails[1]}</a>,
                COMPANY.location,
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <h5 className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white">
                {col.h}
              </h5>
              <ul className="flex list-none flex-col gap-[11px] text-sm [&_a:hover]:text-white dark:[&_a:hover]:text-yellow">
                {col.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-[26px] pt-7">
          {COMMITMENTS.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-on-dark before:h-1.5 before:w-1.5 before:rounded-full before:bg-yellow before:content-['']"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 py-6 text-[13px]">
          <span>© {COMPANY.since}–2026 {COMPANY.name}. Infrastructure excellence across India.</span>
          <span>{COMPANY.location}</span>
        </div>
      </div>
    </footer>
  )
}
