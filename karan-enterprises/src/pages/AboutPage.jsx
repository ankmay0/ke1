import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Icon } from '../ui/ui'
import { COMPANY } from '../lib/data'
import { About, MissionVision, Geotech, CSR, Testimonials, ClientMarquee } from '../components/sections'
/* =====================================================================
   About Us — the company story in one place. Composes the About intro,
   the Mission & Vision statement, the Geotech capability section and the
   client Testimonials, all of which previously lived on the home page.
   ===================================================================== */
export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <About />
        <MissionVision />
        <Geotech />
        <CSR />
        <Testimonials />
                <ClientMarquee />

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
