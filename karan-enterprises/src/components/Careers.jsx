import { useState } from 'react'
import { COMPANY } from '../lib/data'
import { Reveal, Icon } from '../ui/ui'
import {
  SECTION, WRAP, SEC_EYEBROW, IDX, KICKER, H_SEC, LEAD, DOT, BTN_PRIMARY, BTN_DARK,
} from '../lib/cx'

// Careers inbox — applications are sent here (per the site brief).
const CAREERS_EMAIL = 'admin@karanenterprises.co'

const ROLES = [
  'Site Engineer', 'Project Manager', 'Surveyor', 'Site Supervisor',
  'Machine / Equipment Operator', 'Safety Officer', 'Accounts / Administration', 'Other',
]

const WHY = [
  'Work on railway, roadway and geotechnical infrastructure for PSU & government clients',
  'On-site experience with RDSO-aligned, industry-standard execution',
  'A growing team and modern machinery, delivering across eastern India',
]

const LABEL = 'font-display text-[12.5px] font-semibold uppercase tracking-[0.04em] text-steel'
const INPUT =
  'w-full rounded border border-line-2 bg-paper px-[15px] py-[13px] text-[15px] text-ink transition-[border-color,box-shadow] focus:border-yellow-deep focus:shadow-[0_0_0_3px_var(--yellow-soft)] focus:outline-none ' +
  'dark:border-line-2 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-steel-2 dark:focus:border-yellow dark:focus:shadow-[0_0_0_3px_rgba(255,214,10,0.22)]'

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: ROLES[0], experience: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Send the application straight to the careers inbox (no compose window).
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending' || status === 'sent') return
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CAREERS_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Job application — ${form.role}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Email: form.email,
          Phone: form.phone || '—',
          'Role applied for': form.role,
          Experience: form.experience || '—',
          'About the candidate': form.message || '—',
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={SECTION} id="careers">
      <div className={`${WRAP} grid grid-cols-2 items-start gap-[clamp(40px,6vw,80px)] max-[1024px]:grid-cols-1`}>
        <Reveal>
          <div className={`${SEC_EYEBROW} border-rule`}>
            <span className={IDX}>10</span><span className={KICKER}>Careers</span>
          </div>
          <h2 className={H_SEC}>Build your career<br />with us<i className={DOT}>.</i></h2>
          <p className={LEAD}>
            We are always looking for skilled, committed people to join our project teams. If you would
            like to work with M/s Karan Enterprises, send us your details and attach your CV — our team
            will get in touch.
          </p>

          <ul className="mt-[34px] flex list-none flex-col gap-4 [&_svg]:mt-0.5 [&_svg]:shrink-0">
            {WHY.map((p) => (
              <li key={p} className="flex items-start gap-[14px] text-[15px] text-ink-2 dark:text-on-dark">{Icon.check}<span>{p}</span></li>
            ))}
          </ul>

          <div className="mt-[34px] rounded border border-line bg-paper p-[22px] dark:border-glass-brd dark:bg-glass">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-steel">Prefer to email directly?</span>
            <a className="mt-2 flex items-center gap-2.5 font-display text-[15px] font-semibold text-ink dark:text-white [&_svg]:shrink-0" href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Job application')}`}>
              {Icon.mail}{CAREERS_EMAIL}
            </a>
            <p className="mt-2 text-[13px] leading-relaxed text-steel">Send your CV / resume to this address and mention the role you are applying for.</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="rounded bg-paper p-[clamp(28px,3vw,40px)] text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.18)] dark:bg-glass dark:shadow-glow-soft dark:[backdrop-filter:blur(14px)_saturate(130%)]"
            onSubmit={submit}
          >
            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="c-name">Full name</label>
                <input className={INPUT} id="c-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="c-email">Email</label>
                <input className={INPUT} id="c-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="c-phone">Phone</label>
                <input className={INPUT} id="c-phone" value={form.phone} onChange={set('phone')} placeholder="Mobile number" />
              </div>
              <div className="mb-4 flex flex-col gap-[7px]">
                <label className={LABEL} htmlFor="c-role">Role</label>
                <select className={`${INPUT} dark:[&_option]:bg-[#11161f] dark:[&_option]:text-white`} id="c-role" value={form.role} onChange={set('role')}>
                  {ROLES.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-[7px]">
              <label className={LABEL} htmlFor="c-exp">Experience</label>
              <input className={INPUT} id="c-exp" value={form.experience} onChange={set('experience')} placeholder="e.g. 5 years in railway formation" />
            </div>

            <div className="mb-4 flex flex-col gap-[7px]">
              <label className={LABEL} htmlFor="c-msg">About you</label>
              <textarea className={`${INPUT} min-h-[110px] resize-y`} id="c-msg" value={form.message} onChange={set('message')} placeholder="Tell us about your background, skills and current location…" />
            </div>

            <div className="mt-1.5">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`${BTN_PRIMARY} w-full justify-center disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Application sent' : <>Submit application {Icon.arrow}</>}
              </button>
            </div>
            {status === 'sent' ? (
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] font-semibold text-yellow-deep">{Icon.check} Thank you — we&apos;ve received your application.</p>
            ) : status === 'error' ? (
              <p className="mt-4 text-center text-[13px] text-red-500">Could not send. Please email your details to {CAREERS_EMAIL}.</p>
            ) : (
              <p className="mt-4 text-center text-[12.5px] text-steel">To include your CV, email it to {CAREERS_EMAIL} after submitting.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
