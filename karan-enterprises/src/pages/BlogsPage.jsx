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
    </>
  )
}
