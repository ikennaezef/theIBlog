import Author from './Author';

const Authors = ({ authors }) => {
  return (
    <div className='py-6'>
      <h2 className='text-3xl font-bold mb-4'>Meet Our Authors</h2>
      <div className='grid gap-8 md:grid-cols-3'>
        {authors.map(author => <Author key={author._id} author={author} />)}
      </div>
    </div>
  )
}

export default Authors;

