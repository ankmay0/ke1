import { BLOG_POSTS } from '../../lib/data'
import { Post, Lede, Pull, Sig } from './article'

/* ================================================= FULL ARTICLE · 02 */
export function ArticleTwo() {
  return (
    <Post post={BLOG_POSTS[1]}>
      <Lede>
        Infrastructure is the foundation of development, connectivity and economic growth. From railway
        projects to civil construction and slope protection work, every structure plays a crucial role in
        supporting safer and more efficient operations.
      </Lede>
      <p>
        At M/s Karan Enterprises, we believe that successful infrastructure development depends on three key
        factors — quality execution, technical expertise and timely delivery. Our team works with a strong
        commitment to maintaining high construction standards while ensuring safety and operational
        reliability across every project.
      </p>
      <Pull>Quality execution, technical expertise and timely delivery.</Pull>
      <p>
        Railway infrastructure remains one of our core strengths, alongside broader civil and infrastructure
        solutions. With growing industry demands and modern development requirements, we continue to focus on
        delivering dependable engineering solutions that create long-term value.
      </p>
      <p>
        Through dedication, professionalism and continuous improvement, M/s Karan Enterprises aims to
        contribute towards building stronger infrastructure for the future.
      </p>
      <Sig />
    </Post>
  )
}
