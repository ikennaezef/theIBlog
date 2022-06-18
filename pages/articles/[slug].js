import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  // PortableText,
} from '../../lib/sanity';

import { PortableText } from '@portabletext/react';

const postQuery = `*[_type=="post" && slug.current == $slug][0]{
  _id,
  title,
  subtitle,
  author-> {image, name},
  publicationDate,
  slug,
  image,
  content
}`;

export default function Article({ data }) {
  const { post } = data;

  console.log(post)

  return (
    <article className='container mx-auto px-4 py-6'>
      <div className='flex items-center mb-6'>
        <img src={urlFor(post.author.image).url()} className='w-10 h-10 rounded-full object-cover mr-4' />
        <div className='flex flex-col'>
          <p className='text-md font-medium mb-1'>{post.author.name}</p>
          <span className='text-sm text-gray-400'>Published on {post.publicationDate}</span>
        </div>
      </div>
      <div>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>{post.title}</h1>
        <p className='text-lg text-gray-400 mb-4'>{post.subtitle}</p>
        <div className='mb-8'>
          <img src={urlFor(post.image).url()} className='w-full object-cover' />
        </div>
        <div className='py-4'>
          <PortableText
            value={post.content}
            components={{
              block: {
                h3: ({ children }) => <h3 className='text-2xl font-medium leading-loose mt-3 mb-1'>{children}</h3>,
                h4: ({ children }) => <h4 className='text-xl font-medium leading-loose mt-3 mb-1'>{children}</h4>,
                normal: ({ children }) => <p className='text-md leading-relaxed'>{children}</p>,
              }
            }}
          />
        </div>
      </div>

    </article>
  )
}

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
       }
    }`
  );

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const post = await sanityClient.fetch(postQuery, { slug });

  return {
    props: { data: { post } }
  }
}