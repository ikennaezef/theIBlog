import Post from './Post'

const LatestPosts = ({ posts }) => {
  return (
    <div className='py-4' >
      <h2 className='text-3xl font-bold mb-4 text-center'>Latest Posts</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map(post => <Post key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default LatestPosts