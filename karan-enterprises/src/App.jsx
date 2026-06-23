import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {
  About, Services, RailwayFormation, Geotech, Projects, Stats, Clients, Testimonials,
} from './components/Sections'
import Quote from './components/Quote'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Credentials from './components/Credentials'
import { ScrollProgress } from './components/Chrome'
import { Marquee, Icon } from './ui'
import { TICKER, COMPANY } from './data'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <Hero />

        <Marquee
          items={TICKER}
          render={(t, k) => (
            <span
              className="inline-flex items-center gap-[56px] whitespace-nowrap font-display text-[clamp(15px,1.6vw,20px)] font-bold tracking-[0.02em] text-white after:h-2 after:w-2 after:rounded-full after:bg-yellow after:content-[''] dark:text-text dark:after:shadow-[0_0_14px_rgba(255,214,10,0.9)]"
              key={k}
            >
              {t}
            </span>
          )}
        />

        <About />
        <Credentials />
        <Services />
        <RailwayFormation />
        <Geotech />
        <Banner />
        <Projects />
        <Stats />
        <Clients />
        <Testimonials />
        <Quote />
      </main>
      <Footer />

      <a
        className="fixed bottom-[22px] right-[22px] z-[150] grid h-14 w-14 place-items-center rounded-full bg-whatsapp shadow-[0_14px_40px_-8px_rgba(37,211,102,0.7)] transition-transform duration-[250ms] ease-smooth hover:scale-[1.08] [&_svg]:h-[30px] [&_svg]:w-[30px]"
        href={`https://wa.me/${COMPANY.phoneRaw}`}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        {Icon.whatsapp}
      </a>
    </>
  )
}
