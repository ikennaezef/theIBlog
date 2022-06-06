import { urlFor } from "../lib/sanity";
import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <div className='p-2'>
      <Link href='/'>
        <a className='hover:bg-gray-100 block p-2'>
          <div className='flex w-full justify-between space-x-4'>
            <div className='flex flex-col md:w-3/4'>
              <h2 className='text-2xl font-bold mb-2'>{post.title}</h2>
              <p className='text-md text-gray-400'>{post.subtitle}</p>
            </div>
            <div className='md:w-1/4'>
              <img className='w-full h-28 object-cover' src={urlFor(post.image).url()} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Post