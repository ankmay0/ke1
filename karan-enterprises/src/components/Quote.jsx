import { useState } from 'react'
import { COMPANY } from '../data'
import { Reveal, Icon } from '../ui'

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

export default function Quote() {
  const [form, setForm] = useState({ name: '', org: '', type: PROJECT_TYPES[0], location: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // build the message as plain text, then encode the whole thing exactly once
  const plainMessage = () =>
    `New project enquiry — M/s Karan Enterprises\n\n` +
    `Name: ${form.name || '-'}\n` +
    `Organisation: ${form.org || '-'}\n` +
    `Project type: ${form.type}\n` +
    `Location: ${form.location || '-'}\n` +
    `Requirement: ${form.message || '-'}`

  const toWhatsApp = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(plainMessage())}`, '_blank', 'noopener')
  }

  const toEmail = () => {
    const subject = encodeURIComponent(`Project enquiry — ${form.type}`)
    const body =
      `Name: ${form.name}\nOrganisation: ${form.org}\nProject type: ${form.type}\n` +
      `Location: ${form.location}\n\nRequirement:\n${form.message}`
    window.location.href = `mailto:${COMPANY.emails[0]}?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section section--dark quote" id="quote">
      <div className="wrap quote-grid">
        <Reveal>
          <div className="sec-eyebrow on-dark">
            <span className="idx">09</span><span className="kicker">Have a project requirement?</span>
          </div>
          <h2>Tell us what <br />you're <span className="u">building.</span></h2>
          <p className="lead">
            From railway formation to track maintenance and civil infrastructure, we deliver reliable
            solutions aligned with industry standards. Share your requirements and our team will respond
            with a tailored proposal.
          </p>

          <ul className="qpoints">
            {POINTS.map((p) => <li key={p}>{Icon.check}<span>{p}</span></li>)}
          </ul>

          <div className="quote-contact">
            <a href={`tel:${COMPANY.phoneRaw}`}>{Icon.phone}<b>{COMPANY.phone}</b></a>
            <a href={`mailto:${COMPANY.emails[0]}`}>{Icon.mail}<b>{COMPANY.emails[0]}</b></a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="qform" onSubmit={toWhatsApp}>
            <div className="row">
              <div className="field">
                <label htmlFor="q-name">Name</label>
                <input id="q-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="q-org">Organisation</label>
                <input id="q-org" value={form.org} onChange={set('org')} placeholder="Department / company" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="q-type">Project type</label>
                <select id="q-type" value={form.type} onChange={set('type')}>
                  {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="q-loc">Location</label>
                <input id="q-loc" value={form.location} onChange={set('location')} placeholder="State / district" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="q-msg">Requirement</label>
              <textarea id="q-msg" value={form.message} onChange={set('message')} placeholder="Briefly describe the scope, timeline and any specifications…" />
            </div>

            <div className="actions">
              <button type="submit" className="btn btn--primary">Discuss on WhatsApp {Icon.arrow}</button>
              <button type="button" className="btn btn--dark" onClick={toEmail}>Send by Email {Icon.arrow}</button>
            </div>
            <p className="fineprint">We typically respond within one business day.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
