import Link from 'next/link';

import { urlFor } from '../lib/sanity';

const Hero = ({ post }) => {
  return (
    <div className='min-h-[50vh] sm:min-h-[70vh] py-16 flex items-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-gray-800 after:opacity-70' style={{ background: `url(${urlFor(post.image).url()}) no-repeat center center/cover` }}>
      <div className='container mx-auto px-4 flex items-center h-full'>
        <div className='z-20 text-center md:text-left'>
          <h3 className='text-emerald-400 text-md font-sans mb-4'>Featured post</h3>
          <h1 className='text-3xl text-white font-bold mb-2 md:text-4xl'>{post.title}</h1>
          <p className='text-md text-gray-200 mb-6 md:text-lg'>{post.subtitle}</p>
          <Link href={`/articles/${post.slug.current}`}>
            <a className='px-8 py-2 text-white bg-emerald-600 hover:bg-emerald-500'>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero