import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {
  Services, RailwayFormation, Projects, Stats, Clients, ClientMarquee,
} from './components/sections'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Credentials from './components/Credentials'
import { ScrollProgress } from './components/Chrome'
import { Marquee } from './ui/ui'
import { TICKER } from './lib/data'

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

        <Credentials />

        <Clients />

        <Projects />

        {/* <Services /> */}
        {/* <RailwayFormation /> */}

        {/* <Banner /> */}

        <ClientMarquee />


        <Stats />
      </main>
      <Footer />
    </>
  )
}
