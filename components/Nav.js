import { useState } from 'react';

import Link from 'next/link';

const Nav = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className='shadow-lg relative'>
      <div className='container mx-auto px-4 py-5 flex justify-between items-center'>
        <Link href='/'>
          <a className='logo text-2xl font-bold'>The<span className='text-emerald-600'>I</span>Blog</a>
        </Link>
        <div className='hidden nav__links md:flex space-x-6'>
          <Link href='/'><a className='hover:text-emerald-600'>Home</a></Link>
          <Link href='/about'><a className='hover:text-emerald-600'>About</a></Link>
          <Link href='/contact'><a className='hover:text-emerald-600'>Contact</a></Link>
        </div>
        <button id="menu-btn" className={`block hamburger md:hidden z-50 ${navOpen && 'open'}`} onClick={() => setNavOpen(!navOpen)}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div id="menu"
          className={`${!navOpen && 'hidden'} absolute flex flex-col items-center py-12 space-y-10 mt-20 font-medium bg-white z-30 sm:w-full sm:self-center top-0 right-2 left-2 drop-shadow-md`}>
          <Link href='/'><a className='text-xl'>Home</a></Link>
          <Link href='/about'><a className='text-xl'>About</a></Link>
          <Link href='/contact'><a className='text-xl'>Contact</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav