import Post from './Post';

const OtherPosts = ({ posts }) => {

  return (
    <div className='container mx-auto px-4 py-6'>
      <h2 className='font-bold mb-4 text-3xl'>More Posts</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map(post => <Post key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default OtherPosts