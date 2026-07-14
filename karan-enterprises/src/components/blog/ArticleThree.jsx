import { BLOG_POSTS } from '../../lib/data'
import { Post, Lede, Sig } from './article'

/* ================================================= FULL ARTICLE · 03 */
export function ArticleThree() {
  return (
    <Post post={BLOG_POSTS[2]}>
      <Lede>
        At M/s Karan Enterprises, growth is not just about increasing the number of projects — it is about
        building long-term relationships, expanding capabilities and creating a stronger presence in the
        infrastructure industry.
      </Lede>
      <p>
        As we move forward, our vision is to work with more clients across railway infrastructure, civil
        construction, slope protection and development projects. We aim to become a trusted execution partner
        known for reliability, quality work and professional project management.
      </p>
      <p>
        Scalability remains one of our key future goals. By strengthening our workforce, improving
        operational efficiency and adopting modern execution practices, we are continuously preparing
        ourselves to take on larger and more challenging projects.
      </p>
      <p>
        We believe that every successful project builds trust, and every client relationship creates new
        opportunities for growth. With dedication, consistency and a clear long-term vision, M/s Karan
        Enterprises is committed to expanding its reach and contributing to the development of modern
        infrastructure across the country.
      </p>
      <Sig />
    </Post>
  )
}
