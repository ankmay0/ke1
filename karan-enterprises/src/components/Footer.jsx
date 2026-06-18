import { COMPANY } from '../data'
import { Icon } from '../ui'

const COMMITMENTS = ['Safety First', 'Quality Assured', 'Commitment Delivered', 'Building Tomorrow']

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="top">
          <div className="fbrand">
            <img src="/assets/logo.png" alt="M/s Karan Enterprises" />
            <div className="nm"><small>M/S</small>Karan Enterprises</div>
            <p>A trusted railway and roadway infrastructure contractor delivering with precision, safety and proven execution since {COMPANY.since}.</p>
            <a className="social" href={COMPANY.linkedin} target="_blank" rel="noopener">{Icon.linkedin} LinkedIn</a>
          </div>

          <div>
            <h5>Capabilities</h5>
            <ul>
              <li><a href="#services">Railway formation & track</a></li>
              <li><a href="#services">Roads, drains & culverts</a></li>
              <li><a href="#geotech">Slope & erosion protection</a></li>
              <li><a href="#services">Ash transportation</a></li>
            </ul>
          </div>

          <div>
            <h5>Compliance</h5>
            <ul>
              <li>GSTIN · {COMPANY.gstin}</li>
              <li>{COMPANY.rdso}</li>
              <li>Indian Railways CM compliant</li>
              <li>Maccaferri Geocell authorised</li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.emails[0]}`}>{COMPANY.emails[0]}</a></li>
              <li><a href={`mailto:${COMPANY.emails[1]}`}>{COMPANY.emails[1]}</a></li>
              <li>{COMPANY.location}</li>
            </ul>
          </div>
        </div>

        <div className="commit" style={{ paddingTop: 28 }}>
          {COMMITMENTS.map((c) => <span key={c}>{c}</span>)}
        </div>

        <div className="bottom">
          <span>© {COMPANY.since}–2026 {COMPANY.name}. Infrastructure excellence across India.</span>
          <span>{COMPANY.location}</span>
        </div>
      </div>
    </footer>
  )
}
