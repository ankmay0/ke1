import { useState } from 'react'
import { COMPANY } from '../lib/data'
import { Reveal, Icon } from '../ui/ui'
import { SECTION, SECTION_DARK, WRAP, SEC_EYEBROW, KICKER, LEAD, U, BTN_PRIMARY, BTN_DARK } from '../lib/cx'

const PROJECT_TYPES = [
  'Railway Formation', 'Track Maintenance', 'Roadway / Highway',
  'Reinforced Soil Wall / Gabion', 'Erosion & Slope Protection',
  'Ash Transportation', 'Civil / Building Works', 'Other',
]

const POINTS = [
  'Railway formation, rehabilitation & track maintenance',
  'Roadway, civil and geotechnical infrastructure',
  'Government / PSU contracting with RDSO-aligned execution',
]

const LABEL = 'font-display text-[12.5px] font-semibold uppercase tracking-[0.04em] text-steel'
const INPUT =
  'w-full rounded border border-line-2 bg-paper px-[15px] py-[13px] text-[15px] text-ink transition-[border-color,box-shadow] focus:border-yellow-deep focus:shadow-[0_0_0_3px_var(--yellow-soft)] focus:outline-none ' +
  'dark:border-line-2 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-steel-2 dark:focus:border-yellow dark:focus:shadow-[0_0_0_3px_rgba(255,214,10,0.22)]'

export default function Quote() {
  const [form, setForm] = useState({ name: '', org: '', type: PROJECT_TYPES[0], location: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Submit directly to the company inbox (no mail client / compose window).
  // FormSubmit's keyless AJAX endpoint emails the entry to COMPANY.emails[0].
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending' || status === 'sent') return
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${COMPANY.emails[0]}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Project enquiry — ${form.type}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Organisation: form.org || '—',
          'Project type': form.type,
          Location: form.location || '—',
          Requirement: form.message || '—',
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={`${SECTION} ${SECTION_DARK}`} id="quote">
      <div className={`${WRAP} grid grid-cols-2 items-start gap-[clamp(40px,6vw,80px)] max-[1024px]:grid-cols-1`}>
        <Reveal>
          <div className={`${SEC_EYEBROW} border-white/[0.28]`}>
            <span className="font-mono text-[13px] font-bold tracking-[0.04em] text-white">09</span>
            <span className={`${KICKER} text-on-dark-mute`}>Have a project requirement?</span>
          </div>
          <h2 className="mt-5 font-display text-[clamp(28px,4.2vw,54px)] font-black uppercase leading-[0.98] tracking-[-0.03em]">
            Tell us what <br />you're <span className={U}>building</span>
          </h2>
          <p className={`${LEAD} text-on-dark-mute`}>
            From railway formation to track maintenance and civil infrastructure, we deliver reliable
            solutions aligned with industry standards. Share your requirements and our team will respond
            with a tailored proposal.
          </p>

          <ul className="mt-[34px] flex list-none flex-col gap-4 [&_svg]:mt-0.5 [&_svg]:shrink-0">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-[14px] text-[15px] text-on-dark">{Icon.check}<span>{p}</span></li>
            ))}
          </ul>

          <div className="mt-[34px] flex flex-col gap-2.5 text-[15px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2.5 [&_a]:text-on-dark [&_b]:font-semibold [&_b]:text-white">
            <a href={`tel:${COMPANY.phoneRaw}`}>{Icon.phone}<b>{COMPANY.phone}</b></a>
            <a href={`mailto:${COMPANY.emails[0]}`}>{Icon.mail}<b>{COMPANY.emails[0]}</b></a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="rounded bg-paper p-[clamp(28px,3vw,40px)] text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] dark:shadow-glow-soft"
            onSubmit={submit}
          >
            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="q-name">Name</label>
                <input className={INPUT} id="q-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="q-org">Organisation</label>
                <input className={INPUT} id="q-org" value={form.org} onChange={set('org')} placeholder="Department / company" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="q-type">Project type</label>
                <select className={`${INPUT} dark:[&_option]:bg-[#11161f] dark:[&_option]:text-white`} id="q-type" value={form.type} onChange={set('type')}>
                  {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="q-loc">Location</label>
                <input className={INPUT} id="q-loc" value={form.location} onChange={set('location')} placeholder="State / district" />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-[7px]">
              <label className={LABEL} htmlFor="q-msg">Requirement</label>
              <textarea className={`${INPUT} min-h-[110px] resize-y`} id="q-msg" value={form.message} onChange={set('message')} placeholder="Briefly describe the scope, timeline and any specifications…" />
            </div>

            <div className="mt-1.5">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`${BTN_PRIMARY} w-full justify-center disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Enquiry sent' : <>Send enquiry {Icon.arrow}</>}
              </button>
            </div>
            {status === 'sent' ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] font-semibold text-yellow-deep">{Icon.check} Thank you — your enquiry has been sent to our team.</p>
            ) : status === 'error' ? (
              <p className="mt-4 text-center text-[13px] text-red-500">Could not send. Please email us directly at {COMPANY.emails[0]}.</p>
            ) : (
              <p className="mt-4 text-center text-[12.5px] text-steel">We typically respond within one business day.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
