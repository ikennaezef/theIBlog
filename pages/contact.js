import React from 'react'
import Footer from '../components/Footer'

const contact = () => {
  return (
    <div className='min-h-[100vh]'>
      <div className='container mx-auto px-4 py-6 min-h-[50vh] md:min-h-[70vh]'>
        <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
        <div>
          <p className='text-md leading-relaxed'>Welcome on TheIBlog,</p>
          <p className='text-md leading-relaxed'>Nice to see you here on our blog. If you want to contact us for suggestions, guest posts, advertising or any other query then you can easily drop us an email.</p>
          <p className='text-md leading-relaxed mt-6'>Mail Us: <span className='font-bold'>theiblog@mail.com</span> </p>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default contact