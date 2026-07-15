import { COMPANY } from '../lib/data'
import { Icon } from '../ui/ui'
import { WRAP } from '../lib/cx'

const COMMITMENTS = ['Safety First', 'Quality Assured', 'Commitment Delivered', 'Building Tomorrow']

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-dark text-on-dark-mute dark:bg-[#05070c] dark:border-t dark:border-line"
      id="contact"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_38%_at_90%_0%,rgba(255,203,47,0.08),transparent_60%),radial-gradient(40%_30%_at_0%_100%,rgba(255,255,255,0.03),transparent_70%)]"
      />
      <div className={WRAP}>
        <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr] gap-10 py-[clamp(58px,7vw,94px)] max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
          <div>
            <img className="w-[76px]" src="/assets/logo.png" alt="M/s Karan Enterprises" />
            <div className="mt-4 font-display text-[22px] font-extrabold tracking-[-0.02em] text-white">
              <small className="block text-[11px] font-semibold tracking-[0.34em] text-on-dark-mute">M/S</small>
              Karan Enterprises
            </div>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.7]">
              A trusted railway and roadway infrastructure contractor delivering with precision,
              safety and proven execution since {COMPANY.since}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors hover:border-yellow hover:text-yellow [&_svg]:h-3.5 [&_svg]:w-3.5"
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener"
              >
                {Icon.linkedin} LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors hover:border-yellow hover:text-yellow [&_svg]:h-3.5 [&_svg]:w-3.5"
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener"
              >
                {Icon.instagram} Instagram
              </a>
            </div>
          </div>

          {[
            {
              h: 'Capabilities',
              items: [
                <a href="#services">Railway formation and track</a>,
                <a href="#services">Roads, drains and culverts</a>,
                <a href="#geotech">Slope and erosion protection</a>,
                <a href="#services">Transportation Activities</a>,
              ],
            },
            {
              h: 'Compliance',
              items: [
                `GSTIN - ${COMPANY.gstin}`,
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
              <h5 className="mb-[18px] font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white/84">
                {col.h}
              </h5>
              <ul className="flex list-none flex-col gap-[11px] text-[14px] leading-[1.55] [&_a:hover]:text-white dark:[&_a:hover]:text-yellow">
                {col.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>

              {col.h === 'Contact' && (
                <figure className="mt-5">
                  <div className="overflow-hidden rounded-xl border border-white/12 shadow-[0_22px_44px_-26px_rgba(0,0,0,0.75)]">
                    <iframe
                      title={`${COMPANY.name} — Ranchi, Jharkhand`}
                      src={`https://maps.google.com/maps?q=${COMPANY.mapLat}%2C${COMPANY.mapLng}&z=16&output=embed`}
                      className="block h-[150px] w-full border-0 grayscale-[0.2] contrast-[1.05] transition-[filter] duration-500 ease-out hover:grayscale-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <a
                    className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-yellow"
                    href={`https://www.google.com/maps/search/?api=1&query=${COMPANY.mapLat}%2C${COMPANY.mapLng}`}
                    target="_blank"
                    rel="noopener"
                  >
                    Get directions ↗
                  </a>
                </figure>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-[12px] border-y border-white/10 py-5">
          {COMMITMENTS.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-on-dark"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 py-6 text-[12.5px] leading-[1.5] text-on-dark-mute">
          <span>Copyright {COMPANY.since} - 2026 {COMPANY.name}. Infrastructure excellence across India.</span>
          <span>{COMPANY.location}</span>
        </div>
      </div>
    </footer>
  )
}
