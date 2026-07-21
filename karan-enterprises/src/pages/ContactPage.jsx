import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import Quote from '../components/Quote'
import Careers from '../components/Careers'

/* =====================================================================
   Contact — the enquiry + careers hub. Composes the project-enquiry form
   (Quote) and the careers form (Careers), both of which now submit
   directly to the company inbox. No floating WhatsApp action here.
   ===================================================================== */
export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main>
        <Quote />
        <Careers />
      </main>
      <Footer />
    </>
  )
}
