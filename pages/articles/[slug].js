import { useState } from 'react';

import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
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
  content,
  likes
}`;

export default function Article({ data }) {
  const { post } = data;

  console.log(post);

  const [likes, setLikes] = useState(post?.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const toggleLike = async () => {
    const res = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({ _id: post._id, add: !hasLiked }),
    }).catch((error) => console.log(error));



    const data = await res.json();
    setLikes(data.likes);
  }

  const handleClick = () => {
    toggleLike();
    setHasLiked(!hasLiked);
  }

  return (
    <article className='container mx-auto px-4 py-6'>
      <div className='flex items-center mb-6'>
        <img src={urlFor(post?.author?.image).url()} className='w-10 h-10 rounded-full object-cover mr-4' />
        <div className='flex flex-col'>
          <p className='text-md font-medium mb-1'>{post?.author?.name}</p>
          <span className='text-sm text-gray-400'>Published on {post?.publicationDate}</span>
        </div>
      </div>
      <div>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>{post?.title}</h1>
        <p className='text-lg text-gray-400 mb-4'>{post?.subtitle}</p>
        <div className='mb-8'>
          <img src={urlFor(post?.image).url()} className='w-full object-cover' />
        </div>
        <div className='py-4'>
          <PortableText
            value={post?.content}
            components={{
              block: {
                h3: ({ children }) => <h3 className='text-2xl font-medium leading-loose mt-3 mb-1'>{children}</h3>,
                h4: ({ children }) => <h4 className='text-xl font-medium leading-loose mt-3 mb-1'>{children}</h4>,
                normal: ({ children }) => <p className='text-md leading-relaxed'>{children}</p>,
              },
              list: {
                bullet: ({ children }) => <ul className='list-disc pl-4'>{children}</ul>
              },
              listItem: {
                bullet: ({ children }) => <li>{children}</li>
              }
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={handleClick} className={hasLiked ? `border py-2 px-6 bg-rose-400` : `border py-2 px-6`}>{likes || 0} ❤</button>
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