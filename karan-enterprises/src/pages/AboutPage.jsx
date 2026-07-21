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
    </>
  )
}
