import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LatestPosts from '../components/LatestPosts';
import Subscribe from '../components/Subscribe';

import { sanityClient } from '../lib/sanity';



export default function Home({ posts, latestPosts }) {
  return (
    <div>
      <Hero post={posts} />
      <div className='container mx-auto px-4 pt-8'>
        <LatestPosts posts={latestPosts} />
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const postsQuery = '*[_type=="post"][0]{ _id, title, subtitle, slug, image}';
  const latestPostsQuery = '*[_type=="post"] | order(publicationDate desc)[0..4]{ _id, title, subtitle, publicationDate, mainTag, slug, image, author->{name, image}}'

  const posts = await sanityClient.fetch(postsQuery);
  const latestPosts = await sanityClient.fetch(latestPostsQuery);
  return {
    props: { posts, latestPosts }
  }
}
