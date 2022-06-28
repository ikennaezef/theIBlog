import { urlFor } from "../lib/sanity";
import Link from 'next/link'

const Post = ({ post }) => {
  return (
    <div className='p-2'>
      <Link href={`/articles/${post?.slug.current}`}>
        <a className='hover:bg-gray-100 block p-2'>
          <div className='flex flex-col space-y-4'>
            <div>
              <img src={urlFor(post?.image).url()} className='w-full object-cover max-h-40' />
            </div>
            <div>
              <div className='mb-2'>
                <span className='bg-emerald-100 px-3 py-1 text-emerald-600 text-sm rounded-sm'>#{post.mainTag}</span>
              </div>
              <span className='text-sm text-gray-400 mb-2'>Published {post?.publicationDate}</span>
              <h2 className='text-lg mb-2 font-medium'>{post?.title}</h2>
              <p className='text-gray-400 text-md mb-2'>{post?.subtitle}</p>
              <div className='flex items-center'>
                <img src={urlFor(post?.author?.image).url()} className='w-8 h-8 rounded-full object-cover mr-4' />
                <p className='text-sm'>{post?.author?.name}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Post