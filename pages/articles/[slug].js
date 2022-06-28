import { useState } from 'react';
import { useRouter } from 'next/router';
import OtherPosts from '../../components/OtherPosts';
import Footer from '../../components/Footer';

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
  mainTag,
  tags,
  content,
  likes
}`;

export default function Article({ data, preview }) {

  const { data: { post, otherPosts } } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug.current },
    initialData: data,
    enabled: preview
  })

  // const { post } = data;

  const [likes, setLikes] = useState(post?.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const router = useRouter();

  if (router.isFallback) {
    return <div className='text-xl'>Loading...</div>
  }

  if (!data) return (<div className='text-xl'>Loading...</div>);

  const addLike = async () => {

    setLikes(likes + 1);

    const res = await fetch('/api/add-like', {
      method: 'POST',
      body: JSON.stringify({ _id: post._id })
    }).catch((error) => console.log(error));

    const data = await res.json();
    setLikes(data.likes);
  }

  const removeLike = async () => {

    setLikes(likes - 1);

    const res = await fetch('/api/remove-like', {
      method: 'POST',
      body: JSON.stringify({ _id: post._id })
    }).catch((error) => console.log(error));

    const data = await res.json();
    setLikes(data.likes);
  }

  const handleClick = () => {
    hasLiked == false ? addLike() : removeLike();
    setHasLiked(!hasLiked);
  }

  return (
    <>
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
          <div className='mb-4'>
            <span className='bg-emerald-100 px-3 py-1 mr-2 text-emerald-600 text-md rounded-sm'>#{post.mainTag}</span>
            {post.tags.map((tag, index) => <span key={index} className='bg-emerald-100 px-3 py-1 mr-2 text-emerald-600 text-md rounded-sm'>#{tag}</span>)}
          </div>
          <div className='py-4'>
            <PortableText
              value={post?.content}
              components={{
                block: {
                  h3: ({ children }) => <h3 className='text-2xl font-medium leading-loose mt-3 mb-1'>{children}</h3>,
                  h4: ({ children }) => <h4 className='text-xl font-medium leading-loose mt-3 mb-1'>{children}</h4>,
                  h5: ({ children }) => <h5 className='text-lg font-medium leading-loose mt-3 mb-1'>{children}</h5>,
                  normal: ({ children }) => <p className='text-md mt-2 leading-relaxed'>{children}</p>,
                  blockquote: ({ children }) => <div className='my-2 border-l-2 border-emerald-500 pl-2'><p className='text-md font-medium leading-relaxed'>{children}</p></div>
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
          <button onClick={handleClick} className={hasLiked ? `border py-2 px-6 bg-rose-300 text-rose-600` : `border py-2 px-6 hover:border hover:border-rose-200`}>{likes || 0} {hasLiked ? '❤' : '🤍'} </button>
        </div>

      </article>
      <OtherPosts posts={otherPosts} />
      <Footer />
    </>
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

  const otherPostsQuery = '*[_type == "post" && slug.current != $slug][0..2]{ _id, title, subtitle, publicationDate, mainTag, slug, image, author->{name, image} }';
  const otherPosts = await sanityClient.fetch(otherPostsQuery, { slug });

  return {
    props: { data: { post, otherPosts }, preview: true }
  }
}