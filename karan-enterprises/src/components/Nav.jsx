import { useEffect, useState } from 'react'
import { COMPANY, NAV_LINKS } from '../data'
import { Icon, ThemeToggle } from '../ui'
import { WRAP, BTN_PRIMARY } from '../cx'

function Brand({ scrolled }) {
  return (
    <a href="#home" className="inline-flex items-center gap-[14px]" aria-label="M/s Karan Enterprises home">
      <img
        src="/assets/logo.png"
        alt="M/s Karan Enterprises logo"
        className={`h-auto transition-[width] duration-300 max-[760px]:w-[42px] ${scrolled ? 'w-[48px]' : 'w-[56px]'}`}
      />
      <span className="flex flex-col font-display leading-none">
        <span className="text-[10px] font-semibold tracking-[0.34em] text-steel">M/S</span>
        <span className="mt-[3px] flex items-baseline gap-1.5">
          <span className="text-sm font-semibold uppercase tracking-[0.02em] text-ink dark:text-text max-[760px]:text-xs">Karan</span>
          <span className="text-[21px] font-extrabold uppercase tracking-[0.005em] text-ink dark:text-white max-[760px]:text-[17px]">Enterprises</span>
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
      <div className="bg-dark text-[12.5px] tracking-[0.02em] text-on-dark-mute dark:border-b dark:border-line dark:bg-[#05060a] max-[760px]:hidden">
        <div className={`${WRAP} flex h-[38px] items-center justify-between gap-5`}>
          <span><span className="text-yellow">●</span> Infrastructure excellence since {COMPANY.since}</span>
          <span className="flex items-center gap-[22px]">
            <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white"><b className="font-semibold text-white">{COMPANY.phone}</b></a>
            <a href={`mailto:${COMPANY.emails[0]}`} className="hover:text-white">{COMPANY.emails[0]}</a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-[200] border-b border-line bg-white/[0.86] backdrop-blur-[14px] transition-[box-shadow,padding] duration-300 dark:border-line dark:bg-[rgba(8,9,15,0.62)] dark:[backdrop-filter:blur(18px)_saturate(140%)] ${
          scrolled
            ? 'shadow-[0_6px_30px_-18px_rgba(0,0,0,0.3)] dark:bg-[rgba(8,9,15,0.85)] dark:shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]'
            : ''
        }`}
      >
        <div className={`${WRAP} flex items-center justify-between gap-6 transition-[height] duration-300 ${scrolled ? 'h-[66px]' : 'h-[78px]'}`}>
          <Brand scrolled={scrolled} />
          <nav className="flex items-center gap-1 max-[760px]:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative rounded px-4 py-2.5 font-display text-sm font-semibold text-ink-2 transition-colors hover:text-ink dark:text-ink-2 dark:hover:text-white after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-yellow after:shadow-[0_0_12px_rgba(255,214,10,0.7)] after:transition-transform after:duration-300 after:ease-smooth after:content-[''] hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-[14px]">
            <a className="font-display text-sm font-bold max-[760px]:hidden" href={`tel:${COMPANY.phoneRaw}`}>
              <span className="block text-[10px] font-semibold tracking-[0.14em] text-steel">Call us</span>{COMPANY.phone}
            </a>
            <ThemeToggle />
            <a className={`${BTN_PRIMARY} max-[760px]:hidden`} href="#quote">Get a Quote {Icon.arrow}</a>
            <button
              className="hidden flex-col gap-[5px] p-2 max-[760px]:flex"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
              <i className="h-0.5 w-6 bg-ink transition-all duration-300 dark:bg-white" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[199] flex flex-col justify-center gap-1.5 bg-dark p-[var(--pad)] text-white"
          onClick={() => setOpen(false)}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="border-b border-line-dark py-2.5 font-display text-[clamp(28px,8vw,44px)] font-bold"
            >
              <span className="mr-[14px] font-cond text-sm text-yellow">{l.n}</span>{l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
