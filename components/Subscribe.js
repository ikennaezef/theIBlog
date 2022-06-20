const Subscribe = () => {
  return (
    <div className='py-12 min-h-[18rem] mt-8 px-4' id='subscribe__section'>
      <div className='bg-emerald-50 p-8 container mx-auto px-4 py-10 max-w-[700px]'>
        <div>
          <h3 className='font-sans text-2xl font-bold text-center mb-4'>Subscribe to Our Newsletter</h3>
          <p className='text-lg text-center'>Subscribe and be the first to receive mails about the latest updates and posts.</p>
          <form className='flex flex-col space-y-2 mt-6 justify-center md:flex-row md:space-x-4 md:space-y-0'>
            <input type='email' placeholder='Enter your email' className='px-4 py-2 outline-0 border border-emerald-200 focus:border-emerald-500' />
            <button className='bg-emerald-600 text-white font-medium px-6 py-2'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe