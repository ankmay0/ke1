import Preloader from '../components/Preloader'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ScrollProgress } from '../components/Chrome'
import { Icon } from '../ui/ui'
import { COMPANY } from '../lib/data'
import {
  BlogHeader, PostFeed, ArticleOne, ArticleTwo, ArticleThree, Closer,
} from '../components/blog'

/* =====================================================================
   Blogs — a conventional blog: a listing feed (featured post card + a card
   grid with thumbnails, category chips, excerpts and author/date/read-time
   meta) that links down to the full, uniformly-styled articles. Same brand
   palette / fonts as the rest of the site; light + dark parity; motion
   degrades to static via Reveal / reduced-motion.

   Each section is its own modular component in ../components/blog/; this page
   just composes them in order.
   ===================================================================== */
export default function BlogsPage() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Nav />
      <main id="top">
        <BlogHeader />
        <PostFeed />
        <ArticleOne />
        <ArticleTwo />
        <ArticleThree />
        <Closer />
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
