import { useEffect, useState } from 'react'
import { COMPANY, NAV_LINKS } from '../data'
import { Icon } from '../ui'

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="M/s Karan Enterprises home">
      <img src="/assets/logo.png" alt="M/s Karan Enterprises logo" />
      <span className="bt">
        <span className="ms">M/S</span>
        <span className="nm">
          <span className="karan">Karan</span>
          <span className="ent">Enterprises</span>
        </span>
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span><span className="dot">●</span> Infrastructure excellence since {COMPANY.since}</span>
          <span className="tb-right">
            <a href={`tel:${COMPANY.phoneRaw}`}><b>{COMPANY.phone}</b></a>
            <a href={`mailto:${COMPANY.emails[0]}`} className="tb-mail">{COMPANY.emails[0]}</a>
          </span>
        </div>
      </div>

      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Brand />
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="phone" href={`tel:${COMPANY.phoneRaw}`}>
              <span>Call us</span>{COMPANY.phone}
            </a>
            <a className="btn btn--primary" href="#quote">Get a Quote {Icon.arrow}</a>
            <button className="burger" aria-label="Menu" onClick={() => setOpen(true)}>
              <i /><i /><i />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}><span>{l.n}</span>{l.label}</a>
          ))}
        </div>
      )}
    </>
  )
}
