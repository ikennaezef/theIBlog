import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-10 bg-slate-800'>
      <div className='container mx-auto px-4 text-white'>
        <div>
          <div className='mb-4'>
            <Link href="/">
              <a className='flex items-center justify-center space-x-1 md:justify-start'>
                <img src='/images/logo.png' alt='logo' className='w-6' />
                <span className='text-2xl font-medium'>The<span className='text-emerald-600'>I</span>Blog</span>
              </a>
            </Link>
          </div>
          <div className='flex flex-col space-y-8 align-center text-center justify-between md:flex-row md:space-y-0 md:align-start md:text-left'>
            <ul>
              <li className='text-lg font-medium mb-2'>Links</li>
              <li><Link href='/'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>Home</a></Link></li>
              <li><Link href='/about'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>About</a></Link></li>
              <li><Link href='/contact'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>Contact</a></Link></li>
            </ul>
            <ul>
              <li className='text-lg font-medium mb-2'>Company</li>
              <li><Link href='/'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>Help</a></Link></li>
              <li><Link href='/about'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>Terms</a></Link></li>
              <li><Link href='/contact'><a className='text-gray-300 text-md hover:text-emerald-600 leading-relaxed'>Privacy</a></Link></li>
            </ul>
            <div className='flex justify-center space-x-3 md:justify-start'>
              <a href='#' className='inline-block h-8 p-1 hover:bg-slate-500'><img src='/images/logo-facebook.svg' alt='facebook logo' className='w-6 h-6' /></a>
              <a href='#' className='inline-block h-8 p-1 hover:bg-slate-500'><img src='/images/logo-twitter.svg' alt='twitter logo' className='w-6 h-6' /></a>
              <a href='#' className='inline-block h-8 p-1 hover:bg-slate-500'><img src='/images/mail.svg' alt='mail logo' className='w-6 h-6' /></a>
            </div>
          </div>
          <div className='mt-8'>
            <p className='text-gray-400 text-sm text-center'>Copyright &copy; 2022 - TheIBlog | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer