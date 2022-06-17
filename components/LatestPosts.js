import Post from './Post'

const LatestPosts = ({ posts }) => {
  return (
    <div >
      <h2 className='text-3xl font-bold mb-4'>Latest Posts</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        {posts.map(post => <Post post={post} />)}
      </div>
    </div>
  )
}

export default LatestPosts