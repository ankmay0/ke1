import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {
  About, Services, RailwayFormation, Geotech, Projects, Stats, Clients, Testimonials,
} from './components/Sections'
import Quote from './components/Quote'
import Footer from './components/Footer'
import { Marquee, Icon } from './ui'
import { TICKER, COMPANY } from './data'

export default function App() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />

        <Marquee
          items={TICKER}
          render={(t, k) => <span className="mq-item" key={k}>{t}</span>}
        />

        <About />
        <Services />
        <RailwayFormation />
        <Geotech />
        <Projects />
        <Stats />
        <Clients />
        <Testimonials />
        <Quote />
      </main>
      <Footer />

      <a
        className="fab"
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
