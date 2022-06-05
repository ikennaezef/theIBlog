import Hero from '../components/Hero';

import { sanityClient, urlFor } from '../lib/sanity';

const postsQuery = '*[_type=="post"]{ _id, title, subtitle, slug, image}';

export default function Home({ posts }) {
  return (
    <div>
      <Hero post={posts[4]} />
      {posts.map(post => (
        <div key={post._id}>
          <h2 className='text-xl mb-3'>{post.title}</h2>
          <img className='mb-8' src={urlFor(post.image).url()} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: { posts }
  }
}
