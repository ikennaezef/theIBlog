import Hero from '../components/Hero';
import Post from '../components/Post';

import { sanityClient, urlFor } from '../lib/sanity';

const postsQuery = '*[_type=="post"]{ _id, title, subtitle, slug, image}';

export default function Home({ posts }) {
  return (
    <div>
      <Hero post={posts[4]} />
      <div className='container mx-auto px-4 pt-8'>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: { posts }
  }
}
